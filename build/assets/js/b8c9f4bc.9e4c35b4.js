"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7758],{15230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=r(74848),s=r(28453),n=r(3514),c=r(84142);const o={id:"roles-1",title:"Roles1",description:"Roles1",custom_edit_url:null},l=void 0,a={id:"eic/roles-1",title:"Roles1",description:"Roles1",source:"@site/docs/eic/roles-1.tag.mdx",sourceDirName:"eic",slug:"/eic/roles-1",permalink:"/docs/eic/roles-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"roles-1",title:"Roles1",description:"Roles1",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Get Requestable Users",permalink:"/docs/eic/get-requestable-users"},next:{title:"Create Role Request",permalink:"/docs/eic/create-role-request"}},d={},u=[];function m(e){return(0,i.jsx)(n.A,{items:(0,c.$S)().items})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},3514:(e,t,r)=>{r.d(t,{A:()=>g});r(96540);var i=r(18215),s=r(84142),n=r(28774),c=r(16654),o=r(21312),l=r(51107);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function u(e){let{href:t,children:r}=e;return(0,d.jsx)(n.default,{href:t,className:(0,i.A)("card padding--lg",a.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:n}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(l.default,{as:"h2",className:(0,i.A)("text--truncate",a.cardTitle),title:s,children:[r," ",s]}),n&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",a.cardDescription),title:n,children:n})]})}function f(e){let{item:t}=e;const r=(0,s.Nr)(t);return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const n=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",r),children:n.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);