"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[810],{91713:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=i(74848),r=i(28453),c=i(3514),s=i(84142);const a={id:"1-0-authentication",title:"1.0 Authentication",description:"1.0 Authentication",custom_edit_url:null},o=void 0,l={id:"eic/1-0-authentication",title:"1.0 Authentication",description:"1.0 Authentication",source:"@site/docs/eic/1-0-authentication.tag.mdx",sourceDirName:"eic",slug:"/eic/1-0-authentication",permalink:"/docs/eic/1-0-authentication",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"1-0-authentication",title:"1.0 Authentication",description:"1.0 Authentication",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Introduction",permalink:"/docs/eic/saviynt-enterprise-identity-cloud-api-reference"},next:{title:"Get Authorization Token",permalink:"/docs/eic/get-authorization-token"}},d={},u=[];function h(t){return(0,n.jsx)(c.A,{items:(0,s.$S)().items})}function m(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h()}},3514:(t,e,i)=>{i.d(e,{A:()=>g});i(96540);var n=i(18215),r=i(84142),c=i(28774),s=i(16654),a=i(21312),o=i(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(t){let{href:e,children:i}=t;return(0,d.jsx)(c.default,{href:e,className:(0,n.A)("card padding--lg",l.cardContainer),children:i})}function h(t){let{href:e,icon:i,title:r,description:c}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,n.A)("text--truncate",l.cardTitle),title:r,children:[i," ",r]}),c&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",l.cardDescription),title:c,children:c})]})}function m(t){let{item:e}=t;const i=(0,r.Nr)(e);return i?(0,d.jsx)(h,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const i=(0,s.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(e.docId??void 0);return(0,d.jsx)(h,{href:e.href,icon:i,title:e.label,description:e.description??n?.description})}function p(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const i=(0,r.$S)();return(0,d.jsx)(g,{items:i.items,className:e})}function g(t){const{items:e,className:i}=t;if(!e)return(0,d.jsx)(x,{...t});const c=(0,r.d1)(e);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:c.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:t})},e)))})}}}]);