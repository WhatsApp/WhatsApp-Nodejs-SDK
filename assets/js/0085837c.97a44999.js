"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"isStarted",title:".isStarted"},s="WhatsApp.webhooks.isStarted()",i={unversionedId:"api-reference/webhooks/isStarted",id:"api-reference/webhooks/isStarted",title:".isStarted",description:"Gets the status of the webhook web server.",source:"@site/docs/api-reference/webhooks/is_started.md",sourceDirName:"api-reference/webhooks",slug:"/api-reference/webhooks/isStarted",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/isStarted",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/webhooks/is_started.md",tags:[],version:"current",frontMatter:{id:"isStarted",title:".isStarted"},sidebar:"mainSidebar",previous:{title:"this",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/this"},next:{title:".start",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/start"}},c={},p=[{value:"Example:",id:"example",level:2},{value:"Returns",id:"returns",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"whatsappwebhooksisstarted"},"WhatsApp.webhooks.isStarted()"),(0,o.kt)("p",null,"Gets the status of the webhook web server."),(0,o.kt)("h2",{id:"example"},"Example:"),(0,o.kt)("p",null,"Start the web server and check if it's running after 5 seconds from application start."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import WhatsApp from 'whatsapp';\n\nconst senderNumber = 12345678901234567890;\nconst wa = new WhatsApp( senderNumber );\n\nasync function webhook_callback_function( statusCode, reqHeaders, body, resp, err )\n{\n    console.log(\n        `Incoming webhook response status code: ${ statusCode }\\n\\nHeaders:\n        ${ JSON.stringify( reqHeaders ) }`\n    );\n}\n\nasync function check_status()\n{\n    setTimeout( () =>\n    {\n        console.log( `Webhook listener is running - ${ wa.webhooks.isStarted() }` );\n    }, 5000 );\n}\n\nwa.webhooks.start( webhook_callback_function )\ncheck_status();\n")),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"boolean \u2014 the HTTP server running state."))}d.isMDXComponent=!0}}]);