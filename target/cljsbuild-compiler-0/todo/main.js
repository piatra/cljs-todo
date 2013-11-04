goog.provide('todo.main');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
todo.main.gapiImm = {"client_id":"724598683708.apps.googleusercontent.com","scope":"https://www.googleapis.com/auth/tasks","immediate":true};
todo.main.gapiNotImm = {"client_id":"724598683708.apps.googleusercontent.com","scope":"https://www.googleapis.com/auth/tasks","immediate":true};
todo.main.authCb = (function authCb(token){if(cljs.core._EQ_.call(null,token,null))
{return gapi.auth.authorize(todo.main.gapiNotImm,authCb);
} else
{localStorage.setItem("gapi_token",token.access_token);
return todo.main.getList.call(null);
}
});
todo.main.headers = (function headers(){return clojure.string.join.call(null," ",cljs.core.PersistentVector.fromArray(["Bearer",localStorage.getItem("gapi_token")], true));
});
todo.main.log = (function log(stuff){return console.log(stuff);
});
todo.main.event = (function event(ev,sel,cb){return document.querySelector(sel).addEventListener(ev,cb);
});
todo.main.addList = (function addList(title,id){document.write([cljs.core.str("<li id="),cljs.core.str(id),cljs.core.str("> "),cljs.core.str(title),cljs.core.str("<ul></ul></li>")].join(''));
return todo.main.event.call(null,"click",[cljs.core.str("#"),cljs.core.str(id)].join(''),todo.main.getTasks);
});
todo.main.iterateLists = (function iterateLists(resp){var seq__5178 = cljs.core.seq.call(null,cljs.core.get.call(null,resp,"items"));var chunk__5179 = null;var count__5180 = 0;var i__5181 = 0;while(true){
if((i__5181 < count__5180))
{var task = cljs.core._nth.call(null,chunk__5179,i__5181);todo.main.addList.call(null,cljs.core.get.call(null,task,"title"),cljs.core.get.call(null,task,"id"));
{
var G__5182 = seq__5178;
var G__5183 = chunk__5179;
var G__5184 = count__5180;
var G__5185 = (i__5181 + 1);
seq__5178 = G__5182;
chunk__5179 = G__5183;
count__5180 = G__5184;
i__5181 = G__5185;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5178);if(temp__4092__auto__)
{var seq__5178__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5178__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__5178__$1);{
var G__5186 = cljs.core.chunk_rest.call(null,seq__5178__$1);
var G__5187 = c__3668__auto__;
var G__5188 = cljs.core.count.call(null,c__3668__auto__);
var G__5189 = 0;
seq__5178 = G__5186;
chunk__5179 = G__5187;
count__5180 = G__5188;
i__5181 = G__5189;
continue;
}
} else
{var task = cljs.core.first.call(null,seq__5178__$1);todo.main.addList.call(null,cljs.core.get.call(null,task,"title"),cljs.core.get.call(null,task,"id"));
{
var G__5190 = cljs.core.next.call(null,seq__5178__$1);
var G__5191 = null;
var G__5192 = 0;
var G__5193 = 0;
seq__5178 = G__5190;
chunk__5179 = G__5191;
count__5180 = G__5192;
i__5181 = G__5193;
continue;
}
}
} else
{return null;
}
}
break;
}
});
todo.main.appendElement = (function appendElement(text){var li = document.createElement("li");li.innerHTML = text;
return document.querySelector([cljs.core.str("#"),cljs.core.str(todo.main._STAR_parent_STAR_),cljs.core.str(" ul")].join('')).appendChild(li);
});
todo.main.iterateTasks = (function iterateTasks(resp){var seq__5198 = cljs.core.seq.call(null,cljs.core.get.call(null,resp,"items"));var chunk__5199 = null;var count__5200 = 0;var i__5201 = 0;while(true){
if((i__5201 < count__5200))
{var task = cljs.core._nth.call(null,chunk__5199,i__5201);todo.main.appendElement.call(null,cljs.core.get.call(null,task,"title"));
{
var G__5202 = seq__5198;
var G__5203 = chunk__5199;
var G__5204 = count__5200;
var G__5205 = (i__5201 + 1);
seq__5198 = G__5202;
chunk__5199 = G__5203;
count__5200 = G__5204;
i__5201 = G__5205;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5198);if(temp__4092__auto__)
{var seq__5198__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5198__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__5198__$1);{
var G__5206 = cljs.core.chunk_rest.call(null,seq__5198__$1);
var G__5207 = c__3668__auto__;
var G__5208 = cljs.core.count.call(null,c__3668__auto__);
var G__5209 = 0;
seq__5198 = G__5206;
chunk__5199 = G__5207;
count__5200 = G__5208;
i__5201 = G__5209;
continue;
}
} else
{var task = cljs.core.first.call(null,seq__5198__$1);todo.main.appendElement.call(null,cljs.core.get.call(null,task,"title"));
{
var G__5210 = cljs.core.next.call(null,seq__5198__$1);
var G__5211 = null;
var G__5212 = 0;
var G__5213 = 0;
seq__5198 = G__5210;
chunk__5199 = G__5211;
count__5200 = G__5212;
i__5201 = G__5213;
continue;
}
}
} else
{return null;
}
}
break;
}
});
todo.main.getList = (function getList(){return ajax.core.GET.call(null,"https://www.googleapis.com/tasks/v1/users/@me/lists",cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154),new cljs.core.Keyword(null,"headers","headers",1809212152),cljs.core.PersistentArrayMap.fromArray(["Authorization",todo.main.headers.call(null)], true),new cljs.core.Keyword(null,"handler","handler",1706707644),todo.main.iterateLists], true));
});
todo.main.getTasks = (function getTasks(e){var id = e.target.getAttribute("id");if(!(cljs.core._EQ_.call(null,todo.main._STAR_parent_STAR_,id)))
{todo.main._STAR_parent_STAR_ = id;
return ajax.core.GET.call(null,[cljs.core.str("https://www.googleapis.com/tasks/v1/lists/"),cljs.core.str(id),cljs.core.str("/tasks")].join(''),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154),new cljs.core.Keyword(null,"headers","headers",1809212152),cljs.core.PersistentArrayMap.fromArray(["Authorization",todo.main.headers.call(null)], true),new cljs.core.Keyword(null,"handler","handler",1706707644),todo.main.iterateTasks], true));
} else
{return null;
}
});
todo.main.authorize = (function authorize(){return gapi.auth.authorize(todo.main.gapiImm,todo.main.authCb);
});
