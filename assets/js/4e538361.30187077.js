"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3794],{59063:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=i(74848),s=i(28453),n=i(3514),a=i(84142);const c={id:"update-existing-request",title:"Update Existing Request",description:"Update Existing Request",custom_edit_url:null},o=void 0,d={id:"eic/update-existing-request",title:"Update Existing Request",description:"Update Existing Request",source:"@site/docs/eic/update-existing-request.tag.mdx",sourceDirName:"eic",slug:"/eic/update-existing-request",permalink:"/developer-portal/eic/update-existing-request",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-existing-request",title:"Update Existing Request",description:"Update Existing Request",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Update Organization Request",permalink:"/developer-portal/eic/update-organization-request"},next:{title:"Add Approver to existing Request",permalink:"/developer-portal/eic/add-approver-to-existing-request"}},l={},u=[];function p(e){return(0,r.jsx)(n.A,{items:(0,a.$S)().items})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p()}},3514:(e,t,i)=>{i.d(t,{A:()=>h});i(96540);var r=i(18215),s=i(84142),n=i(28774),a=i(16654),c=i(21312),o=i(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=i(74848);function u(e){let{href:t,children:i}=e;return(0,l.jsx)(n.default,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:s,description:n}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(o.default,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[i," ",s]}),n&&(0,l.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:n,children:n})]})}function m(e){let{item:t}=e;const i=(0,s.Nr)(t);return i?(0,l.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function x(e){let{item:t}=e;const i=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,l.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(x,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,s.$S)();return(0,l.jsx)(h,{items:i.items,className:t})}function h(e){const{items:t,className:i}=e;if(!t)return(0,l.jsx)(g,{...e});const n=(0,s.d1)(t);return(0,l.jsx)("section",{className:(0,r.A)("row",i),children:n.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}}}]);