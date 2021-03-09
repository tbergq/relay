(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1171:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),b=s(t),g=r,u=b["".concat(c,".").concat(g)]||b[g]||p[g]||o;return t?a.a.createElement(u,i(i({ref:n},l),{},{components:t})):a.a.createElement(u,i({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=g;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},359:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(1171)),c={id:"relay-store",title:"Relay Store",original_id:"relay-store"},i={unversionedId:"relay-store",id:"version-v1.5.0/relay-store",isDocsHomePage:!1,title:"Relay Store",description:"The Relay Store can be used to programatically update client-side data inside updater functions. The following is a reference of the Relay Store interface.",source:"@site/versioned_docs/version-v1.5.0/Modern-RelayStore.md",slug:"/relay-store",permalink:"/docs/v1.5.0/relay-store",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/versioned_docs/version-v1.5.0/Modern-RelayStore.md",version:"v1.5.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1615322132,sidebar:"version-v1.5.0/docs",previous:{title:"Subscriptions",permalink:"/docs/v1.5.0/subscriptions"},next:{title:"Routing",permalink:"/docs/v1.5.0/routing"}},d=[{value:"RecordSourceSelectorProxy",id:"recordsourceselectorproxy",children:[{value:"<code>create(dataID: string, typeName: string): RecordProxy</code>",id:"createdataid-string-typename-string-recordproxy",children:[]},{value:"<code>delete(dataID: string): void</code>",id:"deletedataid-string-void",children:[]},{value:"<code>get(dataID: string): ?RecordProxy</code>",id:"getdataid-string-recordproxy",children:[]},{value:"<code>getRoot(): RecordProxy</code>",id:"getroot-recordproxy",children:[]},{value:"<code>getRootField(fieldName: string): ?RecordProxy</code>",id:"getrootfieldfieldname-string-recordproxy",children:[]},{value:"<code>getPluralRootField(fieldName: string): ?Array&lt;?RecordProxy&gt;</code>",id:"getpluralrootfieldfieldname-string-arrayrecordproxy",children:[]}]},{value:"RecordProxy",id:"recordproxy",children:[{value:"<code>getDataID(): string</code>",id:"getdataid-string",children:[]},{value:"<code>getType(): string</code>",id:"gettype-string",children:[]},{value:"<code>getValue(name: string, arguments?: ?Object): mixed</code>",id:"getvaluename-string-arguments-object-mixed",children:[]},{value:"<code>getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy</code>",id:"getlinkedrecordname-string-arguments-object-recordproxy",children:[]},{value:"<code>getLinkedRecords(name: string, arguments?: ?Object): ?Array&lt;?RecordProxy&gt;</code>",id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy",children:[]},{value:"<code>getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)</code>",id:"getorcreatelinkedrecordname-string-typename-string-arguments-object",children:[]},{value:"<code>setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy</code>",id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy",children:[]},{value:"<code>copyFieldsFrom(sourceRecord: RecordProxy): void</code>",id:"copyfieldsfromsourcerecord-recordproxy-void",children:[]},{value:"<code>setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)</code>",id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object",children:[]},{value:"<code>setLinkedRecords(records: Array&lt;RecordProxy&gt;, name: string, variables?: ?Object)</code>",id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object",children:[]}]},{value:"ConnectionHandler",id:"connectionhandler",children:[{value:"<code>getConnection(record: RecordProxy, key: string, filters?: ?Object)</code>",id:"getconnectionrecord-recordproxy-key-string-filters-object",children:[]},{value:"Edge creation and insertion",id:"edge-creation-and-insertion",children:[]},{value:"<code>deleteNode(connection: RecordProxy, nodeID: string): void</code>",id:"deletenodeconnection-recordproxy-nodeid-string-void",children:[]}]}],l={toc:d};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Relay Store can be used to programatically update client-side data inside ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./mutations#using-updater-and-optimisticupdater"}),Object(o.b)("inlineCode",{parentName:"a"},"updater")," functions"),". The following is a reference of the Relay Store interface."),Object(o.b)("p",null,"Table of Contents:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#recordsourceselectorproxy"}),"RecordSourceSelectorProxy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#recordproxy"}),"RecordProxy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#connectionhandler"}),"ConnectionHandler"))),Object(o.b)("h2",{id:"recordsourceselectorproxy"},"RecordSourceSelectorProxy"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," is the type of the ",Object(o.b)("inlineCode",{parentName:"p"},"store")," that ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./mutations#using-updater-and-optimisticupdater"}),Object(o.b)("inlineCode",{parentName:"a"},"updater")," functions")," receive as an argument. The following is the ",Object(o.b)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\ninterface RecordSourceSelectorProxy {\n  create(dataID: string, typeName: string): RecordProxy;\n  delete(dataID: string): void;\n  get(dataID: string): ?RecordProxy;\n  getRoot(): RecordProxy;\n  getRootField(fieldName: string): ?RecordProxy;\n  getPluralRootField(fieldName: string): ?Array<?RecordProxy>;\n}\n\n")),Object(o.b)("h3",{id:"createdataid-string-typename-string-recordproxy"},Object(o.b)("inlineCode",{parentName:"h3"},"create(dataID: string, typeName: string): RecordProxy")),Object(o.b)("p",null,"Creates a new record in the store given a ",Object(o.b)("inlineCode",{parentName:"p"},"dataID")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"typeName")," as defined by the GraphQL schema. Returns a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#recordproxy"}),Object(o.b)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the newly created record."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst record = store.create(dataID, 'Todo');\n\n")),Object(o.b)("h3",{id:"deletedataid-string-void"},Object(o.b)("inlineCode",{parentName:"h3"},"delete(dataID: string): void")),Object(o.b)("p",null,"Deletes a record from the store given its ",Object(o.b)("inlineCode",{parentName:"p"},"dataID"),"."),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nstore.delete(dataID);\n\n")),Object(o.b)("h3",{id:"getdataid-string-recordproxy"},Object(o.b)("inlineCode",{parentName:"h3"},"get(dataID: string): ?RecordProxy")),Object(o.b)("p",null,"Retrieves a record from the store given its ",Object(o.b)("inlineCode",{parentName:"p"},"dataID"),". Returns a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#recordproxy"}),Object(o.b)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst record = store.get(dataID);\n\n")),Object(o.b)("h3",{id:"getroot-recordproxy"},Object(o.b)("inlineCode",{parentName:"h3"},"getRoot(): RecordProxy")),Object(o.b)("p",null,"Returns the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#recordproxy"}),Object(o.b)("inlineCode",{parentName:"a"},"RecordProxy"))," representing the root of the GraphQL document."),Object(o.b)("h4",{id:"example-3"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nviewer {\n  id\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\n// Represents root query\nconst root = store.getRoot();\n\n")),Object(o.b)("h3",{id:"getrootfieldfieldname-string-recordproxy"},Object(o.b)("inlineCode",{parentName:"h3"},"getRootField(fieldName: string): ?RecordProxy")),Object(o.b)("p",null,"Retrieves a root field from the store given the ",Object(o.b)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#recordproxy"}),Object(o.b)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),Object(o.b)("h4",{id:"example-4"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nviewer {\n  id\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst viewer = store.getRootField('viewer');\n\n")),Object(o.b)("h3",{id:"getpluralrootfieldfieldname-string-arrayrecordproxy"},Object(o.b)("inlineCode",{parentName:"h3"},"getPluralRootField(fieldName: string): ?Array<?RecordProxy>")),Object(o.b)("p",null,"Retrieves a root field that represents a collection from the store given the ",Object(o.b)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns an array of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#recordproxy"}),Object(o.b)("inlineCode",{parentName:"a"},"RecordProxies")),"."),Object(o.b)("h4",{id:"example-5"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nnodes(first: 10) {\n  # ...\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst nodes = store.getPluralRootField('nodes');\n\n")),Object(o.b)("h2",{id:"recordproxy"},"RecordProxy"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"RecordProxy")," serves as an interface to mutate records:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\ninterface RecordProxy {\n  copyFieldsFrom(sourceRecord: RecordProxy): void;\n  getDataID(): string;\n  getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy;\n  getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>;\n  getOrCreateLinkedRecord(\n    name: string,\n    typeName: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  getType(): string;\n  getValue(name: string, arguments?: ?Object): mixed;\n  setLinkedRecord(\n    record: RecordProxy,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setLinkedRecords(\n    records: Array<?RecordProxy>,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy;\n}\n\n")),Object(o.b)("h3",{id:"getdataid-string"},Object(o.b)("inlineCode",{parentName:"h3"},"getDataID(): string")),Object(o.b)("p",null,"Returns the dataID of the current record."),Object(o.b)("h4",{id:"example-6"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst id = record.getDataID();\n\n")),Object(o.b)("h3",{id:"gettype-string"},Object(o.b)("inlineCode",{parentName:"h3"},"getType(): string")),Object(o.b)("p",null,"Gets the type of the current record, as defined by the GraphQL schema."),Object(o.b)("h4",{id:"example-7"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst type = user.getType();  // User\n\n")),Object(o.b)("h3",{id:"getvaluename-string-arguments-object-mixed"},Object(o.b)("inlineCode",{parentName:"h3"},"getValue(name: string, arguments?: ?Object): mixed")),Object(o.b)("p",null,"Gets the value of a field in the current record given the field name."),Object(o.b)("h4",{id:"example-8"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nviewer {\n  id\n  name\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst name = viewer.getValue('name');\n\n")),Object(o.b)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",Object(o.b)("inlineCode",{parentName:"p"},"variables"),"."),Object(o.b)("h4",{id:"example-9"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nviewer {\n  id\n  name(arg: $arg)\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst name = viewer.getValue('name', {arg: 'value'});\n\n")),Object(o.b)("h3",{id:"getlinkedrecordname-string-arguments-object-recordproxy"},Object(o.b)("inlineCode",{parentName:"h3"},"getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy")),Object(o.b)("p",null,"Retrieves the a record associated with the current record given the field name, as defined by the GraphQL document. Returns a ",Object(o.b)("inlineCode",{parentName:"p"},"RecordProxy"),"."),Object(o.b)("h4",{id:"example-10"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nrootField {\n  viewer {\n    id\n    name\n  }\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer');\n\n")),Object(o.b)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," as well."),Object(o.b)("h4",{id:"example-11"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nrootField {\n  viewer(arg: $arg) {\n    id\n  }\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer', {arg: 'value'});\n\n")),Object(o.b)("h3",{id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy"},Object(o.b)("inlineCode",{parentName:"h3"},"getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>")),Object(o.b)("p",null,"Retrieves the set of records associated with the current record given the field name, as defined by the GraphQL document. Returns an array of ",Object(o.b)("inlineCode",{parentName:"p"},"RecordProxies"),"."),Object(o.b)("h4",{id:"example-12"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nrootField {\n  nodes {\n    # ...\n  }\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst rootField = store.getRootField('rootField');\nconst nodes = rootField.getLinkedRecord('nodes');\n\n")),Object(o.b)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," as well."),Object(o.b)("h4",{id:"example-13"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nrootField {\n  nodes(first: $count) {\n    # ...\n  }\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer', {count: 10});\n\n")),Object(o.b)("h3",{id:"getorcreatelinkedrecordname-string-typename-string-arguments-object"},Object(o.b)("inlineCode",{parentName:"h3"},"getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)")),Object(o.b)("p",null,"Retrieves the a record associated with the current record given the field name, as defined by the GraphQL document. If the linked record does not exist, it will be created given the type name. Returns a ",Object(o.b)("inlineCode",{parentName:"p"},"RecordProxy"),"."),Object(o.b)("h4",{id:"example-14"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nrootField {\n  viewer {\n    id\n  }\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst rootField = store.getRootField('rootField');\nconst newViewer = rootField.getOrCreateLinkedRecord('viewer', 'User'); // Will create if it doesn't exist\n\n")),Object(o.b)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," as well."),Object(o.b)("h3",{id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy"},Object(o.b)("inlineCode",{parentName:"h3"},"setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy")),Object(o.b)("p",null,"Mutates the current record by setting a new value on the specified field. Returns the mutated record."),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nviewer {\n  id\n  name\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nviewer.setValue('New Name', 'name');\n\n")),Object(o.b)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",Object(o.b)("inlineCode",{parentName:"p"},"variables"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nviewer.setValue('New Name', 'name', {arg: 'value'});\n\n")),Object(o.b)("h3",{id:"copyfieldsfromsourcerecord-recordproxy-void"},Object(o.b)("inlineCode",{parentName:"h3"},"copyFieldsFrom(sourceRecord: RecordProxy): void")),Object(o.b)("p",null,"Mutates the current record by copying the fields over from the passed in record ",Object(o.b)("inlineCode",{parentName:"p"},"sourceRecord"),"."),Object(o.b)("h4",{id:"example-15"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst record = store.get(id1);\nconst otherRecord = store.get(id2);\nrecord.copyFieldsFrom(otherRecord); // Mutates `record`\n\n")),Object(o.b)("h3",{id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object"},Object(o.b)("inlineCode",{parentName:"h3"},"setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)")),Object(o.b)("p",null,"Mutates the current record by setting a new linked record on the given the field name."),Object(o.b)("h4",{id:"example-16"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nrootField {\n  viewer {\n    id\n  }\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst rootField = store.getRootField('rootField');\nconst newViewer = store.create(/* ... */)''\nrootField.setLinkedRecord(newViewer, 'viewer'); //\n\n")),Object(o.b)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," as well."),Object(o.b)("h3",{id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object"},Object(o.b)("inlineCode",{parentName:"h3"},"setLinkedRecords(records: Array<RecordProxy>, name: string, variables?: ?Object)")),Object(o.b)("p",null,"Mutates the current record by setting a new set of linked records on the given the field name."),Object(o.b)("h4",{id:"example-17"},"Example"),Object(o.b)("p",null,"Given the GraphQL document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nrootField {\n  nodes {\n    # ...\n  }\n}\n\n")),Object(o.b)("p",null,"Usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst rootField = store.getRootField('rootField');\nconst newNode = store.create(/* ... */);\nconst newNodes = [...rootField.getLinkedRecords('nodes'), newNode];\nrootField.setLinkedRecords(newNodes, 'nodes'); //\n\n")),Object(o.b)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",Object(o.b)("inlineCode",{parentName:"p"},"variables")," as well."),Object(o.b)("h2",{id:"connectionhandler"},"ConnectionHandler"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ConnectionHandler")," is a utility module exposed by ",Object(o.b)("inlineCode",{parentName:"p"},"relay-runtime")," that aids in the manipulation of connections. ",Object(o.b)("inlineCode",{parentName:"p"},"ConnectionHandler")," exposes the following interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\ninterface ConnectionHandler {\n  getConnection(\n    record: RecordProxy,\n    key: string,\n    filters?: ?Object,\n  ): ?RecordProxy,\n  createEdge(\n    store: RecordSourceProxy,\n    connection: RecordProxy,\n    node: RecordProxy,\n    edgeType: string,\n  ): RecordProxy,\n  insertEdgeBefore(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  insertEdgeAfter(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  deleteNode(connection: RecordProxy, nodeID: string): void\n}\n\n")),Object(o.b)("h3",{id:"getconnectionrecord-recordproxy-key-string-filters-object"},Object(o.b)("inlineCode",{parentName:"h3"},"getConnection(record: RecordProxy, key: string, filters?: ?Object)")),Object(o.b)("p",null,"Given a record and a connection key, and optionally a set of filters, ",Object(o.b)("inlineCode",{parentName:"p"},"getConnection")," retrieves a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#recordproxy"}),Object(o.b)("inlineCode",{parentName:"a"},"RecordProxy"))," that represents a connection that was annotated with a ",Object(o.b)("inlineCode",{parentName:"p"},"@connection")," directive."),Object(o.b)("p",null,"First, let's take a look at a plain connection:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nfragment FriendsFragment on User {\n  friends(first: 10) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n\n")),Object(o.b)("p",null,"Accessing a plain connection field like this is the same as other regular field:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\n// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = user && user.getLinkedRecord(user, 'friends');\n\n// Access fields on the connection:\nconst edges = friends.getLinkedRecords('edges');\n\n")),Object(o.b)("p",null,"In a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./pagination-container"}),"pagination container"),", we usually annotate the actual connection field with ",Object(o.b)("inlineCode",{parentName:"p"},"@connection")," to tell Relay which part needs to be paginated:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'\nfragment FriendsFragment on User {\n  friends(first: 10, orderby: "firstname") @connection(\n    key: "FriendsFragment_friends",\n  ) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n\n')),Object(o.b)("p",null,"For connections like the above, ",Object(o.b)("inlineCode",{parentName:"p"},"ConnectionHandler")," helps us find the record:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nimport {ConnectionHandler} from 'relay-runtime';\n\n// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(\n user,                        // parent record\n 'FriendsFragment_friends'    // connection key\n {orderby: 'firstname'}       // 'filters' that is used to identify the connection\n);\n// Access fields on the connection:\nconst edges = friends.getLinkedRecords('edges');\n\n")),Object(o.b)("h3",{id:"edge-creation-and-insertion"},"Edge creation and insertion"),Object(o.b)("h4",{id:"createedgestore-recordsourceproxy-connection-recordproxy-node-recordproxy-edgetype-string"},Object(o.b)("inlineCode",{parentName:"h4"},"createEdge(store: RecordSourceProxy, connection: RecordProxy, node: RecordProxy, edgeType: string)")),Object(o.b)("p",null,"Creates an edge given a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#recordsourceselectorproxy"}),Object(o.b)("inlineCode",{parentName:"a"},"store")),", a connection, the edge type, and a record that holds that connection."),Object(o.b)("h4",{id:"insertedgebeforeconnection-recordproxy-newedge-recordproxy-cursor-string"},Object(o.b)("inlineCode",{parentName:"h4"},"insertEdgeBefore(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),Object(o.b)("p",null,"Given a connection, inserts the edge at the beginning of the connection, or before the specified ",Object(o.b)("inlineCode",{parentName:"p"},"cursor"),"."),Object(o.b)("h4",{id:"inseredgeafterconnection-recordproxy-newedge-recordproxy-cursor-string"},Object(o.b)("inlineCode",{parentName:"h4"},"inserEdgeAfter(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),Object(o.b)("p",null,"Given a connection, inserts the edge at the end of the connection, or after the specified ",Object(o.b)("inlineCode",{parentName:"p"},"cursor"),"."),Object(o.b)("h4",{id:"example-18"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'friends');\nconst edge = ConnectionHandler.createEdge(store, friends, user, 'UserEdge');\n\n// No cursor provided, append the edge at the end.\nConnectionHandler.insertEdgeAfter(friends, edge);\n\n// No cursor provided, Insert the edge at the front:\nConnectionHandler.insertEdgeBefore(friends, edge);\n\n")),Object(o.b)("h3",{id:"deletenodeconnection-recordproxy-nodeid-string-void"},Object(o.b)("inlineCode",{parentName:"h3"},"deleteNode(connection: RecordProxy, nodeID: string): void")),Object(o.b)("p",null,"Given a connection, deletes any edges whose id matches the given id."),Object(o.b)("h4",{id:"example-19"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'friends');\nConnectionHandler.deleteNode(friends, idToDelete);\n\n")))}s.isMDXComponent=!0}}]);