"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[6022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"audio",title:".audio"},i="WhatsApp.messages.audio()",s={unversionedId:"api-reference/messages/audio",id:"api-reference/messages/audio",title:".audio",description:"Send an existing self-hosted or Meta hosted audio file. Supported audio formats:",source:"@site/docs/api-reference/messages/audio.md",sourceDirName:"api-reference/messages",slug:"/api-reference/messages/audio",permalink:"/WhatsApp-Nodejs-SDK/api-reference/messages/audio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/messages/audio.md",tags:[],version:"current",frontMatter:{id:"audio",title:".audio"},sidebar:"mainSidebar",previous:{title:"this",permalink:"/WhatsApp-Nodejs-SDK/api-reference/messages/this"},next:{title:".contacts",permalink:"/WhatsApp-Nodejs-SDK/api-reference/messages/contacts"}},p={},l=[{value:"Example:",id:"example",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2}],u={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whatsappmessagesaudio"},"WhatsApp.messages.audio()"),(0,r.kt)("p",null,"Send an existing self-hosted or Meta hosted audio file. Supported audio formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AAC"),(0,r.kt)("li",{parentName:"ul"},"MP4"),(0,r.kt)("li",{parentName:"ul"},"MPEG"),(0,r.kt)("li",{parentName:"ul"},"AMR"),(0,r.kt)("li",{parentName:"ul"},"OGG ",(0,r.kt)("em",{parentName:"li"},"Note: The base audio/ogg type is not supported."))),(0,r.kt)("h2",{id:"example"},"Example:"),(0,r.kt)("p",null,"Send a Meta-hosted message and then send an externally hosted audio file to the phone number ",(0,r.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import WhatsApp from \'whatsapp\';\n\nconst senderNumber = 12345678901234567890;\nconst wa = new WhatsApp( senderNumber );\n\nconst meta_hosted_audio =\n{\n    "id" : "123456abcde",\n    "caption" : "My audio file",\n    "filename" : "example.mp4"\n};\n\nconst selfHostedAudio =\n{\n    "link" : new URL( "https://example.com/example_1234.mp4" ).href,\n    "caption" : "My audio file",\n    "filename" : "example.mp4"\n};\n\nawait wa.messages.audio( meta_hosted_audio, 12345678901 );\nwa.messages.audio( selfHostedAudio, 12345678901 );\n')),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,r.kt)("a",{parentName:"li",href:"../types/AudioMediaObject"},"AudioMediaObject")," \u2014 the object describing the audio file to send."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"recipient")," : number \u2014 the recipient's phone number with country code."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"replyMessageId")," : string (optional) \u2014 the received WhatsApp message Id to reply back to.")),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"Promise \u2014 Server response object on success."))}c.isMDXComponent=!0}}]);