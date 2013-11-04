goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.fn_handler = (function fn_handler(f){
if((void 0 === cljs.core.async.t5059))
{goog.provide('cljs.core.async.t5059');

/**
* @constructor
*/
cljs.core.async.t5059 = (function (f,fn_handler,meta5060){
this.f = f;
this.fn_handler = fn_handler;
this.meta5060 = meta5060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t5059.cljs$lang$type = true;
cljs.core.async.t5059.cljs$lang$ctorStr = "cljs.core.async/t5059";
cljs.core.async.t5059.cljs$lang$ctorPrWriter = (function (this__2848__auto__,writer__2849__auto__,opt__2850__auto__){
return cljs.core._write.call(null,writer__2849__auto__,"cljs.core.async/t5059");
});
cljs.core.async.t5059.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t5059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
return true;
});
cljs.core.async.t5059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
return self__.f;
});
cljs.core.async.t5059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5061){
var self__ = this;
return self__.meta5060;
});
cljs.core.async.t5059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5061,meta5060__$1){
var self__ = this;
return (new cljs.core.async.t5059(self__.f,self__.fn_handler,meta5060__$1));
});
cljs.core.async.__GT_t5059 = (function __GT_t5059(f__$1,fn_handler__$1,meta5060){
return (new cljs.core.async.t5059(f__$1,fn_handler__$1,meta5060));
});
} else
{}
return (new cljs.core.async.t5059(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n === 'number')?cljs.core.async.buffer.call(null,buf_or_n):buf_or_n));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret))
{var val_5062 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_5062);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_5062);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){
return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){
return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));
if(cljs.core.truth_((function (){var and__3941__auto__ = ret;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__3085__auto___5063 = n;
var x_5064 = 0;
while(true){
if((x_5064 < n__3085__auto___5063))
{(a[x_5064] = 0);
{
var G__5065 = (x_5064 + 1);
x_5064 = G__5065;
continue;
}
} else
{}
break;
}
var i = 1;
while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));
(a[j] = i);
{
var G__5066 = (i + 1);
i = G__5066;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((void 0 === cljs.core.async.t5070))
{goog.provide('cljs.core.async.t5070');

/**
* @constructor
*/
cljs.core.async.t5070 = (function (flag,alt_flag,meta5071){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta5071 = meta5071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t5070.cljs$lang$type = true;
cljs.core.async.t5070.cljs$lang$ctorStr = "cljs.core.async/t5070";
cljs.core.async.t5070.cljs$lang$ctorPrWriter = (function (this__2848__auto__,writer__2849__auto__,opt__2850__auto__){
return cljs.core._write.call(null,writer__2849__auto__,"cljs.core.async/t5070");
});
cljs.core.async.t5070.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t5070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t5070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t5070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5072){
var self__ = this;
return self__.meta5071;
});
cljs.core.async.t5070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5072,meta5071__$1){
var self__ = this;
return (new cljs.core.async.t5070(self__.flag,self__.alt_flag,meta5071__$1));
});
cljs.core.async.__GT_t5070 = (function __GT_t5070(flag__$1,alt_flag__$1,meta5071){
return (new cljs.core.async.t5070(flag__$1,alt_flag__$1,meta5071));
});
} else
{}
return (new cljs.core.async.t5070(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if((void 0 === cljs.core.async.t5077))
{goog.provide('cljs.core.async.t5077');

/**
* @constructor
*/
cljs.core.async.t5077 = (function (cb,flag,alt_handler,meta5078){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta5078 = meta5078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t5077.cljs$lang$type = true;
cljs.core.async.t5077.cljs$lang$ctorStr = "cljs.core.async/t5077";
cljs.core.async.t5077.cljs$lang$ctorPrWriter = (function (this__2848__auto__,writer__2849__auto__,opt__2850__auto__){
return cljs.core._write.call(null,writer__2849__auto__,"cljs.core.async/t5077");
});
cljs.core.async.t5077.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t5077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t5077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t5077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5079){
var self__ = this;
return self__.meta5078;
});
cljs.core.async.t5077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5079,meta5078__$1){
var self__ = this;
return (new cljs.core.async.t5077(self__.cb,self__.flag,self__.alt_handler,meta5078__$1));
});
cljs.core.async.__GT_t5077 = (function __GT_t5077(cb__$1,flag__$1,alt_handler__$1,meta5078){
return (new cljs.core.async.t5077(cb__$1,flag__$1,alt_handler__$1,meta5078));
});
} else
{}
return (new cljs.core.async.t5077(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = (new cljs.core.Keyword("\uFDD0:priority")).call(null,opts);
var ret = (function (){var i = 0;
while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){
return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5073_SHARP_){
return fret.call(null,cljs.core.PersistentVector.fromArray([p1__5073_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3943__auto__ = wport;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__5080 = (i + 1);
i = G__5080;
continue;
}
}
} else
{return null;
}
break;
}
})();
var or__3943__auto__ = ret;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,"\uFDD0:default"))
{var temp__4092__auto__ = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;
return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0:default")).call(null,opts),"\uFDD0:default"], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a set of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__5081){
var map__5083 = p__5081;
var map__5083__$1 = ((cljs.core.seq_QMARK_.call(null,map__5083))?cljs.core.apply.call(null,cljs.core.hash_map,map__5083):map__5083);
var opts = map__5083__$1;
if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__5081 = null;
if (arguments.length > 1) {
  p__5081 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this, ports, p__5081);
};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__5084){
var ports = cljs.core.first(arglist__5084);
var p__5081 = cljs.core.rest(arglist__5084);
return alts_BANG___delegate(ports, p__5081);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
