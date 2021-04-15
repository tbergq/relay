(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),b=a,p=h["".concat(i,".").concat(b)]||h[b]||d[b]||o;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1149:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(22),r=n(1150);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},1150:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(3),r=n(8),o=(n(0),n(1142)),i=n(1149),s={title:"Introducing Relay Hooks",author:"Robert Balicki & Juan Tejada",tags:["relay-hooks"],description:"Introducing Relay Hooks",hide_table_of_contents:!1},l={permalink:"/blog/2021/03/09/introducing-relay-hooks",source:"@site/blog/2021-03-09-introducing-relay-hooks.md",description:"Introducing Relay Hooks",date:"2021-03-09T00:00:00.000Z",tags:[{label:"relay-hooks",permalink:"/blog/tags/relay-hooks"}],title:"Introducing Relay Hooks",readingTime:5.66,truncated:!1},c=[{value:"What was released?",id:"what-was-released",children:[]},{value:"What are the advantages of the Hooks APIs?",id:"what-are-the-advantages-of-the-hooks-apis",children:[]},{value:"Refetching a fragment with different variables",id:"refetching-a-fragment-with-different-variables",children:[]},{value:"Starting to fetch data before rendering a component",id:"starting-to-fetch-data-before-rendering-a-component",children:[{value:"Hooks and Suspense for Data Fetching",id:"hooks-and-suspense-for-data-fetching",children:[]},{value:"Where to go from here",id:"where-to-go-from-here",children:[]},{value:"Thanks",id:"thanks",children:[]}]}],u={toc:c};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are extremely excited to release ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/relay/releases/tag/v11.0.0"}),"Relay Hooks"),", the most developer-friendly version of Relay yet, and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.facebook.com/blog/post/2021/03/09/introducing-relay-hooks-improved-react-apis-relay/"}),"make it available to the OSS community")," today! Relay Hooks is a set of new, rethought APIs for fetching and managing GraphQL data using React Hooks."),Object(o.b)("p",null,"The new APIs are fully compatible with the existing, container-based APIs. Though we recommend writing any new code using Relay Hooks, ",Object(o.b)("em",{parentName:"p"},"migrating existing containers to the new APIs is optional and container-based code will continue to work"),"."),Object(o.b)("p",null,"Although these APIs are newly released, they are not untested: the rewritten ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.facebook.com"}),"Facebook.com")," is entirely powered by Relay Hooks and these APIs have been the recommended way to use Relay at Facebook since mid-2019."),Object(o.b)("p",null,"In addition, we are also releasing a rewritten ",Object(o.b)("a",{href:Object(i.a)("/docs/guided-tour/")},"guided tour")," and ",Object(o.b)("a",{href:Object(i.a)("/docs/")},"updated documentation")," that distill the best practices for building maintainable, data-driven applications that we have learned since first developing Relay."),Object(o.b)("p",null,"Though we still have a ways to go before getting started with Relay is as easy as we\u2019d like, we believe these steps will make the Relay developer experience substantially better."),Object(o.b)("h2",{id:"what-was-released"},"What was released?"),Object(o.b)("p",null,"We released Relay Hooks, a set of React Hooks-based APIs for working with GraphQL data. We also took the opportunity to ship other improvements, like a more stable version of ",Object(o.b)("a",{href:Object(i.a)("/docs/api-reference/fetch-query/")},Object(o.b)("code",null,"fetchQuery"))," and the ability to customize object identifiers in Relay using ",Object(o.b)("code",null,"getDataID")," (which is useful if your server does not have globally unique IDs.)"),Object(o.b)("p",null," See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/relay/releases/tag/v11.0.0"}),"release notes")," for a complete list of what was released."),Object(o.b)("h2",{id:"what-are-the-advantages-of-the-hooks-apis"},"What are the advantages of the Hooks APIs?"),Object(o.b)("p",null,"The newly released APIs improve the developer experience in at least the following ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The Hooks-based APIs for fetching queries, loading data with fragments, pagination, refetching, mutations and subscriptions generally require fewer lines of code and have less indirection than the equivalent container-based solution."),Object(o.b)("li",{parentName:"ul"},"These APIs have more complete Flow and Typescript coverage."),Object(o.b)("li",{parentName:"ul"},"These APIs take advantage of compiler features to automate error-prone tasks, such as the generation of refetch and pagination queries."),Object(o.b)("li",{parentName:"ul"},"These APIs come with the ability to configure fetch policies, which let you determine the conditions in which a query should be fulfilled from the store and in which a network request will be made."),Object(o.b)("li",{parentName:"ul"},"These APIs give you the ability to start fetching data before a component renders, something that could not be achieved with the container-based solutions. This allows data to be shown to users sooner.")),Object(o.b)("p",null,"The following examples demonstrate some of the advantages of the new APIs."),Object(o.b)("h2",{id:"refetching-a-fragment-with-different-variables"},"Refetching a fragment with different variables"),Object(o.b)("p",null,"First, let\u2019s take a look at how we might refetch a fragment with different variables using the Hooks APIs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"type Props = {\n  comment: CommentBody_comment$key,\n};\n\nfunction CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, _>(\n    graphql`\n      fragment CommentBody_comment on Comment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  return <>\n    <CommentText text={data?.text} />\n    <Button\n      onClick={() =>\n        refetch({ lang: 'SPANISH' }, { fetchPolicy: 'store-or-network' })\n      }>\n    >\n      Translate\n    </Button>\n  </>\n}\n")),Object(o.b)("p",null,"Compare this to the equivalent ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/rbalicki2/2ac2829aefd8d032e8cb32cd0066bd4e"}),"container-based example"),". The Hooks-based example takes fewer lines, does not require the developer to manually write a refetch query, has the refetch variables type-checked and explicitly states that a network request should not be issued if the query can be fulfilled from data in the store."),Object(o.b)("h2",{id:"starting-to-fetch-data-before-rendering-a-component"},"Starting to fetch data before rendering a component"),Object(o.b)("p",null,"The new APIs allow developers to more quickly show content to users by starting to fetch data before a component renders. Prefetching data in this way is not possible with the container-based APIs. Consider the following example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const UserQuery = graphql`\n  query UserLinkQuery($userId: ID!) {\n    user(id: $userId) {\n      user_details_blurb\n    }\n  }\n`;\n\nfunction UserLink({ userId, userName }) {\n  const [queryReference, loadQuery] = useQueryLoader(UserQuery);\n\n  const [isPopoverVisible, setIsPopoverVisible] = useState(false);\n\n  const maybePrefetchUserData = useCallback(() => {\n    if (!queryReference) {\n      // calling loadQuery will cause this component to re-render.\n      // During that re-render, queryReference will be defined.\n      loadQuery({ userId });\n    }\n  }, [queryReference, loadQuery]);\n\n  const showPopover = useCallback(() => {\n    maybePrefetchUserData();\n    setIsPopoverVisible(true);\n  }, [maybePrefetchUserData, setIsPopoverVisible]);\n\n  return <>\n    <Button\n      onMouseOver={maybePrefetchUserData}\n      onPress={showPopover}\n    >\n      {userName}\n    </Button>\n    {isPopoverVisible && queryReference && (\n      <Popover>\n        <React.Suspense fallback={<Glimmer />}>\n          <UserPopoverContent queryRef={queryReference} />\n        </React.Suspense>\n      </Popover>\n    )}\n  </>\n}\n\nfunction UserPopoverContent({queryRef}) {\n  // The following call will Suspend if the request for the data is still\n  // in flight:\n  const data = usePreloadedQuery(UserQuery, queryRef);\n  // ...\n}\n")),Object(o.b)("p",null,"In this example, if the query cannot be fulfilled from data in the local cache, a network request is initiated when the user hovers over a button. When the button is finally pressed, the user will thus see content sooner."),Object(o.b)("p",null,"By contrast, the container-based APIs initiate network requests when the component renders."),Object(o.b)("h3",{id:"hooks-and-suspense-for-data-fetching"},"Hooks and Suspense for Data Fetching"),Object(o.b)("p",null,"You may have noticed that both of the examples use Suspense."),Object(o.b)("p",null,"Although Relay Hooks uses Suspense for some of its APIs, ",Object(o.b)("em",{parentName:"p"},"support, general guidance, and requirements for usage of Suspense for Data Fetching in React are still")," ",Object(o.b)("em",{parentName:"p"},"not ready"),", and the React team is still defining what this guidance will be for upcoming releases. There are some limitations when Suspense is used with React 17."),Object(o.b)("p",null,"Nonetheless, we released Relay Hooks now because we know these APIs are on the right trajectory for supporting upcoming releases of React. Even though parts of Relay\u2019s Suspense implementation may still change, the Relay Hooks APIs themselves are stable; they have been widely adopted internally, and have been in use in production for over a year."),Object(o.b)("p",null,"See ",Object(o.b)("a",{href:Object(i.a)("/docs/migration-and-compatibility/suspense-compatibility/")},"Suspense Compatibility")," and ",Object(o.b)("a",{href:Object(i.a)("/docs/guided-tour/rendering/loading-states/")},"Loading States with Suspense")," for deeper treatments of this topic."),Object(o.b)("h3",{id:"where-to-go-from-here"},"Where to go from here"),Object(o.b)("p",null,"Please check out the ",Object(o.b)("a",{href:Object(i.a)("/docs/")},"getting started guide"),", the ",Object(o.b)("a",{href:Object(i.a)("/docs/migration-and-compatibility/")},"migration guide")," and the ",Object(o.b)("a",{href:Object(i.a)("/docs/guided-tour/")},"guided tour"),"."),Object(o.b)("h3",{id:"thanks"},"Thanks"),Object(o.b)("p",null,"Releasing Relay Hooks was not just the work of the React Data team. We'd like to thank the contributors that helped make it possible:"),Object(o.b)("p",null,"@0xflotus, @AbdouMoumen, @ahmadrasyidsalim, @alexdunne, @alloy, @andrehsu, @andrewkfiedler, @anikethsaha, @babangsund, @bart88, @bbenoist, @bigfootjon, @bondz, @BorisTB, @captbaritone, @cgriego, @chaytanyasinha, @ckknight, @clucasalcantara, @damassi, @Daniel15, @daniloab, @earvinLi, @EgorShum, @eliperkins, @enisdenjo, @etcinit, @fabriziocucci, @HeroicHitesh, @jaburx, @jamesgeorge007, @janicduplessis, @jaroslav-kubicek, @jaycenhorton, @jaylattice, @JonathanUsername, @jopara94, @jquense, @juffalow, @kafinsalim, @kyarik, @larsonjj, @leoasis, @leonardodino, @levibuzolic, @liamross, @lilianammmatos, @luansantosti, @MaartenStaa, @MahdiAbdi, @MajorBreakfast, @maraisr, @mariusschulz, @martinbooth, @merrywhether, @milosa, @mjm, @morrys, @morwalz, @mrtnzlml, @n1ru4l, @Nilomiranda, @omerzach, @orta, @pauloedurezende, @RDIL, @RicCu, @robrichard, @rsmelo92, @SeshanPillay25, @sibelius, @SiddharthSham, @stefanprobst, @sugarshin, @taion, @thedanielforum, @theill, @thicodes, @tmus, @TrySound, @VinceOPS, @visshaljagtap, @Vrq, @w01fgang, @wincent, @wongmjane, @wyattanderson, @xamgore, @yangshun, @ymittal, @zeyap, @zpao and @zth."),Object(o.b)("p",null,"The open source project ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relay-tools/relay-hooks"}),Object(o.b)("inlineCode",{parentName:"a"},"relay-hooks"))," allowed the community to experiment with Relay and React Hooks, and was a source of valuable feedback for us. The idea for the ",Object(o.b)("inlineCode",{parentName:"p"},"useSubscription")," hook originated in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relay-tools/relay-hooks/issues/5#issuecomment-603930570"}),"an issue")," on that repo. Thank you @morrys for driving this project and for playing such an important role in our open source community."),Object(o.b)("p",null,"Thank you for helping make this possible!"))}h.isMDXComponent=!0}}]);