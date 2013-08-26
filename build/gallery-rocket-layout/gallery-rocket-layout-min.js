YUI.add("gallery-rocket-layout",function(e,t){"use strict";var n=e.Base.create("rocketLayout",e.RView,[e.REventBroker],{regionManager:null,_firstRender:!1,initializer:function(e){e||(e={}),this._firstRender=!0;var t=e.regions||this.regions;t&&this._initializeRegions(t)},destructor:function(){this.regionManager.destroy()},renderer:function(){this._firstRender?this._firstRender=!1:this.get("destroyed")?this._initializeRegions(this.get("regions")):this.regionManager.resetRegions();var t=Array.prototype.slice.apply(arguments);return e.RView.prototype.renderer.apply(this,t)},bindUI:function(){e.RView.prototype.bindUI.apply(this)},_initializeRegions:function(e){this._initRegionManager(),this.addRegions(e)},_initRegionManager:function(){this.regionManager=new e.RRegionManager,this.listenTo(this.regionManager,"add",function(e){this[e.name]=e.region,this.fire("regionAdd",{name:e.name,region:e.region})}),this.listenTo(this.regionManager,"remove",function(e){delete this[e.name],this.fire("regionRemove",{name:e.name,region:e.region})})},addRegion:function(e,t){var n=this.regionManager.addRegion(e,t);return this[e]=n,n},addRegions:function(t){var n=this.regionManager.addRegions(t);return e.Object.each(n,function(e,t){this[t]=e}),n},removeRegion:function(e){return this.regionManager.removeRegion(e)}},{ATTRS:{regions:{value:null}}});e.RLayout=n},"gallery-2013.08.22-21-03",{requires:["gallery-rocket-view","gallery-rocket-region-manager"]});
