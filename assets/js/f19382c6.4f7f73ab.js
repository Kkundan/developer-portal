"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9225],{46514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(74848),s=r(28453),c=r(3514),n=r(84142);const a={id:"create-request",title:"Create Request",description:"Create Request",custom_edit_url:null},o=void 0,l={id:"eic/create-request",title:"Create Request",description:"Create Request",source:"@site/docs/eic/create-request.tag.mdx",sourceDirName:"eic",slug:"/eic/create-request",permalink:"/developer-portal/eic/create-request",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-request",title:"Create Request",description:"Create Request",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Check Task Status",permalink:"/developer-portal/eic/check-task-status"},next:{title:"Create User Request",permalink:"/developer-portal/eic/create-user-request"}},d={},u=[];function m(e){return(0,i.jsx)(c.A,{items:(0,n.$S)().items})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},3514:(e,t,r)=>{r.d(t,{A:()=>j});r(96540);var i=r(18215),s=r(84142),c=r(28774),n=r(16654),a=r(21312),o=r(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function u(e){let{href:t,children:r}=e;return(0,d.jsx)(c.default,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:c}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:s,children:[r," ",s]}),c&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const r=(0,s.Nr)(t);return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,n.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const c=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",r),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);