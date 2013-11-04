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
todo.main.event = (function event(ev,elem,cb){return elem.addEventListener(ev,cb);
});
todo.main.addList = (function addList(title,id){var li = document.createElement("li");var ul = document.createElement("ul");li.innerHTML = title;
li.id = id;
li.appendChild(ul);
document.body.appendChild(li);
return todo.main.event.call(null,"click",li,todo.main.getTasks);
});
todo.main.iterateLists = (function iterateLists(resp){var seq__4978 = cljs.core.seq.call(null,cljs.core.get.call(null,resp,"items"));var chunk__4979 = null;var count__4980 = 0;var i__4981 = 0;while(true){
if((i__4981 < count__4980))
{var task = cljs.core._nth.call(null,chunk__4979,i__4981);todo.main.addList.call(null,cljs.core.get.call(null,task,"title"),cljs.core.get.call(null,task,"id"));
{
var G__4982 = seq__4978;
var G__4983 = chunk__4979;
var G__4984 = count__4980;
var G__4985 = (i__4981 + 1);
seq__4978 = G__4982;
chunk__4979 = G__4983;
count__4980 = G__4984;
i__4981 = G__4985;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4978);if(temp__4092__auto__)
{var seq__4978__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4978__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__4978__$1);{
var G__4986 = cljs.core.chunk_rest.call(null,seq__4978__$1);
var G__4987 = c__3668__auto__;
var G__4988 = cljs.core.count.call(null,c__3668__auto__);
var G__4989 = 0;
seq__4978 = G__4986;
chunk__4979 = G__4987;
count__4980 = G__4988;
i__4981 = G__4989;
continue;
}
} else
{var task = cljs.core.first.call(null,seq__4978__$1);todo.main.addList.call(null,cljs.core.get.call(null,task,"title"),cljs.core.get.call(null,task,"id"));
{
var G__4990 = cljs.core.next.call(null,seq__4978__$1);
var G__4991 = null;
var G__4992 = 0;
var G__4993 = 0;
seq__4978 = G__4990;
chunk__4979 = G__4991;
count__4980 = G__4992;
i__4981 = G__4993;
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
todo.main.iterateTasks = (function iterateTasks(resp){var seq__4998 = cljs.core.seq.call(null,cljs.core.get.call(null,resp,"items"));var chunk__4999 = null;var count__5000 = 0;var i__5001 = 0;while(true){
if((i__5001 < count__5000))
{var task = cljs.core._nth.call(null,chunk__4999,i__5001);todo.main.appendElement.call(null,cljs.core.get.call(null,task,"title"));
{
var G__5002 = seq__4998;
var G__5003 = chunk__4999;
var G__5004 = count__5000;
var G__5005 = (i__5001 + 1);
seq__4998 = G__5002;
chunk__4999 = G__5003;
count__5000 = G__5004;
i__5001 = G__5005;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4998);if(temp__4092__auto__)
{var seq__4998__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4998__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__4998__$1);{
var G__5006 = cljs.core.chunk_rest.call(null,seq__4998__$1);
var G__5007 = c__3668__auto__;
var G__5008 = cljs.core.count.call(null,c__3668__auto__);
var G__5009 = 0;
seq__4998 = G__5006;
chunk__4999 = G__5007;
count__5000 = G__5008;
i__5001 = G__5009;
continue;
}
} else
{var task = cljs.core.first.call(null,seq__4998__$1);todo.main.appendElement.call(null,cljs.core.get.call(null,task,"title"));
{
var G__5010 = cljs.core.next.call(null,seq__4998__$1);
var G__5011 = null;
var G__5012 = 0;
var G__5013 = 0;
seq__4998 = G__5010;
chunk__4999 = G__5011;
count__5000 = G__5012;
i__5001 = G__5013;
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
