"use strict";(self.webpackChunkwhatsapp_sdk_docs=self.webpackChunkwhatsapp_sdk_docs||[]).push([[8963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"ActionObject",title:"ActionObject"},o="Action Object",l={unversionedId:"api-reference/types/ActionObject",id:"api-reference/types/ActionObject",title:"ActionObject",description:"The object describing a actions taken for different types interactive messages. Different actions have different object requirements.",source:"@site/docs/api-reference/types/ActionObject.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/ActionObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/ActionObject",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/ActionObject.md",tags:[],version:"current",frontMatter:{id:"ActionObject",title:"ActionObject"},sidebar:"mainSidebar",previous:{title:".stop",permalink:"/WhatsApp-Nodejs-SDK/api-reference/webhooks/stop"},next:{title:"AudioMediaObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/AudioMediaObject"}},s={},p=[{value:"Example",id:"example",level:2},{value:"Single product message",id:"single-product-message",level:2},{value:"Example",id:"example-1",level:3},{value:"Properties",id:"properties",level:2},{value:"Multi-product message",id:"multi-product-message",level:2},{value:"Example",id:"example-2",level:3},{value:"Properties",id:"properties-1",level:2},{value:"List message",id:"list-message",level:2},{value:"Example",id:"example-3",level:3},{value:"Properties",id:"properties-2",level:2},{value:"Reply button",id:"reply-button",level:2},{value:"Example",id:"example-4",level:3},{value:"Properties",id:"properties-3",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"action-object"},"Action Object"),(0,i.kt)("p",null,"The object describing a actions taken for different types interactive messages. Different actions have different object requirements."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h2",{id:"single-product-message"},"Single product message"),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "catalog_id": "CATALOG_ID",\n    "product_retailer_id": "ID_TEST_ITEM_1"\n}\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"catalog_id")," : string (optional) \u2014 unique identifier of the Facebook catalog linked to your WhatsApp Business Account. Required for single product messages and multi-product messages."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"product_retailer_id")," : string (optional) \u2014 unique identifier of the product in a catalog. Required for Single Product Messages and Multi-Product Messages.")),(0,i.kt)("h2",{id:"multi-product-message"},"Multi-product message"),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "catalog_id": "CATALOG_ID",\n    "sections":\n    [\n        {\n        "title": "section-title",\n        "product_items":\n        [\n            { "product_retailer_id": "product-SKU-in-catalog" },\n            { "product_retailer_id": "product-SKU-in-catalog" },\n\n        ]\n        },\n        {\n        "title": "section-title",\n        "product_items":\n        [\n            { "product_retailer_id": "product-SKU-in-catalog" },\n            { "product_retailer_id": "product-SKU-in-catalog" },\n        ]\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"catalog_id")," : string \u2014 unique identifier of the Facebook catalog linked to your WhatsApp Business Account. Required for single product messages and multi-product messages."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sections")," : ",(0,i.kt)("a",{parentName:"li",href:"SectionObject"},"Sections_Object"),"[] \u2014 array of sections for list message or multi-product messages. Minimum of 1, maximum of 10. See section object.")),(0,i.kt)("h2",{id:"list-message"},"List message"),(0,i.kt)("h3",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "button": "BUTTON_TEXT",\n    "sections": [\n    {\n        "title": "SECTION_1_TITLE",\n        "rows": [\n        {\n            "id": "SECTION_1_ROW_1_ID",\n            "title": "SECTION_1_ROW_1_TITLE",\n            "description": "SECTION_1_ROW_1_DESCRIPTION"\n        },\n        {\n            "id": "SECTION_1_ROW_2_ID",\n            "title": "SECTION_1_ROW_2_TITLE",\n            "description": "SECTION_1_ROW_2_DESCRIPTION"\n        }\n        ]\n    },\n    {\n        "title": "SECTION_2_TITLE",\n        "rows": [\n        {\n            "id": "SECTION_2_ROW_1_ID",\n            "title": "SECTION_2_ROW_1_TITLE",\n            "description": "SECTION_2_ROW_1_DESCRIPTION"\n        },\n        {\n            "id": "SECTION_2_ROW_2_ID",\n            "title": "SECTION_2_ROW_2_TITLE",\n            "description": "SECTION_2_ROW_2_DESCRIPTION"\n        }\n        ]\n    }\n    ]\n}\n')),(0,i.kt)("h2",{id:"properties-2"},"Properties"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"button")," : string \u2014 button content. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sections")," : ",(0,i.kt)("a",{parentName:"li",href:"SectionObject"},"Sections_Object"),"[] \u2014 array of sections for list message or multi-product messages. Minimum of 1, maximum of 10.")),(0,i.kt)("h2",{id:"reply-button"},"Reply button"),(0,i.kt)("h3",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "buttons": [\n    {\n        "type": "reply",\n        "reply": {\n        "id": "UNIQUE_BUTTON_ID_1",\n        "title": "BUTTON_TITLE_1"\n        }\n    },\n    {\n        "type": "reply",\n        "reply": {\n        "id": "UNIQUE_BUTTON_ID_2",\n        "title": "BUTTON_TITLE_2"\n        }\n    }\n    ]\n}\n')),(0,i.kt)("h2",{id:"properties-3"},"Properties"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"button")," : string \u2014 button content. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"buttons")," : ",(0,i.kt)("a",{parentName:"li",href:"ReplyButtonObject"},"ReplyButtonObject"),"[] \u2014 array of reply buttons (maximum of 3, minimum of 1).")))}d.isMDXComponent=!0}}]);