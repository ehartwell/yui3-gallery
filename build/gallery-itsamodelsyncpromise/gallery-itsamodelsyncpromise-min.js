<<<<<<< HEAD
YUI.add("gallery-itsamodelsyncpromise",function(e,t){"use strict";function a(){}var n=e.Array,r="error",i="submit",s="load",o="save",u=function(t){if(typeof t=="string")try{return e.JSON.parse(t)}catch(n){return this.fire(r,{error:n,response:t,src:"parse"}),{}}return t||{}};e.mix(a.prototype,{_syncTimeoutPromise:function(t,n){var r=this,i;return i=r.syncPromise(t,n),i instanceof e.Promise||(i=new e.Promise(function(e,n){var r="syncPromise is rejected --> "+t+" not defined as a Promise inside syncPromise()";n(new Error(r))})),i},submitPromise:function(t){var n=this;return t=t||{},new e.Promise(function(e,r){var s,o,u={options:t};s=function(e){u.error=e,u.src="Model.submitPromise()",n._lazyFireErrorEvent(u),r(new Error(e))},o=function(t){n._submitEvent||(n._submitEvent=n.publish(i,{preventable:!1})),u.response=t,n.fire(i,u),e(t)},n.syncPromise?n._syncTimeoutPromise("submit",t).then(o,s):n.sync("submit",t,function(e,t){e?s(e):o(t)})})},loadPromise:function(t){var n=this;return t=t||{},new e.Promise(function(e,r){var i,o,a={options:t};i=function(e){a.error=e,a.src="Model.loadPromise()",n._lazyFireErrorEvent(a),r(new Error(e))},o=function(r){var i;n._loadEvent||(n._loadEvent=n.publish(s,{preventable:!1})),a.response=r,i=u(r),i.responseText&&(i=i.responseText),a.parsed=i,n.setAttrs(i,t),n.changed={},n.fire(s,a),e(r)},n.syncPromise?n._syncTimeoutPromise("read",t).then(o,i):n.sync("read",t,function(e,t){e?i(e):o(t)})})},savePromise:function(t){var n=this;return t=t||{},new e.Promise(function(e,r){var i,s,a,f={options:t};n._validate(n.toJSON(),function(l){l?(f.error=l,f.src="Model.savePromise() - validate",n._lazyFireErrorEvent(f),r(new Error(l))):(i=function(e){f.error=e,f.src="Model.savePromise()",n._lazyFireErrorEvent(f),r(new Error(e))},s=function(r){var i;n._saveEvent||(n._saveEvent=n.publish(o,{preventable:!1})),f.response=r,i=u(r),i.responseText&&(i=i.responseText),f.parsed=i,n.setAttrs(i,t),n.changed={},n.fire(o,f),e(r)},a=n.isNew()?"create":"update",n.syncPromise?n._syncTimeoutPromise(a,t).then(s,i):n.sync(a,t,function(e,t){e?i(e):s(t)}))})})},destroyPromise:function(t){var r=this;return t=t||{},(new e.Promise(function(e,i){var s,o,u;u=function(){n.each(r.lists.concat(),function(e){e.remove(r,t)})},t.remove||t["delete"]?(s=function(e){var n={error:e,src:"Model.destroyPromise()",options:t};r._lazyFireErrorEvent(n),i(new Error(e))},o=function(t){u(),e(t)},r.syncPromise?r._syncTimeoutPromise("delete",t).then(o,s):r.sync("delete",t,function(e,t){e?s(e):o(t)})):(u(),e())})).then(function(){e.Model.superclass.destroy.call(r)})},_lazyFireErrorEvent:function(e){var t=this;t._errorEvent||(t._errorEvent=t.publish(r,{broadcast:1})),t.fire(r,e)}},!0),e.ITSAModelSyncPromise=a,e.Base.mix(e.Model,[a])},"gallery-2013.08.15-00-45",{requires:["yui-base","base-base","base-build","node-base","json-parse","promise","model"]});
=======
YUI.add("gallery-itsamodelsyncpromise",function(e,t){"use strict";var n=e.Model,r=e.Lang,i=e.Object,s=e.Array,o="destroy",u="load",a="save",f="submit",l="error",c="delete",h="read",p=o+"ed",d="_pub_",v="romise",m="P"+v,g={load:!0,save:!0,submit:!0,destroy:!0},y="modelsync",b="gallery-itsa",w=b+y+"p"+v,E=function(t){if(typeof t=="string")try{return e.JSON.fullparse(t)}catch(n){return this.fire(l,{error:n,response:t,src:"parse"}),{}}return t||{}};n.prototype.addMessageTarget=function(t){var n=this;e.usePromise(b+"messagecontroller",b+"messageviewer",b+"panel",b+"viewmodel").then(function(){return e.ITSAMessageController.isReady()}).then(function(){t instanceof e.ITSAPanel&&(t=t._itsastatusbar),t||t instanceof e.ITSAViewModel&&(t=t._itsastatusbar),t instanceof e.ITSAMessageViewer&&(n._itsamessageListener&&n.removeMessageTarget(),n._itsamessageListener=n.on([u,f,a,o],function(r){var i=r.options,s=i.remove||i[c],u=r.type,a=u.split(":"),f=a[1]||a[0],l,h;if(f!==o||s)h=n._defSyncMessages,l=t.showStatus(r.syncmessage||h&&h[f]||e.Intl.get(w)[f],{source:y,busy:!0}),r.promise.then(function(){t.removeStatus(l)},function(){t.removeStatus(l)})}),n._itsamessagedestroylistener1=n.onceAfter(o,function(){n._itsamessageListener.detach()}),n._itsamessagedestroylistener2=t.once(o,function(){n._itsamessageListener.detach()}))})},n.prototype.defSyncOptions=function(){return new e.Promise(function(e){e({})})},s.each([u,o,a],function(e){n.prototype[e]=function(t,n){var r=this,i;return(i=r[e+m](t))&&n&&i.then(function(e){n(null,e)},function(e){n(e)}),r},n.prototype[e+m]=function(t){return this._createPromise(e,t)}}),n.prototype.removeMessageTarget=function(){var e=this;e._itsamessageListener&&e._itsamessageListener.detach(),e._itsamessagedestroylistener1&&e._itsamessagedestroylistener1.detach(),e._itsamessagedestroylistener2&&e._itsamessagedestroylistener2.detach(),e._itsamessageListener=null},n.prototype.setSyncMessage=function(e,t){var n=this;return n._defSyncMessages||(n._defSyncMessages={}),g[e]&&(n._defSyncMessages[e]=t),n},n.prototype._createPromise=function(t,n){var s=this,o,u,a,f;return o=new e.Promise(function(e,t){u=e,a=t}),f={promise:o,promiseResolve:u,promiseReject:a,response:"",parsed:{},options:e.merge(n)},r.isObject(n)&&i.each(n,function(e,t){f[t]=e}),s[d+t]||(s[d+t]=s._publishAsync(t,{defaultTargetOnly:!0,emitFacade:!0,broadcast:1,defaultFn:s["_defFn_"+t],preventedFn:s._prevDefFn})),s.fire(t,f),o},n.prototype._defFn_destroy=function(e){var t=this,n=e.promiseResolve,r=e.promiseReject,i=e.options,u=i.remove||i[c],a,f,l;return t.get(p)?r(new Error("Model is already destroyed")):(l=function(){t._baseDestroy(),s.each(t.lists.concat(),function(e){e.remove(t,i)})},u?(a=function(e){var n={error:e,src:o,options:i};t._lazyFireErrorEvent(n),r(new Error(e))},f=function(e){l(),n(e)},t.syncPromise?t._syncTimeoutPromise(c,i).then(f,a):t.sync(c,i,function(e,t){e?a(e):f(t)})):(l(),n())),e.promise},n.prototype._defFn_load=function(e){var t=this,n=e.options,r,i;return r=function(r){var i={options:n,error:r,src:u};t._lazyFireErrorEvent(i),e.promiseReject(new Error(r))},i=function(r){var i;e.response=r,i=E(r),i.responseText&&i.responseText&&(i=E(i.responseText)),e.parsed=i,t.setAttrs(i,n),t.changed={},e.promiseResolve(r)},t.syncPromise?t._syncTimeoutPromise(h,n).then(i,r):t.sync(h,n,function(e,t){e?r(e):i(t)}),e.promise},n.prototype._defFn_save=function(e){var t=this,n=t.isNew()?"create":"update",r=e.options,s=e.promiseReject,o,u,f,l={options:r,method:n};return t.isModified()?t._validate(t.toJSON(),function(c){c?(l.error=c,l.src=a,t._lazyFireErrorEvent(l),s(new Error(c))):(o=function(e){l.error=e,l.src=a,t._lazyFireErrorEvent(l),s(new Error(e))},u=function(n){var s;e.response=n,s=E(n),s.responseText&&(s=E(s.responseText)),i.keys(s).length>0&&(e.parsed=s,s.id===-1?t.destroy():t.setAttrs(s,(r.fromInternal=!0)&&r)),t.changed={},e.promiseResolve(n)},!t.toJSONUI||(f=t.getUnvalidatedUI())&&f.isEmpty()?t.syncPromise?t._syncTimeoutPromise(n,r).then(u,o):t.sync(n,r,function(e,t){e?o(e):u(t)}):(o(t._intl.unvalidated),t.fire("validationerror",{target:t,nodelist:f,src:a})))}):s(new Error("Model will not be saved: not modified")),e.promise},n.prototype._prevDefFn=function(e){e.promiseReject(new Error("preventDefaulted"))},n.prototype._publishAsync=function(t,n){var r=this,i=r.publish(t,n);return n&&n.broadcast===1&&r.addTarget(e),n&&n.broadcast===2&&r.addTarget(YUI),i._firing=new e.Promise(function(e){e()}),i.fire=function(t){var n=e.Array(arguments,0,!0),s,o;i._firing=i._firing.then(function(){s={id:i.id,next:i,silent:i.silent,stopped:0,prevented:0,bubbling:null,type:i.type,defaultTargetOnly:i.defaultTargetOnly},i.details=n;var e=i._subscribers,u=[],a,f,l;u.push.apply(u,t),a=i._createFacade(u),a.target=a.target||r;if(e)for(f=0,l=e.length;f<l;++f)try{e[f].fn.call(e[f].context,a)}catch(c){}return i.bubbles&&!i.stopped&&(r.bubble(i,n,null,s),a.prevented=Math.max(a.prevented,s.prevented)),a.prevented?i.preventedFn.call(r,a).then(null,function(e){return!1}):i.defaultFn.call(r,a).then(function(){e=i._afters;if(e)for(f=0,l=e.length;f<l;++f)try{e[f].fn.call(e[f].context,a)}catch(t){}if(s.afterQueue)while(o=s.afterQueue.last())o()}).then(null,function(e){return!1})},function(e){var t={error:e&&(e.message||e),src:"Model._publishAsync()"};r._lazyFireErrorEvent(t)})},i._fire=function(e){return i.fire(e[0])},i},n.prototype._lazyFireErrorEvent=function(e){var t=this;t._errorEvent||(t._errorEvent=t.publish(l,{broadcast:1})),t.fire(l,e)},n.prototype._syncTimeoutPromise=function(t,n){var r=this;return r.defSyncOptions().then(function(i){var s=r.syncPromise(t,e.merge(i,n));return s instanceof e.Promise?s:new e.Promise(function(e,n){var r="syncPromise is rejected --> "+t+" not defined as a Promise inside syncPromise()";n(new Error(r))})})}},"gallery-2014.01.28-00-45",{requires:["yui-base","intl","base-base","base-build","node-base","json-parse","promise","model","gallery-itsamodulesloadedpromise","gallery-itsautils"],lang:["ar","bg","bs","cs","da","de"
,"en","es","fa","fi","fr","he","hi","hr","hu","it","ja","nb","nl","pl","pt","ru","sk","sr","sv","uk","zh"]});
>>>>>>> upstream/master