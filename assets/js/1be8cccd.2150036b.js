"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3750],{70710:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=c(74848),n=c(28453),r=c(3514),s=c(84142);const o={id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},a=void 0,l={id:"eic/accounts",title:"Accounts",description:"Accounts",source:"@site/docs/eic/accounts.tag.mdx",sourceDirName:"eic",slug:"/eic/accounts",permalink:"/developer-portal/eic/accounts",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Get SavRoles",permalink:"/developer-portal/eic/get-savroles"},next:{title:"Get Account Details",permalink:"/developer-portal/eic/get-account-details"}},d={},u=[];function m(e){return(0,i.jsx)(r.A,{items:(0,s.$S)().items})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},3514:(e,t,c)=>{c.d(t,{A:()=>g});c(96540);var i=c(18215),n=c(84142),r=c(28774),s=c(16654),o=c(21312),a=c(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=c(74848);function u(e){let{href:t,children:c}=e;return(0,d.jsx)(r.default,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:c})}function m(e){let{href:t,icon:c,title:n,description:r}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:n,children:[c," ",n]}),r&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const c=(0,n.Nr)(t);return c?(0,d.jsx)(m,{href:c,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const c=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:c,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const c=(0,n.$S)();return(0,d.jsx)(g,{items:c.items,className:t})}function g(e){const{items:t,className:c}=e;if(!t)return(0,d.jsx)(x,{...e});const r=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",c),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);