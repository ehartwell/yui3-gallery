YUI.add("gallery-async-pause",function(a){(function(c){var d=c.Do.Prevent,b;b=c.extend(function(e){b.superclass.constructor.call(this,e);},c.Plugin.Base,{initializer:function(){var e=this;if(e.get("host").get("mode")!=="queue"){return;}e.beforeHostMethod("_runQueue",function(){if(e.get("paused")){e._set("_args",arguments);return new d("paused");}return null;});},pause:function(){this._set("paused",true);return this;},resume:function(){var j,f,i=this,e=this.get("_args"),h=this.get("host"),k=h._runQueue,g=function(l){i._setAttrs({paused:false,_args:null,_resumed:false});k.apply(h,l);};if(!i.get("paused")||i.get("_resumed")){return i;}if(!h.get("started")||h.get("completed")){i._set("paused",false);return i;}if(e){g(e);return i;}i._set("resumed",true);j=i.once("_argsChange",function(l){f.detach();g(l.newVal);});f=h.on("complete",function(){j.detach();});return i;}},{ATTRS:{paused:{readonly:true,value:false},_args:{readOnly:true},_resumed:{readOnly:true}},NAME:"async-pause",NS:"pause"});c.Plugin.AsyncPause=b;}(a));},"gallery-2012.01.11-21-03",{requires:["gallery-async","plugin"],skinnable:false});