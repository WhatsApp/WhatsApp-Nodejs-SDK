"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"language_object",title:"Language_Object"},i="Language Object",c={unversionedId:"api-reference/types/language_object",id:"api-reference/types/language_object",title:"Language_Object",description:"The object describing the message template language.",source:"@site/docs/api-reference/types/language_object.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/language_object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/language_object",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/language_object.md",tags:[],version:"current",frontMatter:{id:"language_object",title:"Language_Object"},sidebar:"mainSidebar",previous:{title:"Interactive_Object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/interactive_object"},next:{title:"Location_Object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/location_object"}},p={},l=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}],s={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"language-object"},"Language Object"),(0,a.kt)("p",null,"The object describing the message template language."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "policy" : "deterministic",\n    "code": "LANGUAGE_AND_LOCALE_CODE"\n},\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"policy"),' : "deterministic" \u2014 the language policy the message should follow. The only supported option is ',(0,a.kt)("em",{parentName:"li"},"deterministic"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"code")," : string \u2014 the code of the language or locale to use. For all codes, see ",(0,a.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages"},"Supported Languages"),".")))}g.isMDXComponent=!0}}]);