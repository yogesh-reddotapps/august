(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[62],{904:function(e,t,c){"use strict";c.r(t);var n=c(15),s=c(583),a=c(82),r=c(0),i=c(544),l=c(109),j=c(44),d=c(865),b=c(64),o=c(1);t.default=function(){var e=Object(j.g)(),t=Object(r.useState)([{id:"1",content:""}]),c=Object(a.a)(t,2),u=c[0],h=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(o.jsx)("h5",{className:"text-info mb-4",children:"Add New Subject"}),Object(o.jsxs)("div",{className:"mt-4 w-50",children:[Object(o.jsx)("h5",{children:"Subject"}),Object(o.jsx)(i.a,{placeholder:"Subject Name"})]}),Object(o.jsxs)("div",{className:"mt-4",children:[Object(o.jsx)("h5",{children:"Chapters"}),Object(o.jsx)(d.a,{onDragEnd:function(e){if(e.destination){var t=e.source.index,c=e.destination.index,n=Object(s.a)(u),r=n.splice(t,1),i=Object(a.a)(r,1)[0];n.splice(c,0,i),h(n)}},children:Object(o.jsx)(d.c,{droppableId:"droppable",children:function(e){return Object(o.jsxs)("ul",Object(n.a)(Object(n.a)({className:"list-style-none",ref:e.innerRef},e.droppableProps),{},{children:[u.map((function(e,t){return Object(o.jsx)(d.b,{draggableId:e.id,index:t,children:function(c){return Object(o.jsxs)("li",Object(n.a)(Object(n.a)(Object(n.a)({ref:c.innerRef},c.draggableProps),c.dragHandleProps),{},{children:[Object(o.jsx)(i.a,{className:"my-2 mr-2 w-50",placeholder:"Chapter Name",value:e.content,onChange:function(e){return function(e,t){var c=Object(s.a)(u);c[t]=Object(n.a)(Object(n.a)({},c[t]),{},{content:e}),h(c),console.log(c)}(e.target.value,t)}}),Object(o.jsx)(b.w,{}),Object(o.jsx)(l.a,{onClick:function(){return function(e){var t=u.filter((function(t,c){return e!=c}));h(t)}(t)},className:"p-0 ml-2",children:Object(o.jsx)(b.x,{twoToneColor:"#ED2939"})})]}))}},e.id)})),e.placeholder]}))}})})]}),Object(o.jsx)("h5",{style:{display:"inline"},className:"text-info mt-3",onClick:function(){h([].concat(Object(s.a)(u),[{id:1+u.length.toString(),content:""}]))},children:"+ Add New Chapter"})]}),Object(o.jsxs)("div",{className:"d-flex mt-3 justify-content-end",children:[Object(o.jsx)(l.a,{children:"Cancel"}),Object(o.jsxs)(l.a,{className:"text-white bg-info ml-3",onClick:function(){return e.push("/app/masters/courses/subjects/?add=subject")},children:[" ","Save"," "]})]})]})}}}]);
//# sourceMappingURL=62.e51e88ee.chunk.js.map