import{c as m,b as x,j as s,N as o,L as h}from"./index-BRxYFDfz.js";import{b as n,U as j,C as N}from"./blogData-BqlvITB3.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=m("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=m("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=m("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),u=()=>{const{id:d}=x(),l=n.find(e=>e.id===d);return l?s.jsx("div",{className:"py-10 bg-gray-50",children:s.jsx("div",{className:"container mx-auto px-4",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs(h,{to:"/blog",className:"inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors mb-8",children:[s.jsx(b,{size:16,className:"mr-2"}),s.jsx("span",{children:"Tüm yazılara dön"})]}),s.jsx("div",{className:"relative h-64 md:h-96 rounded-xl overflow-hidden mb-8",children:s.jsx("img",{src:l.imageUrl,alt:l.title,className:"w-full h-full object-cover"})}),s.jsxs("header",{className:"mb-8",children:[s.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800 mb-4",children:l.title}),s.jsxs("div",{className:"flex flex-wrap items-center text-sm text-gray-500 gap-4",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(j,{size:16,className:"mr-1"}),s.jsx("span",{children:l.author})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(f,{size:16,className:"mr-1"}),s.jsx("span",{children:l.date})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(N,{size:16,className:"mr-1"}),s.jsx("span",{children:l.readTime})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(g,{size:16,className:"mr-1"}),s.jsx("span",{children:l.category})]})]})]}),s.jsxs("div",{className:"prose prose-lg max-w-none mb-12",children:[s.jsx("p",{className:"text-xl text-gray-600 mb-8",children:l.excerpt}),l.content.split(`

`).map((e,t)=>{if(e.startsWith("# "))return s.jsx("h1",{className:"text-3xl font-bold mt-8 mb-4",children:e.slice(2)},t);if(e.startsWith("## "))return s.jsx("h2",{className:"text-2xl font-bold mt-6 mb-3",children:e.slice(3)},t);if(e.startsWith("### "))return s.jsx("h3",{className:"text-xl font-bold mt-5 mb-2",children:e.slice(4)},t);if(e.includes(`
- `)){const[i,...a]=e.split(`
- `);return s.jsxs("div",{children:[i&&s.jsx("p",{className:"mb-2",children:i}),s.jsx("ul",{className:"list-disc pl-6 mb-4",children:a.map((c,r)=>s.jsx("li",{className:"mb-1",children:c},r))})]},t)}if(e.includes(`
1. `)){const[i,...a]=e.split(`
`);return s.jsxs("div",{children:[i&&s.jsx("p",{className:"mb-2",children:i}),s.jsx("ol",{className:"list-decimal pl-6 mb-4",children:a.map((c,r)=>s.jsx("li",{className:"mb-1",children:c.slice(3)},r))})]},t)}return s.jsx("p",{className:"mb-4",children:e},t)})]}),s.jsxs("div",{className:"mb-12",children:[s.jsx("h3",{className:"text-lg font-medium text-gray-700 mb-3",children:"Etiketler"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:l.tags.map(e=>s.jsx("span",{className:"px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors cursor-pointer",children:e},e))})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"İlgili Yazılar"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.filter(e=>e.id!==l.id&&(e.category===l.category||e.tags.some(t=>l.tags.includes(t)))).slice(0,3).map(e=>s.jsx(BlogPostCard,{post:e},e.id))})]})]})})}):s.jsx(o,{to:"/blog"})};export{u as default};
