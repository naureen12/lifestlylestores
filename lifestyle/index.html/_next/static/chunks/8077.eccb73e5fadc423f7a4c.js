(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8077],{63107:function(t,e,r){"use strict";r.r(e);var n=r(85893),o=r(26265),c=r(74047),i=r(52700),a=r(8127),u=r(44102),l=r(20775),p=r(67294),s=r(52543),f=r(99956),d=r(282),h=r(27361),y=r.n(h),g=r(10240),b=r.n(g),m=r(82729),x=r.n(m),j=r(89734),v=r.n(j),O=r(92489),Z=r(11838),w=r(27904),k=r(84584);function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,l.Z)(t);if(e){var o=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,u.Z)(this,r)}}var C=function(t){(0,a.Z)(r,t);var e=S(r);function r(){return(0,c.Z)(this,r),e.apply(this,arguments)}return(0,i.Z)(r,[{key:"shouldComponentUpdate",value:function(t){return!!y()(t,"algoliaProdResponse.fetched")}},{key:"render",value:function(){var t=this.props,e=t.classes,r=t.lang,o=t.concept,c=t.country,i=(0,O.BB)(R(R({},y()(t,"filterReducer",{})),{},{p:0})),a=y()(t,"routerReducer.router.query.cid",""),u=y()(t,"routerReducer.router.query.page",""),l=y()(t,"algoliaFacetsSubcategories",[]).filter((function(t){return t.name==="categoryFacetValue.".concat(r)})),p=(0,Z.KT)(l,a,u,o,c),s=v()(p,"title").map((function(t,r){if(t){var o=i.replace("/c/".concat(a),"/c/".concat(t.key));return(0,n.jsx)(f.Z,{m:1,children:(0,n.jsx)(w.Link,{prefetch:!1,route:o,children:(0,n.jsxs)(d.Z,{variant:"contained",color:"secondary",className:e.button,href:o,onClick:function(){return k.ZP.sendEvent({category:"Visual Navigation",action:"Navigation Clicked",label:y()(t,"title","")})},children:[b()(t.img,"http")?(0,n.jsx)(f.Z,{pr:1.5,lineHeight:0,children:(0,n.jsx)("img",{src:t.img,alt:t.title,className:e.img})}):(0,n.jsx)(f.Z,{height:"40px"}),(0,n.jsx)(f.Z,{whiteSpace:"nowrap",children:t.title})]})})},"".concat(t.key,"-").concat(r))}return null})),h=x()(s,(function(t){return null!==t}));return h.length>0&&(0,n.jsx)(f.Z,{pt:3,children:(0,n.jsx)(f.Z,{m:-1,display:"flex",flexWrap:"wrap",children:h})})}}]),r}(p.Component);e.default=(0,s.Z)((function(t){return{button:{width:"auto",border:"1px solid ".concat(y()(t,"palette.divider")),borderRadius:"2px",color:y()(t,"palette.text.primary"),textTransform:"none",fontFamily:y()(t,"typography.fontFamilySemibold"),fontWeight:"normal",fontSize:y()(t,"typography.body2.fontSize"),padding:"7px 20px 7px 8px","&:hover":{border:"1px solid ".concat(y()(t,"palette.primary.main"))}},img:{width:"40px",borderRadius:"2px"}}}))(C)}}]);