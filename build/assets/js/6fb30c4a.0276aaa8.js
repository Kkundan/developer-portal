"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4248],{12090:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=i(74848),r=i(28453),c=i(3514),n=i(84142);const o={id:"password-policy",title:"Password Policy",description:"Password Policy",custom_edit_url:null},a=void 0,l={id:"eic/password-policy",title:"Password Policy",description:"Password Policy",source:"@site/docs/eic/password-policy.tag.mdx",sourceDirName:"eic",slug:"/eic/password-policy",permalink:"/docs/eic/password-policy",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"password-policy",title:"Password Policy",description:"Password Policy",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Create Security Questions",permalink:"/docs/eic/create-security-questions"},next:{title:"Create Password Policy",permalink:"/docs/eic/create-password-policy"}},d={},u=[];function p(e){return(0,s.jsx)(c.A,{items:(0,n.$S)().items})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},3514:(e,t,i)=>{i.d(t,{A:()=>w});i(96540);var s=i(18215),r=i(84142),c=i(28774),n=i(16654),o=i(21312),a=i(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(e){let{href:t,children:i}=e;return(0,d.jsx)(c.default,{href:t,className:(0,s.A)("card padding--lg",l.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:r,description:c}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,s.A)("text--truncate",l.cardTitle),title:r,children:[i," ",r]}),c&&(0,d.jsx)("p",{className:(0,s.A)("text--truncate",l.cardDescription),title:c,children:c})]})}function m(e){let{item:t}=e;const i=(0,r.Nr)(t);return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,n.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const i=(0,r.$S)();return(0,d.jsx)(w,{items:i.items,className:t})}function w(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(y,{...e});const c=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,s.A)("row",i),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);