<<<<<<< HEAD
YUI.add("gallery-itsacheckbox",function(e,t){var n=e.Lang,r=e.Array,i="yui3-itsacheckbox",s="readonly",o=i+"-"+s,u=i+"-parent",a=i+"-loading",f=i+"-rerender",l=i+"-hidden",c=i+"-created-checkbox",h="option",p=h+"wrapper",d=h+"container",v=h+"on",m=h+"btn",g=h+"off",y=e.UA.ie>0,b="boundingBox",w="string",E="width",S="height",x="offsetWidth",T="offsetHeight",N="borderRadius",C="paddingTop",k="paddingBottom",L="paddingLeft",A="paddingRight",O="marginLeft",M="valuechange",_="px",D="left",P="disabled",H="checked",B="Change",j="unselectable",F='<div class="',I="</div>",q='<input id="{id}" type="checkbox" class="'+c+'"{'+s+"}{"+H+"}{"+P+"}>",R="{htmlcheckbox}"+F+p+'">'+F+d+'"{'+j+"}>"+F+v+'">{'+v+"}"+I+F+g+'">{'+g+"}"+I+F+m+'">'+I+I+I,U=function(e){return parseInt(e,10)};e.ITSACheckbox=e.Base.create("itsacheckbox",e.Widget,[],{CONTENT_TEMPLATE:null,initializer:function(){var e=this,t=e.get(b);t.addClass(a),e.get(s)&&t.addClass(o),e._eventhandlers=[]},renderUI:function(){var t=this,n=t.get(b),r;r=t.get("srcNode"),r&&r.get("tagName")==="INPUT"&&r.getAttribute("type")==="checkbox"&&(t._src=e.one(r),r.addClass(l),n.insert(r,"before")),t._parentNode&&t._parentNode.addClass(u),t._setTemplate()},bindUI:function(){var t=this,n=t.get(b),r;t.dd=r=(new e.DD.Drag({node:t._containerNode,lock:t.get(P)||t.get(s)})).plug(e.Plugin.DDConstrained,{constrain:t._wrapperNode}),r.on("drag:end",function(e){var n=e.pageX-t.get(b).getX(),r=n>-t._changePosition,i=t.get(H);r!==i?t.set(H,r):t._goFinal(i)}),t._eventhandlers.push(t.after(H+B,function(e){var n=e.newVal;t._goFinal(n),t.fire(M,e),t._src&&(n?t._src.setAttribute(H,H):t._src.removeAttribute(H))})),t._eventhandlers.push(t.after([v+B,g+B],e.bind(t._setDimensions,t))),t._eventhandlers.push(t.after(P+B,function(n){var i=n.newVal,o=e.merge(n),u;t._forceCheckedVal=!0,u=t.get(H),t._forceCheckedVal=!1,r.set("lock",i||t.get(s)),t._goFinal(u,!0),i?(o.newVal=null,o.prevVal=u):(o.newVal=u,o.prevVal=null),t.fire(M,o),t._src&&(i?t._src.setAttribute(P,P):t._src.removeAttribute(P))})),t._eventhandlers.push(t.after(s+B,function(e){var i=e.newVal,u;t._forceCheckedVal=!0,u=t.get(H),t._forceCheckedVal=!1,n.toggleClass(o,i),r.set("lock",i||t.get(P)),t._goFinal(u,!0),t._src&&(i?t._src.setAttribute(s,s):t._src.removeAttribute(s))})),t._eventhandlers.push(t._containerNode.on("tap",function(){t.toggle()})),t._eventhandlers.push(e.on("keydown",function(e){if(t.get("focused")){var n=e.keyCode;e.preventDefault(),n===37||n===40?t.set(H,!1):n===39||n===38?t.set(H,!0):n===32&&t.toggle()}}))},check:function(){var e=this;return e.set(H,!0),e.getValue()},getValue:function(){return this.get(H)},syncUI:function(){var e=this;e._setDimensions()},toggle:function(){var e=this,t=e.get(H),n;return t!==null&&(e.set(H,!t),n=e.get(H)),n!==t},uncheck:function(){var e=this;return e.set(H,!1),e.getValue()},destructor:function(){var e=this,t=e.dd,n=e._createdSrc,r=e._src;t&&t.destroy(),e._clearEventhandlers(),n?n.destroy():r.removeClass(l),e._wrapperNode.remove(!0),e._parentNode&&e._parentNode.removeClass(u)},_clearEventhandlers:function(){r.each(this._eventhandlers,function(e){e.detach()})},_goFinal:function(e,t){var n=this;e?n._goRight(!0,t):n._goLeft(!0,t)},_goLeft:function(e,t){var n=this,r=n._containerNode;if(!n.get(P)&&!n.get(s)||t)e?n._moveAnimated(0):r.setStyle(D,"0")},_goRight:function(e,t){var n=this,r=n._containerNode;if(!n.get(P)&&!n.get(s)||t)e?n._moveAnimated(n._onPosition):r.setStyle(D,n._onPosition+_)},_moveAnimated:function(e){var t=this;t._containerNode.transition({easing:"ease-in",duration:t.get("duration"),left:e+_})},_setDimensions:function(){var e=this,t=e.get(b),n,r,i,s,o,u,a,l,c,h,p,d,m,y,w,M,P,B,j,F,I,q;n=e._optionBtnNode,r=e._optionOnNode,i=e._optionOffNode,M=e._wrapperNode,c=e._containerNode,t.addClass(f),e.get("rendered")&&(I=!0,r.set("text",e.get(v)),i.set("text",e.get(g))),c.setStyle(E,""),r.setStyle(E,""),i.setStyle(E,""),n.setStyle(E,""),c.setStyle(S,""),r.setStyle(S,""),i.setStyle(S,""),n.setStyle(S,""),r.setStyle(L,""),r.setStyle(A,""),r.setStyle(C,""),r.setStyle(k,""),i.setStyle(L,""),i.setStyle(A,""),i.setStyle(C,""),i.setStyle(k,""),h=r.get(T),p=i.get(T),u=Math.max(h,p),s=Math.floor(u/2),o=u-s,j=U(n.getStyle("borderTopWidth")),F=U(n.getStyle("borderBottomWidth")),a=u-j-F+_,n.setStyle(S,a),r.setStyle(C,U(r.getStyle(C))+_),r.setStyle(k,U(r.getStyle(k))+_),i.setStyle(C,U(i.getStyle(C))+_),i.setStyle(k,U(i.getStyle(k))+_),r.setStyle(S,u-U(r.getStyle(C))-U(r.getStyle(k))+_),i.setStyle(S,u-U(i.getStyle(C))-U(i.getStyle(k))+_),r.setStyle(A,U(r.getStyle(A))+s+_),i.setStyle(L,U(i.getStyle(L))+o+_),r.setStyle(L,U(r.getStyle(L))+_),i.setStyle(A,U(i.getStyle(A))+_),m=r.get(x),y=i.get(x),w=Math.max(m,y),d=m-U(r.getStyle(L))-U(r.getStyle(A)),r.setStyle(E,d+(w-m)+_),d=y-U(i.getStyle(L))-U(i.getStyle(A)),i.setStyle(E,d+(w-y)+_),n.setStyle(E,a),l=w-s,M.setStyle(E,3*w-s+_),c.setStyle(E,2*w+_),B=w+o+1,t.setStyle(E,B+_),n.setStyle(O,-s-w+_),wrapperLeftPos=s-w,M.setStyle(D,wrapperLeftPos+_),e._onPosition=w-s,e._changePosition=Math.round(-wrapperLeftPos/2),n.setStyle(N,s+_),q=s-1,r.setStyle(N,q+_+" 0 0 0"),i.setStyle(N,"0 "+q+_+" 0 0"),P=t.get(T),t.setStyle(N,Math.round(P/2)+_),e.get(H)?e._goRight(!1,!0):e._goLeft(!1,!0),t.removeClass(f),I&&e.fire("contentUpdate")},_setTemplate:function(){var e=this,t=e.get(b),r=e.get(v),i=e.get(g),o,u,a,f;e._src||(u=e._parentNode||t,o=u.get("id")+"_checkbox"),t.setHTML(n.sub(R,{htmlcheckbox:o?n.sub(q,{id:o,readonly:e.get(s)?" "+s+'="'+s+'"':"",checked:e.get(H)?" "+H+'="'+H+'"':"",disabled:e.get(P)?" "+P+'="'+P+'"':""}):"",optionon:r,optionoff:i,unselectable:y?" "+j+"=on":""})),o&&(e._createdSrc=e._src=t.one("#"+o)),e._wrapperNode=t.one("."+p),e._containerNode=t.one("."+d),e._optionOnNode=a=t.one("."+v),e._optionOffNode=f=a.next(),e._optionBtnNode=f.next()},_srcNodeValidCheckbox:function(e){return e.get("tagName")==="INPUT"&&e.getAttribute("type")==="checkbox"}},{ATTRS:{checked:{value:!1,validator:function(e){var t=this,n;return t.get("rendered")&&(n=t.get(P)||t.get
(s)),typeof e=="boolean"&&!n},getter:function(e){var t=this;return!t.get(P)||t._forceCheckedVal?e:null}},duration:{value:.15,validator:function(e){return typeof e=="number"}},optionon:{value:"I",validator:function(e){return typeof e===w}},optionoff:{value:"O",validator:function(e){return typeof e===w}},readonly:{value:!1,validator:function(e){return typeof e=="boolean"}}},HTML_PARSER:{checked:function(e){var t=e.getAttribute(H).toLowerCase()===H;return this._srcNodeValidCheckbox(e)&&t},readonly:function(e){var t=e.getAttribute(s).toLowerCase()===s;return this._srcNodeValidCheckbox(e)&&t},disabled:function(e){var t=e.getAttribute(P).toLowerCase()===P;return this._srcNodeValidCheckbox(e)&&t}}})},"gallery-2013.08.15-00-45",{requires:["yui-base","node-base","dom-screen","widget","base-build","dd-drag","dd-constrain","event-tap","transition"],skinnable:!0});
=======
YUI.add("gallery-itsacheckbox",function(e,t){var n=e.Lang,r=e.Array,i=e.Node,s="yui3-",o=s+"itsacheckbox",u="readonly",a=o+"-"+u,f="itsa-widget-parent",l=o+"-loading",c=o+"-rerender",h=o+"-hidden",p=o+"-created-checkbox",d="option",v=d+"wrapper",m=d+"container",g=d+"on",y=d+"btn",b=d+"off",w=e.UA.ie>0,E="boundingBox",S="boolean",x="string",T="width",N="height",C="offsetWidth",k="offsetHeight",L="borderRadius",A="paddingTop",O="paddingBottom",M="paddingLeft",_="paddingRight",D="marginLeft",P="valuechange",H="focussed",B="px",j="left",F="disabled",I="checked",q="Change",R="unselectable",U='<div class="',z="</div>",W="true",X="onenter",V="submit"+X,$="primarybtn"+X,J="data-",K=J+V,Q=J+$,G=J+"focusnext"+X,Y=U+s+"widget "+o+" "+o+'-content">'+z,Z='<input id="{id}" type="checkbox" class="'+p+'"{'+u+"}{"+I+"}{"+F+"}>",et="{htmlcheckbox}"+U+v+'">'+U+m+'"{'+R+"}>"+U+g+'">{'+g+"}"+z+U+b+'">{'+b+"}"+z+U+y+'">'+z+z+z,tt=function(e){return parseInt(e,10)};e.ITSACheckbox=e.Base.create("itsacheckbox",e.Widget,[],{CONTENT_TEMPLATE:null,initializer:function(){var e=this,t=e.get(E);t.addClass(l),e.get(u)&&t.addClass(a),e._eventhandlers=[]},renderUI:function(){var t=this,n=t.get(E),r,c,p,d,v;r=t._src=t.get("srcNode"),r&&r.get("tagName")==="INPUT"&&r.getAttribute("type")==="checkbox"&&(r.addClass(h),t._srcParentNode=d=r.get("parentNode")||e.one("body"),p=d.get("tagName")==="LABEL",n.get("tagName")==="INPUT"?(clonedNode=i.create(Y),p?(t._checkBoxBeforeText=v=d.getHTML().toLowerCase().substr(0,6)==="<label",d.insert(clonedNode,v?"before":"after"),d.insert(r,"after")):r.insert(clonedNode,"after"),t._set(E,clonedNode),r.removeClass(l),r.removeClass(s+"widget"),r.removeClass(o),r.removeClass(o+"-content"),t.get(u)&&r.removeClass(a)):n.insert(r,"before"),c=t._bkpLabel=e.one('label[for="'+r.get("id")+'"]'),c&&c.removeAttribute("for")),t._parentNode&&t._parentNode.addClass(f),t._setTemplate()},bindUI:function(){var t=this,n=t.get(E),r=t._parentNode||n,i=r.getDOMNode(),s;t.dd=s=(new e.DD.Drag({node:t._containerNode,lock:t.get(F)||t.get(u)})).plug(e.Plugin.DDConstrained,{constrain:t._wrapperNode}),s.on("drag:end",function(e){var n=e.pageX-t.get(E).getX(),r=n>-t._changePosition,i=t.get(I);r!==i?t.set(I,r):t._goFinal(i)}),t._eventhandlers.push(t.after(I+q,function(e){var n=e.newVal;t._goFinal(n),t.fire(P,e),t._src&&(t._src.set(I,n),n?t._src.setAttribute(I,I):t._src.removeAttribute(I))})),t._eventhandlers.push(t.after([g+q,b+q],e.bind(t._setDimensions,t))),t._eventhandlers.push(t.after(F+q,function(n){var r=n.newVal,i=e.merge(n),o;t._forceCheckedVal=!0,o=t.get(I),t._forceCheckedVal=!1,s.set("lock",r||t.get(u)),t._goFinal(o,!0),r?(i.newVal=null,i.prevVal=o):(i.newVal=o,i.prevVal=null),t.fire(P,i),t._src&&(r?t._src.setAttribute(F,F):t._src.removeAttribute(F))})),t._eventhandlers.push(t.after(u+q,function(e){var r=e.newVal,i;t._forceCheckedVal=!0,i=t.get(I),t._forceCheckedVal=!1,n.toggleClass(a,r),s.set("lock",r||t.get(F)),t._goFinal(i,!0),t._src&&(r?t._src.setAttribute(u,u):t._src.removeAttribute(u))})),t._eventhandlers.push(t._containerNode.on("tap",function(){t.focus(),t.toggle()})),t._eventhandlers.push(r.on("blur",e.bind(t.blur,t))),t._eventhandlers.push(e.after("rerenderCheckbox",e.bind(t.syncUI,t))),t._eventhandlers.push(t.on(V+q,function(e){e.newVal?r.setAttribute(K,W):r.removeAttribute(K)})),t._eventhandlers.push(t.on($+q,function(e){e.newVal?r.setAttribute(Q,W):r.removeAttribute(Q)})),t._eventhandlers.push(e.on("keydown",function(n){if(t.get(H)||i===e.config.doc.activeElement){var r=n.keyCode;n.preventDefault(),r===37||r===40?t.set(I,!1):r===39||r===38?t.set(I,!0):r===32&&t.toggle()}}))},check:function(){var e=this;return e.set(I,!0),e.getValue()},getValue:function(){return this.get(I)},syncUI:function(){var e=this;e._setDimensions()},toggle:function(){var e=this,t=e.get(I),n;if(e.get(u))return;return t!==null&&(e.set(I,!t),n=e.get(I)),n!==t},uncheck:function(){var e=this;return e.set(I,!1),e.getValue()},destructor:function(){var e=this,t=e.dd,n=e._checkBoxBeforeText,r=e._createdSrc,i=e._bkpLabel,s=e._src;e._destroyAllNodes=!0,t&&t.destroy(),e._clearEventhandlers(),r?r.destroy():s&&s.removeClass(h),e._parentNode&&e._parentNode.removeClass(f),i&&i.setAttribute("for",s.get("id")),typeof n=="boolean"&&(n?e._srcParentNode.prepend(s):e._srcParentNode.append(s))},_clearEventhandlers:function(){r.each(this._eventhandlers,function(e){e.detach()})},_goFinal:function(e,t){var n=this;e?n._goRight(!0,t):n._goLeft(!0,t)},_goLeft:function(e,t){var n=this,r=n._containerNode;if(!n.get(F)&&!n.get(u)||t)e?n._moveAnimated(0):r.setStyle(j,"0")},_goRight:function(e,t){var n=this,r=n._containerNode;if(!n.get(F)&&!n.get(u)||t)e?n._moveAnimated(n._onPosition):r.setStyle(j,n._onPosition+B)},_moveAnimated:function(e){var t=this;t._containerNode.transition({easing:"ease-in",duration:t.get("duration"),left:e+B})},_setDimensions:function(){var e=this,t=e.get(E),n,r,i,s,o,u,a,f,l,h,p,d,v,m,y,w,S,x,P,H,F,q;n=e._optionBtnNode,r=e._optionOnNode,i=e._optionOffNode,w=e._wrapperNode,l=e._containerNode,t.addClass(c),e.get("rendered")&&(F=!0,r.set("text",e.get(g)),i.set("text",e.get(b))),l.setStyle(T,""),r.setStyle(T,""),i.setStyle(T,""),n.setStyle(T,""),l.setStyle(N,""),r.setStyle(N,""),i.setStyle(N,""),n.setStyle(N,""),r.setStyle(M,""),r.setStyle(_,""),r.setStyle(A,""),r.setStyle(O,""),i.setStyle(M,""),i.setStyle(_,""),i.setStyle(A,""),i.setStyle(O,""),h=r.get(k),p=i.get(k),u=Math.max(h,p),s=Math.floor(u/2),o=u-s,P=tt(n.getStyle("borderTopWidth")),H=tt(n.getStyle("borderBottomWidth")),a=u-P-H+B,n.setStyle(N,a),r.setStyle(A,tt(r.getStyle(A))+B),r.setStyle(O,tt(r.getStyle(O))+B),i.setStyle(A,tt(i.getStyle(A))+B),i.setStyle(O,tt(i.getStyle(O))+B),r.setStyle(N,u-tt(r.getStyle(A))-tt(r.getStyle(O))+B),i.setStyle(N,u-tt(i.getStyle(A))-tt(i.getStyle(O))+B),r.setStyle(_,tt(r.getStyle(_))+s+B),i.setStyle(M,tt(i.getStyle(M))+o+B),r.setStyle(M,tt(r.getStyle(M))+B),i.setStyle(_,tt(i.getStyle(_))+B),v=r.get(C),m=i.get(C),y=Math.max(v,m),d=v-tt(r.getStyle(M))-tt(
r.getStyle(_)),r.setStyle(T,d+(y-v)+B),d=m-tt(i.getStyle(M))-tt(i.getStyle(_)),i.setStyle(T,d+(y-m)+B),n.setStyle(T,a),f=y-s,w.setStyle(T,3*y-s+B),l.setStyle(T,2*y+B),x=y+o+1,t.setStyle(T,x+B),n.setStyle(D,-s-y+B),wrapperLeftPos=s-y,w.setStyle(j,wrapperLeftPos+B),e._onPosition=y-s,e._changePosition=Math.round(-wrapperLeftPos/2),n.setStyle(L,s+B),q=s-1,r.setStyle(L,q+B+" 0 0 0"),i.setStyle(L,"0 "+q+B+" 0 0"),S=t.get(k),t.setStyle(L,Math.round(S/2)+B),e.get(I)?e._goRight(!1,!0):e._goLeft(!1,!0),t.removeClass(c),F&&e.fire("contentUpdate")},_setTemplate:function(){var e=this,t=e.get(E),r=e.get(g),i=e.get(b),s,o,a,f;e._src||(o=e._parentNode||t,s=o.get("id")+"_checkbox"),t.setHTML(n.sub(et,{htmlcheckbox:s?n.sub(Z,{id:s,readonly:e.get(u)?" "+u+'="'+u+'"':"",checked:e.get(I)?" "+I+'="'+I+'"':"",disabled:e.get(F)?" "+F+'="'+F+'"':""}):"",optionon:r,optionoff:i,unselectable:w?" "+R+"=on":""})),s&&(e._createdSrc=e._src=t.one("#"+s)),e._wrapperNode=t.one("."+v),e._containerNode=t.one("."+m),e._optionOnNode=a=t.one("."+g),e._optionOffNode=f=a.next(),e._optionBtnNode=f.next(),parentNode=o||t,parentNode.setAttribute(G,W),e.get(V)&&parentNode.setAttribute(K,W),e.get($)&&parentNode.setAttribute(Q,W)},_srcNodeValidCheckbox:function(e){return e.get("tagName")==="INPUT"&&e.getAttribute("type")==="checkbox"}},{ATTRS:{checked:{value:!1,validator:function(e){var t=this,n;return t.get("rendered")&&(n=t.get(F)||t.get(u)),typeof e===S&&!n},getter:function(e){var t=this;return!t.get(F)||t._forceCheckedVal?e:null}},duration:{value:.15,validator:function(e){return typeof e=="number"}},optionon:{value:"I",validator:function(e){return typeof e===x}},optionoff:{value:"O",validator:function(e){return typeof e===x}},primarybtnonenter:{value:!1,validator:function(e){return typeof e===S}},readonly:{value:!1,validator:function(e){return typeof e===S}},submitonenter:{value:!1,validator:function(e){return typeof e===S}}},HTML_PARSER:{checked:function(e){var t=e.get(I);return this._srcNodeValidCheckbox(e)&&t},readonly:function(e){var t=e.getAttribute(u).toLowerCase()===u;return this._srcNodeValidCheckbox(e)&&t},disabled:function(e){var t=e.get(F);return this._srcNodeValidCheckbox(e)&&t}}})},"gallery-2014.02.20-23-55",{requires:["yui-base","dd-ddm","node-base","dom-screen","widget","base-build","dd-drag","dd-constrain","event-tap","transition"],skinnable:!0});
>>>>>>> upstream/master