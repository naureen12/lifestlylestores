(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7682],{46065:function(e,t,n){"use strict";n.d(t,{Z:function(){return V}});var r=n(85893),o=n(26265),a=n(74047),c=n(52700),i=n(8127),u=n(44102),s=n(20775),l=n(67294),p=n(5152),d=n(28216),m=n(27361),f=n.n(m),g=n(99956),y=n(58769),b=n(60553),h=n(52543),v=n(64721),R=n.n(v),k=n(38420),I=n(57498),P={in:["https://".concat(I.Z.build,".lifestylestores.com/"),"https://".concat(I.Z.build,".homecentre.in/"),"https://".concat(I.Z.build,".maxfashion.in/")]};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var O=function(e){(0,i.Z)(n,e);var t=j(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"shouldComponentUpdate",value:function(e){var t=this.props;return f()(e,"userDetails.fetched")!==f()(t,"userDetails.fetched")}},{key:"render",value:function(){var e=this.props;if(!f()(e,"userDetails.data.customerPK"))return(0,r.jsx)(l.Fragment,{});var t=e.classes,n=e.country,o=e.location,a=e.concept,c=f()(P,"".concat(n),[]),i=(0,k.ej)("_lmgpr"),u=(0,k.ej)("_lmgua"),s=(0,k.ej)("_lmguh"),p=(0,k.ej)("_lmgLanPr"),d=(0,k.ej)("_lmgub_flag"),m=new URL(o).hostname,g=(0,k.ej)("siteversion_flag"),y=[],b=c.filter((function(e){return!R()(e,a)}));i&&(y.push({key:"_lmgua",value:u}),y.push({key:"_lmgub",value:"delete"}),y.push({key:"_lmguh",value:s}),(0,k.nJ)("_lmgpr","/",(0,k.ge)(m))),p&&(y.push({key:"_lmgLan",value:p}),(0,k.nJ)("_lmgLanPr","/",(0,k.ge)(m))),d&&([].push({key:"_lmgub",value:d}),(0,k.nJ)("_lmgub_flag","/",(0,k.ge)(m))),g&&(y.push({key:"siteversion",value:"responsive"}),(0,k.nJ)("siteversion_flag","/",m));for(var h="/cookie/write?",v=0;v<y.length;v++)h+=y[v].key+"="+y[v].value+"&";return h=h.substring(0,h.length-1),(0,r.jsx)("div",{className:t.cookiesImgContainer,children:y.length>0&&b.length>0&&b.map((function(e,n){return(0,r.jsx)("img",{className:t.cookiesImg,src:"".concat(e).concat(h)},n)}))})}}]),n}(l.Component),T=(0,h.Z)((function(){return{cookiesImgContainer:{display:"none !important"},cookiesImg:{display:"none !important"}}}))(O);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var w=(0,p.default)((function(){return Promise.all([n.e(9351),n.e(8164)]).then(n.bind(n,28164))}),{loadableGenerated:{webpack:function(){return[28164]},modules:["../components/footer/index.js -> ./mobile"]}}),L=(0,p.default)((function(){return Promise.all([n.e(9351),n.e(5896)]).then(n.bind(n,35896))}),{loadableGenerated:{webpack:function(){return[35896]},modules:["../components/footer/index.js -> ./desktop"]}}),E=function(e){(0,i.Z)(n,e);var t=x(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.country,n=e.lang,o=f()(e,"router.query.page");return(0,r.jsxs)("div",{dir:"en"===n?"ltr":"rtl",id:"root-footer",className:"footer-country-".concat(t," footer-language-").concat(n," footer-page-").concat(o),children:["phone"===f()(e,"device.type")?(0,r.jsx)(g.Z,{mt:"-1px",mb:"p"===o||"buy"===o?"83px":"0",children:(0,r.jsx)(w,S(S({},e),{},{country:t,lang:n}))}):(0,r.jsx)(L,S(S({},e),{},{country:t,lang:n})),(0,r.jsx)(y.Z,{children:(0,r.jsx)(T,S({},e))})]})}}]),n}(l.PureComponent),V=(0,d.$j)((function(e){return{appReducer:e.appReducer,slots:(0,b.FJ)(e),footerLinks:(0,b.dP)(e),routerReducer:e.routerReducer,subscribeMailReducer:e.subscribeMailReducer,userDetails:e.userReducer}}))(E)},96333:function(e,t,n){"use strict";n.d(t,{Z:function(){return K}});var r=n(85893),o=n(74047),a=n(52700),c=n(4706),i=n(8127),u=n(44102),s=n(20775),l=n(26265),p=n(67294),d=n(5152),m=n(28216),f=n(27361),g=n.n(f),y=n(99956),b=n(58769),h=n(55527),v=n(44309),R=n(41743),k=n(82077),I=n(40865),P=n(20573),j=function(e){return e.algoliaSearchHeaderReducer},O=(0,P.P1)([j],(function(e){return e})),T=(0,P.P1)([j],(function(e){return g()(e,"data.facets",[])})),D=n(67844),S=n(60553),x=(0,P.P1)([function(e){return e.navReducer}],(function(e){return e})),w=n(13084),L=(0,P.P1)([function(e){return e.referralReducer}],(function(e){return e})),E=n(38420),V=n(27904),Z=n(76346),C=n(84584),U=n(4518);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var H=(0,d.default)((function(){return Promise.all([n.e(9351),n.e(3530),n.e(3027),n.e(8183)]).then(n.bind(n,58183))}),{loadableGenerated:{webpack:function(){return[58183]},modules:["../components/header/index.js -> ./mobile"]}}),F=(0,d.default)((function(){return Promise.all([n.e(9351),n.e(3027),n.e(5548)]).then(n.bind(n,33971))}),{loadableGenerated:{webpack:function(){return[33971]},modules:["../components/header/index.js -> ./desktop"]}}),A=(0,d.default)((function(){return Promise.all([n.e(9351),n.e(6103),n.e(2007),n.e(3728)]).then(n.bind(n,3728))}),{loadableGenerated:{webpack:function(){return[3728]},modules:["../components/header/index.js -> ./signUpSignIn"]}}),B=(0,d.default)((function(){return Promise.all([n.e(9351),n.e(6423)]).then(n.bind(n,36423))}),{loadableGenerated:{webpack:function(){return[36423]},modules:["../components/header/index.js -> ./desktop/mobileVerify"]}}),G=(0,d.default)((function(){return Promise.all([n.e(9351),n.e(2007),n.e(9882)]).then(n.bind(n,40346))}),{loadableGenerated:{webpack:function(){return[40346]},modules:["../components/header/index.js -> ./desktop/mobileEmailVerify"]}}),N=function(e){(0,i.Z)(n,e);var t=q(n);function n(){var e;return(0,o.Z)(this,n),e=t.call(this),(0,l.Z)((0,c.Z)(e),"onPageScroll",(function(t){var n=(0,c.Z)(e),r=n.state,o=n.props,a=o.device,i=o.concept,u=o.country,s=t.target.scrollingElement.scrollTop;if("phone"===g()(a,"type")){var l="98";"babyshop"===i||"mothercare"===i?l="106":"centrepoint"===i?l="104":"in"===u&&(l="50"),!r.departmentFix&&s>=l?e.setState({departmentFix:!0}):r.departmentFix&&s<l&&e.setState({departmentFix:!1})}else{var p=(document.getElementById("desk-location-feature-enhanced")&&document.getElementById("desk-location-feature-enhanced").offsetHeight)+(document.getElementById("root-desk-top-wrapper")&&document.getElementById("root-desk-top-wrapper").offsetHeight);!r.hideTopHeader&&s>=p?e.setState({hideTopHeader:!0}):r.hideTopHeader&&s<p&&e.setState({hideTopHeader:!1})}})),e.state={hideTopHeader:!1,departmentFix:!1},e}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.country,n=e.lang,r=e.concept,o=e.device;window.addEventListener("scroll",this.onPageScroll);var a=(0,E.ej)("_lmgua"),c=g()(e,"router.query.referralCode");if(a&&a.length>0)(0,U.Zs)()||e.dispatch((0,v.M_)({country:t,lang:n,concept:r,device:o,referralCode:c}));else if(!(0,U.Zs)()){e.dispatch((0,R.te)());var i=(0,E.ej)("_lmgub");i&&i.length>0&&e.dispatch((0,R.B7)({country:t,lang:n,concept:r,device:o,userId:"anonymous",cartId:i}))}window.pageYOffset>40?this.setState({hideTopHeader:!0}):this.setState({hideTopHeader:!1}),window.pageYOffset>104?this.setState({departmentFix:!0}):this.setState({departmentFix:!1})}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=e.device,r=g()(e,"routerReducer.router.query.country"),o=g()(e,"routerReducer.router.query.lang"),a=g()(e,"routerReducer.router.concept"),c=g()(t,"router.query.referralCode"),i=g()(e,"userDetails.fetched",!1);if(r===g()(t,"routerReducer.router.query.country")&&a===g()(t,"routerReducer.router.concept")&&o===g()(t,"routerReducer.router.query.lang")||e.dispatch((0,h.vC)({country:r,lang:o,concept:a,device:n})),"link"===g()(e,"signInSignUpReducer.data.action")&&g()(e,"signInSignUpReducer.data.href")&&g()(e,"userDetails.data.customerPK")&&!g()(e,"mobileEmailVerifyReducer.openMobileEmailVerify")&&g()(t,"mobileEmailVerifyReducer.openMobileEmailVerify")!==g()(e,"mobileEmailVerifyReducer.openMobileEmailVerify")&&!g()(e,"mobileVerifyReducer.openMobileVerify")&&g()(t,"mobileVerifyReducer.openMobileVerify")!==g()(e,"mobileVerifyReducer.openMobileVerify"))return V.Router.pushRoute(g()(e,"signInSignUpReducer.data.href")),!1;if(g()(t,"userDetails.fetched")!==i)if((0,U.Zs)()||(t.dispatch((0,R.te)()),t.dispatch((0,R.B7)({country:r,lang:o,concept:a,device:n,userId:"current",cartId:"",referralCode:c}))),g()(e,"userDetails.data.customerPK")&&g()(t,"userDetails.data.customerPK")!==g()(e,"userDetails.data.customerPK")){if("fav"===g()(e,"signInSignUpReducer.data.action")&&t.dispatch((0,k.Ki)(M({},g()(e,"signInSignUpReducer.data",{})))),!g()(e,"userDetails.data.isMobileNumberVerificationRequired")&&"link"===g()(e,"signInSignUpReducer.data.action")&&g()(e,"signInSignUpReducer.data.href"))return V.Router.pushRoute(g()(e,"signInSignUpReducer.data.href")),!1;"fav"===g()(e,"signInSignUpReducer.data.action")||(0,U.Zs)()||t.dispatch((0,I.NA)({country:r,lang:o,concept:a,device:n,ts:g()(e,"userFavTS")})),C.ZP.initUserPk({userType:g()(e,"userDetails.data.type"),customerPK:g()(e,"userDetails.data.customerPK")})}else if(!(0,U.Zs)()){var u=(0,E.ej)("_lmgub");u&&u.length>0&&t.dispatch((0,R.B7)({country:r,lang:o,concept:a,device:n,userId:"anonymous",cartId:u}))}var s=!g()(e,"userDetails.data.isMobileNumberVerificationRequired")&&g()(e,"userDetails.data.customerPK")&&!g()(t,"userDetails.data.customerPK")&&!g()(e,"signInSignUpReducer.openSignIn")&&!g()(e,"mobileVerifyReducer.openMobileVerify");if(g()(e,"userDetails.data.customerPK")&&!g()(e,"mobileVerifyReducer.openMobileVerify")&&g()(t,"mobileVerifyReducer.openMobileVerify")!==g()(e,"mobileVerifyReducer.openMobileVerify")||s){var l=t.location,p=new URL(l).hostname;(0,E.nJ)("email_signup","/",(0,E.ge)(p)),(0,E.nJ)("loyalty_checkoutpage","/",(0,E.ge)(p)),(0,E.nJ)("dob","/",(0,E.ge)(p)),(0,E.nJ)("communication","/",(0,E.ge)(p))}return!0}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onPageScroll)}},{key:"render",value:function(){var e,t=this.props,n=this.state,o=g()(t,"router.query.page","home"),a=g()(t,"concept","centrepoint"),c=g()(t,"router.query.country","ae"),i=g()(t,"router.query.lang","en"),u=g()(t,"routerReducer.router.isServer"),s=g()(t,"routerReducer.router.cookies"),l=n.hideTopHeader,p=("lifestyle"!==a||"in"!==c)&&n.departmentFix;e=g()(t,"departmentPageResponse.error")?g()(s,"preSelectedDept".concat(c),g()(s,"selectedDept".concat(c))):g()(s,"selectedDept".concat(c));var d="50px";"babyshop"===a&&(d="42px");var m="phone"===g()(t,"device.type")||"home"===o?0:e&&"cross"!==e?d:"0";return(0,r.jsxs)("div",{dir:"en"===i?"ltr":"rtl",id:"root-header",className:"header-country-".concat(c," header-language-").concat(i," header-page-").concat(o),children:["phone"===t.device.type?(0,r.jsx)("div",{children:(0,r.jsx)(H,M(M({},t),{},{country:c,lang:i,isServer:u,cookies:s,departmentFix:p}))}):(0,r.jsx)(y.Z,{pb:m,children:(0,r.jsx)(F,M(M({},t),{},{country:c,lang:i,isServer:u,cookies:s,hideTopHeader:l}))}),(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(A,M(M({},t),{},{classes:void 0,openSignUp:g()(t,"signInSignUpReducer.openSignUp"),openSignIn:g()(t,"signInSignUpReducer.openSignIn"),openForgotPass:g()(t,"signInSignUpReducer.openForgotPass")})),g()(Z.Z,"isMobileNumberVerificationEnabled.".concat(c))&&(0,r.jsx)(G,M(M({},t),{},{openMobileEmailVerify:g()(t,"mobileEmailVerifyReducer.openMobileEmailVerify"),openEmailVerify:g()(t,"emailVerifyReducer.openEmailVerify")})),g()(Z.Z,"isMobileNumberVerificationEnabled.".concat(c))&&(0,r.jsx)(B,M(M({},t),{},{openMobileVerify:g()(t,"mobileVerifyReducer.openMobileVerify")}))]})]})}}]),n}(p.Component),K=(0,m.$j)((function(e){return{slots:(0,S.FJ)(e),algoliaSearchPopupReducer:O(e),algoliaCategoryFacetValue:T(e),cartData:(0,S.TW)(e),navReducer:x(e),userDetails:e.userReducer,routerReducer:e.routerReducer,departmentPageResponse:(0,D.n8)(e),signInSignUpReducer:e.signInSignUpReducer,searchDialogReducer:e.searchDialogReducer,mobileVerifyReducer:e.mobileVerifyReducer,mobileEmailVerifyReducer:e.mobileEmailVerifyReducer,mobileEmailVerifyOtpReducer:e.mobileEmailVerifyReducer,userFavTS:(0,w.EC)(e),filterReducer:e.filterReducer,shukranPopupReducer:e.shukranPopupReducer,referralData:L(e),emailVerifyReducer:e.emailVerifyReducer}}))(N)},67844:function(e,t,n){"use strict";n.d(t,{$:function(){return h},n8:function(){return v},IY:function(){return R}});var r=n(26265),o=n(20573),a=n(27361),c=n.n(a),i=n(54061),u=n.n(i),s=n(7771),l=n.n(s);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={did:"",metaDescription:"",metaTags:[],metaImage:"",metaTitle:"",permaUrl:"",pageId:"department",pageName:"",slots:[],traceId:""},f=function(e,t){var n="phone"===c()(t,"router.device.type")?"MOBILE":"DESKTOP",r=c()(t,"router.concept"),o=c()(t,"router.query.country"),a=c()(t,"router.query.page","department"),i=c()(t,"router.query.did","cross"),u=c()(t,"router.query.lang"),s=c()(e,"algolia",{}),p="department"===a?"DeptPage-":"",f=c()(e,"amp.content.metaImage",""),g=c()(e,"amp.content.metaTitle",""),y=c()(e,"amp.content.permaUrl",""),b=c()(e,"amp.content.metaDescription",""),h=c()(e,"amp.content.metaTags",[]),v=c()(e,"amp.content.slots",[]).map((function(e){if(c()(e,"isRestricted",!1)&&!c()(e,"devices","").includes(n))return null;var t=c()(e,"contentTypes",[]);if(t.length>0){"max"===r&&"mxkids"===i&&(i="kids");var a="".concat(r).concat(o,"-").concat(p).concat(i,"-v2-").concat(c()(e,"slotId")),d=t.map((function(t,n){var d=c()(t,"trendingBanners",[]),m=c()(t,"productCodes",[]),f=c()(t,"rotatingImagesData",[]),g=c()(t,"messages",[]),y=c()(t,"buttons",[]);return f.length>0?(a="".concat(r).concat(o,"-").concat(p).concat(i,"-v2-").concat(c()(e,"slotId")),function(e,t,n,r,o,a,i,u){var s=n.map((function(t,n){var i="".concat(o).concat(a,"-").concat(u,"-").concat(c()(e,"slotId"),"Banner").concat(n+1),s="https://".concat(c()(t,"desktopImage.defaultHost"),"/i/").concat(c()(t,"desktopImage.endpoint"),"/").concat(c()(t,"desktopImage.name")),p="https://".concat(c()(t,"mobileImage.defaultHost"),"/i/").concat(c()(t,"mobileImage.endpoint"),"/").concat(c()(t,"mobileImage.name"));return c()(t,"isAnimatedImage",!1)&&(s="https://".concat(c()(t,"desktopImage.endpoint"),".a.bigcontent.io/v1/static/").concat(c()(t,"desktopImage.name")),p="https://".concat(c()(t,"mobileImage.endpoint"),".a.bigcontent.io/v1/static/").concat(c()(t,"mobileImage.name"))),c()(t,"imageQueryParam","")&&(s+="?"+c()(t,"imageQueryParam",""),p+="?"+c()(t,"imageQueryParam","")),{componentId:c()(t,"name",i),medias:[{format:"desktop",imageType:"GALLERY",url:s},{format:"mobile",imageType:"GALLERY",url:p}],startTime:l()()-864e7,endTime:l()()+864e7,urlLink:"",urlLinkList:"en"==r?c()(t,"urlLinkList",[]):c()(t,"urlLinkList",[]).reverse(),linkUrlText:c()(t,"linkTextList.0",""),linkTextList:"en"==r?c()(t,"linkTextList",[]):c()(t,"linkTextList",[]).reverse()}}));return{layoutName:"".concat(c()(e,"layoutname")),type:"".concat(c()(t,"type")),rotatingImagesData:s}}(e,t,f,u,r,o,0,i)):d.length>0?(a="".concat(r).concat(o,"-").concat(p).concat(i,"-v2-").concat(c()(e,"slotId")),function(e,t,n,r,o,a,i){var u=n.map((function(t,n){var a="".concat(r).concat(o,"-").concat(i,"-").concat(c()(e,"slotId"),"Banner").concat(n+1),u="https://".concat(c()(t,"desktopImage.defaultHost"),"/i/").concat(c()(t,"desktopImage.endpoint"),"/").concat(c()(t,"desktopImage.name")),s="https://".concat(c()(t,"mobileImage.defaultHost"),"/i/").concat(c()(t,"mobileImage.endpoint"),"/").concat(c()(t,"mobileImage.name"));return c()(t,"isAnimatedImage",!1)&&(u="https://".concat(c()(t,"desktopImage.endpoint"),".a.bigcontent.io/v1/static/").concat(c()(t,"desktopImage.name")),s="https://".concat(c()(t,"mobileImage.endpoint"),".a.bigcontent.io/v1/static/").concat(c()(t,"mobileImage.name"))),c()(t,"imageQueryParam","")&&(u+="?"+c()(t,"imageQueryParam",""),s+="?"+c()(t,"imageQueryParam","")),{aspectRatio:"1:1",bannerType:c()(t,"bannerType",""),componentId:c()(t,"name",a),mediaOption:{isAutoplay:!1,isLoop:!0},medias:[{format:"desktop",imageType:"GALLERY",url:u},{format:"mobile",imageType:"GALLERY",url:s}],order:100,urlLink:"",urlLinkList:c()(t,"urlLinkList",[]),linkUrlText:c()(t,"linkTextList.0",""),linkTextList:c()(t,"linkTextList",[]),bannerTitle:c()(t,"bannerTitle"),bannerLead:c()(t,"bannerLead")}})),s=c()(t,"desktopLayoutname",""),l=c()(t,"mobileLayoutname","");return{layoutName:"".concat(c()(e,"layoutname")),type:"".concat(c()(t,"type")),trendingBanners:u,desktopRow:s.split("X")[0],desktopColumn:s.split("X")[1],responsiveRow:l.split("X")[0],responsiveColumn:l.split("X")[1],title:c()(t,"title"),link:c()(t,"link")}}(e,t,d,r,o,0,i)):m.length>0?(a="".concat(r).concat(o,"-").concat(p).concat(i,"-v2-").concat(c()(e,"slotId")),function(e,t,n,r,o,a,i,u){var s="".concat(r).concat(o,"-").concat(a).concat(i,"-v2-").concat(c()(e,"slotId")),l=c()(n,"".concat(s,"-").concat(u,".hits"),[]),p=c()(t,"desktopLayoutname",""),d=c()(t,"mobileLayoutname",""),m=c()(t,"timerStartTime"),f=c()(t,"timerEndTime"),g=function(e){return new Date(e).getTime()};return{appStyleClass:c()(t,"styleClass"),componentId:"".concat(r).concat(o,"-").concat(a).concat(i,"-").concat(c()(e,"slotId")),cssStyleClass:c()(t,"styleClass"),desktopColumn:p.split("X")[1],desktopRow:p.split("X")[0],layoutType:"PRODUCT_CAROUSEL_V2",link:c()(t,"link"),productCodes:c()(t,"productCodes",[]),isAlgoliaData:!0,products:l,responsiveColumn:d.split("X")[1],responsiveRow:d.split("X")[0],responsiveStyleClass:c()(t,"styleClass"),showRectImg:c()(t,"showRectImg"),showTimer:c()(t,"showTimer",!1),timerEndTime:g(f),timerStartTime:g(m),title:c()(t,"productRailTitle"),type:"".concat(c()(t,"type"))}}(e,t,s,r,o,p,i,n)):g.length>0?(a="".concat(r).concat(o,"-").concat(p).concat(c()(e,"slotId")),function(e,t,n,r,o,a,i){var u="".concat(r).concat(o,"-").concat(i,"-").concat(c()(e,"slotId")),s=n.map((function(e){return{title:c()(e,"title",""),description:c()(e,"description",""),images:[{format:"desktop",imageType:"GALLERY",url:c()(e,"image","")},{format:"mobile",imageType:"GALLERY",url:c()(e,"image","")}]}}));return{componentId:u,layoutType:c()(t,"layoutType",""),type:c()(t,"type",""),messages:s}}(e,t,g,r,o,0,i)):y.length>0?(a="".concat(r).concat(o,"-").concat(p).concat(i,"-v2-").concat(c()(e,"slotId")),function(e,t,n){var r="https://".concat(c()(t,"desktopImage.defaultHost"),"/i/").concat(c()(t,"desktopImage.endpoint"),"/").concat(c()(t,"desktopImage.name")),o="https://".concat(c()(t,"mobileImage.defaultHost"),"/i/").concat(c()(t,"mobileImage.endpoint"),"/").concat(c()(t,"mobileImage.name"));return c()(t,"isAnimatedImage",!1)&&(r="https://".concat(c()(t,"desktopImage.endpoint"),".a.bigcontent.io/v1/static/").concat(c()(t,"desktopImage.name")),o="https://".concat(c()(t,"mobileImage.endpoint"),".a.bigcontent.io/v1/static/").concat(c()(t,"mobileImage.name"))),c()(t,"imageQueryParam","")&&(r+="?"+c()(t,"imageQueryParam",""),o+="?"+c()(t,"imageQueryParam","")),{buttons:n.map((function(e){return{deptName:c()(e,"label"),text:c()(e,"text"),url:c()(e,"url")}})),componentId:"centrepointae-shoemart-DepartmentPage-BrandBanner",cssStyleClass:c()(t,"cssStyleClass"),medias:[{format:"desktop",imageType:"GALLERY",url:r},{format:"mobile",imageType:"GALLERY",url:o}],linkTextList:c()(e,"linkTextList",[]),linkUrlText:c()(e,"linkTextList.0",""),type:c()(t,"type")}}(e,t,y)):{}}));return{slotId:a,components:d}}}));return d(d({},m),{},{did:i,slots:v,metaImage:f,metaDescription:b,metaTags:h,metaTitle:g,permaUrl:y})};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){return e.routerReducer},h=function(e){return e.departmentPageReducer},v=(0,o.P1)([h,b,function(e){return e.configReducer}],(function(e,t,n){var r=c()(t,"router.query.page","department"),o=c()(t,"router.query.did","cross"),a=c()(e,"departments.".concat(o),{});if("department"===r&&c()(n,"data.service.ampliance.".concat(o,"Dept"))||"brand"===r&&c()(n,"data.service.ampliance.".concat(o,"Brand"))){var i=f(a,t);return y(y({},a),{},{data:i})}return a})),R=(0,o.P1)([v,b],(function(e){var t=c()(e,"data.slots",[]);return u()(t,(function(e,t){return y(y({},e),{},(0,r.Z)({},c()(t,"slotId"),t))}),{})}))}}]);