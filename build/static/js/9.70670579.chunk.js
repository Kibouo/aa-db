(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[9],{143:function(e,t,a){"use strict";var n=a(12),r=a(13),s=a(23),i=a(22),l=a(0),c=a.n(l),o=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e;return c.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:"2em"}})}}]),a}(c.a.Component);t.a=o},149:function(e,t,a){"use strict";var n=a(12),r=a(13),s=a(23),i=a(22),l=a(0),c=a.n(l),o=new Map([[1,"./assets/star1.png"],[2,"./assets/star2.png"],[3,"./assets/star3.png"],[4,"./assets/star4.png"],[5,"./assets/star5.png"]]),u=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e;return c.a.createElement("span",null,o.has(this.props.rarity)?c.a.createElement("img",{alt:"".concat(this.props.rarity," star(s)"),src:o.get(this.props.rarity),style:{height:null!==(e=this.props.height)&&void 0!==e?e:18}}):null)}}]),a}(c.a.Component);t.a=u},153:function(e,t,a){"use strict";var n=a(20),r=a.n(n),s=a(34),i=a(12),l=a(13),c=a(23),o=a(22),u=a(59),p=a(35),m=a(0),h=a.n(m),d=a(166),v=(a(154),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={ref:h.a.createRef(),selected:e.selected,focused:!1,results:!1},n}return Object(l.a)(a,[{key:"clearSelection",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({selected:void 0,results:!0});case 2:this.state.ref.current.clear();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(e){if(void 0===e)return"All";var t=this.props.labels.get(e);return this.props.disableLabelStyling?t||("string"===typeof e?e:"Unknown"):t?"".concat(t," - ").concat(e):"(".concat(e,")")}},{key:"getOption",value:function(e){return{label:this.getDescription(e),value:e}}},{key:"getOptions",value:function(){var e=this;return(this.props.hideAll?[]:[this.getOption()]).concat(this.props.options.map((function(t){return e.getOption(t)})))}},{key:"resetInput",value:function(){this.setState({focused:!1,results:!1})}},{key:"selectOption",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=4;break}this.setState({results:!1}),e.next=8;break;case 4:return a=t[0].value,e.next=7,this.setState({selected:a,results:!0});case 7:this.props.onChange(a);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return h.a.createElement(d.a,{ref:this.state.ref,id:this.props.id,options:this.getOptions(),placeholder:this.getDescription(this.state.selected),selected:this.state.focused&&this.state.results?[this.getOption(this.state.selected)]:[],ignoreDiacritics:!0,maxResults:null!==(e=this.props.maxResults)&&void 0!==e?e:1e3,onBlur:function(){t.resetInput()},onChange:function(e){t.selectOption(e)},onFocus:function(){t.setState({focused:!0})}},this.props.hideReset?null:h.a.createElement("button",{className:"searchable-select-clear",onClick:function(e){e.preventDefault(),t.clearSelection()},onMouseDown:function(e){e.preventDefault()}},h.a.createElement(p.a,{icon:u.e})))}}]),a}(h.a.Component));t.a=v},154:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(12),r=a(13),s=a(23),i=a(22),l=a(11),c=a(0),o=a.n(c),u=new Map([[0,0],[1,1],[2,1],[3,2],[4,3],[5,3]]),p=new Map([[l.d.SABER,1],[l.d.ARCHER,2],[l.d.LANCER,3],[l.d.RIDER,4],[l.d.CASTER,5],[l.d.ASSASSIN,6],[l.d.BERSERKER,7],[l.d.SHIELDER,8],[l.d.RULER,9],[l.d.ALTER_EGO,10],[l.d.AVENGER,11],[l.d.MOON_CANCER,23],[l.d.FOREIGNER,25],[l.d.GRAND_CASTER,5],[l.d.BEAST_I,20],[l.d.BEAST_II,20],[l.d.BEAST_IIIL,20],[l.d.BEAST_IIIR,20],[l.d.BEAST_UNKNOWN,20],[l.d.ALL,1001],[l.d.EXTRA,1002]]),m=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e;return o.a.createElement("img",{alt:"",src:this.location(),style:{height:null!==(e=this.props.height)&&void 0!==e?e:24}})}},{key:"location",value:function(){var e,t=p.has(this.props.className)?p.get(this.props.className):12,a=null!==(e=this.props.rarity)&&void 0!==e?e:5,n=u.has(a)?u.get(a):3;return"https://assets.atlasacademy.io/GameData/NA/ClassIcons/class".concat(n,"_").concat(t,".png")}}]),a}(o.a.Component);t.a=m},173:function(e,t,a){"use strict";var n=a(12),r=a(13),s=a(23),i=a(22),l=a(0),c=a.n(l),o=a(14),u=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(o.b,{to:"/".concat(this.props.region,"/noble-phantasm/").concat(this.props.noblePhantasm.id)},"[",this.props.noblePhantasm.name,"]")}}]),a}(c.a.Component);t.a=u},174:function(e,t,a){"use strict";var n=a(12),r=a(13),s=a(23),i=a(22),l=a(11),c=a(59),o=a(35),u=a(0),p=a.n(u),m=a(14),h=a(143),d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.craftEssence.extraAssets.faces.equip,t=e?e[this.props.craftEssence.id]:void 0;return p.a.createElement(m.b,{to:"/".concat(this.props.region,"/craft-essence/").concat(this.props.craftEssence.collectionNo)},t?p.a.createElement(h.a,{type:l.f.EntityType.SERVANT_EQUIP,rarity:this.props.craftEssence.rarity,location:t,height:"2em"}):void 0,t?" ":void 0,this.props.craftEssence.name," ",p.a.createElement(o.a,{icon:c.d}))}}]),a}(p.a.Component);t.a=d},181:function(e,t,a){"use strict";var n=a(12),r=a(13),s=a(23),i=a(22),l=a(11),c=a(0),o=a.n(c),u=(a(186),[l.c.ARTS,l.c.BUSTER,l.c.QUICK]),p=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"getPortrait",value:function(){if(this.props.assetType&&this.props.assetId){var e=this.props.servant.extraAssets.commands[this.props.assetType];if(void 0!==e){var t=e[this.props.assetId];return t||Object.values(e).pop()}}var a=this.props.servant.extraAssets.commands;if(a.ascension){var n=Object.values(a.ascension);if(n.length>0)return n[0]}if(a.costume){var r=Object.values(a.costume);if(r.length>0)return r[0]}}},{key:"render",value:function(){var e;if(-1===u.indexOf(this.props.card))return o.a.createElement("span",null,"[Card: ",this.props.card,"]");var t,a,n,r=null!==(e=this.props.height)&&void 0!==e?e:"1em",s=this.getPortrait(),i=!1;switch(this.props.card){case l.c.ARTS:t="assets/card_bg_arts.png",a="assets/card_icon_arts.png",n="assets/card_txt_arts.png";break;case l.c.BUSTER:t="assets/card_bg_buster.png",a="assets/card_icon_buster.png",n="assets/card_txt_buster.png";break;case l.c.QUICK:t="assets/card_bg_quick.png",a="assets/card_icon_quick.png",n="assets/card_txt_quick.png"}return this.props.npText&&(n=this.props.npText,i=!0),o.a.createElement("span",{className:"command-card",style:{height:r}},o.a.createElement("img",{alt:"",className:"command-card-ratio",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}),o.a.createElement("img",{alt:"",className:"command-card-bg",src:t}),o.a.createElement("img",{alt:"",className:"command-card-portrait",src:s}),o.a.createElement("img",{alt:"",className:"command-card-icon",src:a}),i?o.a.createElement("div",{className:"command-card-text-np"+(this.props.npTextBottom?" bottom":"")},o.a.createElement("img",{alt:"",src:n})):o.a.createElement("img",{className:"command-card-text-card",alt:"",src:n}))}}]),a}(o.a.Component);t.a=p},185:function(e,t,a){"use strict";var n=a(12),r=a(13),s=a(23),i=a(22),l=a(0),c=a.n(l),o=a(180),u=a(92),p=a(271),m=a(182),h=a(181),d=a(173),v=a(172),E=a(140),f=a(190),b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"npCommandCard",value:function(){return c.a.createElement(h.a,{height:200,card:this.props.noblePhantasm.card,servant:this.props.servant,npText:this.props.noblePhantasm.icon,npTextBottom:800100===this.props.servant.id&&800101===this.props.noblePhantasm.id,assetType:this.props.assetType,assetId:this.props.assetId})}},{key:"render",value:function(){var e=this.props.noblePhantasm;return c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement(u.a,{lg:3,className:"text-center d-block d-sm-block d-md-block d-lg-none"},this.npCommandCard(),c.a.createElement("br",null)),c.a.createElement(u.a,{xs:12,lg:9},c.a.createElement("h3",null,c.a.createElement(d.a,{region:this.props.region,noblePhantasm:e})),e.condQuestId&&e.condQuestPhase?c.a.createElement(p.a,{variant:"primary"},"Available after ",c.a.createElement(v.a,{region:this.props.region,questId:e.condQuestId,questPhase:e.condQuestPhase})):null,c.a.createElement("p",null,Object(E.c)(e.detail)),c.a.createElement("p",null,"Card: ",c.a.createElement(m.a,{card:e.card,height:60}),c.a.createElement("br",null),"Hits: ",e.npDistribution.length," Hits - ",Object(E.e)(e.npDistribution.map((function(e){return Object(E.a)(e,0)})),", "))),c.a.createElement(u.a,{lg:3,className:"text-right d-none d-lg-block d-xl-block"},this.props.hideCard?null:this.npCommandCard(),c.a.createElement("br",null))),c.a.createElement(o.a,null,c.a.createElement(u.a,null,c.a.createElement(f.a,{region:this.props.region,funcs:e.functions,gain:this.props.hideGain?void 0:e.npGain,levels:5}))))}}]),a}(c.a.Component);t.a=b},186:function(e,t,a){},187:function(e,t,a){"use strict";var n=a(152),r=a(12),s=a(13),i=a(23),l=a(22),c=a(0),o=a.n(c),u=a(167),p=a(147),m=a(140),h=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(u.a,{responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{width:1}},"\xa0"),o.a.createElement("th",null,"Level"),o.a.createElement("th",null,"HP"),o.a.createElement("th",null,"ATK"))),o.a.createElement("tbody",null,Object(n.a)(Array(100)).map((function(t,a){var n=100-a-1;return o.a.createElement("tr",{key:a},o.a.createElement("td",null,n>=e.props.servant.lvMax?o.a.createElement(p.a,{location:"https://assets.atlasacademy.io/GameData/NA/Items/7999.png"}):null),o.a.createElement("td",null,n+1),o.a.createElement("td",null,Object(m.b)(e.props.servant.hpGrowth[n])),o.a.createElement("td",null,Object(m.b)(e.props.servant.atkGrowth[n])))})))))}}]),a}(o.a.Component);t.a=h},191:function(e,t,a){"use strict";var n=a(12),r=a(13),s=a(23),i=a(22),l=a(0),c=a.n(l),o=a(167),u=a(11),p=a(172),m=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.comment,t=this.props.comment.condMessage;return t||(e.condType===u.j.ProfileCommentConditionType.NONE?t="None":e.condType===u.j.ProfileCommentConditionType.QUEST_CLEAR&&e.condValues&&e.condValues.length>0?t=c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{region:this.props.region,questId:e.condValues[0],questPhase:e.condValue2}),"\xa0Cleared"):e.condType===u.j.ProfileCommentConditionType.SVT_FRIENDSHIP&&e.condValues&&e.condValues.length>0&&(t="Bond Level ".concat(e.condValues[0]))),c.a.createElement("span",null,t)}}]),a}(c.a.Component),h=a(140),d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h3",null,"Profile"),c.a.createElement(o.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Condition"),c.a.createElement("th",null,"Message"))),c.a.createElement("tbody",null,this.props.comments.map((function(t,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",null,c.a.createElement(m,{region:e.props.region,comment:t})),c.a.createElement("td",null,Object(h.c)(t.comment)))})))))}}]),a}(c.a.Component);t.a=d},265:function(e,t,a){},266:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a.n(n),s=a(178),i=a(34),l=a(12),c=a(13),o=a(23),u=a(22),p=a(0),m=a.n(p),h=a(180),d=a(92),v=a(288),E=a(272),f=a(7),b=a(49),g=a(185),y=a(171),O=a(60),A=a(10),j=a(6),k=a(152),C=a(140),x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"flattenAssets",value:function(e){if(!e)return[];var t=[];return e.ascension&&t.push.apply(t,Object(k.a)(Object.values(e.ascension))),e.costume&&t.push.apply(t,Object(k.a)(Object.values(e.costume))),t}},{key:"displayAssets",value:function(e){var t=this.flattenAssets(e);return Object(C.e)(t.map((function(e){return m.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},m.a.createElement("img",{alt:"",src:e,style:{maxWidth:"100%"}}))})),"")}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("h3",null,"Portraits"),m.a.createElement("div",null,this.displayAssets(this.props.servant.extraAssets.charaGraph)),m.a.createElement("hr",null),m.a.createElement("h3",null,"Status"),m.a.createElement("div",null,this.displayAssets(this.props.servant.extraAssets.status)),m.a.createElement("hr",null),m.a.createElement("h3",null,"Command"),m.a.createElement("div",null,this.displayAssets(this.props.servant.extraAssets.commands)),m.a.createElement("hr",null),m.a.createElement("h3",null,"Formation"),m.a.createElement("div",null,this.displayAssets(this.props.servant.extraAssets.narrowFigure)),m.a.createElement("hr",null),m.a.createElement("h3",null,"Thumbnail"),m.a.createElement("div",null,this.displayAssets(this.props.servant.extraAssets.faces)),m.a.createElement("hr",null),m.a.createElement("h3",null,"Figure"),m.a.createElement("div",null,this.displayAssets(this.props.servant.extraAssets.charaFigure)))}}]),a}(m.a.Component),I=a(155),T=a(181),S=a(141),R=a(144),N=a(14),_=a(174),P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,b.a.craftEssence(this.props.id);case 4:e.t1=e.sent,e.t2={craftEssence:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=11;break;case 9:e.prev=9,e.t3=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="/".concat(this.props.region,"/craft-essence/").concat(this.props.id);return void 0===this.state.craftEssence?m.a.createElement(N.b,{to:e},"[Craft Essence: ",this.props.id,"]"):m.a.createElement(_.a,{region:this.props.region,craftEssence:this.state.craftEssence})}}]),a}(m.a.Component),w=a(149),B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.servant;return m.a.createElement("div",null,m.a.createElement("h1",null,m.a.createElement(I.a,{className:t.className,rarity:t.rarity,height:50}),"\xa0",t.name),m.a.createElement(S.a,{data:{Data:m.a.createElement(R.a,{data:t}),Raw:m.a.createElement(R.a,{data:"https://api.atlasacademy.io/raw/".concat(this.props.region,"/servant/").concat(this.props.servant.id,"?expand=true&lore=true")}),ID:t.id,Collection:t.collectionNo,Name:t.name,Class:t.className,Rarity:m.a.createElement(w.a,{rarity:t.rarity}),Cost:t.cost,Attribute:t.attribute,Hp:m.a.createElement("div",null,"Base: ",Object(C.b)(t.hpBase),"\xa0\xa0\xa0\xa0 Max: ",Object(C.b)(t.hpMax)),Atk:m.a.createElement("div",null,"Base: ",Object(C.b)(t.atkBase),"\xa0\xa0\xa0\xa0 Max: ",Object(C.b)(t.atkMax)),Cards:m.a.createElement("div",null,t.cards.map((function(a,n){return m.a.createElement(T.a,{key:n,height:60,card:a,servant:t,assetType:e.props.assetType,assetId:e.props.assetId})}))),"Bond CE":t.bondEquip?m.a.createElement(P,{region:this.props.region,id:t.bondEquip}):""}}))}}]),a}(m.a.Component),D=a(11),G=a(167),M=(a(265),new Map([[D.h.ItemBackgroundType.ZERO,"assets/list/listframes0_bg.png"],[D.h.ItemBackgroundType.BRONZE,"assets/list/listframes1_bg.png"],[D.h.ItemBackgroundType.SILVER,"assets/list/listframes2_bg.png"],[D.h.ItemBackgroundType.GOLD,"assets/list/listframes3_bg.png"],[D.h.ItemBackgroundType.QUEST_CLEAR_QP_REWARD,"assets/list/listframes4_bg.png"]])),L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"getQuantity",value:function(){var e;if(this.props.quantity){var t=Math.floor(this.props.quantity),a=Object(C.b)(t),n=null!==(e=this.props.quantityHeight)&&void 0!==e?e:"1em";return m.a.createElement("span",{className:"item-icon-quantity",style:{fontSize:n}},a)}}},{key:"render",value:function(){var e,t,a=null!==(e=M.get(this.props.item.background))&&void 0!==e?e:"listframes0_bg.png",n=null!==(t=this.props.height)&&void 0!==t?t:"2em";return m.a.createElement("span",{className:"item-icon",style:{height:n}},m.a.createElement("img",{alt:"",className:"item-icon-ratio",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}),m.a.createElement("img",{alt:"",className:"item-icon-bg",src:a}),m.a.createElement("img",{alt:"",className:"item-icon-image",src:this.props.item.icon}),this.getQuantity())}}]),a}(m.a.Component),q={id:1,name:"QP",type:D.h.ItemType.QP,icon:"https://assets.atlasacademy.io/GameData/NA/Items/5.png",background:D.h.ItemBackgroundType.ZERO},K=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"getMaxMaterialCount",value:function(){var e=Object.values(this.props.materials).map((function(e){return e.items.length}));return e.length?Math.max.apply(Math,Object(k.a)(e)):0}},{key:"populateRemainingCells",value:function(e,t){return t>=e?[]:Object(k.a)(Array(e-t)).map((function(e,t){return m.a.createElement("td",{key:t})}))}},{key:"render",value:function(){var e=this,t=this.getMaxMaterialCount();return m.a.createElement("div",null,m.a.createElement("h3",null,this.props.title),m.a.createElement(G.a,null,m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"QP"),this.populateRemainingCells(t,0))),m.a.createElement("tbody",null,Object.keys(this.props.materials).map((function(a){return m.a.createElement("tr",{key:a},m.a.createElement("td",{style:{verticalAlign:"middle"}},a),m.a.createElement("td",null,m.a.createElement(L,{region:e.props.region,item:q,quantity:e.props.materials[a].qp,height:75,quantityHeight:11})),e.props.materials[a].items.map((function(t,a){return m.a.createElement("td",{key:a},m.a.createElement(L,{region:e.props.region,item:t.item,quantity:t.amount,height:75,quantityHeight:18}))})),e.populateRemainingCells(t,e.props.materials[a].items.length))})))))}}]),a}(m.a.Component),Q=a(147),H="https://assets.atlasacademy.io/GameData/JP/BuffIcons",V="".concat(H,"/bufficon_337.png"),U="".concat(H,"/bufficon_349.png"),F="".concat(H,"/bufficon_320.png"),J=function(e){return void 0===e?"":m.a.createElement("span",null,e.map((function(e,t){return(t>0?", ":"")+Object(C.a)(e,0)})),"\xa0-\xa0",e.length," Hits")},W=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"hitsColumn",value:function(){return m.a.createElement(d.a,{xs:12,md:12,lg:6},m.a.createElement(S.a,{header:m.a.createElement("div",null,m.a.createElement(Q.a,{location:U}),"\xa0 Hit Count"),data:{Buster:J(this.props.servant.hitsDistribution.buster),Arts:J(this.props.servant.hitsDistribution.arts),Quick:J(this.props.servant.hitsDistribution.quick),Extra:J(this.props.servant.hitsDistribution.extra)}}))}},{key:"miscColumn",value:function(){return m.a.createElement(d.a,{xs:12,md:12,lg:6},m.a.createElement(S.a,{header:m.a.createElement("div",null,m.a.createElement(Q.a,{location:F}),"\xa0Crit Stars"),data:{"Star Absorb":this.props.servant.starAbsorb,"Star Gen":Object(C.a)(this.props.servant.starGen,1)}}),m.a.createElement(S.a,{header:m.a.createElement("div",null,m.a.createElement(Q.a,{location:V}),"\xa0Instant Death"),data:{"Death Chance":Object(C.a)(this.props.servant.instantDeathChance,1)}}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(h.a,null,this.hitsColumn(),this.miscColumn()))}}]),a}(m.a.Component),Z=a(138),z=a(153),X=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"changeServant",value:function(e){this.props.history.push("/".concat(this.props.region,"/servant/").concat(e))}},{key:"render",value:function(){var e=this,t=this.props.servants.slice().reverse(),a=new Map(t.map((function(e){return[e.collectionNo,"".concat(e.collectionNo.toString().padStart(3,"0")," - ").concat(e.name)]})));return m.a.createElement("div",null,m.a.createElement("form",null,m.a.createElement(Z.a.Group,null,m.a.createElement(Z.a.Label,null,"Jump to:"),m.a.createElement(z.a,{id:"servantPicker",options:t.map((function(e){return e.collectionNo})),labels:a,selected:this.props.id,hideAll:!0,hideReset:!0,disableLabelStyling:!0,maxResults:20,onChange:function(t){t&&e.changeServant(t)}}))))}}]),a}(m.a.Component),Y=Object(f.f)(X),$=(a(266),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r;Object(l.a)(this,a),r=t.call(this,e);var s=null!==(n=e.servant.extraAssets.charaGraph.ascension)&&void 0!==n?n:Object.values(e.servant.extraAssets.charaGraph).shift(),i=void 0===s?void 0:Object.keys(s).shift();return r.state={assetMap:s,assetKey:i},r}return Object(c.a)(a,[{key:"getAssetArray",value:function(){if(!this.props.servant.extraAssets.charaGraph)return[];var e=this.props.servant.extraAssets.charaGraph,t=[];return e.ascension&&Object.keys(e.ascension).forEach((function(e){t.push({assetType:"ascension",assetId:parseInt(e)})})),e.costume&&Object.keys(e.costume).forEach((function(e){t.push({assetType:"costume",assetId:parseInt(e)})})),t}},{key:"getAssetLocation",value:function(){if(void 0!==this.props.assetType&&void 0!==this.props.assetId&&this.props.servant.extraAssets.charaGraph){if("ascension"===this.props.assetType){var e=this.props.servant.extraAssets.charaGraph.ascension;return e?e[this.props.assetId]:void 0}if("costume"===this.props.assetType){var t=this.props.servant.extraAssets.charaGraph.costume;return t?t[this.props.assetId]:void 0}}}},{key:"getArrow",value:function(e,t){var a,n=this,r=void 0;if((e.find((function(e,t){return e.assetType===n.props.assetType&&e.assetId===n.props.assetId&&(r=t,!0)})),void 0!==r)&&(t&&r+1<e.length&&(a=e[r+1]),!t&&r>0&&(a=e[r-1]),void 0!==a))return m.a.createElement("img",{alt:"",className:"arrow ".concat(t?"":"back"),src:"assets/img_arrow_load.png",onClick:function(){var e,t;n.props.updatePortraitCallback.call(null,null===(e=a)||void 0===e?void 0:e.assetType,null===(t=a)||void 0===t?void 0:t.assetId)}})}},{key:"render",value:function(){var e=this.getAssetArray();return m.a.createElement("div",null,m.a.createElement("div",{id:"servant-portrait"},this.getArrow(e,!1),this.getArrow(e,!0),m.a.createElement("img",{alt:this.props.servant.name,id:"servant-portrait-image",src:this.getAssetLocation()})))}}]),a}(m.a.Component)),ee=a(191),te=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e,t=null===(e=this.props.profile)||void 0===e?void 0:e.stats;return m.a.createElement("div",null,m.a.createElement("h3",null,"Stats"),m.a.createElement(G.a,{responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Strength"),m.a.createElement("th",null,"Endurance"),m.a.createElement("th",null,"Agility"),m.a.createElement("th",null,"Magic"),m.a.createElement("th",null,"Luck"),m.a.createElement("th",null,"NP"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,null===t||void 0===t?void 0:t.strength),m.a.createElement("td",null,null===t||void 0===t?void 0:t.endurance),m.a.createElement("td",null,null===t||void 0===t?void 0:t.agility),m.a.createElement("td",null,null===t||void 0===t?void 0:t.magic),m.a.createElement("td",null,null===t||void 0===t?void 0:t.luck),m.a.createElement("td",null,null===t||void 0===t?void 0:t.np)))))}}]),a}(m.a.Component),ae=a(187),ne=a(142),re=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,Object(C.d)(this.props.traits.map((function(t){return m.a.createElement(ne.a,{region:e.props.region,trait:t})})),", ").map((function(e,t){return m.a.createElement("span",{key:t},e)})),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null))}}]),a}(m.a.Component),se=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loading:!0,id:n.props.id,servants:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){j.a.setRegion(this.props.region),this.loadServant()}},{key:"loadServant",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,i,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([b.a.servantList(),b.a.servant(this.state.id),b.a.traitList()]);case 3:t=e.sent,a=Object(s.a)(t,2),n=a[0],(i=a[1]).extraAssets.charaGraph.ascension&&(l="ascension",void 0!==(c=Object.keys(i.extraAssets.charaGraph.ascension).shift())&&(c=parseInt(c))),void 0===c&&i.extraAssets.charaGraph.costume&&(l="costume",void 0!==(c=Object.keys(i.extraAssets.charaGraph.costume).shift())&&(c=parseInt(c))),this.setState({loading:!1,servants:n,servant:i,assetType:l,assetId:c}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),this.setState({error:e.t0});case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"updatePortrait",value:function(e,t){this.setState({assetType:e,assetId:t})}},{key:"render",value:function(){var e,t,a,n=this;if(this.state.error)return m.a.createElement(O.a,{error:this.state.error});if(this.state.loading||!this.state.servant)return m.a.createElement(A.a,null);var r=this.state.servant;return m.a.createElement("div",{id:"servant"},m.a.createElement(Y,{region:this.props.region,servants:this.state.servants,id:this.state.servant.collectionNo}),m.a.createElement("hr",null),m.a.createElement(h.a,null,m.a.createElement(d.a,{xs:{span:12,order:2},lg:{span:6,order:1}},m.a.createElement(B,{region:this.props.region,servant:this.state.servant,assetType:this.state.assetType,assetId:this.state.assetId})),m.a.createElement(d.a,{xs:{span:12,order:1},lg:{span:6,order:2}},m.a.createElement($,{servant:this.state.servant,assetType:this.state.assetType,assetId:this.state.assetId,updatePortraitCallback:function(e,t){n.updatePortrait(e,t)}}))),m.a.createElement(v.a,{id:"servant-tabs",defaultActiveKey:null!==(e=this.props.tab)&&void 0!==e?e:"skill-1",transition:!1,onSelect:function(e){n.props.history.replace("/".concat(n.props.region,"/servant/").concat(n.props.id,"/").concat(e))}},m.a.createElement(E.a,{eventKey:"skill-1",title:"Skill 1"},m.a.createElement("br",null),this.state.servant.skills.filter((function(e){return 1===e.num})).map((function(e,t){return m.a.createElement(y.a,{region:n.props.region,key:t,skill:e,cooldowns:!0,levels:10})}))),m.a.createElement(E.a,{eventKey:"skill-2",title:"Skill 2"},m.a.createElement("br",null),this.state.servant.skills.filter((function(e){return 2===e.num})).map((function(e,t){return m.a.createElement(y.a,{region:n.props.region,key:t,skill:e,cooldowns:!0,levels:10})}))),m.a.createElement(E.a,{eventKey:"skill-3",title:"Skill 3"},m.a.createElement("br",null),this.state.servant.skills.filter((function(e){return 3===e.num})).map((function(e,t){return m.a.createElement(y.a,{region:n.props.region,key:t,skill:e,cooldowns:!0,levels:10})}))),m.a.createElement(E.a,{eventKey:"noble-phantasms",title:"Noble Phantasms"},m.a.createElement("br",null),this.state.servant.noblePhantasms.filter((function(e){return e.functions.length>0})).map((function(e,t){return m.a.createElement(g.a,{key:t,region:n.props.region,servant:r,noblePhantasm:e,assetType:n.state.assetType,assetId:n.state.assetId})}))),m.a.createElement(E.a,{eventKey:"passives",title:"Passives"},m.a.createElement("br",null),m.a.createElement(h.a,null,r.classPassive.map((function(e,t){var a;return m.a.createElement(d.a,{xs:12,lg:(null!==(a=r.classPassive.length)&&void 0!==a?a:1)>1?6:12,key:t},m.a.createElement(y.a,{region:n.props.region,skill:e,cooldowns:!1}))})))),m.a.createElement(E.a,{eventKey:"traits",title:"Traits"},m.a.createElement("br",null),m.a.createElement(re,{region:this.props.region,traits:this.state.servant.traits})),m.a.createElement(E.a,{eventKey:"materials",title:"Materials"},m.a.createElement("br",null),m.a.createElement(h.a,null,m.a.createElement(d.a,{xs:12,lg:6},m.a.createElement(K,{region:this.props.region,materials:r.ascensionMaterials,title:"Ascension Materials"})),m.a.createElement(d.a,{xs:12,lg:6},m.a.createElement(K,{region:this.props.region,materials:r.skillMaterials,title:"Skill Materials"})))),m.a.createElement(E.a,{eventKey:"stat-growth",title:"Stat Growth"},m.a.createElement("br",null),m.a.createElement(ae.a,{region:this.props.region,servant:r})),m.a.createElement(E.a,{eventKey:"misc",title:"Misc"},m.a.createElement("br",null),m.a.createElement(W,{servant:this.state.servant})),m.a.createElement(E.a,{eventKey:"lore",title:"Profile"},m.a.createElement("br",null),m.a.createElement(te,{region:this.props.region,profile:r.profile}),m.a.createElement("hr",null),m.a.createElement(ee.a,{region:this.props.region,comments:null!==(t=null===(a=r.profile)||void 0===a?void 0:a.comments)&&void 0!==t?t:[]})),m.a.createElement(E.a,{eventKey:"assets",title:"Assets"},m.a.createElement("br",null),m.a.createElement(x,{region:this.props.region,servant:r}))))}}]),a}(m.a.Component);t.default=Object(f.f)(se)}}]);
//# sourceMappingURL=9.70670579.chunk.js.map