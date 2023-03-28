"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>_});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,_=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(_,s(s({ref:t},c),{},{components:n})):r.createElement(_,s({ref:t},c))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={id:"interactive",title:".interactive"},s="WhatsApp.messages.interactive()",o={unversionedId:"api-reference/messages/interactive",id:"api-reference/messages/interactive",title:".interactive",description:"Send an interactive message to prompt a recipient to select from provided options. There are 4 interactive message types:",source:"@site/docs/api-reference/messages/interactive.md",sourceDirName:"api-reference/messages",slug:"/api-reference/messages/interactive",permalink:"/api-reference/messages/interactive",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/messages/interactive.md",tags:[],version:"current",frontMatter:{id:"interactive",title:".interactive"},sidebar:"mainSidebar",previous:{title:".image",permalink:"/api-reference/messages/image"},next:{title:".location",permalink:"/api-reference/messages/location"}},p={},l=[{value:"Examples:",id:"examples",level:2},{value:"Reply button",id:"reply-button",level:3},{value:"List",id:"list",level:3},{value:"Single product",id:"single-product",level:3},{value:"Mutli-product",id:"mutli-product",level:3},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whatsappmessagesinteractive"},"WhatsApp.messages.interactive()"),(0,a.kt)("p",null,"Send an interactive message to prompt a recipient to select from provided options. There are 4 interactive message types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reply buttons \u2014 this allows the recipient to select a specific option (up to 3) to respond with. Each individual button can be given a unique Id to systematically perform backend logic. One example is for multi-language support, while performing the same application operation based on the Id across all languages."),(0,a.kt)("li",{parentName:"ul"},"List - this displays a list of selectable items that can be split into sections (maximum of 10). The recipient can selecting an item from the provided list."),(0,a.kt)("li",{parentName:"ul"},"Product (aka single product) \u2014 displays a single product from the facebook store catalog along with customizable message fields."),(0,a.kt)("li",{parentName:"ul"},"Product-list (aka multi-product) \u2014 displays several products from a facebook store catalog along with customizable message fields.")),(0,a.kt)("h2",{id:"examples"},"Examples:"),(0,a.kt)("h3",{id:"reply-button"},"Reply button"),(0,a.kt)("p",null,"Send a message with two buttons to the phone number ",(0,a.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const WhatsApp = require(\'whatsapp\');\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nconst reply_btn_message =\n{\n    "type": "button",\n    "body": {\n        "text": "BUTTON_TEXT"\n    },\n    "action": {\n        "buttons": [\n        {\n            "type": "reply",\n            "reply": {\n            "id": "UNIQUE_BUTTON_ID_1",\n            "title": "BUTTON_TITLE_1"\n            }\n        },\n        {\n            "type": "reply",\n            "reply": {\n            "id": "UNIQUE_BUTTON_ID_2",\n            "title": "BUTTON_TITLE_2"\n            }\n        }\n        ]\n    }\n}\n\nwa.messages.interactive( reply_btn_message, 12345678901 );\n')),(0,a.kt)("h3",{id:"list"},"List"),(0,a.kt)("p",null,"Send a list message with two sections and two products per section to the phone number ",(0,a.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const WhatsApp = require(\'whatsapp\');\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nconst list_message =\n{\n    "type": "list",\n    "header": {\n        "type": "text",\n        "text": "HEADER_TEXT"\n    },\n    "body": {\n        "text": "BODY_TEXT"\n    },\n    "footer": {\n        "text": "FOOTER_TEXT"\n    },\n    "action": {\n        "button": "BUTTON_TEXT",\n        "sections": [\n        {\n            "title": "SECTION_1_TITLE",\n            "rows": [\n            {\n                "id": "SECTION_1_ROW_1_ID",\n                "title": "SECTION_1_ROW_1_TITLE",\n                "description": "SECTION_1_ROW_1_DESCRIPTION"\n            },\n            {\n                "id": "SECTION_1_ROW_2_ID",\n                "title": "SECTION_1_ROW_2_TITLE",\n                "description": "SECTION_1_ROW_2_DESCRIPTION"\n            }\n            ]\n        },\n        {\n            "title": "SECTION_2_TITLE",\n            "rows": [\n            {\n                "id": "SECTION_2_ROW_1_ID",\n                "title": "SECTION_2_ROW_1_TITLE",\n                "description": "SECTION_2_ROW_1_DESCRIPTION"\n            },\n            {\n                "id": "SECTION_2_ROW_2_ID",\n                "title": "SECTION_2_ROW_2_TITLE",\n                "description": "SECTION_2_ROW_2_DESCRIPTION"\n            }\n            ]\n        }\n        ]\n    }\n}\n\nwa.messages.interactive( list_message, 12345678901 );\n')),(0,a.kt)("h3",{id:"single-product"},"Single product"),(0,a.kt)("p",null,"Send a single product message to the phone number ",(0,a.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const WhatsApp = require(\'whatsapp\');\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nconst prod_message =\n{\n    "type": "product",\n    "body": {\n    "text": "optional body text"\n    },\n    "footer": {\n    "text": "optional footer text"\n    },\n    "action": {\n    "catalog_id": "CATALOG_ID",\n    "product_retailer_id": "ID_TEST_ITEM_1"\n    }\n}\n\nwa.messages.interactive( prod_message, 12345678901 );\n')),(0,a.kt)("h3",{id:"mutli-product"},"Mutli-product"),(0,a.kt)("p",null,"Send a multi-product message with two sections and two products per section to the phone number ",(0,a.kt)("inlineCode",{parentName:"p"},"12345678901"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const WhatsApp = require(\'whatsapp\');\n\nconst sender_number_1 = 12345678901234567890;\nconst wa = new WhatsApp( sender_number_1 );\n\nconst multi_prod_message =\n{\n    "type": "product_list",\n    "header":{\n        "type": "text",\n        "text": "header-content"\n    },\n    "body": {\n        "text": "body-content"\n    },\n    "footer": {\n        "text": "footer-content"\n    },\n    "action": {\n        "catalog_id": "CATALOG_ID",\n        "sections": [\n            {\n            "title": "section-title",\n            "product_items": [\n                { "product_retailer_id": "product-SKU-in-catalog" },\n                { "product_retailer_id": "product-SKU-in-catalog" },\n                ...\n            ]\n            },\n            {\n            "title": "section-title",\n            "product_items": [\n                { "product_retailer_id": "product-SKU-in-catalog" },\n                { "product_retailer_id": "product-SKU-in-catalog" },\n                ...\n            ]\n            }\n        ]\n    }\n}\n\nwa.messages.interactive( multi_prod_message, 12345678901 );\n')),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,a.kt)("a",{parentName:"li",href:"../types/interactive_object"},"Interactive_Object")," \u2014 the object describing the interactive message to send."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"recipient")," : number \u2014 the recipient's phone number with country code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"reply_message_id")," : string (optional) \u2014 the received WhatsApp message Id to reply back to.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Promise \u2014 Server response object on success."))}d.isMDXComponent=!0}}]);