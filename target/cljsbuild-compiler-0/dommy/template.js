goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__2907__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__2907__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (dommy.template._elem["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){
var node_str = cljs.core.name.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,0);
var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":(("\uFDD0:else")?node_str:null)));
var node = document.createElement(tag);
if((base_idx >= 0))
{var str_5555 = node_str.substring(base_idx);
while(true){
var next_idx_5556 = dommy.template.next_css_index.call(null,str_5555,1);
var frag_5557 = (((next_idx_5556 >= 0))?str_5555.substring(0,next_idx_5556):str_5555);
var G__5554_5558 = frag_5557.charAt(0);
if(cljs.core._EQ_.call(null,"#",G__5554_5558))
{node.setAttribute("id",frag_5557.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__5554_5558))
{dommy.attrs.add_class_BANG_.call(null,node,frag_5557.substring(1));
} else
{if("\uFDD0:else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_5557.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_5556 >= 0))
{{
var G__5559 = str_5555.substring(next_idx_5556);
str_5555 = G__5559;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){
return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){
if((function (){var G__5565 = data;
if(G__5565)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5565.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5565.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5565);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5565);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__5566_5570 = cljs.core.seq.call(null,data);
var chunk__5567_5571 = null;
var count__5568_5572 = 0;
var i__5569_5573 = 0;
while(true){
if((i__5569_5573 < count__5568_5572))
{var child_5574 = cljs.core._nth.call(null,chunk__5567_5571,i__5569_5573);
__GT_document_fragment.call(null,result_frag,child_5574);
{
var G__5575 = seq__5566_5570;
var G__5576 = chunk__5567_5571;
var G__5577 = count__5568_5572;
var G__5578 = (i__5569_5573 + 1);
seq__5566_5570 = G__5575;
chunk__5567_5571 = G__5576;
count__5568_5572 = G__5577;
i__5569_5573 = G__5578;
continue;
}
} else
{var temp__4092__auto___5579 = cljs.core.seq.call(null,seq__5566_5570);
if(temp__4092__auto___5579)
{var seq__5566_5580__$1 = temp__4092__auto___5579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5566_5580__$1))
{var c__3038__auto___5581 = cljs.core.chunk_first.call(null,seq__5566_5580__$1);
{
var G__5582 = cljs.core.chunk_rest.call(null,seq__5566_5580__$1);
var G__5583 = c__3038__auto___5581;
var G__5584 = cljs.core.count.call(null,c__3038__auto___5581);
var G__5585 = 0;
seq__5566_5570 = G__5582;
chunk__5567_5571 = G__5583;
count__5568_5572 = G__5584;
i__5569_5573 = G__5585;
continue;
}
} else
{var child_5586 = cljs.core.first.call(null,seq__5566_5580__$1);
__GT_document_fragment.call(null,result_frag,child_5586);
{
var G__5587 = cljs.core.next.call(null,seq__5566_5580__$1);
var G__5588 = null;
var G__5589 = 0;
var G__5590 = 0;
seq__5566_5570 = G__5587;
chunk__5567_5571 = G__5588;
count__5568_5572 = G__5589;
i__5569_5573 = G__5590;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if("\uFDD0:else")
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){
if((function (){var G__5592 = data;
if(G__5592)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5592.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5592.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5592);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5592);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__5593){
var vec__5612 = p__5593;
var tag_name = cljs.core.nth.call(null,vec__5612,0,null);
var maybe_attrs = cljs.core.nth.call(null,vec__5612,1,null);
var children = cljs.core.nthnext.call(null,vec__5612,2);
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);
if(and__3941__auto__)
{return !((function (){var G__5613 = maybe_attrs;
if(G__5613)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5613.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5613.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5613);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5613);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__5614_5630 = cljs.core.seq.call(null,attrs);
var chunk__5615_5631 = null;
var count__5616_5632 = 0;
var i__5617_5633 = 0;
while(true){
if((i__5617_5633 < count__5616_5632))
{var vec__5618_5634 = cljs.core._nth.call(null,chunk__5615_5631,i__5617_5633);
var k_5635 = cljs.core.nth.call(null,vec__5618_5634,0,null);
var v_5636 = cljs.core.nth.call(null,vec__5618_5634,1,null);
var G__5619_5637 = k_5635;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__5619_5637))
{var seq__5620_5638 = cljs.core.seq.call(null,v_5636);
var chunk__5621_5639 = null;
var count__5622_5640 = 0;
var i__5623_5641 = 0;
while(true){
if((i__5623_5641 < count__5622_5640))
{var c_5642 = cljs.core._nth.call(null,chunk__5621_5639,i__5623_5641);
dommy.attrs.add_class_BANG_.call(null,n,c_5642);
{
var G__5643 = seq__5620_5638;
var G__5644 = chunk__5621_5639;
var G__5645 = count__5622_5640;
var G__5646 = (i__5623_5641 + 1);
seq__5620_5638 = G__5643;
chunk__5621_5639 = G__5644;
count__5622_5640 = G__5645;
i__5623_5641 = G__5646;
continue;
}
} else
{var temp__4092__auto___5647 = cljs.core.seq.call(null,seq__5620_5638);
if(temp__4092__auto___5647)
{var seq__5620_5648__$1 = temp__4092__auto___5647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5620_5648__$1))
{var c__3038__auto___5649 = cljs.core.chunk_first.call(null,seq__5620_5648__$1);
{
var G__5650 = cljs.core.chunk_rest.call(null,seq__5620_5648__$1);
var G__5651 = c__3038__auto___5649;
var G__5652 = cljs.core.count.call(null,c__3038__auto___5649);
var G__5653 = 0;
seq__5620_5638 = G__5650;
chunk__5621_5639 = G__5651;
count__5622_5640 = G__5652;
i__5623_5641 = G__5653;
continue;
}
} else
{var c_5654 = cljs.core.first.call(null,seq__5620_5648__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_5654);
{
var G__5655 = cljs.core.next.call(null,seq__5620_5648__$1);
var G__5656 = null;
var G__5657 = 0;
var G__5658 = 0;
seq__5620_5638 = G__5655;
chunk__5621_5639 = G__5656;
count__5622_5640 = G__5657;
i__5623_5641 = G__5658;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__5619_5637))
{dommy.attrs.add_class_BANG_.call(null,n,v_5636);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_5635,v_5636);
} else
{}
}
}
{
var G__5659 = seq__5614_5630;
var G__5660 = chunk__5615_5631;
var G__5661 = count__5616_5632;
var G__5662 = (i__5617_5633 + 1);
seq__5614_5630 = G__5659;
chunk__5615_5631 = G__5660;
count__5616_5632 = G__5661;
i__5617_5633 = G__5662;
continue;
}
} else
{var temp__4092__auto___5663 = cljs.core.seq.call(null,seq__5614_5630);
if(temp__4092__auto___5663)
{var seq__5614_5664__$1 = temp__4092__auto___5663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5614_5664__$1))
{var c__3038__auto___5665 = cljs.core.chunk_first.call(null,seq__5614_5664__$1);
{
var G__5666 = cljs.core.chunk_rest.call(null,seq__5614_5664__$1);
var G__5667 = c__3038__auto___5665;
var G__5668 = cljs.core.count.call(null,c__3038__auto___5665);
var G__5669 = 0;
seq__5614_5630 = G__5666;
chunk__5615_5631 = G__5667;
count__5616_5632 = G__5668;
i__5617_5633 = G__5669;
continue;
}
} else
{var vec__5624_5670 = cljs.core.first.call(null,seq__5614_5664__$1);
var k_5671 = cljs.core.nth.call(null,vec__5624_5670,0,null);
var v_5672 = cljs.core.nth.call(null,vec__5624_5670,1,null);
var G__5625_5673 = k_5671;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__5625_5673))
{var seq__5626_5674 = cljs.core.seq.call(null,v_5672);
var chunk__5627_5675 = null;
var count__5628_5676 = 0;
var i__5629_5677 = 0;
while(true){
if((i__5629_5677 < count__5628_5676))
{var c_5678 = cljs.core._nth.call(null,chunk__5627_5675,i__5629_5677);
dommy.attrs.add_class_BANG_.call(null,n,c_5678);
{
var G__5679 = seq__5626_5674;
var G__5680 = chunk__5627_5675;
var G__5681 = count__5628_5676;
var G__5682 = (i__5629_5677 + 1);
seq__5626_5674 = G__5679;
chunk__5627_5675 = G__5680;
count__5628_5676 = G__5681;
i__5629_5677 = G__5682;
continue;
}
} else
{var temp__4092__auto___5683__$1 = cljs.core.seq.call(null,seq__5626_5674);
if(temp__4092__auto___5683__$1)
{var seq__5626_5684__$1 = temp__4092__auto___5683__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5626_5684__$1))
{var c__3038__auto___5685 = cljs.core.chunk_first.call(null,seq__5626_5684__$1);
{
var G__5686 = cljs.core.chunk_rest.call(null,seq__5626_5684__$1);
var G__5687 = c__3038__auto___5685;
var G__5688 = cljs.core.count.call(null,c__3038__auto___5685);
var G__5689 = 0;
seq__5626_5674 = G__5686;
chunk__5627_5675 = G__5687;
count__5628_5676 = G__5688;
i__5629_5677 = G__5689;
continue;
}
} else
{var c_5690 = cljs.core.first.call(null,seq__5626_5684__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_5690);
{
var G__5691 = cljs.core.next.call(null,seq__5626_5684__$1);
var G__5692 = null;
var G__5693 = 0;
var G__5694 = 0;
seq__5626_5674 = G__5691;
chunk__5627_5675 = G__5692;
count__5628_5676 = G__5693;
i__5629_5677 = G__5694;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__5625_5673))
{dommy.attrs.add_class_BANG_.call(null,n,v_5672);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_5671,v_5672);
} else
{}
}
}
{
var G__5695 = cljs.core.next.call(null,seq__5614_5664__$1);
var G__5696 = null;
var G__5697 = 0;
var G__5698 = 0;
seq__5614_5630 = G__5695;
chunk__5615_5631 = G__5696;
count__5616_5632 = G__5697;
i__5617_5633 = G__5698;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){
if(cljs.core.keyword_QMARK_.call(null,this$))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return dommy.template.compound_element.call(null,this$);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
}catch (e5699){if((e5699 instanceof ReferenceError))
{var __5700 = e5699;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if("\uFDD0:else")
{throw e5699;
} else
{}
}
}dommy.template.node = (function node(data){
if((function (){var G__5702 = data;
if(G__5702)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5702.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5702.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5702);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5702);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
