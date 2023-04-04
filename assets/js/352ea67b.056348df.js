"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,b=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"InteractiveObject",title:"InteractiveObject"},o="Interactive Object",l={unversionedId:"api-reference/types/InteractiveObject",id:"api-reference/types/InteractiveObject",title:"InteractiveObject",description:"The object describing an interactive message. Each interactive object type has different object requirements.",source:"@site/docs/api-reference/types/interactive_object.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/InteractiveObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/InteractiveObject",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/types/interactive_object.md",tags:[],version:"current",frontMatter:{id:"InteractiveObject",title:"InteractiveObject"},sidebar:"mainSidebar",previous:{title:"ImageMediaObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/ImageMediaObject"},next:{title:"LanguageObject",permalink:"/WhatsApp-Nodejs-SDK/api-reference/types/language_object"}},p={},c=[{value:"List",id:"list",level:2},{value:"Example",id:"example",level:3},{value:"Properties",id:"properties",level:3},{value:"Multi-product",id:"multi-product",level:2},{value:"Example",id:"example-1",level:3},{value:"Properties",id:"properties-1",level:3},{value:"Single product",id:"single-product",level:2},{value:"Example",id:"example-2",level:3},{value:"Properties",id:"properties-2",level:3},{value:"Reply button",id:"reply-button",level:2},{value:"Example",id:"example-3",level:3},{value:"Properties",id:"properties-3",level:3}],d={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interactive-object"},"Interactive Object"),(0,a.kt)("p",null,"The object describing an interactive message. Each interactive object type has different object requirements."),(0,a.kt)("h2",{id:"list"},"List"),(0,a.kt)("p",null,"The object describing a list message interactive object."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "list",\n  "header": {\n    "type": "text",\n    "text": "HEADER_TEXT"\n  },\n  "body": {\n    "text": "BODY_TEXT"\n  },\n  "footer": {\n    "text": "FOOTER_TEXT"\n  },\n  "action": {\n    "button": "BUTTON_TEXT",\n    "sections": [\n      {\n        "title": "SECTION_1_TITLE",\n        "rows": [\n          {\n            "id": "SECTION_1_ROW_1_ID",\n            "title": "SECTION_1_ROW_1_TITLE",\n            "description": "SECTION_1_ROW_1_DESCRIPTION"\n          },\n          {\n            "id": "SECTION_1_ROW_2_ID",\n            "title": "SECTION_1_ROW_2_TITLE",\n            "description": "SECTION_1_ROW_2_DESCRIPTION"\n          }\n        ]\n      },\n      {\n        "title": "SECTION_2_TITLE",\n        "rows": [\n          {\n            "id": "SECTION_2_ROW_1_ID",\n            "title": "SECTION_2_ROW_1_TITLE",\n            "description": "SECTION_2_ROW_1_DESCRIPTION"\n          },\n          {\n            "id": "SECTION_2_ROW_2_ID",\n            "title": "SECTION_2_ROW_2_TITLE",\n            "description": "SECTION_2_ROW_2_DESCRIPTION"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),' : "list" \u2014 interactive object type of ',(0,a.kt)("em",{parentName:"li"},"list"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,a.kt)("a",{parentName:"li",href:"SimpleTextObject"},"SimpleTextObject")," \u2014 content of the message. Emojis and markdown are supported. Maximum length: 1024 characters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"footer")," : ",(0,a.kt)("a",{parentName:"li",href:"SimpleTextObject"},"SimpleTextObject")," (optional) \u2014 footer content. Emojis, markdown, and links are supported. Maximum length: 60 characters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"header")," : ",(0,a.kt)("a",{parentName:"li",href:"HeaderObject"},"HeaderObject")," (optional) \u2014 header content displayed on top of a message."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"action")," : ",(0,a.kt)("a",{parentName:"li",href:"ActionObject#reply-button"},"ActionObject")," \u2014 action you want the user to perform after reading the message.")),(0,a.kt)("h2",{id:"multi-product"},"Multi-product"),(0,a.kt)("p",null,"The object describing a multi-product interactive object."),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "type": "product_list",\n     "header":{\n       "type": "text",\n       "text": "header-content"\n     },\n     "body": {\n       "text": "body-content"\n     },\n     "footer": {\n       "text": "footer-content"\n     },\n     "action": {\n       "catalog_id": "CATALOG_ID",\n       "sections": [\n         {\n           "title": "section-title",\n           "product_items": [\n             { "product_retailer_id": "product-SKU-in-catalog" },\n             { "product_retailer_id": "product-SKU-in-catalog" }\n           ]\n         },\n         {\n           "title": "section-title",\n           "product_items": [\n             { "product_retailer_id": "product-SKU-in-catalog" },\n             { "product_retailer_id": "product-SKU-in-catalog" }\n           ]\n         }\n       ]\n     }\n   }\n')),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),' : "product_list" \u2014 interactive object type of ',(0,a.kt)("em",{parentName:"li"},"product_list"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,a.kt)("a",{parentName:"li",href:"SimpleTextObject"},"SimpleTextObject")," \u2014 content of the message. Emojis and markdown are supported. Maximum length: 1024 characters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"footer")," : ",(0,a.kt)("a",{parentName:"li",href:"SimpleTextObject"},"SimpleTextObject")," (optional) \u2014 footer content. Emojis, markdown, and links are supported. Maximum length: 60 characters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"header")," : ",(0,a.kt)("a",{parentName:"li",href:"HeaderObject"},"HeaderObject")," \u2014 header content displayed on top of a message."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"action")," : ",(0,a.kt)("a",{parentName:"li",href:"ActionObject#reply-button"},"ActionObject")," \u2014 action you want the user to perform after reading the message.")),(0,a.kt)("h2",{id:"single-product"},"Single product"),(0,a.kt)("p",null,"The object describing a single product interactive object."),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "product",\n  "body": {\n    "text": "optional body text"\n  },\n  "footer": {\n    "text": "optional footer text"\n  },\n  "action": {\n    "catalog_id": "CATALOG_ID",\n    "product_retailer_id": "ID_TEST_ITEM_1"\n  }\n}\n')),(0,a.kt)("h3",{id:"properties-2"},"Properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),' : "product" \u2014 interactive object type of ',(0,a.kt)("em",{parentName:"li"},"product"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,a.kt)("a",{parentName:"li",href:"SimpleTextObject"},"SimpleTextObject")," (optional) \u2014 content of the message. Emojis and markdown are supported. Maximum length: 1024 characters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"footer")," : ",(0,a.kt)("a",{parentName:"li",href:"SimpleTextObject"},"SimpleTextObject")," (optional) \u2014 footer content. Emojis, markdown, and links are supported. Maximum length: 60 characters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"header")," : ",(0,a.kt)("a",{parentName:"li",href:"HeaderObject"},"HeaderObject")," (optional) \u2014 header content displayed on top of a message."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"action")," : ",(0,a.kt)("a",{parentName:"li",href:"ActionObject#reply-button"},"ActionObject")," \u2014 action you want the user to perform after reading the message.")),(0,a.kt)("h2",{id:"reply-button"},"Reply button"),(0,a.kt)("p",null,"The object describing a reply button interactive object."),(0,a.kt)("h3",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "button",\n    "body": {\n        "text": "BUTTON_TEXT"\n    },\n    "action": {\n      "buttons": [\n        {\n          "type": "reply",\n          "reply": {\n            "id": "UNIQUE_BUTTON_ID_1",\n            "title": "BUTTON_TITLE_1"\n          }\n        },\n        {\n            "type": "reply",\n            "reply": {\n                "id": "UNIQUE_BUTTON_ID_2",\n                "title": "BUTTON_TITLE_2"\n            }\n        }\n        ]\n    }\n}\n')),(0,a.kt)("h3",{id:"properties-3"},"Properties"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),' : "button" \u2014 interactive object type of ',(0,a.kt)("em",{parentName:"li"},"button"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," : ",(0,a.kt)("a",{parentName:"li",href:"SimpleTextObject"},"SimpleTextObject")," \u2014 content of the message. Emojis and markdown are supported. Maximum length: 1024 characters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"footer")," : ",(0,a.kt)("a",{parentName:"li",href:"SimpleTextObject"},"SimpleTextObject")," (optional) \u2014 footer content. Emojis, markdown, and links are supported. Maximum length: 60 characters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"header")," : ",(0,a.kt)("a",{parentName:"li",href:"HeaderObject"},"HeaderObject")," (optional) \u2014 header content displayed on top of a message."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"action")," : ",(0,a.kt)("a",{parentName:"li",href:"ActionObject#reply-button"},"ActionObject")," \u2014 action you want the user to perform after reading the message.")))}m.isMDXComponent=!0}}]);