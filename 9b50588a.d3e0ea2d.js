(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{236:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),i=(t(0),t(323)),o=t(329),c=(t(324),{id:"graphql-directives",title:"GraphQL Directives",slug:"/api-reference/graphql-and-directives/"}),l={unversionedId:"api-reference/graphql/graphql-directives",id:"version-v11.0.0/api-reference/graphql/graphql-directives",isDocsHomePage:!1,title:"GraphQL Directives",description:"Relay uses directives to add additional information to GraphQL documents, which are used by the Relay compiler to generate the appropriate runtime artifacts. These directives only appear in your application code and are removed from requests sent to your GraphQL server.",source:"@site/versioned_docs/version-v11.0.0/api-reference/graphql/graphql-directives.md",slug:"/api-reference/graphql-and-directives/",permalink:"/docs/api-reference/graphql-and-directives/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/graphql/graphql-directives.md",version:"v11.0.0",lastUpdatedBy:"Tim Yung",lastUpdatedAt:1617841477,sidebar:"version-v11.0.0/docs",previous:{title:"requestSubscription",permalink:"/docs/api-reference/request-subscription/"},next:{title:"Legacy APIs",permalink:"/docs/api-reference/legacy-apis/"}},s=[{value:"<code>@arguments</code>",id:"arguments",children:[]},{value:"<code>@argumentDefinitions</code>",id:"argumentdefinitions",children:[]},{value:"<code>@connection(key: String!, filters: [String])</code>",id:"connectionkey-string-filters-string",children:[]},{value:"<code>@relay(plural: Boolean)</code>",id:"relayplural-boolean",children:[]},{value:"<code>@inline</code>",id:"inline",children:[]},{value:"<code>@relay(mask: Boolean)</code>",id:"relaymask-boolean",children:[]}],u={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Relay uses directives to add additional information to GraphQL documents, which are used by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../guides/compiler/"}),"Relay compiler")," to generate the appropriate runtime artifacts. These directives only appear in your application code and are removed from requests sent to your GraphQL server."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The Relay compiler will maintain any directives supported by your server (such as ",Object(i.b)("inlineCode",{parentName:"p"},"@include")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@skip"),") so they remain part of the request to the GraphQL server and won't alter generated runtime artifacts."),Object(i.b)("h2",{id:"arguments"},Object(i.b)("inlineCode",{parentName:"h2"},"@arguments")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@arguments")," is a directive used to pass arguments to a fragment that was defined using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#argumentdefinitions"}),Object(i.b)("inlineCode",{parentName:"a"},"@argumentDefinitions")),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nquery TodoListQuery($userID: ID) {\n  ...TodoList_list @arguments(count: $count, userID: $userID) # Pass arguments here\n}\n\n")),Object(i.b)("h2",{id:"argumentdefinitions"},Object(i.b)("inlineCode",{parentName:"h2"},"@argumentDefinitions")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@argumentDefinitions")," is a directive used to specify arguments taken by a fragment. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'\nfragment TodoList_list on TodoList @argumentDefinitions(\n  count: {type: "Int", defaultValue: 10},  # Optional argument\n  userID: {type: "ID"},                    # Required argument\n) {\n  title\n  todoItems(userID: $userID, first: $count) {  # Use fragment arguments here as variables\n    ...TodoItem_item\n  }\n}\n\n')),Object(i.b)("h2",{id:"connectionkey-string-filters-string"},Object(i.b)("inlineCode",{parentName:"h2"},"@connection(key: String!, filters: [String])")),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"usePaginationFragment"),", Relay expects connection fields to be annotated with a ",Object(i.b)("inlineCode",{parentName:"p"},"@connection")," directive. For more detailed information and an example, check out the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../guided-tour/list-data/rendering-connections"}),"docs on ",Object(i.b)("inlineCode",{parentName:"a"},"usePaginationFragment")),"."),Object(i.b)("h2",{id:"relayplural-boolean"},Object(i.b)("inlineCode",{parentName:"h2"},"@relay(plural: Boolean)")),Object(i.b)("p",null,"When defining a fragment for use with a Fragment container, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(plural: true)")," directive to indicate that container expects the prop for that fragment to be a list of items instead of a single item. A query or parent that spreads a ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(plural: true)")," fragment should do so within a plural field (ie a field backed by a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://graphql.org/learn/schema/#lists-and-non-null"}),"GraphQL list"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\n// Plural fragment definition\ngraphql`\n  fragment TodoItems_items on TodoItem @relay(plural: true) {\n    id\n    text\n  }\n`;\n\n// Plural fragment usage: note the parent type is a list of items (`TodoItem[]`)\nfragment TodoApp_app on App {\n  items {\n    // parent type is a list here\n    ...TodoItem_items\n  }\n}\n\n")),Object(i.b)("h2",{id:"inline"},Object(i.b)("inlineCode",{parentName:"h2"},"@inline")),Object(i.b)("p",null,"The hooks APIs that Relay exposes allow you to read data from the store only during the render phase. In order to read data from outside of the render phase (or from outside of React), Relay exposes the ",Object(i.b)("inlineCode",{parentName:"p"},"@inline")," directive. The data from a fragment annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@inline")," can be read using ",Object(i.b)("inlineCode",{parentName:"p"},"readInlineData"),"."),Object(i.b)("p",null,"In the example below, the function ",Object(i.b)("inlineCode",{parentName:"p"},"processItemData")," is called from a React component. It requires an item object with a specific set of fields. All React components that use this function should spread the ",Object(i.b)("inlineCode",{parentName:"p"},"processItemData_item")," fragment to ensure all of the correct item data is loaded for this function."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nimport {graphql, readInlineData} from 'react-relay';\n\n// non-React function called from React\nfunction processItemData(itemRef) {\n  const item = readInlineData(graphql`\n    fragment processItemData_item on Item @inline {\n      title\n      price\n      creator {\n        name\n      }\n    }\n  `, itemRef);\n  sendToThirdPartyApi({\n    title: item.title,\n    price: item.price,\n    creatorName: item.creator.name\n  });\n}\n\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nexport default function MyComponent({item}) {\n  function handleClick() {\n    processItemData(item);\n  }\n\n  const data = useFragment(\n    graphql`\n      fragment MyComponent_item on Item {\n        ...processItemData_item\n        title\n      }\n    `,\n    item\n  );\n\n  return (\n    <button onClick={handleClick}>Process {item.title}</button>\n  );\n}\n\n")),Object(i.b)("h2",{id:"relaymask-boolean"},Object(i.b)("inlineCode",{parentName:"h2"},"@relay(mask: Boolean)")),Object(i.b)("p",null," It is not recommended to use ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(mask: false)"),". Please instead consider using the ",Object(i.b)("inlineCode",{parentName:"p"},"@inline")," fragment."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@relay(mask: false)")," can be used to prevent data masking; when including a fragment and annotating it with ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(mask: false)"),", its data will be available directly to the parent instead of being masked for a different container."),Object(i.b)("p",null,"Applied to a fragment definition, ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(mask: false)")," changes the generated Flow types to be better usable when the fragment is included with the same directive. The Flow types will no longer be exact objects and no longer contain internal marker fields."),Object(i.b)("p",null,"This may be helpful to reduce redundant fragments when dealing with nested or recursive data within a single Component."),Object(i.b)("p",null,"Keep in mind that it is typically considered an ",Object(i.b)("strong",{parentName:"p"},"anti-pattern")," to create a single fragment shared across many containers. Abusing this directive could result in over-fetching in your application."),Object(i.b)("p",null,"In the example below, the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," prop will include the data for ",Object(i.b)("inlineCode",{parentName:"p"},"id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"name")," fields wherever ",Object(i.b)("inlineCode",{parentName:"p"},"...Component_internUser")," is included, instead of Relay's normal behavior to mask those fields:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\ngraphql`\n  fragment Component_internUser on InternUser @relay(mask: false) {\n    id\n    name\n  }\n`;\n\n")),Object(i.b)(o.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0},323:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},324:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=i(t(327));const o=["internal","external"];let c;try{c=t(325).usePluginData}catch(p){c=null}function l(e){return u(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(326))},325:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return i})),t.d(n,"usePluginData",(function(){return o}));var r=t(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=i(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},326:function(e,n){var t,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,s=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?s=l.concat(s):d=-1,s.length&&f())}function f(){if(!u){var e=c(p);u=!0;for(var n=s.length;n;){for(l=s,s=[];++d<n;)l&&l[d].run();d=-1,n=s.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function m(e,n){this.fun=e,this.array=n}function b(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new m(e,n)),1!==s.length||u||c(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},327:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{l(r.next(e))}catch(n){i(n)}}function c(e){try{l(r.throw(e))}catch(n){i(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(328);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{l(r.next(e))}catch(n){i(n)}}function c(e){try{l(r.throw(e))}catch(n){i(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,i=0;const o={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),t}))}},329:function(e,n,t){"use strict";t(61);var r=t(324),a=t(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var c=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return a.createElement(o,null,a.createElement(l,null),a.createElement(c,null))},u=function(){return a.createElement(o,null,a.createElement(c,null))};n.a=function(){return Object(r.fbContent)({internal:a.createElement(s,null),external:a.createElement(u,null)})}}}]);