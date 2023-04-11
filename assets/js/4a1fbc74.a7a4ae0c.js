"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[2446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"video",title:".video"},i="WhatsApp.messages.video()",s={unversionedId:"api-reference/messages/video",id:"api-reference/messages/video",title:".video",description:"Send an existing self-hosted or Meta hosted video file. Supported video formats:",source:"@site/docs/api-reference/messages/video.md",sourceDirName:"api-reference/messages",slug:"/api-reference/messages/video",permalink:"/WhatsApp-Nodejs-SDK/api-reference/messages/video",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/messages/video.md",tags:[],version:"current",frontMatter:{id:"video",title:".video"},sidebar:"mainSidebar",previous:{title:".text",permalink:"/WhatsApp-Nodejs-SDK/api-reference/messages/text"},next:{title:"this",permalink:"/WhatsApp-Nodejs-SDK/api-reference/twoStepVerification/this"}},p={},l=[{value:"Example:",id:"example",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2}],d={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whatsappmessagesvideo"},"WhatsApp.messages.video()"),(0,a.kt)("p",null,"Send an existing self-hosted or Meta hosted video file. Supported video formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MP4"),(0,a.kt)("li",{parentName:"ul"},"3GP")),(0,a.kt)("h2",{id:"example"},"Example:"),(0,a.kt)("p",null,"Send a Meta-hosted message and then send an externally hosted video file to the phone number ",(0,a.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import WhatsApp from \'whatsapp\';\n\nconst senderNumber = 12345678901234567890;\nconst wa = new WhatsApp( senderNumber );\n\nconst meta_hosted_video =\n{\n    "id" : "123456abcde",\n    "caption" : "My video file",\n    "filename" : "example.mp4"\n};\n\nconst self_hosted_video =\n{\n    "link" : new URL( "https://example.com/example_1234.mp4" ).href,\n    "caption" : "My video file",\n    "filename" : "example.mp4"\n};\n\nawait wa.messages.video( meta_hosted_video, 12345678901 );\nwa.messages.video( self_hosted_video, 12345678901 );\n')),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,a.kt)("a",{parentName:"li",href:"../types/VideoMediaObject"},"VideoMediaObject")," \u2014 the object describing the video file to send."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"recipient")," : number \u2014 the recipient's phone number with country code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"replyMessageId")," : string (optional) \u2014 the received WhatsApp message Id to reply back to.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Promise \u2014 Server response object on success."))}m.isMDXComponent=!0}}]);