(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[16],{109:function(e,t,n){"use strict";var a=n(11),r=n(12),c=n(19),u=n(18),o=n(0),s=n.n(o),i=new Map([[1,"./assets/star1.png"],[2,"./assets/star2.png"],[3,"./assets/star3.png"],[4,"./assets/star4.png"],[5,"./assets/star5.png"]]),l=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e;return s.a.createElement("span",null,i.has(this.props.rarity)?s.a.createElement("img",{alt:"".concat(this.props.rarity," star(s)"),src:i.get(this.props.rarity),style:{height:null!==(e=this.props.height)&&void 0!==e?e:18}}):null)}}]),n}(s.a.Component);t.a=l},130:function(e,t,n){"use strict";var a=n(11),r=n(12),c=n(19),u=n(18),o=n(0),s=n.n(o),i=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("img",{alt:"",src:this.props.location,style:this.props.height?{height:this.props.height}:void 0})}}]),n}(s.a.Component);t.a=i},175:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),c=n(19),u=n(18),o=n(0),s=n.n(o),i=n(95),l=n(185),f=n(13),p=n(97),d=n(54),h=n(130),v=n(9),m=n(109),g=(n(175),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={loading:!0,commandCodes:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;try{p.a.commandCodeList(this.props.region).then((function(t){e.setState({loading:!1,commandCodes:t})}))}catch(t){this.setState({error:t})}}},{key:"commandCodes",value:function(){var e=this.state.commandCodes.slice().reverse();if(this.state.search){var t=this.state.search.split(" ").filter((function(e){return e})).map((function(e){return e.toLowerCase()}));e=e.filter((function(e){return t.every((function(t){return e.name.toLowerCase().includes(t)}))}))}return e}},{key:"render",value:function(){var e,t=this;return this.state.error?s.a.createElement(d.a,{error:this.state.error}):this.state.loading?s.a.createElement(v.a,null):s.a.createElement("div",{id:"command-codes"},s.a.createElement(i.a,{inline:!0,style:{justifyContent:"center"}},s.a.createElement(i.a.Control,{style:{marginLeft:"auto"},placeholder:"Search",value:null!==(e=this.state.search)&&void 0!==e?e:"",onChange:function(e){t.setState({search:e.target.value})}})),s.a.createElement("hr",null),s.a.createElement(l.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"#"),s.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Thumbnail"),s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Rarity"))),s.a.createElement("tbody",null,this.commandCodes().map((function(e,n){var a,r="/".concat(t.props.region,"/command-code/").concat(e.id);return s.a.createElement("tr",{key:n},s.a.createElement("td",{align:"center"},s.a.createElement(f.b,{to:r},e.collectionNo)),s.a.createElement("td",{align:"center"},s.a.createElement(f.b,{to:r},s.a.createElement(h.a,{rarity:e.rarity,location:null!==(a=e.extraAssets.faces.cc[e.id])&&void 0!==a?a:"",height:50}))),s.a.createElement("td",null,s.a.createElement(f.b,{to:r},e.name)),s.a.createElement("td",null,s.a.createElement(m.a,{rarity:e.rarity})))})))))}}]),n}(s.a.Component));t.default=g},97:function(e,t,n){"use strict";var a=n(115),r=n(11),c=n(12),u=n(99),o=n.n(u),s=n(100),i=n(133),l=n.n(i),f=n(24),p=n(31),d=n(29),h=function(){function e(){Object(r.a)(this,e),this.cache=new Map,this.pending=new Map,this.pendingCatches=new Map}return Object(c.a)(e,[{key:"get",value:function(e,t,n){var a=this,r=this.cache.get(e);if(void 0!==r)return new Promise((function(e){e(r)}));var c=this.pending.get(e);return void 0!==c?new Promise((function(t,n){var r;c.push(t),(null!==(r=a.pendingCatches.get(e))&&void 0!==r?r:[]).push(n)})):(this.pending.set(e,[]),this.pendingCatches.set(e,[]),new Promise((function(r,c){t.call(null).then((function(t){var c;(null!==(c=a.pending.get(e))&&void 0!==c?c:[]).forEach((function(e){e.call(null,t)})),a.cache.set(e,t),a.pending.delete(e),a.pendingCatches.delete(e),null!==n&&window.setTimeout((function(){a.cache.delete(e)}),n),r(t)})).catch((function(t){var n;(null!==(n=a.pendingCatches.get(e))&&void 0!==n?n:[]).forEach((function(e){e.call(null,t)})),a.pending.delete(e),a.pendingCatches.delete(e),c(t)}))})))}}]),e}(),v="https://api.atlasacademy.io",m=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={buff:new h,commandCode:new h,commandCodes:new h,craftEssence:new h,craftEssenceList:new h,func:new h,mysticCode:new h,mysticCodeList:new h,noblePhantasm:new h,quest:new h,servant:new h,servantList:new h,skill:new h,traitMap:new h},b=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,null,[{key:"buff",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return g.buff.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return m("".concat(v,"/nice/").concat(e,"/buff/").concat(t).concat(a))}),2e4)}},{key:"commandCode",value:function(e,t){var n="".concat(e,"-").concat(t);return g.commandCode.get(n,(function(){return m("".concat(v,"/nice/").concat(e,"/CC/").concat(t))}),2e4)}},{key:"commandCodeList",value:function(){var t=Object(s.a)(o.a.mark((function t(n){var r,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==d.a.NA){t.next=4;break}return t.abrupt("return",e.getCommandCodeEssenceList(d.a.NA));case 4:if(n!==d.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCommandCodeEssenceList(d.a.JP));case 6:return t.next=8,e.getCommandCodeEssenceList(d.a.JP);case 8:return r=t.sent,t.next=11,e.getCommandCodeEssenceList(d.a.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"craftEssence",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return g.craftEssence.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return m("".concat(v,"/nice/").concat(e,"/equip/").concat(t).concat(a))}),2e4)}},{key:"craftEssenceList",value:function(){var t=Object(s.a)(o.a.mark((function t(n){var r,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==d.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableCraftEssenceList(d.a.NA));case 4:if(n!==d.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableCraftEssenceList(d.a.JP));case 6:return t.next=8,e.getCacheableCraftEssenceList(d.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableCraftEssenceList(d.a.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"func",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return g.func.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return m("".concat(v,"/nice/").concat(e,"/function/").concat(t).concat(a))}),2e4)}},{key:"mysticCode",value:function(e,t){var n="".concat(e,"-").concat(t);return g.mysticCode.get(n,(function(){return m("".concat(v,"/nice/").concat(e,"/MC/").concat(t))}),2e4)}},{key:"mysticCodeList",value:function(){var t=Object(s.a)(o.a.mark((function t(n){var r,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==d.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableMysticCodeList(d.a.NA));case 4:if(n!==d.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableMysticCodeList(d.a.JP));case 6:return t.next=8,e.getCacheableMysticCodeList(d.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableMysticCodeList(d.a.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"noblePhantasm",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return g.noblePhantasm.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return m("".concat(v,"/nice/").concat(e,"/NP/").concat(t).concat(a))}),2e4)}},{key:"quest",value:function(e,t,n){var a="".concat(e,"-").concat(t,"-").concat(n);return g.quest.get(a,(function(){return m("".concat(v,"/nice/").concat(e,"/quest/").concat(t,"/").concat(n))}),2e4)}},{key:"servant",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return g.servant.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return m("".concat(v,"/nice/").concat(e,"/servant/").concat(t).concat(a))}),2e4)}},{key:"servantList",value:function(){var t=Object(s.a)(o.a.mark((function t(n){var r,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==d.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableServantList(d.a.NA));case 4:if(n!==d.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableServantList(d.a.JP));case 6:return t.next=8,e.getCacheableServantList(d.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableServantList(d.a.NA);case 11:return c=t.sent,u=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=u.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"skill",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return g.skill.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return m("".concat(v,"/nice/").concat(e,"/skill/").concat(t).concat(a))}),2e4)}},{key:"traitMap",value:function(e){return g.traitMap.get(e,(function(){return m("".concat(v,"/export/").concat(e,"/nice_trait.json"))}),null)}},{key:"searchBuffs",value:function(e,t,n){var a="?reverse=true";return f.a.language()===p.a.ENGLISH&&(a+="&lang=en"),t&&(a+="&name="+encodeURI(t)),n&&(a+="&type="+n),m("".concat(v,"/nice/").concat(e,"/buff/search").concat(a))}},{key:"searchFuncs",value:function(e,t,n,a,r){var c="?reverse=true";return f.a.language()===p.a.ENGLISH&&(c+="&lang=en"),t&&(c+="&popupText="+encodeURI(t)),n&&(c+="&type="+n),a&&(c+="&targetType="+a),r&&(c+="&targetTeam="+r),m("".concat(v,"/nice/").concat(e,"/function/search").concat(c))}},{key:"getCommandCodeEssenceList",value:function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.commandCodes.get(t,(function(){return m("".concat(v,"/export/").concat(t,"/nice_command_code.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableCraftEssenceList",value:function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.craftEssenceList.get(t,(function(){return m("".concat(v,"/export/").concat(t,"/basic_equip.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableMysticCodeList",value:function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.mysticCodeList.get(t,(function(){return m("".concat(v,"/export/").concat(t,"/nice_mystic_code.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableServantList",value:function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.servantList.get(t,(function(){return m("".concat(v,"/export/").concat(t,"/basic_servant.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.a=b}}]);
//# sourceMappingURL=16.1ac25c88.chunk.js.map