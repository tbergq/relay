(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{1171:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(o,".").concat(h)]||d[h]||b[h]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},747:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(1171)),o={id:"classic-guides-containers",title:"Containers",original_id:"classic-guides-containers"},s={unversionedId:"classic-guides-containers",id:"version-classic/classic-guides-containers",isDocsHomePage:!1,title:"Containers",description:"The primary way to declare data requirements is via Relay.Container \u2014 a higher-order React component that lets React components encode their data requirements.",source:"@site/versioned_docs/version-classic/Classic-Guides-Containers.md",slug:"/classic-guides-containers",permalink:"/docs/classic/classic-guides-containers",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/versioned_docs/version-classic/Classic-Guides-Containers.md",version:"classic",lastUpdatedBy:"Brad Zacher",lastUpdatedAt:1615331749,sidebar:"version-classic/docs",previous:{title:"Introduction to Relay",permalink:"/docs/classic/"},next:{title:"Routes",permalink:"/docs/classic/classic-guides-routes"}},c=[{value:"A Complete Example",id:"a-complete-example",children:[{value:"Base React Component",id:"base-react-component",children:[]},{value:"Data Dependencies With GraphQL",id:"data-dependencies-with-graphql",children:[]},{value:"Relay Containers",id:"relay-containers",children:[]}]},{value:"Containers are Higher-Order Components",id:"containers-are-higher-order-components",children:[]},{value:"Requesting Different Data",id:"requesting-different-data",children:[]},{value:"Container Composition",id:"container-composition",children:[{value:"Composing Views - It&#39;s Plain React",id:"composing-views---its-plain-react",children:[]},{value:"Composing Fragments",id:"composing-fragments",children:[]}]},{value:"Rendering Containers",id:"rendering-containers",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The primary way to declare data requirements is via ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.Container")," \u2014 a higher-order React component that lets React components encode their data requirements."),Object(i.b)("p",null,"Similar to how a React component's ",Object(i.b)("inlineCode",{parentName:"p"},"render")," method does not directly modify native views, Relay containers do not directly fetch data. Instead, containers declare a ",Object(i.b)("em",{parentName:"p"},"specification")," of the data needed to render. Relay guarantees that this data is available ",Object(i.b)("em",{parentName:"p"},"before")," rendering."),Object(i.b)("h2",{id:"a-complete-example"},"A Complete Example"),Object(i.b)("p",null,"To start, let's build the plain React version of a ",Object(i.b)("inlineCode",{parentName:"p"},"<ProfilePicture>")," component that displays the user's profile photo and a slider to adjust the photo's size."),Object(i.b)("h3",{id:"base-react-component"},"Base React Component"),Object(i.b)("p",null,"Here's a basic implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"<ProfilePicture>")," that ignores styling in order to highlight the functionality:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass ProfilePicture extends React.Component {\n  render() {\n    // Expects the `user` prop to have the following shape:\n    // {\n    //   profilePhoto: {\n    //     uri,\n    //   }\n    // }\n    var user = this.props.user;\n    return (\n      <View>\n        <Image uri={user.profilePhoto.uri} width={...} />\n        <Slider onChange={value => this.setSize(value)} />\n      </View>\n    );\n  }\n\n  // Update the size of the photo\n  setSize(photoSize) {\n    // TODO: Fetch the profile photo URI for the given size...\n  }\n}\n\n")),Object(i.b)("h3",{id:"data-dependencies-with-graphql"},"Data Dependencies With GraphQL"),Object(i.b)("p",null,"In Relay, data dependencies are described using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/graphql"}),"GraphQL"),". For ",Object(i.b)("inlineCode",{parentName:"p"},"<ProfilePicture>"),", the dependency can be expressed as follows. Note that this exactly matches the shape that the component expected for the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," prop."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nRelay.QL`\n  # This fragment only applies to objects of type 'User'.\n  fragment on User {\n    # Set the 'size' argument to a GraphQL variable named '$size' so that we can\n    # later change its value via the slider.\n    profilePhoto(size: $size) {\n      # Get the appropriate URI for the given size, for example on a CDN.\n      uri,\n    },\n  }\n`\n\n")),Object(i.b)("h3",{id:"relay-containers"},"Relay Containers"),Object(i.b)("p",null,"Given the plain React component and a GraphQL fragment, we can now define a ",Object(i.b)("inlineCode",{parentName:"p"},"Container")," to tell Relay about this component's data requirements. Let's look at the code first and then see what's happening:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass ProfilePicture extends React.Component // as above\n\n// Export a *new* React component that wraps the original `<ProfilePicture>`.\nmodule.exports = Relay.createContainer(ProfilePicture, {\n  // Specify the initial value of the `$size` variable.\n  initialVariables: {\n    size: 32\n  },\n  // For each of the props that depend on server data, we define a corresponding\n  // key in `fragments`. Here, the component expects server data to populate the\n  // `user` prop, so we'll specify the fragment from above as `fragments.user`.\n  fragments: {\n    user: () => Relay.QL`\n      fragment on User {\n        profilePhoto(size: $size) {\n          uri,\n        },\n      }\n    `,\n  },\n});\n\n")),Object(i.b)("h2",{id:"containers-are-higher-order-components"},"Containers are Higher-Order Components"),Object(i.b)("p",null,"Relay containers are higher-order components \u2014 ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.createContainer")," is a function that takes a React component as input and returns a new component as output. This means that the container can manage data fetching and resolution logic without interfering with the ",Object(i.b)("inlineCode",{parentName:"p"},"state")," of the inner component."),Object(i.b)("p",null,"Here's what happens when the container is rendered:"),Object(i.b)("div",{className:"diagram"},Object(i.b)("img",{src:"/img/docs/Guides-Containers-HOC-Relay.png",title:"Relay Containers"})),Object(i.b)("p",null,"In the diagram above:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A parent component will pass in a reference to some ",Object(i.b)("inlineCode",{parentName:"li"},"User"),' "record".'),Object(i.b)("li",{parentName:"ul"},"The container \u2014 named ",Object(i.b)("inlineCode",{parentName:"li"},"Relay(ProfilePicture)")," for debugging \u2014 will retrieve the response for each GraphQL fragment from the local store."),Object(i.b)("li",{parentName:"ul"},"The container passes the results of each fragment (along with the other props) to the ",Object(i.b)("inlineCode",{parentName:"li"},"<ProfilePicture>")," component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<ProfilePicture>")," receives a ",Object(i.b)("inlineCode",{parentName:"li"},"user")," prop with plain JavaScript data - objects, arrays, strings - and renders as usual.")),Object(i.b)("h2",{id:"requesting-different-data"},"Requesting Different Data"),Object(i.b)("p",null,"One thing is left in the example above \u2014 implementing ",Object(i.b)("inlineCode",{parentName:"p"},"setSize()"),", which should change the photo's size when the slider values changes. In addition to passing the results of each query to the component, Relay also provides a ",Object(i.b)("inlineCode",{parentName:"p"},"relay")," prop that has Relay-specific methods and metadata. These include ",Object(i.b)("inlineCode",{parentName:"p"},"variables")," \u2014 the active variables used to fetch the current ",Object(i.b)("inlineCode",{parentName:"p"},"props")," \u2014 and ",Object(i.b)("inlineCode",{parentName:"p"},"setVariables()")," \u2014 a callback that can be used to request data for different variable values."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}5-6,11,26-28{"}"}'}),"\nclass ProfilePicture extends React.Component {\n  render() {\n    // Access the resolved data for the `user` fragment.\n    var user = this.props.user;\n    // Access the current `variables` that were used to fetch the `user`.\n    var variables = this.props.relay.variables;\n    return (\n      <View>\n        <Image\n          uri={user.profilePhoto.uri}\n          width={variables.size}\n        />\n        <Slider onChange={value => this.setSize(value)} />\n      </View>\n    );\n  }\n\n  // Update the size of the photo.\n  setSize(photoSize) {\n    // `setVariables()` tells Relay that the component's data requirements have\n    // changed. The value of `props.relay.variables` and `props.user` will\n    // continue to reflect their previous values until the data for the new\n    // variables has been fetched from the server. As soon as data for the new\n    // variables becomes available, the component will re-render with an updated\n    // `user` prop and `variables.size`.\n    this.props.relay.setVariables({\n      size: photoSize,\n    });\n  }\n}\n\n")),Object(i.b)("h2",{id:"container-composition"},"Container Composition"),Object(i.b)("p",null,"React and Relay support creating arbitrarily complex applications through ",Object(i.b)("em",{parentName:"p"},"composition"),". Larger components can be created by composing smaller components, helping us to create modular, robust applications. There are two aspects to composing components in Relay:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Composing the view logic, and"),Object(i.b)("li",{parentName:"ul"},"Composing the data descriptions.")),Object(i.b)("p",null,"Let's explore how this works via a ",Object(i.b)("inlineCode",{parentName:"p"},"<Profile>")," component that composes the ",Object(i.b)("inlineCode",{parentName:"p"},"<ProfilePicture>")," from above."),Object(i.b)("h3",{id:"composing-views---its-plain-react"},"Composing Views - It's Plain React"),Object(i.b)("p",null,"View composition is ",Object(i.b)("em",{parentName:"p"},"exactly")," what you're used to \u2014 Relay containers are standard React components. Here's the ",Object(i.b)("inlineCode",{parentName:"p"},"<Profile>")," component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}8-9{"}"}'}),"\nclass Profile extends React.Component {\n  render() {\n    // Expects a `user` with a string `name`, as well as the information\n    // for `<ProfilePicture>` (we'll get that next).\n    var user = this.props.user;\n    return (\n      <View>\n        // It works just like a React component, because it is one!\n        <ProfilePicture user={user} />\n        <Text>{user.name}</Text>\n      </View>\n    );\n  }\n}\n\n")),Object(i.b)("h3",{id:"composing-fragments"},"Composing Fragments"),Object(i.b)("p",null,"Fragment composition works similarly \u2014 a parent container's fragment composes the fragment for each of its children. In this case, ",Object(i.b)("inlineCode",{parentName:"p"},"<Profile>")," needs to fetch information about the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," that is required by ",Object(i.b)("inlineCode",{parentName:"p"},"<ProfilePicture>"),"."),Object(i.b)("p",null,"Relay containers provide a static ",Object(i.b)("inlineCode",{parentName:"p"},"getFragment()")," method that returns a reference to that component's fragment:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:'language-{"{"}15{"}"}'}),"\nclass Profile extends React.Component // as above\n\nmodule.exports = Relay.createContainer(Profile, {\n  fragments: {\n    // This `user` fragment name corresponds to the prop named `user` that is\n    // expected to be populated with server data by the `<Profile>` component.\n    user: () => Relay.QL`\n      fragment on User {\n        # Specify any fields required by '<Profile>' itself.\n        name,\n\n        # Include a reference to the fragment from the child component. Here,\n        # the 'user' is the name of the fragment specified on the child\n        # \"<ProfilePicture>'s\" 'fragments' definition.\n        ${ProfilePicture.getFragment('user')},\n      }\n    `,\n  }\n});\n\n")),Object(i.b)("p",null,"The final data declaration is equivalent to the following plain GraphQL:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\n`\n  fragment Profile on User {\n    name,\n    ...ProfilePhoto,\n  }\n\n  fragment ProfilePhoto on User {\n    profilePhoto(size: $size) {\n      uri,\n    },\n  }\n`\n\n")),Object(i.b)("p",null,"Note that when composing fragments, the type of the composed fragment must match the field on the parent in which it is embedded. For example, it wouldn't make sense to embed a fragment of type ",Object(i.b)("inlineCode",{parentName:"p"},"Story")," into a parent's field of type ",Object(i.b)("inlineCode",{parentName:"p"},"User"),". Relay and GraphQL will provide helpful error messages if you get this wrong (and if they aren't helpful, let us know!)."),Object(i.b)("h2",{id:"rendering-containers"},"Rendering Containers"),Object(i.b)("p",null,"As we've learned, Relay containers declare data requirements as GraphQL fragments. This means that, for example, ",Object(i.b)("inlineCode",{parentName:"p"},"<ProfilePicture>")," can be embedded not only in ",Object(i.b)("inlineCode",{parentName:"p"},"<Profile>"),", but any container that fetches a field of type ",Object(i.b)("inlineCode",{parentName:"p"},"User"),"."),Object(i.b)("p",null,"We're almost ready to let Relay fulfill the data requirements for these components and render them. However, there is one problem. In order to actually fetch data with GraphQL, we need a query root. For example, we need to ground the ",Object(i.b)("inlineCode",{parentName:"p"},"<Profile>")," fragment in a concrete node of type ",Object(i.b)("inlineCode",{parentName:"p"},"User"),"."),Object(i.b)("p",null,"In Relay, the root of a query is defined by a ",Object(i.b)("strong",{parentName:"p"},"Route"),". Continue to learn about Relay routes."))}p.isMDXComponent=!0}}]);