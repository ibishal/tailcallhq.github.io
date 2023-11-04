"use strict";(self.webpackChunktailcall_run=self.webpackChunktailcall_run||[]).push([[5797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=a,g=h["".concat(o,".").concat(c)]||h[c]||d[c]||r;return n?i.createElement(g,s(s({ref:t},u),{},{components:n})):i.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[h]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={title:"Tackling N + 1",sidebar_position:4},s=void 0,l={unversionedId:"guides/n+1",id:"guides/n+1",title:"Tackling N + 1",description:"The N+1 problem is a pervasive and critical issue in application development that occurs when an application ends up issuing a large number of downstream requests, for a single request from upstream. Let's understand with an example:",source:"@site/docs/guides/n+1.md",sourceDirName:"guides",slug:"/guides/n+1",permalink:"/docs/guides/n+1",draft:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/n+1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Tackling N + 1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Context",permalink:"/docs/guides/context"}},o={},p=[{value:"Scenario",id:"scenario",level:2},{value:"Fetching Posts",id:"fetching-posts",level:3},{value:"Fetching Users",id:"fetching-users",level:3},{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Jsonplaceholder Example",id:"jsonplaceholder-example",level:3},{value:"Running the TailCall CLI",id:"running-the-tailcall-cli",level:3},{value:"Solving Using Batching",id:"solving-using-batching",level:2},{value:"Understanding the Update",id:"understanding-the-update",level:3}],u={toc:p},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"N+1 problem")," is a pervasive and critical issue in application development that occurs when an application ends up issuing a large number of downstream requests, for a single request from upstream. Let's understand with an example:"),(0,a.kt)("h2",{id:"scenario"},"Scenario"),(0,a.kt)("p",null,"Consider we're developing a feature that involves consuming data from the ",(0,a.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com"},"JSON Placeholder API"),". The feature requires fetching posts and the details of the authors of these posts."),(0,a.kt)("p",null,"Here's an illustration of how this might typically be implemented:"),(0,a.kt)("h3",{id:"fetching-posts"},"Fetching Posts"),(0,a.kt)("p",null,"First, we send a request to retrieve all posts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://jsonplaceholder.typicode.com/posts\n")),(0,a.kt)("p",null,"The above request fetches a list of posts from the API, each of which includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," field indicating the author of the post."),(0,a.kt)("h3",{id:"fetching-users"},"Fetching Users"),(0,a.kt)("p",null,"Then, for each post, we need to get the author's details. A request for a specific user might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://jsonplaceholder.typicode.com/users/1\n")),(0,a.kt)("p",null,"If we received 100 posts from our first request, we would then make 100 more requests to get each post's author details, resulting in a total of 101 requests."),(0,a.kt)("p",null,"The N+1 problem, demonstrated using the JSON Placeholder API, refers to the issue where an initial API request generates multiple additional requests. For instance, acquiring 100 posts and then making another request for each post's author details culminates in 101 total requests."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In real-world applications with thousands of posts and users, this problem intensifies. Each user request can yield hundreds or thousands of additional server requests, stressing server resources, and leading to slower response times, higher server costs, and a degraded user experience. This situation can even lead to server downtime due to the high volume of requests, impacting service availability. Therefore, it's crucial to address the N+1 problem during the design and development of applications involving numerous API requests. Solutions to this issue will be discussed in subsequent sections.")),(0,a.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,a.kt)("p",null,"The TailCall CLI is a potent tool for developers, helping identify N+1 issues in GraphQL applications even before any requests are made or configurations are published in production. This proactive approach allows for potential issues to be mitigated right from the development stage."),(0,a.kt)("p",null,"Before diving into the usage, ensure you have familiarized yourself with the basics of the TailCall CLI. If you haven't already, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting_started/"},"Installation")," guide, which will walk you through the setup process and help you understand the key commands."),(0,a.kt)("h3",{id:"jsonplaceholder-example"},"Jsonplaceholder Example"),(0,a.kt)("p",null,"Here is a sample ",(0,a.kt)("inlineCode",{parentName:"p"},".graphql")," file that we'll be examining:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'schema @upstream(baseURL: "http://jsonplaceholder.typicode.com") {\n  query: Query\n}\n\ntype Query {\n  posts: [Post] @http(path: "/posts")\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User @http(path: "/users/{{value.userId}}")\n}\n')),(0,a.kt)("p",null,"This schema allows clients to fetch a list of posts, with each post including its associated user data. However, as currently defined, it suffers from the N+1 problem: each post will trigger an additional request to fetch its associated user data."),(0,a.kt)("p",null,"We will demonstrate how to identify this issue using the TailCall CLI in the next section."),(0,a.kt)("h3",{id:"running-the-tailcall-cli"},"Running the TailCall CLI"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"check")," command, TailCall CLI can assist you in identifying potential N+1 issues in a GraphQL file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tc check ./jsonplaceholder.graphql\nNo errors found.\n# highlight-start\nN + 1:     1\n# highlight-end\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"N + 1: 1")," line tells you that the TailCall CLI has detected one potential N+1 issue."),(0,a.kt)("p",null,"For a deeper understanding of these issues, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--n-plus-one-queries")," parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tc-dev check  ./jsonplaceholder.graphql --n-plus-one-queries\nNo errors found.\n# highlight-start\nN + 1:     1\n  query { posts { user } }\n# highlight-end\n")),(0,a.kt)("p",null,"This parameter uncovers the minimal query that can trigger an N+1 problem. In the above case, ",(0,a.kt)("inlineCode",{parentName:"p"},"query { posts { user } }"),", represents the minimal query that could lead to an N+1 problem. It illustrates that within the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," query, each post is triggering an additional request to fetch its associated ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," data."),(0,a.kt)("h2",{id:"solving-using-batching"},"Solving Using Batching"),(0,a.kt)("p",null,"Batching is an effective technique to group multiple similar requests into one, substantially reducing the number of server calls. The TailCall CLI provides this capability to address the typical N+1 issue that arises in GraphQL."),(0,a.kt)("p",null,"To tap into this feature, modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"@http")," directive on ",(0,a.kt)("inlineCode",{parentName:"p"},"Post.user")," in your GraphQL schema as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User\n    @http(\n      path: "/users"\n      # highlight-start\n      query: [{key: "id", value: "{{value.userId}}"}]\n      groupBy: ["id"]\n    )\n  # highlight-end\n}\n')),(0,a.kt)("h3",{id:"understanding-the-update"},"Understanding the Update"),(0,a.kt)("p",null,"The described changes introduce significant tweaks to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@http")," directive and incorporate the ",(0,a.kt)("inlineCode",{parentName:"p"},"@groupBy")," operator:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'query: [{key: "id", value: "{{value.userId}}"}]'),": Here, TailCall CLI is instructed to generate a URL where the user id aligns with the ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," from the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"Post"),". For a batch of posts, the CLI compiles a single URL, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"/users?id=1&id=2&id=3...id=10"),", consolidating multiple requests into one.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'groupBy: ["id"]'),": This parameter instructs the system to convert the list of responses into a map internally, using the user's ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as the unique key. In essence, it allows the system to differentiate each user value in the response list."))),(0,a.kt)("p",null,"By using this approach, you can reduce the number of requests from 101 (for 100 posts plus one initial request for the post list) to just 2. This significant optimization effectively handles the N+1 problem, thereby enhancing your application's efficiency and user experience."))}d.isMDXComponent=!0}}]);