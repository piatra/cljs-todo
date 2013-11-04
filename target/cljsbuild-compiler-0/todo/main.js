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
todo.main.iterateLists = (function iterateLists(resp){var seq__5114 = cljs.core.seq.call(null,cljs.core.get.call(null,resp,"items"));var chunk__5115 = null;var count__5116 = 0;var i__5117 = 0;while(true){
if((i__5117 < count__5116))
{var task = cljs.core._nth.call(null,chunk__5115,i__5117);todo.main.addList.call(null,cljs.core.get.call(null,task,"title"),cljs.core.get.call(null,task,"id"));
{
var G__5118 = seq__5114;
var G__5119 = chunk__5115;
var G__5120 = count__5116;
var G__5121 = (i__5117 + 1);
seq__5114 = G__5118;
chunk__5115 = G__5119;
count__5116 = G__5120;
i__5117 = G__5121;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5114);if(temp__4092__auto__)
{var seq__5114__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5114__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__5114__$1);{
var G__5122 = cljs.core.chunk_rest.call(null,seq__5114__$1);
var G__5123 = c__3668__auto__;
var G__5124 = cljs.core.count.call(null,c__3668__auto__);
var G__5125 = 0;
seq__5114 = G__5122;
chunk__5115 = G__5123;
count__5116 = G__5124;
i__5117 = G__5125;
continue;
}
} else
{var task = cljs.core.first.call(null,seq__5114__$1);todo.main.addList.call(null,cljs.core.get.call(null,task,"title"),cljs.core.get.call(null,task,"id"));
{
var G__5126 = cljs.core.next.call(null,seq__5114__$1);
var G__5127 = null;
var G__5128 = 0;
var G__5129 = 0;
seq__5114 = G__5126;
chunk__5115 = G__5127;
count__5116 = G__5128;
i__5117 = G__5129;
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
todo.main.addCheckbox = (function addCheckbox(elem,status){var check = document.createElement("input");if(!(cljs.core._EQ_.call(null,status,"needsAction")))
{check.checked = true;
} else
{}
check.type = "checkbox";
todo.main.log.call(null,check);
return elem.appendChild(check);
});
todo.main.appendElement = (function appendElement(text,status){var li = document.createElement("li");li.innerHTML = text;
todo.main.addCheckbox.call(null,li,status);
return document.querySelector([cljs.core.str("#"),cljs.core.str(todo.main._STAR_parent_STAR_),cljs.core.str(" ul")].join('')).appendChild(li);
});
todo.main.iterateTasks = (function iterateTasks(resp){var seq__5134 = cljs.core.seq.call(null,cljs.core.get.call(null,resp,"items"));var chunk__5135 = null;var count__5136 = 0;var i__5137 = 0;while(true){
if((i__5137 < count__5136))
{var task = cljs.core._nth.call(null,chunk__5135,i__5137);var title_5138 = cljs.core.get.call(null,task,"title");var status_5139 = cljs.core.get.call(null,task,"status");if((cljs.core.count.call(null,title_5138) > 1))
{todo.main.appendElement.call(null,title_5138,status_5139);
} else
{}
{
var G__5140 = seq__5134;
var G__5141 = chunk__5135;
var G__5142 = count__5136;
var G__5143 = (i__5137 + 1);
seq__5134 = G__5140;
chunk__5135 = G__5141;
count__5136 = G__5142;
i__5137 = G__5143;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5134);if(temp__4092__auto__)
{var seq__5134__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5134__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__5134__$1);{
var G__5144 = cljs.core.chunk_rest.call(null,seq__5134__$1);
var G__5145 = c__3668__auto__;
var G__5146 = cljs.core.count.call(null,c__3668__auto__);
var G__5147 = 0;
seq__5134 = G__5144;
chunk__5135 = G__5145;
count__5136 = G__5146;
i__5137 = G__5147;
continue;
}
} else
{var task = cljs.core.first.call(null,seq__5134__$1);var title_5148 = cljs.core.get.call(null,task,"title");var status_5149 = cljs.core.get.call(null,task,"status");if((cljs.core.count.call(null,title_5148) > 1))
{todo.main.appendElement.call(null,title_5148,status_5149);
} else
{}
{
var G__5150 = cljs.core.next.call(null,seq__5134__$1);
var G__5151 = null;
var G__5152 = 0;
var G__5153 = 0;
seq__5134 = G__5150;
chunk__5135 = G__5151;
count__5136 = G__5152;
i__5137 = G__5153;
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
todo.main.getTasks = (function getTasks(e){var id = e.target.getAttribute("id");if(!((cljs.core._EQ_.call(null,todo.main._STAR_parent_STAR_,id)) || (cljs.core._EQ_.call(null,null,id))))
{todo.main._STAR_parent_STAR_ = id;
return ajax.core.GET.call(null,[cljs.core.str("https://www.googleapis.com/tasks/v1/lists/"),cljs.core.str(id),cljs.core.str("/tasks")].join(''),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154),new cljs.core.Keyword(null,"headers","headers",1809212152),cljs.core.PersistentArrayMap.fromArray(["Authorization",todo.main.headers.call(null)], true),new cljs.core.Keyword(null,"handler","handler",1706707644),todo.main.iterateTasks], true));
} else
{return null;
}
});
todo.main.authorize = (function authorize(){return gapi.auth.authorize(todo.main.gapiImm,todo.main.authCb);
});
