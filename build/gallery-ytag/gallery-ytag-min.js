YUI.add("gallery-ytag",function(d){var b=d.namespace("YTag");function e(f){e.superclass.constructor.apply(this,arguments);}e.NAME="ytagPlugin";e.NS="ytag";e.ATTRS={};e._buildCfg={custom:{NS:function(h,g,f){g.NS=e.NS;}}};d.extend(e,d.Plugin.Base,{getData:function(){return d.merge({},this.get("host").getDOMNode().dataset);}});function a(f,g){d.on("inserted",function(h){h.target.plug(g);},f);}function c(f,g){if(g){a(f,g);}else{d.use("ytag-"+f,function(h){a(f,h.namespace("YTag.Tags")[f]);});}}b.register=c;b.Plugin=e;},"gallery-2012.06.20-20-07",{requires:["node","base","plugin","gallery-event-inserted"],skinnable:false});