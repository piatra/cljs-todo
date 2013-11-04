goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var or__3943__auto__ = elem__$1.textContent;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__5161 = dommy.template.__GT_node_like.call(null,parent);
G__5161.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__5161;
});
var append_BANG___3 = (function() { 
var G__5166__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__5162_5167 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__5163_5168 = null;
var count__5164_5169 = 0;
var i__5165_5170 = 0;
while(true){
if((i__5165_5170 < count__5164_5169))
{var c_5171 = cljs.core._nth.call(null,chunk__5163_5168,i__5165_5170);
append_BANG_.call(null,parent__$1,c_5171);
{
var G__5172 = seq__5162_5167;
var G__5173 = chunk__5163_5168;
var G__5174 = count__5164_5169;
var G__5175 = (i__5165_5170 + 1);
seq__5162_5167 = G__5172;
chunk__5163_5168 = G__5173;
count__5164_5169 = G__5174;
i__5165_5170 = G__5175;
continue;
}
} else
{var temp__4092__auto___5176 = cljs.core.seq.call(null,seq__5162_5167);
if(temp__4092__auto___5176)
{var seq__5162_5177__$1 = temp__4092__auto___5176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5162_5177__$1))
{var c__3038__auto___5178 = cljs.core.chunk_first.call(null,seq__5162_5177__$1);
{
var G__5179 = cljs.core.chunk_rest.call(null,seq__5162_5177__$1);
var G__5180 = c__3038__auto___5178;
var G__5181 = cljs.core.count.call(null,c__3038__auto___5178);
var G__5182 = 0;
seq__5162_5167 = G__5179;
chunk__5163_5168 = G__5180;
count__5164_5169 = G__5181;
i__5165_5170 = G__5182;
continue;
}
} else
{var c_5183 = cljs.core.first.call(null,seq__5162_5177__$1);
append_BANG_.call(null,parent__$1,c_5183);
{
var G__5184 = cljs.core.next.call(null,seq__5162_5177__$1);
var G__5185 = null;
var G__5186 = 0;
var G__5187 = 0;
seq__5162_5167 = G__5184;
chunk__5163_5168 = G__5185;
count__5164_5169 = G__5186;
i__5165_5170 = G__5187;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__5166 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5166__delegate.call(this, parent, child, more_children);
};
G__5166.cljs$lang$maxFixedArity = 2;
G__5166.cljs$lang$applyTo = (function (arglist__5188){
var parent = cljs.core.first(arglist__5188);
arglist__5188 = cljs.core.next(arglist__5188);
var child = cljs.core.first(arglist__5188);
var more_children = cljs.core.rest(arglist__5188);
return G__5166__delegate(parent, child, more_children);
});
G__5166.cljs$core$IFn$_invoke$arity$variadic = G__5166__delegate;
return G__5166;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__5194 = dommy.template.__GT_node_like.call(null,parent);
G__5194.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__5194;
});
var prepend_BANG___3 = (function() { 
var G__5199__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__5195_5200 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__5196_5201 = null;
var count__5197_5202 = 0;
var i__5198_5203 = 0;
while(true){
if((i__5198_5203 < count__5197_5202))
{var c_5204 = cljs.core._nth.call(null,chunk__5196_5201,i__5198_5203);
prepend_BANG_.call(null,parent__$1,c_5204);
{
var G__5205 = seq__5195_5200;
var G__5206 = chunk__5196_5201;
var G__5207 = count__5197_5202;
var G__5208 = (i__5198_5203 + 1);
seq__5195_5200 = G__5205;
chunk__5196_5201 = G__5206;
count__5197_5202 = G__5207;
i__5198_5203 = G__5208;
continue;
}
} else
{var temp__4092__auto___5209 = cljs.core.seq.call(null,seq__5195_5200);
if(temp__4092__auto___5209)
{var seq__5195_5210__$1 = temp__4092__auto___5209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5195_5210__$1))
{var c__3038__auto___5211 = cljs.core.chunk_first.call(null,seq__5195_5210__$1);
{
var G__5212 = cljs.core.chunk_rest.call(null,seq__5195_5210__$1);
var G__5213 = c__3038__auto___5211;
var G__5214 = cljs.core.count.call(null,c__3038__auto___5211);
var G__5215 = 0;
seq__5195_5200 = G__5212;
chunk__5196_5201 = G__5213;
count__5197_5202 = G__5214;
i__5198_5203 = G__5215;
continue;
}
} else
{var c_5216 = cljs.core.first.call(null,seq__5195_5210__$1);
prepend_BANG_.call(null,parent__$1,c_5216);
{
var G__5217 = cljs.core.next.call(null,seq__5195_5210__$1);
var G__5218 = null;
var G__5219 = 0;
var G__5220 = 0;
seq__5195_5200 = G__5217;
chunk__5196_5201 = G__5218;
count__5197_5202 = G__5219;
i__5198_5203 = G__5220;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__5199 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5199__delegate.call(this, parent, child, more_children);
};
G__5199.cljs$lang$maxFixedArity = 2;
G__5199.cljs$lang$applyTo = (function (arglist__5221){
var parent = cljs.core.first(arglist__5221);
arglist__5221 = cljs.core.next(arglist__5221);
var child = cljs.core.first(arglist__5221);
var more_children = cljs.core.rest(arglist__5221);
return G__5199__delegate(parent, child, more_children);
});
G__5199.cljs$core$IFn$_invoke$arity$variadic = G__5199__delegate;
return G__5199;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4090__auto___5222 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4090__auto___5222))
{var next_5223 = temp__4090__auto___5222;
parent.insertBefore(actual_node,next_5223);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){
var G__5225 = dommy.template.__GT_node_like.call(null,parent);
G__5225.innerHTML = "";
dommy.core.append_BANG_.call(null,G__5225,node_like);
return G__5225;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__5227 = elem__$1.parentNode;
G__5227.removeChild(elem__$1);
return G__5227;
});
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((function (){var or__3943__auto__ = cljs.core.string_QMARK_.call(null,data);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,data);
}
})())
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__5228_SHARP_){
return p1__5228_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__5229_SHARP_){
return !((p1__5229_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);
var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);
if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5230){
var vec__5231 = p__5230;
var special_mouse_event = cljs.core.nth.call(null,vec__5231,0,null);
var real_mouse_event = cljs.core.nth.call(null,vec__5231,1,null);
return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3941__auto__ = related_target;
if(cljs.core.truth_(and__3941__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true)], true);
}),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:mouseenter","\uFDD0:mouseover","\uFDD0:mouseleave","\uFDD0:mouseout"], true)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;
event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3943__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this, elem, f, args);
};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5233){
var elem = cljs.core.first(arglist__5233);
arglist__5233 = cljs.core.next(arglist__5233);
var f = cljs.core.first(arglist__5233);
var args = cljs.core.rest(arglist__5233);
return update_event_listeners_BANG___delegate(elem, f, args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__5232_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__5232_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like.call(null,elem_sel),null], true);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5257_5280 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5281 = cljs.core.nth.call(null,vec__5257_5280,0,null);
var selector_5282 = cljs.core.nth.call(null,vec__5257_5280,1,null);
var seq__5258_5283 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__5265_5284 = null;
var count__5266_5285 = 0;
var i__5267_5286 = 0;
while(true){
if((i__5267_5286 < count__5266_5285))
{var vec__5274_5287 = cljs.core._nth.call(null,chunk__5265_5284,i__5267_5286);
var orig_type_5288 = cljs.core.nth.call(null,vec__5274_5287,0,null);
var f_5289 = cljs.core.nth.call(null,vec__5274_5287,1,null);
var seq__5268_5290 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5288,cljs.core.PersistentArrayMap.fromArray([orig_type_5288,cljs.core.identity], true)));
var chunk__5270_5291 = null;
var count__5271_5292 = 0;
var i__5272_5293 = 0;
while(true){
if((i__5272_5293 < count__5271_5292))
{var vec__5275_5294 = cljs.core._nth.call(null,chunk__5270_5291,i__5272_5293);
var actual_type_5295 = cljs.core.nth.call(null,vec__5275_5294,0,null);
var factory_5296 = cljs.core.nth.call(null,vec__5275_5294,1,null);
var canonical_f_5297 = (cljs.core.truth_(selector_5282)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5281,selector_5282):cljs.core.identity).call(null,factory_5296.call(null,f_5289));
dommy.core.update_event_listeners_BANG_.call(null,elem_5281,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5282,actual_type_5295,f_5289], true),canonical_f_5297);
if(cljs.core.truth_(elem_5281.addEventListener))
{elem_5281.addEventListener(cljs.core.name.call(null,actual_type_5295),canonical_f_5297);
} else
{elem_5281.attachEvent(cljs.core.name.call(null,actual_type_5295),canonical_f_5297);
}
{
var G__5298 = seq__5268_5290;
var G__5299 = chunk__5270_5291;
var G__5300 = count__5271_5292;
var G__5301 = (i__5272_5293 + 1);
seq__5268_5290 = G__5298;
chunk__5270_5291 = G__5299;
count__5271_5292 = G__5300;
i__5272_5293 = G__5301;
continue;
}
} else
{var temp__4092__auto___5302 = cljs.core.seq.call(null,seq__5268_5290);
if(temp__4092__auto___5302)
{var seq__5268_5303__$1 = temp__4092__auto___5302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5268_5303__$1))
{var c__3038__auto___5304 = cljs.core.chunk_first.call(null,seq__5268_5303__$1);
{
var G__5305 = cljs.core.chunk_rest.call(null,seq__5268_5303__$1);
var G__5306 = c__3038__auto___5304;
var G__5307 = cljs.core.count.call(null,c__3038__auto___5304);
var G__5308 = 0;
seq__5268_5290 = G__5305;
chunk__5270_5291 = G__5306;
count__5271_5292 = G__5307;
i__5272_5293 = G__5308;
continue;
}
} else
{var vec__5276_5309 = cljs.core.first.call(null,seq__5268_5303__$1);
var actual_type_5310 = cljs.core.nth.call(null,vec__5276_5309,0,null);
var factory_5311 = cljs.core.nth.call(null,vec__5276_5309,1,null);
var canonical_f_5312 = (cljs.core.truth_(selector_5282)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5281,selector_5282):cljs.core.identity).call(null,factory_5311.call(null,f_5289));
dommy.core.update_event_listeners_BANG_.call(null,elem_5281,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5282,actual_type_5310,f_5289], true),canonical_f_5312);
if(cljs.core.truth_(elem_5281.addEventListener))
{elem_5281.addEventListener(cljs.core.name.call(null,actual_type_5310),canonical_f_5312);
} else
{elem_5281.attachEvent(cljs.core.name.call(null,actual_type_5310),canonical_f_5312);
}
{
var G__5313 = cljs.core.next.call(null,seq__5268_5303__$1);
var G__5314 = null;
var G__5315 = 0;
var G__5316 = 0;
seq__5268_5290 = G__5313;
chunk__5270_5291 = G__5314;
count__5271_5292 = G__5315;
i__5272_5293 = G__5316;
continue;
}
}
} else
{}
}
break;
}
{
var G__5317 = seq__5258_5283;
var G__5318 = chunk__5265_5284;
var G__5319 = count__5266_5285;
var G__5320 = (i__5267_5286 + 1);
seq__5258_5283 = G__5317;
chunk__5265_5284 = G__5318;
count__5266_5285 = G__5319;
i__5267_5286 = G__5320;
continue;
}
} else
{var temp__4092__auto___5321 = cljs.core.seq.call(null,seq__5258_5283);
if(temp__4092__auto___5321)
{var seq__5258_5322__$1 = temp__4092__auto___5321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5258_5322__$1))
{var c__3038__auto___5323 = cljs.core.chunk_first.call(null,seq__5258_5322__$1);
{
var G__5324 = cljs.core.chunk_rest.call(null,seq__5258_5322__$1);
var G__5325 = c__3038__auto___5323;
var G__5326 = cljs.core.count.call(null,c__3038__auto___5323);
var G__5327 = 0;
seq__5258_5283 = G__5324;
chunk__5265_5284 = G__5325;
count__5266_5285 = G__5326;
i__5267_5286 = G__5327;
continue;
}
} else
{var vec__5277_5328 = cljs.core.first.call(null,seq__5258_5322__$1);
var orig_type_5329 = cljs.core.nth.call(null,vec__5277_5328,0,null);
var f_5330 = cljs.core.nth.call(null,vec__5277_5328,1,null);
var seq__5259_5331 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5329,cljs.core.PersistentArrayMap.fromArray([orig_type_5329,cljs.core.identity], true)));
var chunk__5261_5332 = null;
var count__5262_5333 = 0;
var i__5263_5334 = 0;
while(true){
if((i__5263_5334 < count__5262_5333))
{var vec__5278_5335 = cljs.core._nth.call(null,chunk__5261_5332,i__5263_5334);
var actual_type_5336 = cljs.core.nth.call(null,vec__5278_5335,0,null);
var factory_5337 = cljs.core.nth.call(null,vec__5278_5335,1,null);
var canonical_f_5338 = (cljs.core.truth_(selector_5282)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5281,selector_5282):cljs.core.identity).call(null,factory_5337.call(null,f_5330));
dommy.core.update_event_listeners_BANG_.call(null,elem_5281,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5282,actual_type_5336,f_5330], true),canonical_f_5338);
if(cljs.core.truth_(elem_5281.addEventListener))
{elem_5281.addEventListener(cljs.core.name.call(null,actual_type_5336),canonical_f_5338);
} else
{elem_5281.attachEvent(cljs.core.name.call(null,actual_type_5336),canonical_f_5338);
}
{
var G__5339 = seq__5259_5331;
var G__5340 = chunk__5261_5332;
var G__5341 = count__5262_5333;
var G__5342 = (i__5263_5334 + 1);
seq__5259_5331 = G__5339;
chunk__5261_5332 = G__5340;
count__5262_5333 = G__5341;
i__5263_5334 = G__5342;
continue;
}
} else
{var temp__4092__auto___5343__$1 = cljs.core.seq.call(null,seq__5259_5331);
if(temp__4092__auto___5343__$1)
{var seq__5259_5344__$1 = temp__4092__auto___5343__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5259_5344__$1))
{var c__3038__auto___5345 = cljs.core.chunk_first.call(null,seq__5259_5344__$1);
{
var G__5346 = cljs.core.chunk_rest.call(null,seq__5259_5344__$1);
var G__5347 = c__3038__auto___5345;
var G__5348 = cljs.core.count.call(null,c__3038__auto___5345);
var G__5349 = 0;
seq__5259_5331 = G__5346;
chunk__5261_5332 = G__5347;
count__5262_5333 = G__5348;
i__5263_5334 = G__5349;
continue;
}
} else
{var vec__5279_5350 = cljs.core.first.call(null,seq__5259_5344__$1);
var actual_type_5351 = cljs.core.nth.call(null,vec__5279_5350,0,null);
var factory_5352 = cljs.core.nth.call(null,vec__5279_5350,1,null);
var canonical_f_5353 = (cljs.core.truth_(selector_5282)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5281,selector_5282):cljs.core.identity).call(null,factory_5352.call(null,f_5330));
dommy.core.update_event_listeners_BANG_.call(null,elem_5281,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5282,actual_type_5351,f_5330], true),canonical_f_5353);
if(cljs.core.truth_(elem_5281.addEventListener))
{elem_5281.addEventListener(cljs.core.name.call(null,actual_type_5351),canonical_f_5353);
} else
{elem_5281.attachEvent(cljs.core.name.call(null,actual_type_5351),canonical_f_5353);
}
{
var G__5354 = cljs.core.next.call(null,seq__5259_5344__$1);
var G__5355 = null;
var G__5356 = 0;
var G__5357 = 0;
seq__5259_5331 = G__5354;
chunk__5261_5332 = G__5355;
count__5262_5333 = G__5356;
i__5263_5334 = G__5357;
continue;
}
}
} else
{}
}
break;
}
{
var G__5358 = cljs.core.next.call(null,seq__5258_5322__$1);
var G__5359 = null;
var G__5360 = 0;
var G__5361 = 0;
seq__5258_5283 = G__5358;
chunk__5265_5284 = G__5359;
count__5266_5285 = G__5360;
i__5267_5286 = G__5361;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__5362){
var elem_sel = cljs.core.first(arglist__5362);
var type_fs = cljs.core.rest(arglist__5362);
return listen_BANG___delegate(elem_sel, type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5386_5409 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5410 = cljs.core.nth.call(null,vec__5386_5409,0,null);
var selector_5411 = cljs.core.nth.call(null,vec__5386_5409,1,null);
var seq__5387_5412 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__5394_5413 = null;
var count__5395_5414 = 0;
var i__5396_5415 = 0;
while(true){
if((i__5396_5415 < count__5395_5414))
{var vec__5403_5416 = cljs.core._nth.call(null,chunk__5394_5413,i__5396_5415);
var orig_type_5417 = cljs.core.nth.call(null,vec__5403_5416,0,null);
var f_5418 = cljs.core.nth.call(null,vec__5403_5416,1,null);
var seq__5397_5419 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5417,cljs.core.PersistentArrayMap.fromArray([orig_type_5417,cljs.core.identity], true)));
var chunk__5399_5420 = null;
var count__5400_5421 = 0;
var i__5401_5422 = 0;
while(true){
if((i__5401_5422 < count__5400_5421))
{var vec__5404_5423 = cljs.core._nth.call(null,chunk__5399_5420,i__5401_5422);
var actual_type_5424 = cljs.core.nth.call(null,vec__5404_5423,0,null);
var __5425 = cljs.core.nth.call(null,vec__5404_5423,1,null);
var keys_5426 = cljs.core.PersistentVector.fromArray([selector_5411,actual_type_5424,f_5418], true);
var canonical_f_5427 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5410),keys_5426);
dommy.core.update_event_listeners_BANG_.call(null,elem_5410,dommy.utils.dissoc_in,keys_5426);
if(cljs.core.truth_(elem_5410.removeEventListener))
{elem_5410.removeEventListener(cljs.core.name.call(null,actual_type_5424),canonical_f_5427);
} else
{elem_5410.detachEvent(cljs.core.name.call(null,actual_type_5424),canonical_f_5427);
}
{
var G__5428 = seq__5397_5419;
var G__5429 = chunk__5399_5420;
var G__5430 = count__5400_5421;
var G__5431 = (i__5401_5422 + 1);
seq__5397_5419 = G__5428;
chunk__5399_5420 = G__5429;
count__5400_5421 = G__5430;
i__5401_5422 = G__5431;
continue;
}
} else
{var temp__4092__auto___5432 = cljs.core.seq.call(null,seq__5397_5419);
if(temp__4092__auto___5432)
{var seq__5397_5433__$1 = temp__4092__auto___5432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5397_5433__$1))
{var c__3038__auto___5434 = cljs.core.chunk_first.call(null,seq__5397_5433__$1);
{
var G__5435 = cljs.core.chunk_rest.call(null,seq__5397_5433__$1);
var G__5436 = c__3038__auto___5434;
var G__5437 = cljs.core.count.call(null,c__3038__auto___5434);
var G__5438 = 0;
seq__5397_5419 = G__5435;
chunk__5399_5420 = G__5436;
count__5400_5421 = G__5437;
i__5401_5422 = G__5438;
continue;
}
} else
{var vec__5405_5439 = cljs.core.first.call(null,seq__5397_5433__$1);
var actual_type_5440 = cljs.core.nth.call(null,vec__5405_5439,0,null);
var __5441 = cljs.core.nth.call(null,vec__5405_5439,1,null);
var keys_5442 = cljs.core.PersistentVector.fromArray([selector_5411,actual_type_5440,f_5418], true);
var canonical_f_5443 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5410),keys_5442);
dommy.core.update_event_listeners_BANG_.call(null,elem_5410,dommy.utils.dissoc_in,keys_5442);
if(cljs.core.truth_(elem_5410.removeEventListener))
{elem_5410.removeEventListener(cljs.core.name.call(null,actual_type_5440),canonical_f_5443);
} else
{elem_5410.detachEvent(cljs.core.name.call(null,actual_type_5440),canonical_f_5443);
}
{
var G__5444 = cljs.core.next.call(null,seq__5397_5433__$1);
var G__5445 = null;
var G__5446 = 0;
var G__5447 = 0;
seq__5397_5419 = G__5444;
chunk__5399_5420 = G__5445;
count__5400_5421 = G__5446;
i__5401_5422 = G__5447;
continue;
}
}
} else
{}
}
break;
}
{
var G__5448 = seq__5387_5412;
var G__5449 = chunk__5394_5413;
var G__5450 = count__5395_5414;
var G__5451 = (i__5396_5415 + 1);
seq__5387_5412 = G__5448;
chunk__5394_5413 = G__5449;
count__5395_5414 = G__5450;
i__5396_5415 = G__5451;
continue;
}
} else
{var temp__4092__auto___5452 = cljs.core.seq.call(null,seq__5387_5412);
if(temp__4092__auto___5452)
{var seq__5387_5453__$1 = temp__4092__auto___5452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5387_5453__$1))
{var c__3038__auto___5454 = cljs.core.chunk_first.call(null,seq__5387_5453__$1);
{
var G__5455 = cljs.core.chunk_rest.call(null,seq__5387_5453__$1);
var G__5456 = c__3038__auto___5454;
var G__5457 = cljs.core.count.call(null,c__3038__auto___5454);
var G__5458 = 0;
seq__5387_5412 = G__5455;
chunk__5394_5413 = G__5456;
count__5395_5414 = G__5457;
i__5396_5415 = G__5458;
continue;
}
} else
{var vec__5406_5459 = cljs.core.first.call(null,seq__5387_5453__$1);
var orig_type_5460 = cljs.core.nth.call(null,vec__5406_5459,0,null);
var f_5461 = cljs.core.nth.call(null,vec__5406_5459,1,null);
var seq__5388_5462 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5460,cljs.core.PersistentArrayMap.fromArray([orig_type_5460,cljs.core.identity], true)));
var chunk__5390_5463 = null;
var count__5391_5464 = 0;
var i__5392_5465 = 0;
while(true){
if((i__5392_5465 < count__5391_5464))
{var vec__5407_5466 = cljs.core._nth.call(null,chunk__5390_5463,i__5392_5465);
var actual_type_5467 = cljs.core.nth.call(null,vec__5407_5466,0,null);
var __5468 = cljs.core.nth.call(null,vec__5407_5466,1,null);
var keys_5469 = cljs.core.PersistentVector.fromArray([selector_5411,actual_type_5467,f_5461], true);
var canonical_f_5470 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5410),keys_5469);
dommy.core.update_event_listeners_BANG_.call(null,elem_5410,dommy.utils.dissoc_in,keys_5469);
if(cljs.core.truth_(elem_5410.removeEventListener))
{elem_5410.removeEventListener(cljs.core.name.call(null,actual_type_5467),canonical_f_5470);
} else
{elem_5410.detachEvent(cljs.core.name.call(null,actual_type_5467),canonical_f_5470);
}
{
var G__5471 = seq__5388_5462;
var G__5472 = chunk__5390_5463;
var G__5473 = count__5391_5464;
var G__5474 = (i__5392_5465 + 1);
seq__5388_5462 = G__5471;
chunk__5390_5463 = G__5472;
count__5391_5464 = G__5473;
i__5392_5465 = G__5474;
continue;
}
} else
{var temp__4092__auto___5475__$1 = cljs.core.seq.call(null,seq__5388_5462);
if(temp__4092__auto___5475__$1)
{var seq__5388_5476__$1 = temp__4092__auto___5475__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5388_5476__$1))
{var c__3038__auto___5477 = cljs.core.chunk_first.call(null,seq__5388_5476__$1);
{
var G__5478 = cljs.core.chunk_rest.call(null,seq__5388_5476__$1);
var G__5479 = c__3038__auto___5477;
var G__5480 = cljs.core.count.call(null,c__3038__auto___5477);
var G__5481 = 0;
seq__5388_5462 = G__5478;
chunk__5390_5463 = G__5479;
count__5391_5464 = G__5480;
i__5392_5465 = G__5481;
continue;
}
} else
{var vec__5408_5482 = cljs.core.first.call(null,seq__5388_5476__$1);
var actual_type_5483 = cljs.core.nth.call(null,vec__5408_5482,0,null);
var __5484 = cljs.core.nth.call(null,vec__5408_5482,1,null);
var keys_5485 = cljs.core.PersistentVector.fromArray([selector_5411,actual_type_5483,f_5461], true);
var canonical_f_5486 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5410),keys_5485);
dommy.core.update_event_listeners_BANG_.call(null,elem_5410,dommy.utils.dissoc_in,keys_5485);
if(cljs.core.truth_(elem_5410.removeEventListener))
{elem_5410.removeEventListener(cljs.core.name.call(null,actual_type_5483),canonical_f_5486);
} else
{elem_5410.detachEvent(cljs.core.name.call(null,actual_type_5483),canonical_f_5486);
}
{
var G__5487 = cljs.core.next.call(null,seq__5388_5476__$1);
var G__5488 = null;
var G__5489 = 0;
var G__5490 = 0;
seq__5388_5462 = G__5487;
chunk__5390_5463 = G__5488;
count__5391_5464 = G__5489;
i__5392_5465 = G__5490;
continue;
}
}
} else
{}
}
break;
}
{
var G__5491 = cljs.core.next.call(null,seq__5387_5453__$1);
var G__5492 = null;
var G__5493 = 0;
var G__5494 = 0;
seq__5387_5412 = G__5491;
chunk__5394_5413 = G__5492;
count__5395_5414 = G__5493;
i__5396_5415 = G__5494;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return unlisten_BANG___delegate.call(this, elem_sel, type_fs);
};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__5495){
var elem_sel = cljs.core.first(arglist__5495);
var type_fs = cljs.core.rest(arglist__5495);
return unlisten_BANG___delegate(elem_sel, type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5503_5510 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5511 = cljs.core.nth.call(null,vec__5503_5510,0,null);
var selector_5512 = cljs.core.nth.call(null,vec__5503_5510,1,null);
var seq__5504_5513 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__5505_5514 = null;
var count__5506_5515 = 0;
var i__5507_5516 = 0;
while(true){
if((i__5507_5516 < count__5506_5515))
{var vec__5508_5517 = cljs.core._nth.call(null,chunk__5505_5514,i__5507_5516);
var type_5518 = cljs.core.nth.call(null,vec__5508_5517,0,null);
var f_5519 = cljs.core.nth.call(null,vec__5508_5517,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_5518,((function (seq__5504_5513,chunk__5505_5514,count__5506_5515,i__5507_5516,vec__5508_5517,type_5518,f_5519){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_5518,this_fn);
return f_5519.call(null,e);
});})(seq__5504_5513,chunk__5505_5514,count__5506_5515,i__5507_5516,vec__5508_5517,type_5518,f_5519))
);
{
var G__5520 = seq__5504_5513;
var G__5521 = chunk__5505_5514;
var G__5522 = count__5506_5515;
var G__5523 = (i__5507_5516 + 1);
seq__5504_5513 = G__5520;
chunk__5505_5514 = G__5521;
count__5506_5515 = G__5522;
i__5507_5516 = G__5523;
continue;
}
} else
{var temp__4092__auto___5524 = cljs.core.seq.call(null,seq__5504_5513);
if(temp__4092__auto___5524)
{var seq__5504_5525__$1 = temp__4092__auto___5524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5504_5525__$1))
{var c__3038__auto___5526 = cljs.core.chunk_first.call(null,seq__5504_5525__$1);
{
var G__5527 = cljs.core.chunk_rest.call(null,seq__5504_5525__$1);
var G__5528 = c__3038__auto___5526;
var G__5529 = cljs.core.count.call(null,c__3038__auto___5526);
var G__5530 = 0;
seq__5504_5513 = G__5527;
chunk__5505_5514 = G__5528;
count__5506_5515 = G__5529;
i__5507_5516 = G__5530;
continue;
}
} else
{var vec__5509_5531 = cljs.core.first.call(null,seq__5504_5525__$1);
var type_5532 = cljs.core.nth.call(null,vec__5509_5531,0,null);
var f_5533 = cljs.core.nth.call(null,vec__5509_5531,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_5532,((function (seq__5504_5513,chunk__5505_5514,count__5506_5515,i__5507_5516,vec__5509_5531,type_5532,f_5533,seq__5504_5525__$1,temp__4092__auto___5524){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_5532,this_fn);
return f_5533.call(null,e);
});})(seq__5504_5513,chunk__5505_5514,count__5506_5515,i__5507_5516,vec__5509_5531,type_5532,f_5533,seq__5504_5525__$1,temp__4092__auto___5524))
);
{
var G__5534 = cljs.core.next.call(null,seq__5504_5525__$1);
var G__5535 = null;
var G__5536 = 0;
var G__5537 = 0;
seq__5504_5513 = G__5534;
chunk__5505_5514 = G__5535;
count__5506_5515 = G__5536;
i__5507_5516 = G__5537;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_once_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__5538){
var elem_sel = cljs.core.first(arglist__5538);
var type_fs = cljs.core.rest(arglist__5538);
return listen_once_BANG___delegate(elem_sel, type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__5539){
var vec__5541 = p__5539;
var update_event_BANG_ = cljs.core.nth.call(null,vec__5541,0,null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3943__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");
event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__5539 = null;
if (arguments.length > 2) {
  p__5539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fire_BANG___delegate.call(this, node, event_type, p__5539);
};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__5542){
var node = cljs.core.first(arglist__5542);
arglist__5542 = cljs.core.next(arglist__5542);
var event_type = cljs.core.first(arglist__5542);
var p__5539 = cljs.core.rest(arglist__5542);
return fire_BANG___delegate(node, event_type, p__5539);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
