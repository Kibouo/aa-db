(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),i=a.n(c),l=a(28),u=a.n(l),o=a(6),s=a(7),E=a(9),A=a(8),p=(a(81),a(111)),N=a(24),_=a(10),m=a(48),d=a(69),T=a(41),f=a(118),O=a(117),v=a(68),h=a(112),D=a(115),S=a(116);!function(e){e.DEFAULT="Default",e.ENGLISH="English"}(n||(n={})),function(e){e.JP="JP",e.NA="NA"}(r||(r={}));var g=[],I=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"language",value:function(){var e=window.localStorage.getItem("language"),t=Object.values(n).find((function(t){return t===e}));return null!==t&&void 0!==t?t:n.DEFAULT}},{key:"region",value:function(){var e=window.localStorage.getItem("region"),t=Object.values(r).find((function(t){return t===e}));return null!==t&&void 0!==t?t:r.JP}},{key:"setLanguage",value:function(t){var a=Object.values(n).find((function(e){return e===t}));void 0!==a&&(window.localStorage.setItem("language",a),e.triggerCallbacks())}},{key:"setRegion",value:function(t){var a=Object.values(r).find((function(e){return e===t}));void 0!==a&&(window.localStorage.setItem("region",a),e.triggerCallbacks())}},{key:"onUpdate",value:function(e){g.push(e)}},{key:"triggerCallbacks",value:function(){g.forEach((function(e){e.call(null)}))}}]),e}(),R=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={region:I.region(),language:I.language()},I.onUpdate((function(){return n.syncSettings()})),n}return Object(s.a)(a,[{key:"syncSettings",value:function(){this.setState({region:I.region(),language:I.language()})}},{key:"updateLanguage",value:function(e){I.setLanguage(e)}},{key:"updateRegion",value:function(e){I.setRegion(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(S.a,null,i.a.createElement(S.a.Group,null,i.a.createElement(S.a.Label,null,"Region"),i.a.createElement(S.a.Control,{as:"select",value:this.state.region,onChange:function(t){return e.updateRegion(t.target.value)}},Object.values(r).map((function(e){return i.a.createElement("option",{value:e},e)})))),i.a.createElement(S.a.Group,null,i.a.createElement(S.a.Label,null,"Language"),i.a.createElement(S.a.Control,{as:"select",value:this.state.language,onChange:function(t){return e.updateLanguage(t.target.value)}},Object.values(n).map((function(e){return i.a.createElement("option",{value:e},e)}))))))}}]),a}(i.a.Component),P=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showSettings:!1},n}return Object(s.a)(a,[{key:"hideSettings",value:function(){this.setState({showSettings:!1})}},{key:"showSettings",value:function(){this.setState({showSettings:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(f.a,{bg:"dark",variant:"dark",expand:"lg"},i.a.createElement(p.a,null,i.a.createElement(N.b,{to:"/",className:"navbar-brand"},"AA-DB"),i.a.createElement(f.a.Toggle,null),i.a.createElement(f.a.Collapse,null,i.a.createElement(O.a,null,i.a.createElement(N.b,{to:"/servants",className:"nav-link"},i.a.createElement(v.a,null,"Servants"))),i.a.createElement(O.a,{className:"ml-auto"},i.a.createElement(O.a.Link,{href:"https://discord.gg/TKJmuCR",target:"_blank"},i.a.createElement(T.a,{icon:m.a})),i.a.createElement(O.a.Link,{href:"https://github.com/atlasacademy/aa-db",target:"_blank"},i.a.createElement(T.a,{icon:m.b})),i.a.createElement(h.a,{variant:"primary",onClick:function(){return e.showSettings()}},i.a.createElement(T.a,{icon:d.a})))))),i.a.createElement(D.a,{show:this.state.showSettings,onHide:function(){return e.hideSettings()}},i.a.createElement(D.a.Header,{closeButton:!0},i.a.createElement(D.a.Title,null,"Settings")),i.a.createElement(D.a.Body,null,i.a.createElement(R,null))))}}]),a}(i.a.Component),C=a(21),b=a.n(C),U=a(74),L=a(32),y=a(114),G=a(64),M=a(50),H=a(73),F=a.n(H),w="https://api.atlasacademy.io",k=function(){var e=Object(L.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t;return(e=null!==(t=e)&&void 0!==t?t:I.region())===r.NA?"NA":"JP"},V=new Map,B=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"servant",value:function(e){var t="?lore=true"+(I.language()===n.ENGLISH?"&lang=en":"");return k("".concat(w,"/nice/").concat(j(),"/servant/").concat(e).concat(t))}},{key:"servantList",value:function(){var t=Object(L.a)(b.a.mark((function t(){var a,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(I.region()!==r.NA){t.next=4;break}return t.abrupt("return",e.getCacheableServantList(r.NA));case 4:if(I.region()!==r.JP||I.language()!==n.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableServantList(r.JP));case 6:return t.next=8,e.getCacheableServantList(r.JP);case 8:return a=t.sent,t.next=11,e.getCacheableServantList(r.NA);case 11:return c=t.sent,i=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",a.map((function(e){var t;return Object(M.a)(Object(M.a)({},e),{},{name:null!==(t=i.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getCacheableServantList",value:function(){var e=Object(L.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(a=V.get(t))){e.next=3;break}return e.abrupt("return",a);case 3:return e.next=5,k("".concat(w,"/export/").concat(j(t),"/basic_servant.json"));case 5:return a=e.sent,V.set(t,a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();var W=function(){return i.a.createElement("div",null,"Loading ...")},x=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e;return i.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:25}})}}]),a}(i.a.Component),Y=a(113),K=(a(106),function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.props.header?i.a.createElement("div",{className:"data-header"},this.props.header):null,i.a.createElement(Y.a,{bordered:!0,hover:!0,className:"data-table"},i.a.createElement("tbody",null,Object.keys(this.props.data).map((function(t,a){return i.a.createElement("tr",{key:a},i.a.createElement("th",null,t),i.a.createElement("td",null,e.props.data[t]))})))))}}]),a}(i.a.Component));function J(e){return"".concat((null!==e&&void 0!==e?e:0)/10,"%")}var X,Q="https://assets.atlasacademy.io/GameData/JP/BuffIcons",q="".concat(Q,"/bufficon_337.png"),z="".concat(Q,"/bufficon_349.png"),$="".concat(Q,"/bufficon_303.png"),Z="".concat(Q,"/bufficon_310.png"),ee=function(e){return void 0===e?"":i.a.createElement("span",null,e.map((function(e,t){return(t>0?", ":"")+e+"%"})),"\xa0-\xa0",e.length," Hits")},te=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.servant;return i.a.createElement("div",null,i.a.createElement(y.a,null,i.a.createElement(G.a,null,i.a.createElement(K,{header:i.a.createElement("div",null,i.a.createElement(x,{location:Z}),"\xa0Crit Stars"),data:{"Star Absorb":e.starAbsorb,"Star Gen":J(e.starGen)}}),i.a.createElement(K,{header:i.a.createElement("div",null,i.a.createElement(x,{location:q}),"\xa0Instant Death"),data:{"Death Chance":J(e.instantDeathChance)}})),i.a.createElement(G.a,null,i.a.createElement(K,{header:i.a.createElement("div",null,i.a.createElement(x,{location:$}),"\xa0NP Gain"),data:{Buster:J(e.npGain.buster),Arts:J(e.npGain.arts),Quick:J(e.npGain.quick),Extra:J(e.npGain.extra),Defense:J(e.npGain.defence)}})),i.a.createElement(G.a,null,i.a.createElement(K,{header:i.a.createElement("div",null,i.a.createElement(x,{location:z}),"\xa0 Hit Count"),data:{Buster:ee(e.hitsDistribution.buster),Arts:ee(e.hitsDistribution.arts),Quick:ee(e.hitsDistribution.quick),Extra:ee(e.hitsDistribution.extra)}}))))}}]),a}(i.a.Component);!function(e){e.SABER="saber",e.ARCHER="archer",e.LANCER="lancer",e.RIDER="rider",e.CASTER="caster",e.ASSASSIN="assassin",e.BERSERKER="berserker",e.SHIELDER="shielder",e.RULER="ruler",e.ALTER_EGO="alterEgo",e.AVENGER="avenger",e.GRAND_CASTER="grandCaster",e.BEAST_II="beastII",e.BEAST_I="beastI",e.MOON_CANCER="moonCancer",e.BEAST_IIIR="beastIIIR",e.FOREIGNER="foreigner",e.BEAST_IIIL="beastIIIL",e.BEAST_UNKNOWN="beastUnknown",e.ALL="ALL"}(X||(X={}));var ae,ne,re,ce,ie,le=X,ue=new Map([[1,1],[2,1],[3,2],[4,3],[5,3]]),oe=new Map([[le.SABER,1],[le.ARCHER,2],[le.LANCER,3],[le.RIDER,4],[le.CASTER,5],[le.ASSASSIN,6],[le.BERSERKER,7],[le.SHIELDER,8],[le.RULER,9],[le.ALTER_EGO,10],[le.AVENGER,11]]),se=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("img",{alt:"",src:this.location(),style:this.props.height?{height:this.props.height}:void 0})}},{key:"location",value:function(){var e,t=oe.has(this.props.className)?oe.get(this.props.className):12,a=null!==(e=this.props.rarity)&&void 0!==e?e:5,n=ue.has(a)?ue.get(a):3;return"https://assets.atlasacademy.io/GameData/NA/ClassIcons/class".concat(n,"_").concat(t,".png")}}]),a}(i.a.Component),Ee=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.servant;return i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(se,{className:e.className,rarity:e.rarity}),"\xa0",e.name),i.a.createElement(K,{data:{ID:e.id,Collection:e.collectionNo,Name:e.name,Class:e.className,Rarity:e.rarity,Cost:e.cost,"Max Lv.":e.lvMax,"Max Hp":e.hpMax,"Max Atk":e.atkMax,Gender:e.gender,Attribute:e.attribute,Traits:e.traits.map((function(e){return e.name})).join(", ")}}))}}]),a}(i.a.Component);!function(e){e.NONE="none",e.ADD_STATE="addState",e.SUB_STATE="subState",e.DAMAGE="damage",e.DAMAGE_NP="damageNp",e.GAIN_STAR="gainStar",e.GAIN_HP="gainHp",e.GAIN_NP="gainNp",e.LOSS_NP="lossNp",e.SHORTEN_SKILL="shortenSkill",e.EXTEND_SKILL="extendSkill",e.RELEASE_STATE="releaseState",e.LOSS_HP="lossHp",e.INSTANT_DEATH="instantDeath",e.DAMAGE_NP_PIERCE="damageNpPierce",e.DAMAGE_NP_INDIVIDUAL="damageNpIndividual",e.ADD_STATE_SHORT="addStateShort",e.GAIN_HP_PER="gainHpPer",e.DAMAGE_NP_STATE_INDIVIDUAL="damageNpStateIndividual",e.HASTEN_NPTURN="hastenNpturn",e.DELAY_NPTURN="delayNpturn",e.DAMAGE_NP_HPRATIO_HIGH="damageNpHpratioHigh",e.DAMAGE_NP_HPRATIO_LOW="damageNpHpratioLow",e.CARD_RESET="cardReset",e.REPLACE_MEMBER="replaceMember",e.LOSS_HP_SAFE="lossHpSafe",e.DAMAGE_NP_COUNTER="damageNpCounter",e.DAMAGE_NP_STATE_INDIVIDUAL_FIX="damageNpStateIndividualFix",e.DAMAGE_NP_SAFE="damageNpSafe",e.CALL_SERVANT="callServant",e.PT_SHUFFLE="ptShuffle",e.LOSS_STAR="lossStar",e.CHANGE_SERVANT="changeServant",e.CHANGE_BG="changeBg",e.DAMAGE_VALUE="damageValue",e.WITHDRAW="withdraw",e.FIX_COMMANDCARD="fixCommandcard",e.SHORTEN_BUFFTURN="shortenBuffturn",e.EXTEND_BUFFTURN="extendBuffturn",e.SHORTEN_BUFFCOUNT="shortenBuffcount",e.EXTEND_BUFFCOUNT="extendBuffcount",e.CHANGE_BGM="changeBgm",e.DISPLAY_BUFFSTRING="displayBuffstring",e.EXP_UP="expUp",e.QP_UP="qpUp",e.DROP_UP="dropUp",e.FRIEND_POINT_UP="friendPointUp",e.EVENT_DROP_UP="eventDropUp",e.EVENT_DROP_RATE_UP="eventDropRateUp",e.EVENT_POINT_UP="eventPointUp",e.EVENT_POINT_RATE_UP="eventPointRateUp",e.TRANSFORM_SERVANT="transformServant",e.QP_DROP_UP="qpDropUp",e.SERVANT_FRIENDSHIP_UP="servantFriendshipUp",e.USER_EQUIP_EXP_UP="userEquipExpUp",e.CLASS_DROP_UP="classDropUp",e.ENEMY_ENCOUNT_COPY_RATE_UP="enemyEncountCopyRateUp",e.ENEMY_ENCOUNT_RATE_UP="enemyEncountRateUp",e.ENEMY_PROB_DOWN="enemyProbDown"}(ae||(ae={})),function(e){e.SELF="self",e.PT_ONE="ptOne",e.PT_ANOTHER="ptAnother",e.PT_ALL="ptAll",e.ENEMY="enemy",e.ENEMY_ANOTHER="enemyAnother",e.ENEMY_ALL="enemyAll",e.PT_FULL="ptFull",e.ENEMY_FULL="enemyFull",e.PT_OTHER="ptOther",e.PT_ONE_OTHER="ptOneOther",e.PT_RANDOM="ptRandom",e.ENEMY_OTHER="enemyOther",e.ENEMY_RANDOM="enemyRandom",e.PT_OTHER_FULL="ptOtherFull",e.ENEMY_OTHER_FULL="enemyOtherFull",e.PTSELECT_ONE_SUB="ptselectOneSub",e.PTSELECT_SUB="ptselectSub",e.PT_ONE_ANOTHER_RANDOM="ptOneAnotherRandom"}(ne||(ne={})),function(e){e.PLAYER="player",e.ENEMY="enemy",e.PLAYER_AND_ENEMY="playerAndEnemy"}(re||(re={})),function(e){e.RATE="Rate",e.TURN="Turn",e.COUNT="Count",e.VALUE="Value",e.VALUE2="Value2",e.USE_RATE="UseRate",e.TARGET="Target",e.CORRECTION="Correction",e.PARAM_ADD="ParamAdd",e.PARAM_MAX="ParamMax",e.HIDE_MISS="HideMiss",e.ON_FIELD="OnField",e.HIDE_NO_EFFECT="HideNoEffect",e.UNAFFECTED="Unaffected",e.SHOW_STATE="ShowState",e.AURA_EFFECT_ID="AuraEffectId",e.ACT_SET="ActSet",e.ACT_SET_WEIGHT="ActSetWeight",e.SHOW_QUEST_NO_EFFECT="ShowQuestNoEffect",e.CHECK_DEAD="CheckDead",e.RATIO_HP_HIGH="RatioHPHigh",e.RATIO_HP_LOW="RatioHPLow",e.SET_PASSIVE_FRAME="SetPassiveFrame",e.PROC_PASSIVE="ProcPassive",e.PROC_ACTIVE="ProcActive",e.HIDE_PARAM="HideParam",e.SKILL_ID="SkillID",e.SKILL_LV="SkillLV",e.SHOW_CARD_ONLY="ShowCardOnly",e.EFFECT_SUMMON="EffectSummon",e.RATIO_HP_RANGE_HIGH="RatioHPRangeHigh",e.RATIO_HP_RANGE_LOW="RatioHPRangeLow",e.TARGET_LIST="TargetList",e.OPPONENT_ONLY="OpponentOnly",e.TARGET_RARITY_LIST="TargetRarityList"}(ce||(ce={})),function(e){e.NONE="none",e.UP_COMMANDATK="upCommandatk",e.UP_STARWEIGHT="upStarweight",e.UP_CRITICALPOINT="upCriticalpoint",e.DOWN_CRITICALPOINT="downCriticalpoint",e.REGAIN_NP="regainNp",e.REGAIN_STAR="regainStar",e.REGAIN_HP="regainHp",e.REDUCE_HP="reduceHp",e.UP_ATK="upAtk",e.DOWN_ATK="downAtk",e.UP_DAMAGE="upDamage",e.DOWN_DAMAGE="downDamage",e.ADD_DAMAGE="addDamage",e.SUB_DAMAGE="subDamage",e.UP_NPDAMAGE="upNpdamage",e.DOWN_NPDAMAGE="downNpdamage",e.UP_DROPNP="upDropnp",e.UP_CRITICALDAMAGE="upCriticaldamage",e.DOWN_CRITICALDAMAGE="downCriticaldamage",e.UP_SELFDAMAGE="upSelfdamage",e.DOWN_SELFDAMAGE="downSelfdamage",e.ADD_SELFDAMAGE="addSelfdamage",e.SUB_SELFDAMAGE="subSelfdamage",e.AVOIDANCE="avoidance",e.BREAK_AVOIDANCE="breakAvoidance",e.INVINCIBLE="invincible",e.UP_GRANTSTATE="upGrantstate",e.DOWN_GRANTSTATE="downGrantstate",e.UP_TOLERANCE="upTolerance",e.DOWN_TOLERANCE="downTolerance",e.AVOID_STATE="avoidState",e.DONOT_ACT="donotAct",e.DONOT_SKILL="donotSkill",e.DONOT_NOBLE="donotNoble",e.DONOT_RECOVERY="donotRecovery",e.DISABLE_GENDER="disableGender",e.GUTS="guts",e.UP_HATE="upHate",e.ADD_INDIVIDUALITY="addIndividuality",e.SUB_INDIVIDUALITY="subIndividuality",e.UP_DEFENCE="upDefence",e.DOWN_DEFENCE="downDefence",e.UP_COMMANDSTAR="upCommandstar",e.UP_COMMANDNP="upCommandnp",e.UP_COMMANDALL="upCommandall",e.DOWN_COMMANDALL="downCommandall",e.DOWN_STARWEIGHT="downStarweight",e.REDUCE_NP="reduceNp",e.DOWN_DROPNP="downDropnp",e.UP_GAIN_HP="upGainHp",e.DOWN_GAIN_HP="downGainHp",e.DOWN_COMMANDATK="downCommandatk",e.DOWN_COMMANSTAR="downCommanstar",e.DOWN_COMMANDNP="downCommandnp",e.UP_CRITICALRATE="upCriticalrate",e.DOWN_CRITICALRATE="downCriticalrate",e.PIERCE_INVINCIBLE="pierceInvincible",e.AVOID_INSTANTDEATH="avoidInstantdeath",e.UP_RESIST_INSTANTDEATH="upResistInstantdeath",e.UP_NONRESIST_INSTANTDEATH="upNonresistInstantdeath",e.DELAY_FUNCTION="delayFunction",e.REGAIN_NP_USED_NOBLE="regainNpUsedNoble",e.DEAD_FUNCTION="deadFunction",e.UP_MAXHP="upMaxhp",e.DOWN_MAXHP="downMaxhp",e.ADD_MAXHP="addMaxhp",e.SUB_MAXHP="subMaxhp",e.BATTLESTART_FUNCTION="battlestartFunction",e.WAVESTART_FUNCTION="wavestartFunction",e.SELFTURNEND_FUNCTION="selfturnendFunction",e.UP_GIVEGAIN_HP="upGivegainHp",e.DOWN_GIVEGAIN_HP="downGivegainHp",e.COMMANDATTACK_FUNCTION="commandattackFunction",e.DEADATTACK_FUNCTION="deadattackFunction",e.UP_SPECIALDEFENCE="upSpecialdefence",e.DOWN_SPECIALDEFENCE="downSpecialdefence",e.UP_DAMAGEDROPNP="upDamagedropnp",e.DOWN_DAMAGEDROPNP="downDamagedropnp",e.ENTRY_FUNCTION="entryFunction",e.UP_CHAGETD="upChagetd",e.REFLECTION_FUNCTION="reflectionFunction",e.UP_GRANT_SUBSTATE="upGrantSubstate",e.DOWN_GRANT_SUBSTATE="downGrantSubstate",e.UP_TOLERANCE_SUBSTATE="upToleranceSubstate",e.DOWN_TOLERANCE_SUBSTATE="downToleranceSubstate",e.UP_GRANT_INSTANTDEATH="upGrantInstantdeath",e.DOWN_GRANT_INSTANTDEATH="downGrantInstantdeath",e.GUTS_RATIO="gutsRatio",e.DAMAGE_FUNCTION="damageFunction",e.UP_DEFENCECOMMANDALL="upDefencecommandall",e.DOWN_DEFENCECOMMANDALL="downDefencecommandall",e.OVERWRITE_BATTLECLASS="overwriteBattleclass",e.OVERWRITE_CLASSRELATIO_ATK="overwriteClassrelatioAtk",e.OVERWRITE_CLASSRELATIO_DEF="overwriteClassrelatioDef",e.UP_DAMAGE_INDIVIDUALITY="upDamageIndividuality",e.DOWN_DAMAGE_INDIVIDUALITY="downDamageIndividuality",e.UP_DAMAGE_INDIVIDUALITY_ACTIVEONLY="upDamageIndividualityActiveonly",e.DOWN_DAMAGE_INDIVIDUALITY_ACTIVEONLY="downDamageIndividualityActiveonly",e.UP_NPTURNVAL="upNpturnval",e.DOWN_NPTURNVAL="downNpturnval",e.MULTIATTACK="multiattack",e.UP_GIVE_NP="upGiveNp",e.DOWN_GIVE_NP="downGiveNp",e.UP_RESISTANCE_DELAY_NPTURN="upResistanceDelayNpturn",e.DOWN_RESISTANCE_DELAY_NPTURN="downResistanceDelayNpturn",e.PIERCE_DEFENCE="pierceDefence",e.UP_GUTS_HP="upGutsHp",e.DOWN_GUTS_HP="downGutsHp",e.UP_FUNCGAIN_NP="upFuncgainNp",e.DOWN_FUNCGAIN_NP="downFuncgainNp",e.UP_FUNC_HP_REDUCE="upFuncHpReduce",e.DOWN_FUNC_HP_REDUCE="downFuncHpReduce",e.UP_DEFENCECOMMAN_DAMAGE="upDefencecommanDamage",e.DOWN_DEFENCECOMMAN_DAMAGE="downDefencecommanDamage",e.NPATTACK_PREV_BUFF="npattackPrevBuff",e.FIX_COMMANDCARD="fixCommandcard",e.DONOT_GAINNP="donotGainnp",e.FIELD_INDIVIDUALITY="fieldIndividuality",e.DONOT_ACT_COMMANDTYPE="donotActCommandtype",e.UP_DAMAGE_EVENT_POINT="upDamageEventPoint"}(ie||(ie={}));var Ae=function(e){if(!e.length)return!1;for(var t=e[0],a=1;a<e.length;a++){if(JSON.stringify(t)!==JSON.stringify(e[a]))return!0;t=e[a]}return!1},pe=function(e){return new Set(e).size>1};function Ne(e){var t=me(e),a=!t&&de(e),n=function(e){if(!e.length)return{};var t=function(e){return Object.values(ce).filter((function(t){var a=e.map((function(e){return e[t]}));return!pe(a)}))}(e),a={};for(var n in t)a[t[n]]=e[0][t[n]];return a}(t?Te(e):a?fe(e):e.svals),r="";return n.Rate&&1e3!==n.Rate&&(r+=n.Rate/10+"% Chance to "),e.funcType===ae.DAMAGE_NP?r+="Deal damage ":e.funcType===ae.DAMAGE_NP_PIERCE?r+="Deal damage that pierces defence ":e.funcType===ae.ADD_STATE||e.funcType===ae.ADD_STATE_SHORT?r+="Apply "+e.buffs.map((function(e){return'"'.concat(e.detail,'"')})).join(" & ")+" ":e.funcType===ae.GAIN_NP?r+="Charge NP ":e.funcType===ae.GAIN_HP&&(r+="Gain HP "),e.funcTargetType===ne.ENEMY_ALL?r+="to all enemies ":e.funcTargetType===ne.PT_ALL?r+="to party ":e.funcTargetType===ne.PT_OTHER?r+="to other party members ":e.funcTargetType===ne.SELF&&(r+="to self "),n.Turn&&(r+=(1===n.Turn?"(1 Turn)":"(".concat(n.Turn," Turns)"))+" "),t&&(r+="<LEVEL> "),a&&(r+="<OVERCHARGE> "),r}function _e(e){var t=me(e),a=!t&&de(e);return function(e){if(!e.length)return[];var t=function(e){return Object.values(ce).filter((function(t){var a=e.map((function(e){return e[t]}));return pe(a)}))}(e);return e.map((function(e){var a={};for(var n in t)a[t[n]]=e[t[n]];return a}))}(t?Te(e):a?fe(e):e.svals).map((function(t){var a="";return t.Value&&(e.buffs[0]&&function(e){switch(e.type){case ie.SUB_SELFDAMAGE:return!0;default:return!1}}(e.buffs[0])?a+=t.Value+" ":e.funcType===ae.GAIN_NP||e.funcType===ae.LOSS_NP?a+=t.Value/100+"% ":e.funcType===ae.GAIN_HP||e.funcType===ae.LOSS_HP?a+=t.Value+" ":a+=t.Value/10+"% "),a})).filter((function(e){return e.length}))}function me(e){return Ae(Te(e))}function de(e){return Ae(fe(e))}function Te(e){return e.svals}function fe(e){var t=[e.svals[0]];return e.svals2&&t.push(e.svals2[0]),e.svals3&&t.push(e.svals3[0]),e.svals4&&t.push(e.svals4[0]),e.svals5&&t.push(e.svals5[0]),t.filter((function(e){return void 0!==e}))}function Oe(e){for(var t=e.func,a=Ne(t),n=_e(t),r=0;r<5;r++)n[r]||n.push("-");return i.a.createElement("tr",null,i.a.createElement("td",null,a),n.map((function(e,t){return i.a.createElement("td",{key:t},e)})))}var ve=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.noblePhantasm;return i.a.createElement("div",null,i.a.createElement("h3",null,e.name),i.a.createElement("p",null,e.detail),i.a.createElement(Y.a,null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Effect"),i.a.createElement("th",null,"1"),i.a.createElement("th",null,"2"),i.a.createElement("th",null,"3"),i.a.createElement("th",null,"4"),i.a.createElement("th",null,"5"))),i.a.createElement("tbody",null,e.functions.map((function(e,t){return i.a.createElement(Oe,{key:t,func:e})})))))}}]),a}(i.a.Component),he=a(63),De=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"changeServant",value:function(e){this.props.history.push("/servant/".concat(e))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,"Jump to:",i.a.createElement(he.a,{as:"select",custom:!0,onChange:function(t){e.changeServant(parseInt(t.target.value))},value:this.props.id},this.props.servants.map((function(e,t){return i.a.createElement("option",{key:t,value:e.collectionNo},e.name)}))))}}]),a}(i.a.Component),Se=Object(_.f)(De),ge=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{alt:this.props.servant.name,className:"profile",src:this.props.servant.extraAssets.charaGraph.ascension[1]}))}}]),a}(i.a.Component),Ie=(a(107),function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!0,id:parseInt(n.props.id),servants:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadServant()}},{key:"loadServant",value:function(){var e=Object(L.a)(b.a.mark((function e(){var t,a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([B.servantList(),B.servant(this.state.id)]);case 2:t=e.sent,a=Object(U.a)(t,2),n=a[0],r=a[1],this.setState({loading:!1,servants:n,servant:r});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading||!this.state.servant?i.a.createElement(W,null):i.a.createElement("div",{id:"servant"},i.a.createElement(Se,{servants:this.state.servants,id:this.state.servant.collectionNo}),i.a.createElement("hr",null),i.a.createElement(y.a,null,i.a.createElement(G.a,null,i.a.createElement(Ee,{servant:this.state.servant})),i.a.createElement(G.a,null,i.a.createElement(ge,{servant:this.state.servant}))),i.a.createElement("br",null),i.a.createElement(te,{servant:this.state.servant}),this.state.servant.noblePhantasms.map((function(e,t){return i.a.createElement(ve,{key:t,noblePhantasm:e})})))}}]),a}(i.a.Component)),Re=function(e,t){return new Array(e).fill(null).map((function(e){return t})).join("")},Pe=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,Re(this.props.rarity,"\u2605")+Re(5-this.props.rarity,"\u2606"))}}]),a}(i.a.Component),Ce=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("img",{alt:"",src:this.props.location,style:this.props.height?{height:this.props.height}:void 0})}}]),a}(i.a.Component),be=(a(108),function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!0,servants:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;B.servantList().then((function(t){e.setState({loading:!1,servants:t})}))}},{key:"render",value:function(){return this.state.loading?i.a.createElement(W,null):i.a.createElement("div",{id:"servants"},i.a.createElement(Y.a,{striped:!0,bordered:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"#"),i.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Class"),i.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Thumbnail"),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Rarity"))),i.a.createElement("tbody",null,this.state.servants.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",{align:"center"},i.a.createElement(N.b,{to:"/servant/".concat(e.collectionNo)},e.collectionNo)),i.a.createElement("td",{align:"center"},i.a.createElement(se,{className:e.className,rarity:e.rarity,height:50})),i.a.createElement("td",{align:"center"},i.a.createElement(N.b,{to:"/servant/".concat(e.collectionNo)},i.a.createElement(Ce,{rarity:e.rarity,location:e.face,height:50}))),i.a.createElement("td",null,i.a.createElement(N.b,{to:"/servant/".concat(e.collectionNo)},e.name)),i.a.createElement("td",null,i.a.createElement(Pe,{rarity:e.rarity})))})))))}}]),a}(i.a.Component)),Ue=function(e){Object(E.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={region:I.region(),language:I.language()},I.onUpdate((function(){return n.updateSettings()})),n}return Object(s.a)(a,[{key:"updateSettings",value:function(){this.setState({region:I.region(),language:I.language()})}},{key:"render",value:function(){return i.a.createElement(N.a,null,i.a.createElement(P,null),i.a.createElement("br",null),i.a.createElement(p.a,{key:"".concat(this.state.region,"-").concat(this.state.language)},i.a.createElement(_.c,null,i.a.createElement(_.a,{path:"/servants",component:be}),i.a.createElement(_.a,{path:"/servant/:id",render:function(e){return i.a.createElement(Ie,{key:e.match.params.id,id:e.match.params.id})}}),i.a.createElement(_.a,{path:"/",component:be}))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a(109)}},[[76,1,2]]]);
//# sourceMappingURL=main.d46b49c5.chunk.js.map