import{j as e,r as o,u as h,M as p,g as d}from"./index-B969c_cp.js";const x="_form_1ewye_1",g="_input_1ewye_7",v="_formBtn_1ewye_14",c={form:x,input:g,formBtn:v},j=({onSubmit:s})=>e.jsxs("form",{className:c.form,onSubmit:s,children:[e.jsx("input",{className:c.input,name:"query"}),e.jsx("button",{className:c.formBtn,type:"submit",children:"Search"})]}),B={},_=()=>{const[s,u]=o.useState([]),[m,i]=o.useState(!1),[l,y]=h(),n=l.get("query");o.useEffect(()=>{if(n===null)return;i(!0),(async t=>{const r=await d(t);u(r.results),i(!1)})(n)},[n]);const f=a=>{a.preventDefault();const t=a.currentTarget,r=t.elements.query.value.trim();if(r===""){alert("Please type anything");return}y({query:r}),t.reset()};return e.jsxs("div",{className:B.movies,children:[e.jsx(j,{onSubmit:f}),m&&e.jsx("h2",{children:"Loading..."}),s&&e.jsx(p,{listTitle:"",moviesList:s})]})};export{_ as Movies};