(ns todo.main
 (:require [ajax.core :refer [GET POST ajax-request]]
           [dommy.core :as dom])
 (:use-macros [dommy.macros :only [node sel1 sel]]))


(def gapiImm (js-obj "client_id" "724598683708.apps.googleusercontent.com"
                        "scope" "https://www.googleapis.com/auth/tasks"
                        "immediate" true))

(def gapiNotImm (js-obj "client_id" "724598683708.apps.googleusercontent.com"
                        "scope" "https://www.googleapis.com/auth/tasks"
                        "immediate" true))

(def *parent*) ;; FIXME

(defn authCb [token]
  "Manage the authetication token"
  (if (= token nil)
    (.authorize js/gapi.auth gapiNotImm authCb)
    (do
      (.setItem js/localStorage "gapi_token" (.-access_token token))
      (getList))))

(defn headers []
  "Generate authentication header"
  (clojure.string/join " " ["Bearer" (.getItem js/localStorage "gapi_token")]))

(defn log [stuff]
  (.log js/console stuff))

(defn addList [title id]
  "Adds a new task list to the DOM"
  (let [tl (node [:li {:id id} title [:ul]])]
    (dom/append! (sel1 :body) tl)
    (dom/listen! tl :click getTasks)))

(defn iterateLists [resp]
   (doseq [task (get resp "items")]
     (addList (get task "title") (get task "id"))))

(defn addCheckbox [elem status]
  (let [check (.createElement js/document "input")]
    (if-not (= status "needsAction")
      (set! (.-checked check) true))
    (set! (.-type check) "checkbox")
    (log check)
    (.appendChild elem check)))

(defn appendElement [text status] ;; Unfortunate naming convetion FIXME
  "Adds a new task under a task list"
    (let [li (.createElement js/document "li")]
      (set! (.-innerHTML li) text)
      (addCheckbox li status)
      (.appendChild (.querySelector js/document (str "#" *parent* " ul")) li)))

(defn iterateTasks [resp]
   (doseq [task (get resp "items")]
     (let [title (get task "title")
           status (get task "status")]
       (if (> (count title) 1) ;; Google gives me empty tasks
         (appendElement title status)))))

(defn getList []
  (GET "https://www.googleapis.com/tasks/v1/users/@me/lists"
       {:format :json :headers {"Authorization" (headers)}
        :handler iterateLists}
       ))

(defn getTasks [e]
  (let [id (.getAttribute (.-target e) "id")]
    (if-not (or (= *parent* id) (= nil id))
      (do
        (set! *parent* id)
        (GET (str "https://www.googleapis.com/tasks/v1/lists/" id "/tasks")
           {:format :json :headers {"Authorization" (headers)}
            :handler iterateTasks}
           )))))

(defn authorize []
  (.authorize js/gapi.auth gapiImm authCb))
