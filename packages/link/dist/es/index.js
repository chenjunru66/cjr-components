var e={name:"CjrLink",props:{href:{type:String},disabled:{type:Boolean,default:!1},underline:{type:Boolean,default:!1}}};function t(e,t,n,o,s,i,d,a,r,l){"boolean"!=typeof d&&(r=a,a=d,d=!1);const c="function"==typeof n?n.options:n;let u;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),o&&(c._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=u):t&&(u=d?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),u)if(c.functional){const e=c.render;c.render=function(t,n){return u.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,u):[u]}return n}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return(e,t)=>function(e,t){const o=n?t.media||"default":e,d=i[o]||(i[o]={ids:new Set,styles:[]});if(!d.ids.has(e)){d.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",t.media&&d.element.setAttribute("media",t.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(n),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{const e=d.ids.size-1,t=document.createTextNode(n),o=d.element.childNodes;o[e]&&d.element.removeChild(o[e]),o.length?d.element.insertBefore(t,o[e]):d.element.appendChild(t)}}}(e,t)}let s;const i={};const d=t({render:function(){var e=this.$createElement;return(this._self._c||e)("a",{class:[this.disabled&&"disabled",!this.underline&&"no-underline"],attrs:{href:this.disabled?null:this.href}},[this._t("default")],2)},staticRenderFns:[]},(function(e){e&&e("data-v-76332bde_0",{source:".disabled[data-v-76332bde]{cursor:not-allowed;font-size:18px}.no-underline[data-v-76332bde]{text-decoration:none}",map:void 0,media:void 0})}),e,"data-v-76332bde",!1,void 0,!1,o,void 0,void 0);d.install=e=>{e.component(d.name,d)};export default d;
