"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"date_time_object",title:"DateTimeObject"},i="Date Time Object",c={unversionedId:"api-reference/types/date_time_object",id:"api-reference/types/date_time_object",title:"DateTimeObject",description:"The object describing date time. This is only provided as a component parameter for a message template.",source:"@site/docs/api-reference/types/date_time_object.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/date_time_object",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/date_time_object",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/date_time_object.md",tags:[],version:"current",frontMatter:{id:"date_time_object",title:"DateTimeObject"},sidebar:"mainSidebar",previous:{title:"CurrencyObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/currency_object"},next:{title:"DocumentMediaObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/DocumentMediaObject"}},p={},l=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"date-time-object"},"Date Time Object"),(0,a.kt)("p",null,"The object describing date time. This is only provided as a component parameter for a message template."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "fallback_value": "1 January, 1990",\n}\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"fallback_value")," : string \u2014 default text.")))}m.isMDXComponent=!0}}]);