"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6282],{67978:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=i(74848),s=i(28453),c=i(3514),r=i(84142);const a={id:"7-0-campaigns",title:"7.0 Campaigns",description:"7.0 Campaigns",custom_edit_url:null},o=void 0,l={id:"eic/7-0-campaigns",title:"7.0 Campaigns",description:"7.0 Campaigns",source:"@site/docs/eic/7-0-campaigns.tag.mdx",sourceDirName:"eic",slug:"/eic/7-0-campaigns",permalink:"/docs/eic/7-0-campaigns",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"7-0-campaigns",title:"7.0 Campaigns",description:"7.0 Campaigns",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Lock Attestation",permalink:"/docs/eic/lock-attestation"},next:{title:"Fetch Campaign List",permalink:"/docs/eic/fetch-campaign-list"}},d={},m=[];function u(e){return(0,n.jsx)(c.A,{items:(0,r.$S)().items})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},3514:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var n=i(18215),s=i(84142),c=i(28774),r=i(16654),a=i(21312),o=i(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function m(e){let{href:t,children:i}=e;return(0,d.jsx)(c.default,{href:t,className:(0,n.A)("card padding--lg",l.cardContainer),children:i})}function u(e){let{href:t,icon:i,title:s,description:c}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,n.A)("text--truncate",l.cardTitle),title:s,children:[i," ",s]}),c&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",l.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const i=(0,s.Nr)(t);return i?(0,d.jsx)(u,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,r.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,s.$S)();return(0,d.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(g,{...e});const c=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);