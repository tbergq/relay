(window.webpackJsonp=window.webpackJsonp||[]).push([[712],{1142:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return a?r.a.createElement(b,p(p({ref:t},s),{},{components:a})):r.a.createElement(b,p({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},795:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(8),i=(a(0),a(1142)),o={id:"type-emission",title:"Type Emission",original_id:"type-emission"},p={unversionedId:"type-emission",id:"version-v6.0.0/type-emission",isDocsHomePage:!1,title:"Type Emission",description:"As part of its normal work, relay-compiler will emit type information for your language of choice that helps you write type-safe application code. These types are included in the artifacts that relay-compiler generates to describe your operations and fragments.",source:"@site/versioned_docs/version-v6.0.0/Modern-TypeEmission.md",slug:"/type-emission",permalink:"/docs/v6.0.0/type-emission",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v6.0.0/Modern-TypeEmission.md",version:"v6.0.0",lastUpdatedBy:"Pieter Vanderwerff",lastUpdatedAt:1618970444,sidebar:"version-v6.0.0/docs",previous:{title:"Persisted Queries",permalink:"/docs/v6.0.0/persisted-queries"},next:{title:"Testing Relay Components",permalink:"/docs/v6.0.0/testing-relay-components"}},l=[{value:"Operation input data",id:"operation-input-data",children:[]},{value:"Operation/Fragment selection-set data",id:"operationfragment-selection-set-data",children:[]},{value:"Fragment references",id:"fragment-references",children:[]},{value:"Single artifact directory",id:"single-artifact-directory",children:[{value:"Background information",id:"background-information",children:[]}]},{value:"Language plugins",id:"language-plugins",children:[]}],s={toc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As part of its normal work, ",Object(i.b)("inlineCode",{parentName:"p"},"relay-compiler")," will emit type information for your language of choice that helps you write type-safe application code. These types are included in the artifacts that ",Object(i.b)("inlineCode",{parentName:"p"},"relay-compiler")," generates to describe your operations and fragments."),Object(i.b)("p",null,"Regardless of your choice of language, all language plugins will emit roughly the same sort of type-information, but be sure to read the documentation for other ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#language-plugins"}),"language plugins")," to learn about their specifics."),Object(i.b)("h3",{id:"operation-input-data"},"Operation input data"),Object(i.b)("p",null,"The shape of the variables object used for query, mutation, or subscription operations."),Object(i.b)("p",null,"In this example the emitted type-information would require the variables object to contain a ",Object(i.b)("inlineCode",{parentName:"p"},"page")," key with a non-null string."),Object(i.b)("h4",{id:"flow"},"Flow"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * export type ExampleQueryVariables = {|\n *   +artistID: string\n * |}\n */\nimport type { ExampleQueryVariables } from \"__generated__/ExampleQuery.graphql\"\n\nconst variables: ExampleQueryVariables = {\n  artistID: 'banksy',\n}\n\n<QueryRenderer\n  query={graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `}\n  variables={variables}\n/>\n\n")),Object(i.b)("h4",{id:"typescript"},"TypeScript"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * export type ExampleQueryVariables = {\n *   readonly artistID: string\n * }\n * export type ExampleQuery = {\n *   readonly variables: ExampleQueryVariables\n * }\n */\nimport { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\n<QueryRenderer<ExampleQuery>\n  query={graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `}\n  variables={{\n    artistID: 'banksy',\n  }}\n/>\n\n")),Object(i.b)("h3",{id:"operationfragment-selection-set-data"},"Operation/Fragment selection-set data"),Object(i.b)("p",null,"The shape of the data selected in a operation or fragment, following the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./thinking-in-relay#data-masking"}),"data-masking")," rules. That is, excluding any data selected by fragment spreads, unless the ",Object(i.b)("inlineCode",{parentName:"p"},"@relay(mask: false)")," directive is used."),Object(i.b)("p",null,"In this example the emitted type-information describes the response data available to the operation\u2019s render function."),Object(i.b)("h4",{id:"flow-1"},"Flow"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * export type ExampleQueryResponse = {|\n *   +artist: ?{|\n *     +name: string\n *   |}\n * |}\n */\nimport type { ExampleQueryResponse } from "__generated__/ExampleQuery.graphql"\n\n<QueryRenderer\n  query={graphql`\n    query ExampleQuery {\n      artist(id: "banksy") {\n        name\n      }\n    }\n  `}\n  render={({ props }: { props?: ExampleQueryResponse }) => {\n    if (props) {\n      return props.artist && <div>{props.artist.name} is great!</div>\n    }\n    return <div>Loading</div>\n  }}\n/>\n\n')),Object(i.b)("h4",{id:"typescript-1"},"TypeScript"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly name: string\n *   }\n * }\n * export type ExampleQuery = {\n *   readonly response: ExampleQueryResponse\n * }\n */\nimport { ExampleQuery } from "__generated__/ExampleQuery.graphql"\n\n<QueryRenderer<ExampleQuery>\n  query={graphql`\n    query ExampleQuery {\n      artist(id: "banksy") {\n        name\n      }\n    }\n  `}\n  render={({ props }) => {\n    if (props) {\n      return props.artist && <div>{props.artist.name} is great!</div>\n    }\n    return <div>Loading</div>\n  }}\n/>\n\n')),Object(i.b)("p",null,"Similarly, in this example the emitted type-information describes the prop data that the container expects to receive."),Object(i.b)("h4",{id:"flow-2"},"Flow"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * export type ExampleFragment_artist = {|\n *   +name: string\n * |}\n */\nimport type { ExampleFragment_artist } from "__generated__/ExampleFragment_artist.graphql"\n\nexport const ExampleFragment = createFragmentContainer(\n  (props: { artist: ExampleFragment_artist }) => (\n    <div>About the artist: {props.artist.biography}</div>\n  ),\n  {\n    artist: graphql`\n      fragment ExampleFragment_artist on Artist {\n        biography\n      }\n    `\n  }\n)\n\n')),Object(i.b)("h4",{id:"typescript-2"},"TypeScript"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * export type ExampleFragment_artist = {\n *   readonly name: string\n * }\n */\nimport { ExampleFragment_artist } from "__generated__/ExampleFragment_artist.graphql"\n\nexport const ExampleFragment = createFragmentContainer(\n  (props: { artist: ExampleFragment_artist }) => (\n    <div>About the artist: {props.artist.biography}</div>\n  ),\n  {\n    artist: graphql`\n      fragment ExampleFragment_artist on Artist {\n        biography\n      }\n    `,\n  }\n)\n\n')),Object(i.b)("h3",{id:"fragment-references"},"Fragment references"),Object(i.b)("p",null,"The opaque identifier described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./thinking-in-relay#data-masking"}),"data-masking")," that a child container expects to receive from its parent, which represents the child container\u2019s fragment spread inside the parent\u2019s fragment."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Please read ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"#single-artifact-directory"}),"this important caveat")," about actually enabling type-safe fragment reference checking.")),Object(i.b)("p",null,"Consider a component that composes the above fragment container example. In this example, the emitted type-information of the child container receives a unique opaque identifier type, called a fragment reference, which the type-information emitted for the parent\u2019s fragment references in the location where the child\u2019s fragment is spread. Thus ensuring that the child\u2019s fragment is spread into the parent\u2019s fragment ",Object(i.b)("em",{parentName:"p"},"and")," the correct fragment reference is passed to the child container at runtime."),Object(i.b)("h4",{id:"flow-3"},"Flow"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * import type { FragmentReference } from "relay-runtime";\n * declare export opaque type ExampleFragment_artist$ref: FragmentReference;\n * export type ExampleFragment_artist = {|\n *   +name: string,\n *   +$refType: ExampleFragment_artist$ref,\n * |};\n */\nimport { ExampleFragment } from "./ExampleFragment"\n\n/**\n * import type { ExampleFragment_artist$ref } from "ExampleFragment_artist.graphql";\n * export type ExampleQueryResponse = {|\n *   +artist: ?{|\n *     +$fragmentRefs: ExampleFragment_artist$ref,\n *   |}\n * |};\n */\nimport type { ExampleQueryResponse } from "__generated__/ExampleQuery.graphql"\n\n<QueryRenderer\n  query={graphql`\n    query ExampleQuery {\n      artist(id: "banksy") {\n        ...ExampleFragment_artist\n      }\n    }\n  `}\n  render={({ props }: { props?: ExampleQueryResponse }) => {\n    if (props) {\n      // Here only `props.artist` is an object typed as the appropriate prop\n      // for the `artist` prop of the `ExampleFragment` container.\n      return <ExampleFragment artist={props.artist} />\n    }\n    return <div>Loading</div>\n  }}\n/>\n\n')),Object(i.b)("h4",{id:"typescript-3"},"TypeScript"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * declare const _ExampleFragment_artist$ref: unique symbol;\n * export type ExampleFragment_artist$ref = typeof _ExampleFragment_artist$ref;\n * export type ExampleFragment_artist = {\n *   readonly name: string\n *   readonly " $refType": ExampleFragment_artist$ref\n * }\n */\nimport { ExampleFragment } from "./ExampleFragment"\n\n/**\n * import { ExampleFragment_artist$ref } from "ExampleFragment_artist.graphql";\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly " $fragmentRefs": ExampleFragment_artist$ref\n *   }\n * }\n * export type ExampleQuery = {\n *   readonly response: ExampleQueryResponse\n * }\n */\nimport { ExampleQuery } from "__generated__/ExampleQuery.graphql"\n\n<QueryRenderer<ExampleQuery>\n  query={graphql`\n    query ExampleQuery {\n      artist(id: "banksy") {\n        ...ExampleFragment_artist\n      }\n    }\n  `}\n  render={({ props }) => {\n    if (props) {\n      // Here only `props.artist` is an object typed as the appropriate prop\n      // for the `artist` prop of the `ExampleFragment` container.\n      return props.artist && <ExampleFragment artist={props.artist} />\n    }\n    return <div>Loading</div>\n  }}\n/>\n\n')),Object(i.b)("h2",{id:"single-artifact-directory"},"Single artifact directory"),Object(i.b)("p",null,"An important caveat to note is that by default strict fragment reference type-information will ",Object(i.b)("em",{parentName:"p"},"not")," be emitted, instead they will be typed as ",Object(i.b)("inlineCode",{parentName:"p"},"any")," and would allow you to pass in any data to the child container."),Object(i.b)("p",null,"To enable this feature, you will have to tell the compiler to store all the artifacts in a single directory, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"\n$ relay-compiler --artifactDirectory ./src/__generated__ [\u2026]\n\n")),Object(i.b)("p",null,"\u2026and additionally inform the babel plugin in your ",Object(i.b)("inlineCode",{parentName:"p"},".babelrc")," config where to look for the artifacts:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "plugins": [\n    ["relay", { "artifactDirectory": "./src/__generated__" }]\n  ]\n}\n')),Object(i.b)("p",null,"It is recommended to alias this directory in your module resolution configuration such that you don\u2019t need to specify relative paths in your source files. This is what is also done in the above examples, where artifacts are imported from a ",Object(i.b)("inlineCode",{parentName:"p"},"__generated__")," alias, rather than relative paths like ",Object(i.b)("inlineCode",{parentName:"p"},"../../../../__generated__"),"."),Object(i.b)("h3",{id:"background-information"},"Background information"),Object(i.b)("p",null,"The reason is that ",Object(i.b)("inlineCode",{parentName:"p"},"relay-compiler")," and its artifact emission is stateless. Meaning that it does not keep track of locations of original source files and where the compiler previously saved the accompanying artifact on disk. Thus, if the compiler were to emit artifacts that try to import fragment reference types from ",Object(i.b)("em",{parentName:"p"},"other")," artifacts, the compiler would:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"first need to know where on disk that other artifact exists;"),Object(i.b)("li",{parentName:"ul"},"and update imports when the other artifact changes location on disk.")),Object(i.b)("p",null,"Facebook uses a module system called ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/dan_abramov/status/758655309212704768"}),"Haste"),", in which all source files are considered in a flat namespace. This means that an import declaration does not need to specify the path to another module and thus there is no need for the compiler to ever consider the above issues. I.e. an import only needs to specify the basename of the module filename and Haste takes care of actually finding the right module at import time. Outside of Facebook, however, usage of the Haste module system is non-existent nor encouraged, thus the decision to not import fragment reference types but instead type them as ",Object(i.b)("inlineCode",{parentName:"p"},"any"),"."),Object(i.b)("p",null,"At its simplest, we can consider Haste as a single directory that contains all module files, thus all module imports always being safe to import using relative sibling paths. This is what is achieved by the single artifact directory feature. Rather than co-locating artifacts with their source files, all artifacts are stored in a single directory, allowing the compiler to emit imports of fragment reference types."),Object(i.b)("h2",{id:"language-plugins"},"Language plugins"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Flow: This is the default and builtin language plugin. You can explicitly enable it like so:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"\n$ relay-compiler --language javascript [\u2026]\n\n")))),Object(i.b)("p",null,"By default, Flow types are emitted inside of comments to avoid forcing your project to use Flow. Flow types inside of comments is perfectly valid Flow, however, some editors and IDEs (like WebStorm/IDEA) do not understand Flow unless it's in plain source code. In order to solve that, there's a language plugin maintained by the community that replicates the functionality of the default builtin plugin, but emits the Flow types as plain source and not inside comments. Installation and usage:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"\n  $ yarn add --dev relay-compiler-language-js-flow-uncommented\n  $ relay-compiler --language js-flow-uncommented [\u2026]\n\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/relay-tools/relay-compiler-language-typescript"}),"TypeScript"),": This is a language plugin for the TypeScript language maintained by the community. Install and enable it like so:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"\n$ yarn add --dev relay-compiler-language-typescript @types/react-relay @types/relay-runtime\n$ relay-compiler --language typescript [\u2026]\n\n")))),Object(i.b)("p",null,"If you are looking to create your own language plugin, refer to the ",Object(i.b)("inlineCode",{parentName:"p"},"relay-compiler")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/relay/blob/master/packages/relay-compiler/language/RelayLanguagePluginInterface.js"}),"language plugin interface"),"."))}c.isMDXComponent=!0}}]);