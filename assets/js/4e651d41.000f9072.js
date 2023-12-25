"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9727],{3936:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var i=o(5893),r=o(1151);const n={title:"@modify",sidebar_position:5},s=void 0,a={id:"operators/modify",title:"@modify",description:"The @modify operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here's how you can use this operator:",source:"@site/docs/operators/modify.md",sourceDirName:"operators",slug:"/operators/modify",permalink:"/docs/operators/modify",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/modify.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"@modify",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"@graphQL",permalink:"/docs/operators/graphql"},next:{title:"@addField",permalink:"/docs/operators/add-field"}},d={},c=[{value:"name",id:"name",level:2},{value:"omit",id:"omit",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"@modify"})," operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here's how you can use this operator:"]}),"\n",(0,i.jsx)(t.h2,{id:"name",children:"name"}),"\n",(0,i.jsxs)(t.p,{children:["You can rename a field or a node in your GraphQL schema using the ",(0,i.jsx)(t.code,{children:"name"})," argument in the ",(0,i.jsx)(t.code,{children:"@modify"})," operator. This can be helpful when the field name in your underlying data source doesn't match the desired field name in your schema. For instance:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type User {\n  id: Int! @modify(name: "userId")\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:'@modify(name: "userId")'})," tells GraphQL that although the field is referred to as ",(0,i.jsx)(t.code,{children:"id"}),"in the underlying data source, it should be presented as ",(0,i.jsx)(t.code,{children:"userId"})," in your schema."]}),"\n",(0,i.jsx)(t.h2,{id:"omit",children:"omit"}),"\n",(0,i.jsxs)(t.p,{children:["You can exclude a field or a node from your GraphQL schema using the ",(0,i.jsx)(t.code,{children:"omit"})," argument in the ",(0,i.jsx)(t.code,{children:"@modify"})," operator. This can be useful if you want to keep certain data hidden from the client. For instance:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:"type User {\n  id: Int! @modify(omit: true)\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"@modify(omit: true)"})," tells GraphQL that the ",(0,i.jsx)(t.code,{children:"id"})," field should not be included in the schema, thus it won't be accessible to the client."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var i=o(7294);const r={},n=i.createContext(r);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);