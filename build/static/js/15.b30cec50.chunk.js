(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[15],{126:function(e,t,n){"use strict";var a=n(10),c=n(11),r=n(18),u=n(17),i=n(0),o=n.n(i),s=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("img",{alt:"",src:this.props.location,style:this.props.height?{height:this.props.height}:void 0})}}]),n}(o.a.Component);t.a=s},176:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(11),r=n(18),u=n(17),i=n(0),o=n.n(i),s=n(182),l=n(22),f=n(98),p=n(53),h=n(126),v=n(12),g=(n(176),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={loading:!0,mysticCodes:[]},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;try{f.a.mysticCodeList(this.props.region).then((function(t){e.setState({loading:!1,mysticCodes:t})}))}catch(t){this.setState({error:t})}}},{key:"render",value:function(){var e=this;return this.state.error?o.a.createElement(p.a,{error:this.state.error}):this.state.loading?o.a.createElement(v.a,null):o.a.createElement("div",{id:"mystic-codes"},o.a.createElement(s.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"#"),o.a.createElement("th",{style:{textAlign:"center",width:"140px"}},"Thumbnail"),o.a.createElement("th",null,"Name"))),o.a.createElement("tbody",null,this.state.mysticCodes.map((function(t,n){var a="/".concat(e.props.region,"/mystic-code/").concat(t.id);return o.a.createElement("tr",{key:n},o.a.createElement("td",{align:"center"},o.a.createElement(l.b,{to:a},t.id)),o.a.createElement("td",{align:"center"},o.a.createElement(l.b,{to:a},o.a.createElement(h.a,{location:t.extraAssets.item.male,height:50}),o.a.createElement(h.a,{location:t.extraAssets.item.female,height:50}))),o.a.createElement("td",null,o.a.createElement(l.b,{to:a},t.name)))})))))}}]),n}(o.a.Component));t.default=g},98:function(e,t,n){"use strict";var a=n(118),c=n(10),r=n(11),u=n(99),i=n.n(u),o=n(100),s=n(123),l=n.n(s),f=n(24),p=n(31),h=n(29),v=function(){function e(){Object(c.a)(this,e),this.cache=new Map,this.pending=new Map,this.pendingCatches=new Map}return Object(r.a)(e,[{key:"get",value:function(e,t,n){var a=this,c=this.cache.get(e);if(void 0!==c)return new Promise((function(e){e(c)}));var r=this.pending.get(e);return void 0!==r?new Promise((function(t,n){var c;r.push(t),(null!==(c=a.pendingCatches.get(e))&&void 0!==c?c:[]).push(n)})):(this.pending.set(e,[]),this.pendingCatches.set(e,[]),new Promise((function(c,r){t.call(null).then((function(t){var r;(null!==(r=a.pending.get(e))&&void 0!==r?r:[]).forEach((function(e){e.call(null,t)})),a.cache.set(e,t),a.pending.delete(e),a.pendingCatches.delete(e),null!==n&&window.setTimeout((function(){a.cache.delete(e)}),n),c(t)})).catch((function(t){var n;(null!==(n=a.pendingCatches.get(e))&&void 0!==n?n:[]).forEach((function(e){e.call(null,t)})),a.pending.delete(e),a.pendingCatches.delete(e),r(t)}))})))}}]),e}(),g="https://api.atlasacademy.io",d=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b={buff:new v,craftEssence:new v,craftEssenceList:new v,func:new v,mysticCode:new v,mysticCodeList:new v,noblePhantasm:new v,quest:new v,servant:new v,servantList:new v,skill:new v,traitMap:new v},m=function(){function e(){Object(c.a)(this,e)}return Object(r.a)(e,null,[{key:"buff",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return b.buff.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return d("".concat(g,"/nice/").concat(e,"/buff/").concat(t).concat(a))}),2e4)}},{key:"craftEssence",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return b.craftEssence.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return d("".concat(g,"/nice/").concat(e,"/equip/").concat(t).concat(a))}),2e4)}},{key:"craftEssenceList",value:function(){var t=Object(o.a)(i.a.mark((function t(n){var c,r,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==h.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableCraftEssenceList(h.a.NA));case 4:if(n!==h.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableCraftEssenceList(h.a.JP));case 6:return t.next=8,e.getCacheableCraftEssenceList(h.a.JP);case 8:return c=t.sent,t.next=11,e.getCacheableCraftEssenceList(h.a.NA);case 11:return r=t.sent,u=new Map(r.map((function(e){return[e.id,e.name]}))),t.abrupt("return",c.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"func",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return b.func.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return d("".concat(g,"/nice/").concat(e,"/function/").concat(t).concat(a))}),2e4)}},{key:"mysticCode",value:function(e,t){var n="".concat(e,"-").concat(t);return b.mysticCode.get(n,(function(){return d("".concat(g,"/nice/").concat(e,"/MC/").concat(t))}),2e4)}},{key:"mysticCodeList",value:function(){var t=Object(o.a)(i.a.mark((function t(n){var c,r,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==h.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableMysticCodeList(h.a.NA));case 4:if(n!==h.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableMysticCodeList(h.a.JP));case 6:return t.next=8,e.getCacheableMysticCodeList(h.a.JP);case 8:return c=t.sent,t.next=11,e.getCacheableMysticCodeList(h.a.NA);case 11:return r=t.sent,u=new Map(r.map((function(e){return[e.id,e.name]}))),t.abrupt("return",c.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"noblePhantasm",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return b.noblePhantasm.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return d("".concat(g,"/nice/").concat(e,"/NP/").concat(t).concat(a))}),2e4)}},{key:"quest",value:function(e,t,n){var a="".concat(e,"-").concat(t,"-").concat(n);return b.quest.get(a,(function(){return d("".concat(g,"/nice/").concat(e,"/quest/").concat(t,"/").concat(n))}),2e4)}},{key:"servant",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return b.servant.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return d("".concat(g,"/nice/").concat(e,"/servant/").concat(t).concat(a))}),2e4)}},{key:"servantList",value:function(){var t=Object(o.a)(i.a.mark((function t(n){var c,r,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==h.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableServantList(h.a.NA));case 4:if(n!==h.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableServantList(h.a.JP));case 6:return t.next=8,e.getCacheableServantList(h.a.JP);case 8:return c=t.sent,t.next=11,e.getCacheableServantList(h.a.NA);case 11:return r=t.sent,u=new Map(r.map((function(e){return[e.id,e.name]}))),t.abrupt("return",c.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"skill",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return b.skill.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return d("".concat(g,"/nice/").concat(e,"/skill/").concat(t).concat(a))}),2e4)}},{key:"traitMap",value:function(e){return b.traitMap.get(e,(function(){return d("".concat(g,"/export/").concat(e,"/nice_trait.json"))}),null)}},{key:"getCacheableCraftEssenceList",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.craftEssenceList.get(t,(function(){return d("".concat(g,"/export/").concat(t,"/basic_equip.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableMysticCodeList",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.mysticCodeList.get(t,(function(){return d("".concat(g,"/export/").concat(t,"/nice_mystic_code.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableServantList",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.servantList.get(t,(function(){return d("".concat(g,"/export/").concat(t,"/basic_servant.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.a=m}}]);
//# sourceMappingURL=15.b30cec50.chunk.js.map