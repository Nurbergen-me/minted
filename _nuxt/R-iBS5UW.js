import{_ as g}from"./COSQUNKP.js";import{q as h,d as w,x as b,m as _,L as C,K as v,c as x,J as L,I as i}from"./D1HAvmaS.js";import{u as q}from"./DmNuIXWK.js";import"./DmH4iXz4.js";import"./BoPKIYll.js";import"./vP6-61aW.js";function A(){return q("board",()=>{const e=h("/dir");return e.where({_extension:"md"}),e.only(["featured","card_image","description","title","_path","tags"]),e.sort({featured:1}).find()})}const K=w({__name:"DirectoryGrid",async setup(f){let e,n;const a=b().directory.grid,c=_("search"),u=_("tags"),{data:l}=([e,n]=C(()=>A()),e=await e,n(),e),y=v(()=>{let t=l.value;return t?(c.value&&(t=t==null?void 0:t.filter(o=>{var r,s;return(((r=o.title)==null?void 0:r.toLowerCase())+((s=o.description)==null?void 0:s.toLowerCase())).includes(c.value.toLowerCase())})),u.value.length>0&&(t=t==null?void 0:t.filter(o=>u.value.every(r=>{var s;return(s=o.tags)==null?void 0:s.includes(r)}))),t):[]});return(t,o)=>{var s,m,d,p;const r=g;return x(),L(r,{listings:i(y)??[],"show-submit":(m=(s=i(a))==null?void 0:s.submit)==null?void 0:m.show,"submit-first":(p=(d=i(a))==null?void 0:d.submit)==null?void 0:p.first},null,8,["listings","show-submit","submit-first"])}}});export{K as default};
