"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[1697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||s;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,p=new Array(s);p[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<s;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={id:"SetPinResponseObject",title:"SetPinResponseObject"},p="Set Pin Response Object",i={unversionedId:"api-reference/types/SetPinResponseObject",id:"api-reference/types/SetPinResponseObject",title:"SetPinResponseObject",description:"The successful response body JSON from the Cloud API for setting the two-step verification pin.",source:"@site/docs/api-reference/types/setPinResponseObject.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SetPinResponseObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/SetPinResponseObject",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/setPinResponseObject.md",tags:[],version:"current",frontMatter:{id:"SetPinResponseObject",title:"SetPinResponseObject"},sidebar:"mainSidebar",previous:{title:"SectionObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/SectionObject"},next:{title:"SimpleTextObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/SimpleTextObject"}},a={},c=[{value:"Example",id:"example",level:3},{value:"Properties",id:"properties",level:2}],l={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-pin-response-object"},"Set Pin Response Object"),(0,o.kt)("p",null,"The successful response body JSON from the Cloud API for setting the two-step verification pin."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true\n}\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"success")," : boolean \u2014 the state of updating the two-step verification pin.")))}f.isMDXComponent=!0}}]);