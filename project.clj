(defproject todo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1978"]
                 [cljs-ajax "0.2.1"]
                 [prismatic/dommy "0.1.1"]]

  :plugins [[lein-cljsbuild "0.3.4"]]

  :cljsbuild {
    :builds {
             :dev {
                   :source-paths ["src-cljs"]
                   :compiler {:output-to "resources/public/js/cljs.js"
                              :optimizations :whitespace
                              :pretty-print true}}
             :prod {
                    :source-paths ["src-cljs"]
                    :compiler {:output-to "resources/public/js/cljs.js"
                               :optimizations :advanced}}}})

