import{_ as x,L as S,M as C,t as c,v as l,N as v,d as p,O,P as g,A as a,Q as y,R as N,T as B,r as b,c as L,S as T,x as r,U as A,o as w,z as _,B as f,y as h,V as R,C as V,D as G,W as z,X as P,Y as W,Z as E}from"./entry.dc7a51a5.js";const M={},j={class:"block text-sm text-center px-4 py-2 font-medium"};function q(o,t){const e=S("Ripple");return C((c(),l("h6",j,[v(o.$slots,"default")])),[[e]])}const F=x(M,[["render",q]]),Q={key:0,class:"origin-top-right mt-2 bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnSurfaceLight dark:text-colorOnSurfaceDark rounded-md py-2"},U=p({__name:"DropDownContent",setup(o){const{isOpen:t,toggle:e}=O("isOpen");return(n,s)=>(c(),g(B,{name:"dropdown-content"},{default:a(()=>[y(t)?(c(),l("div",Q,[v(n.$slots,"default")])):N("",!0)]),_:3}))}});const X={class:"relative z-50"},Y=r("button",null,"Toggle",-1),Z=p({__name:"DropDown",props:["onClick"],setup(o){const t=b(!1);function e(){t.value=!t.value.vlue}return L(()=>{e()}),T("isOpen",{isOpen:t,toggle:e}),(n,s)=>(c(),l("div",X,[v(n.$slots,"toggler",{onClick:s[0]||(s[0]=i=>e())},()=>[Y])]))}}),H=o=>(V("data-v-bcc0881a"),o=o(),G(),o),J={class:"cursor-pointer p-2 h-fit w-full hover:shadow-lg dark:hover:bg-colorPrimaryContainerDark hover:bg-colorPrimaryContainerLight transition-all duration-300 flex flex-col space-y-2 border-[.5px] border-opacity-20 bg-colorSecondaryContainerLight dark:bg-colorSecondaryContainerDark text-colorOnSecondaryContainerLight dark:text-colorOnSecondaryLight rounded-lg border-colorOutlineLight"},K={class:"absolute flex py-2 left-0 right-0 bottom-0 top-0 w-full h-full"},tt={class:"text-sm px-2 font-bold"},et={class:"text-[13.5px] px-2 opacity-90 line-clamp-6 font-semibold"},ot={class:"flex pl-2 items-center"},nt={class:"text-[13px] m-auto opacity-75 font-bold"},st=H(()=>r("div",{class:"flex-grow"},null,-1)),rt=p({__name:"NoteItem",props:{note:A},setup(o){const t=o,e=b();return w(()=>{var n,s;(s=e.value)==null||s.setDate((n=t.note)==null?void 0:n.date)}),(n,s)=>{var D,k,$;const i=R,d=F,u=U,m=Z,I=S("Ripple");return C((c(),l("li",J,[r("div",K,[_(m,{class:"ml-auto"},{toggler:a(()=>[_(i,{icon:"ic:outline-more-vert"})]),default:a(()=>[_(u,null,{default:a(()=>[_(d,null,{default:a(()=>[f("Action 1")]),_:1}),_(d,null,{default:a(()=>[f("Action 2")]),_:1}),_(d,null,{default:a(()=>[f("Action 3")]),_:1})]),_:1})]),_:1})]),r("h6",tt,h((D=t.note)==null?void 0:D.title),1),r("p",et,h((k=t.note)==null?void 0:k.text),1),r("div",ot,[r("p",nt,h(($=y(e))==null?void 0:$.getTime),1),st,N("",!0)])])),[[I]])}}});const ct=x(rt,[["__scopeId","data-v-bcc0881a"]]),at=p({__name:"NotesGrid",props:{notes:{type:Array,required:!0}},setup(o){const t=o,e=b();w(()=>{window.addEventListener("resize",()=>{e.value=window.innerWidth,console.log(n)})}),L(()=>{n()});function n(){return e.value>=768}return(s,i)=>{const d=ct;return c(),g(W,{tag:"ul",name:"note",class:"grid gap-4 grid-responsive"},{default:a(()=>[(c(!0),l(P,null,z(t.notes,(u,m)=>(c(),g(d,{note:u,key:m},null,8,["note"]))),128))]),_:1})}}});const _t=x(at,[["__scopeId","data-v-d89ee2bd"]]),lt={class:"p-4 md:p-10"},it=r("div",{class:"py-8"},[r("h4",{class:"text-3xl font-bold cursor-pointer"},"Browse")],-1),pt=p({__name:"index",setup(o){const t=E(),{notesList:e}=t;return w(()=>{}),(n,s)=>{const i=_t;return c(),l("div",lt,[it,_(i,{notes:y(e)},null,8,["notes"])])}}});export{pt as default};