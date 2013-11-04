goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){
var and__3941__auto__ = (function (){var or__3943__auto__ = (idx === 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();
if(cljs.core.truth_(and__3941__auto__))
{var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len))
{var or__3943__auto__ = (stop === total_len);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt(stop));
}
} else
{return null;
}
} else
{return and__3941__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){
var start_from = 0;
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__5703 = (i + class$.length);
start_from = G__5703;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;
return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;
var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;
return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));
if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___5728 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___5728))
{var class_list_5729 = temp__4090__auto___5728;
var seq__5716_5730 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__5717_5731 = null;
var count__5718_5732 = 0;
var i__5719_5733 = 0;
while(true){
if((i__5719_5733 < count__5718_5732))
{var class_5734 = cljs.core._nth.call(null,chunk__5717_5731,i__5719_5733);
class_list_5729.add(class_5734);
{
var G__5735 = seq__5716_5730;
var G__5736 = chunk__5717_5731;
var G__5737 = count__5718_5732;
var G__5738 = (i__5719_5733 + 1);
seq__5716_5730 = G__5735;
chunk__5717_5731 = G__5736;
count__5718_5732 = G__5737;
i__5719_5733 = G__5738;
continue;
}
} else
{var temp__4092__auto___5739 = cljs.core.seq.call(null,seq__5716_5730);
if(temp__4092__auto___5739)
{var seq__5716_5740__$1 = temp__4092__auto___5739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5716_5740__$1))
{var c__3038__auto___5741 = cljs.core.chunk_first.call(null,seq__5716_5740__$1);
{
var G__5742 = cljs.core.chunk_rest.call(null,seq__5716_5740__$1);
var G__5743 = c__3038__auto___5741;
var G__5744 = cljs.core.count.call(null,c__3038__auto___5741);
var G__5745 = 0;
seq__5716_5730 = G__5742;
chunk__5717_5731 = G__5743;
count__5718_5732 = G__5744;
i__5719_5733 = G__5745;
continue;
}
} else
{var class_5746 = cljs.core.first.call(null,seq__5716_5740__$1);
class_list_5729.add(class_5746);
{
var G__5747 = cljs.core.next.call(null,seq__5716_5740__$1);
var G__5748 = null;
var G__5749 = 0;
var G__5750 = 0;
seq__5716_5730 = G__5747;
chunk__5717_5731 = G__5748;
count__5718_5732 = G__5749;
i__5719_5733 = G__5750;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_5751 = elem__$1.className;
var seq__5720_5752 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__5721_5753 = null;
var count__5722_5754 = 0;
var i__5723_5755 = 0;
while(true){
if((i__5723_5755 < count__5722_5754))
{var class_5756 = cljs.core._nth.call(null,chunk__5721_5753,i__5723_5755);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_5751,class_5756)))
{} else
{elem__$1.className = (((class_name_5751 === ""))?class_5756:[cljs.core.str(class_name_5751),cljs.core.str(" "),cljs.core.str(class_5756)].join(''));
}
{
var G__5757 = seq__5720_5752;
var G__5758 = chunk__5721_5753;
var G__5759 = count__5722_5754;
var G__5760 = (i__5723_5755 + 1);
seq__5720_5752 = G__5757;
chunk__5721_5753 = G__5758;
count__5722_5754 = G__5759;
i__5723_5755 = G__5760;
continue;
}
} else
{var temp__4092__auto___5761 = cljs.core.seq.call(null,seq__5720_5752);
if(temp__4092__auto___5761)
{var seq__5720_5762__$1 = temp__4092__auto___5761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5720_5762__$1))
{var c__3038__auto___5763 = cljs.core.chunk_first.call(null,seq__5720_5762__$1);
{
var G__5764 = cljs.core.chunk_rest.call(null,seq__5720_5762__$1);
var G__5765 = c__3038__auto___5763;
var G__5766 = cljs.core.count.call(null,c__3038__auto___5763);
var G__5767 = 0;
seq__5720_5752 = G__5764;
chunk__5721_5753 = G__5765;
count__5722_5754 = G__5766;
i__5723_5755 = G__5767;
continue;
}
} else
{var class_5768 = cljs.core.first.call(null,seq__5720_5762__$1);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_5751,class_5768)))
{} else
{elem__$1.className = (((class_name_5751 === ""))?class_5768:[cljs.core.str(class_name_5751),cljs.core.str(" "),cljs.core.str(class_5768)].join(''));
}
{
var G__5769 = cljs.core.next.call(null,seq__5720_5762__$1);
var G__5770 = null;
var G__5771 = 0;
var G__5772 = 0;
seq__5720_5752 = G__5769;
chunk__5721_5753 = G__5770;
count__5722_5754 = G__5771;
i__5723_5755 = G__5772;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__5773__delegate = function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__5724_5774 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__5725_5775 = null;
var count__5726_5776 = 0;
var i__5727_5777 = 0;
while(true){
if((i__5727_5777 < count__5726_5776))
{var c_5778 = cljs.core._nth.call(null,chunk__5725_5775,i__5727_5777);
add_class_BANG_.call(null,elem__$1,c_5778);
{
var G__5779 = seq__5724_5774;
var G__5780 = chunk__5725_5775;
var G__5781 = count__5726_5776;
var G__5782 = (i__5727_5777 + 1);
seq__5724_5774 = G__5779;
chunk__5725_5775 = G__5780;
count__5726_5776 = G__5781;
i__5727_5777 = G__5782;
continue;
}
} else
{var temp__4092__auto___5783 = cljs.core.seq.call(null,seq__5724_5774);
if(temp__4092__auto___5783)
{var seq__5724_5784__$1 = temp__4092__auto___5783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5724_5784__$1))
{var c__3038__auto___5785 = cljs.core.chunk_first.call(null,seq__5724_5784__$1);
{
var G__5786 = cljs.core.chunk_rest.call(null,seq__5724_5784__$1);
var G__5787 = c__3038__auto___5785;
var G__5788 = cljs.core.count.call(null,c__3038__auto___5785);
var G__5789 = 0;
seq__5724_5774 = G__5786;
chunk__5725_5775 = G__5787;
count__5726_5776 = G__5788;
i__5727_5777 = G__5789;
continue;
}
} else
{var c_5790 = cljs.core.first.call(null,seq__5724_5784__$1);
add_class_BANG_.call(null,elem__$1,c_5790);
{
var G__5791 = cljs.core.next.call(null,seq__5724_5784__$1);
var G__5792 = null;
var G__5793 = 0;
var G__5794 = 0;
seq__5724_5774 = G__5791;
chunk__5725_5775 = G__5792;
count__5726_5776 = G__5793;
i__5727_5777 = G__5794;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__5773 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5773__delegate.call(this, elem, classes, more_classes);
};
G__5773.cljs$lang$maxFixedArity = 2;
G__5773.cljs$lang$applyTo = (function (arglist__5795){
var elem = cljs.core.first(arglist__5795);
arglist__5795 = cljs.core.next(arglist__5795);
var classes = cljs.core.first(arglist__5795);
var more_classes = cljs.core.rest(arglist__5795);
return G__5773__delegate(elem, classes, more_classes);
});
G__5773.cljs$core$IFn$_invoke$arity$variadic = G__5773__delegate;
return G__5773;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;
{
var G__5796 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__5796;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto___5805 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___5805))
{var class_list_5806 = temp__4090__auto___5805;
class_list_5806.remove(class$__$1);
} else
{var class_name_5807 = elem__$1.className;
var new_class_name_5808 = dommy.attrs.remove_class_str.call(null,class_name_5807,class$__$1);
if((class_name_5807 === new_class_name_5808))
{} else
{elem__$1.className = new_class_name_5808;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__5809__delegate = function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__5801 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__5802 = null;
var count__5803 = 0;
var i__5804 = 0;
while(true){
if((i__5804 < count__5803))
{var c = cljs.core._nth.call(null,chunk__5802,i__5804);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__5810 = seq__5801;
var G__5811 = chunk__5802;
var G__5812 = count__5803;
var G__5813 = (i__5804 + 1);
seq__5801 = G__5810;
chunk__5802 = G__5811;
count__5803 = G__5812;
i__5804 = G__5813;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5801);
if(temp__4092__auto__)
{var seq__5801__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5801__$1))
{var c__3038__auto__ = cljs.core.chunk_first.call(null,seq__5801__$1);
{
var G__5814 = cljs.core.chunk_rest.call(null,seq__5801__$1);
var G__5815 = c__3038__auto__;
var G__5816 = cljs.core.count.call(null,c__3038__auto__);
var G__5817 = 0;
seq__5801 = G__5814;
chunk__5802 = G__5815;
count__5803 = G__5816;
i__5804 = G__5817;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__5801__$1);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__5818 = cljs.core.next.call(null,seq__5801__$1);
var G__5819 = null;
var G__5820 = 0;
var G__5821 = 0;
seq__5801 = G__5818;
chunk__5802 = G__5819;
count__5803 = G__5820;
i__5804 = G__5821;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__5809 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5809__delegate.call(this, elem, class$, classes);
};
G__5809.cljs$lang$maxFixedArity = 2;
G__5809.cljs$lang$applyTo = (function (arglist__5822){
var elem = cljs.core.first(arglist__5822);
arglist__5822 = cljs.core.next(arglist__5822);
var class$ = cljs.core.first(arglist__5822);
var classes = cljs.core.rest(arglist__5822);
return G__5809__delegate(elem, class$, classes);
});
G__5809.cljs$core$IFn$_invoke$arity$variadic = G__5809__delegate;
return G__5809;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var temp__4090__auto___5823 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___5823))
{var class_list_5824 = temp__4090__auto___5823;
class_list_5824.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__$1,class$,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__5827){
var vec__5828 = p__5827;
var k = cljs.core.nth.call(null,vec__5828,0,null);
var v = cljs.core.nth.call(null,vec__5828,1,null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var style = elem__$1.style;
var seq__5835_5841 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__5836_5842 = null;
var count__5837_5843 = 0;
var i__5838_5844 = 0;
while(true){
if((i__5838_5844 < count__5837_5843))
{var vec__5839_5845 = cljs.core._nth.call(null,chunk__5836_5842,i__5838_5844);
var k_5846 = cljs.core.nth.call(null,vec__5839_5845,0,null);
var v_5847 = cljs.core.nth.call(null,vec__5839_5845,1,null);
(style[cljs.core.name.call(null,k_5846)] = v_5847);
{
var G__5848 = seq__5835_5841;
var G__5849 = chunk__5836_5842;
var G__5850 = count__5837_5843;
var G__5851 = (i__5838_5844 + 1);
seq__5835_5841 = G__5848;
chunk__5836_5842 = G__5849;
count__5837_5843 = G__5850;
i__5838_5844 = G__5851;
continue;
}
} else
{var temp__4092__auto___5852 = cljs.core.seq.call(null,seq__5835_5841);
if(temp__4092__auto___5852)
{var seq__5835_5853__$1 = temp__4092__auto___5852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5835_5853__$1))
{var c__3038__auto___5854 = cljs.core.chunk_first.call(null,seq__5835_5853__$1);
{
var G__5855 = cljs.core.chunk_rest.call(null,seq__5835_5853__$1);
var G__5856 = c__3038__auto___5854;
var G__5857 = cljs.core.count.call(null,c__3038__auto___5854);
var G__5858 = 0;
seq__5835_5841 = G__5855;
chunk__5836_5842 = G__5856;
count__5837_5843 = G__5857;
i__5838_5844 = G__5858;
continue;
}
} else
{var vec__5840_5859 = cljs.core.first.call(null,seq__5835_5853__$1);
var k_5860 = cljs.core.nth.call(null,vec__5840_5859,0,null);
var v_5861 = cljs.core.nth.call(null,vec__5840_5859,1,null);
(style[cljs.core.name.call(null,k_5860)] = v_5861);
{
var G__5862 = cljs.core.next.call(null,seq__5835_5853__$1);
var G__5863 = null;
var G__5864 = 0;
var G__5865 = 0;
seq__5835_5841 = G__5862;
chunk__5836_5842 = G__5863;
count__5837_5843 = G__5864;
i__5838_5844 = G__5865;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this, elem, kvs);
};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__5866){
var elem = cljs.core.first(arglist__5866);
var kvs = cljs.core.rest(arglist__5866);
return set_style_BANG___delegate(elem, kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){
if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__5873_5879 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__5874_5880 = null;
var count__5875_5881 = 0;
var i__5876_5882 = 0;
while(true){
if((i__5876_5882 < count__5875_5881))
{var vec__5877_5883 = cljs.core._nth.call(null,chunk__5874_5880,i__5876_5882);
var k_5884 = cljs.core.nth.call(null,vec__5877_5883,0,null);
var v_5885 = cljs.core.nth.call(null,vec__5877_5883,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_5884,[cljs.core.str(v_5885),cljs.core.str("px")].join(''));
{
var G__5886 = seq__5873_5879;
var G__5887 = chunk__5874_5880;
var G__5888 = count__5875_5881;
var G__5889 = (i__5876_5882 + 1);
seq__5873_5879 = G__5886;
chunk__5874_5880 = G__5887;
count__5875_5881 = G__5888;
i__5876_5882 = G__5889;
continue;
}
} else
{var temp__4092__auto___5890 = cljs.core.seq.call(null,seq__5873_5879);
if(temp__4092__auto___5890)
{var seq__5873_5891__$1 = temp__4092__auto___5890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5873_5891__$1))
{var c__3038__auto___5892 = cljs.core.chunk_first.call(null,seq__5873_5891__$1);
{
var G__5893 = cljs.core.chunk_rest.call(null,seq__5873_5891__$1);
var G__5894 = c__3038__auto___5892;
var G__5895 = cljs.core.count.call(null,c__3038__auto___5892);
var G__5896 = 0;
seq__5873_5879 = G__5893;
chunk__5874_5880 = G__5894;
count__5875_5881 = G__5895;
i__5876_5882 = G__5896;
continue;
}
} else
{var vec__5878_5897 = cljs.core.first.call(null,seq__5873_5891__$1);
var k_5898 = cljs.core.nth.call(null,vec__5878_5897,0,null);
var v_5899 = cljs.core.nth.call(null,vec__5878_5897,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_5898,[cljs.core.str(v_5899),cljs.core.str("px")].join(''));
{
var G__5900 = cljs.core.next.call(null,seq__5873_5891__$1);
var G__5901 = null;
var G__5902 = 0;
var G__5903 = 0;
seq__5873_5879 = G__5900;
chunk__5874_5880 = G__5901;
count__5875_5881 = G__5902;
i__5876_5882 = G__5903;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this, elem, kvs);
};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__5904){
var elem = cljs.core.first(arglist__5904);
var kvs = cljs.core.rest(arglist__5904);
return set_px_BANG___delegate(elem, kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){
var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__5913 = dommy.template.__GT_node_like.call(null,elem);
(G__5913[cljs.core.name.call(null,k)] = v);
return G__5913;
} else
{var G__5914 = dommy.template.__GT_node_like.call(null,elem);
G__5914.setAttribute(cljs.core.name.call(null,k),(((k === "\uFDD0:style"))?dommy.attrs.style_str.call(null,v):v));
return G__5914;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__5921__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__5915_5922 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));
var chunk__5916_5923 = null;
var count__5917_5924 = 0;
var i__5918_5925 = 0;
while(true){
if((i__5918_5925 < count__5917_5924))
{var vec__5919_5926 = cljs.core._nth.call(null,chunk__5916_5923,i__5918_5925);
var k_5927__$1 = cljs.core.nth.call(null,vec__5919_5926,0,null);
var v_5928__$1 = cljs.core.nth.call(null,vec__5919_5926,1,null);
set_attr_BANG_.call(null,elem__$1,k_5927__$1,v_5928__$1);
{
var G__5929 = seq__5915_5922;
var G__5930 = chunk__5916_5923;
var G__5931 = count__5917_5924;
var G__5932 = (i__5918_5925 + 1);
seq__5915_5922 = G__5929;
chunk__5916_5923 = G__5930;
count__5917_5924 = G__5931;
i__5918_5925 = G__5932;
continue;
}
} else
{var temp__4092__auto___5933 = cljs.core.seq.call(null,seq__5915_5922);
if(temp__4092__auto___5933)
{var seq__5915_5934__$1 = temp__4092__auto___5933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5915_5934__$1))
{var c__3038__auto___5935 = cljs.core.chunk_first.call(null,seq__5915_5934__$1);
{
var G__5936 = cljs.core.chunk_rest.call(null,seq__5915_5934__$1);
var G__5937 = c__3038__auto___5935;
var G__5938 = cljs.core.count.call(null,c__3038__auto___5935);
var G__5939 = 0;
seq__5915_5922 = G__5936;
chunk__5916_5923 = G__5937;
count__5917_5924 = G__5938;
i__5918_5925 = G__5939;
continue;
}
} else
{var vec__5920_5940 = cljs.core.first.call(null,seq__5915_5934__$1);
var k_5941__$1 = cljs.core.nth.call(null,vec__5920_5940,0,null);
var v_5942__$1 = cljs.core.nth.call(null,vec__5920_5940,1,null);
set_attr_BANG_.call(null,elem__$1,k_5941__$1,v_5942__$1);
{
var G__5943 = cljs.core.next.call(null,seq__5915_5934__$1);
var G__5944 = null;
var G__5945 = 0;
var G__5946 = 0;
seq__5915_5922 = G__5943;
chunk__5916_5923 = G__5944;
count__5917_5924 = G__5945;
i__5918_5925 = G__5946;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__5921 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5921__delegate.call(this, elem, k, v, kvs);
};
G__5921.cljs$lang$maxFixedArity = 3;
G__5921.cljs$lang$applyTo = (function (arglist__5947){
var elem = cljs.core.first(arglist__5947);
arglist__5947 = cljs.core.next(arglist__5947);
var k = cljs.core.first(arglist__5947);
arglist__5947 = cljs.core.next(arglist__5947);
var v = cljs.core.first(arglist__5947);
var kvs = cljs.core.rest(arglist__5947);
return G__5921__delegate(elem, k, v, kvs);
});
G__5921.cljs$core$IFn$_invoke$arity$variadic = G__5921__delegate;
return G__5921;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray(["\uFDD0:class",null,"\uFDD0:classes",null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__5956__delegate = function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__5952_5957 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__5953_5958 = null;
var count__5954_5959 = 0;
var i__5955_5960 = 0;
while(true){
if((i__5955_5960 < count__5954_5959))
{var k_5961__$1 = cljs.core._nth.call(null,chunk__5953_5958,i__5955_5960);
remove_attr_BANG_.call(null,elem__$1,k_5961__$1);
{
var G__5962 = seq__5952_5957;
var G__5963 = chunk__5953_5958;
var G__5964 = count__5954_5959;
var G__5965 = (i__5955_5960 + 1);
seq__5952_5957 = G__5962;
chunk__5953_5958 = G__5963;
count__5954_5959 = G__5964;
i__5955_5960 = G__5965;
continue;
}
} else
{var temp__4092__auto___5966 = cljs.core.seq.call(null,seq__5952_5957);
if(temp__4092__auto___5966)
{var seq__5952_5967__$1 = temp__4092__auto___5966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5952_5967__$1))
{var c__3038__auto___5968 = cljs.core.chunk_first.call(null,seq__5952_5967__$1);
{
var G__5969 = cljs.core.chunk_rest.call(null,seq__5952_5967__$1);
var G__5970 = c__3038__auto___5968;
var G__5971 = cljs.core.count.call(null,c__3038__auto___5968);
var G__5972 = 0;
seq__5952_5957 = G__5969;
chunk__5953_5958 = G__5970;
count__5954_5959 = G__5971;
i__5955_5960 = G__5972;
continue;
}
} else
{var k_5973__$1 = cljs.core.first.call(null,seq__5952_5967__$1);
remove_attr_BANG_.call(null,elem__$1,k_5973__$1);
{
var G__5974 = cljs.core.next.call(null,seq__5952_5967__$1);
var G__5975 = null;
var G__5976 = 0;
var G__5977 = 0;
seq__5952_5957 = G__5974;
chunk__5953_5958 = G__5975;
count__5954_5959 = G__5976;
i__5955_5960 = G__5977;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__5956 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5956__delegate.call(this, elem, k, ks);
};
G__5956.cljs$lang$maxFixedArity = 2;
G__5956.cljs$lang$applyTo = (function (arglist__5978){
var elem = cljs.core.first(arglist__5978);
arglist__5978 = cljs.core.next(arglist__5978);
var k = cljs.core.first(arglist__5978);
var ks = cljs.core.rest(arglist__5978);
return G__5956__delegate(elem, k, ks);
});
G__5956.cljs$core$IFn$_invoke$arity$variadic = G__5956__delegate;
return G__5956;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){
if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
var G__5980 = dommy.template.__GT_node_like.call(null,elem);
G__5980.style.display = ((show_QMARK_)?"":"none");
return G__5980;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){
var G__5982 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__5982,false);
return G__5982;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){
var G__5984 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__5984,true);
return G__5984;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){
return cljs.core.js__GT_clj.call(null,(function (){var G__5986 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
(G__5986["constructor"] = Object);
return G__5986;
})(),"\uFDD0:keywordize-keys",true);
});
