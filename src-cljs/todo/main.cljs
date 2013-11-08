(ns todo.main
 (:require [ajax.core :refer [GET POST ajax-request]]
           [dommy.core :as dom])
 (:use-macros [dommy.macros :only [node sel1 sel]]))


(def gapiImm (js-obj "client_id" "724598683708.apps.googleusercontent.com"
                        "scope" "https://www.googleapis.com/auth/tasks"
                        "immediate" true))

(def gapiNotImm (js-obj "client_id" "724598683708.apps.googleusercontent.com"
                        "scope" "https://www.googleapis.com/auth/tasks"
                        "immediate" false))

(def *parent*) ;; FIXME

(defn authCb [token]
  "Manage the authetication token"
  (if (= token nil)
    (.authorize js/gapi.auth gapiNotImm authCb)
    (do
      (.setItem js/localStorage "gapi_token" (.-access_token token))
      (get-list))))

(defn make-auth-token []
  "Generate authentication token for header"
  (clojure.string/join " " ["Bearer" (.getItem js/localStorage "gapi_token")]))

(defn log [stuff]
  (.log js/console stuff))

(defn add-list [title id]
  "Adds a new task list to the DOM"
  (when (seq title)
    (let [tl (node [:li {:id id} title [:ul]])]
      (dom/append! (sel1 :body) tl)
      (dom/listen! tl :click get-tasks))))

(defn iterate-lists [resp]
   (doseq [task (get resp "items")]
     (add-list (get task "title") (get task "id"))))

(defn add-checkbox [elem status]
  (let [check (node [:input {:type "checkbox"}])]
    (if-not (= status "needsAction")
      (dom/set-attr! check :checked true))
    (dom/append! elem check)))

(defn append-task [text status]
  "Adds a new task under a task list"
    (let [li (node [:li text])]
      (add-checkbox li status)
      (dom/append! (sel1 [(str "#" *parent*) :ul]) li)))

(defn iterate-tasks [resp]
   (doseq [task (get resp "items")]
     (let [title (get task "title")
           status (get task "status")]
       (when (> (count title) 1) ;; Google gives me empty tasks
         (append-task title status)))))

(defn get-list []
  (GET "https://www.googleapis.com/tasks/v1/users/@me/lists"
       {:format :json :headers {"Authorization" (make-auth-token)}
        :handler iterate-lists}))

(defn get-tasks [e]
  (let [id (dom/attr (aget e "target") "id")]
    (if-not (or (= *parent* id) (= nil id))
      (do
        (set! *parent* id)
        (GET (str "https://www.googleapis.com/tasks/v1/lists/" id "/tasks")
           {:format :json :headers {"Authorization" (make-auth-token)}
            :handler iterate-tasks})))))

(defn authorize []
  (.authorize js/gapi.auth gapiImm authCb))
