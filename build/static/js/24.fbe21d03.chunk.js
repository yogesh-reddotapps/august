(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[24],{957:function(e,t,c){"use strict";c.r(t);var n=c(25),s=c.n(n),a=c(83),i=c(71),o=c(0),r=c(566),u=c(108),l=c(969),j=c(42),d=(c(53),c(220)),b=c.n(d),h=c(221),m=c(1);t.default=function(){var e=Object(j.useHistory)(),t=Object(j.useLocation)(),c=Object(o.useState)([{id:"1",content:""}]),n=Object(i.a)(c,2),d=(n[0],n[1],Object(o.useState)("")),C=Object(i.a)(d,2),f=C[0],x=C[1],O=Object(o.useState)(!1),p=Object(i.a)(O,2),g=p[0],w=p[1],v=new URLSearchParams(t.search),k=v.get("id"),N=v.get("course_id");console.log(t);var _=function(){var c=Object(a.a)(s.a.mark((function c(){return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(console.log(f),k){c.next=8;break}return c.next=4,b.a.post("".concat(h.a,"/admin-new-subject"),{subject_name:f,board_id:"0",course_id:t.state.id},{headers:{"Content-Type":"application/json"}});case 4:200===c.sent.status&&(w(!0),setTimeout((function(){w(!1),e.goBack()}),1200)),c.next=12;break;case 8:return c.next=10,b.a.post("".concat(h.a,"/admin-edit-subjects"),{subject_id:k,subject_name:f,board_id:"0",course_id:N},{headers:{"Content-Type":"application/json"}});case 10:200===c.sent.status&&(w(!0),setTimeout((function(){w(!1),e.goBack()}),1200));case 12:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(o.useEffect)((function(){if(k){console.log(t.pathname);try{b()({method:"get",url:"".concat(h.a,"/admin-subjects/").concat(k)}).then((function(e){x(e.data.subject_id[0].subject_name)}))}catch(e){console.log(e)}}}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(m.jsx)("h5",{className:"text-info mb-4",children:"Add New Subject"}),Object(m.jsxs)("div",{className:"mt-4 w-50",children:[Object(m.jsx)("h5",{children:"Subject"}),Object(m.jsx)(r.a,{value:f,placeholder:"Subject Name",onChange:function(e){return x(e.target.value)}})]})]}),Object(m.jsxs)("div",{className:"d-flex mt-3 justify-content-end",children:[Object(m.jsx)(u.a,{onClick:function(){return e.goBack()},children:"Cancel"}),Object(m.jsxs)(u.a,{className:"text-white bg-info ml-3",onClick:_,children:[" ","Save"," "]})]}),Object(m.jsx)(l.a,{width:500,footer:null,visible:g,children:Object(m.jsxs)("div",{className:"d-flex my-3 align-items-center flex-column justify-content-center",children:[Object(m.jsx)("svg",{width:"65",height:"64",viewBox:"0 0 65 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M32.5 0C37.4636 0 42.1609 1.13082 46.358 3.14781C44.64 4.50697 43.0471 5.81176 41.5629 7.06762C38.7358 6.04009 35.6859 5.48012 32.5054 5.48012C25.1823 5.48012 18.5496 8.44852 13.7545 13.2491C8.95396 18.0496 5.98556 24.6769 5.98556 32C5.98556 39.3231 8.95396 45.9504 13.7545 50.7509C18.555 55.5515 25.1823 58.5199 32.5054 58.5199C39.8286 58.5199 46.4613 55.5515 51.2564 50.7509C56.0569 45.9504 59.0253 39.3231 59.0253 32C59.0253 30.2603 58.8568 28.5532 58.536 26.9059C59.9115 25.1118 61.3196 23.3231 62.7603 21.5508C63.8911 24.8236 64.5054 28.3411 64.5054 32C64.5054 40.8345 60.9227 48.8372 55.1327 54.6273C49.3427 60.4173 41.34 64 32.5054 64C23.6709 64 15.6682 60.4173 9.87819 54.6273C4.08274 48.8372 0.5 40.8345 0.5 32C0.5 23.1655 4.08274 15.1628 9.87275 9.37275C15.6628 3.58274 23.6655 0 32.5 0ZM17.5928 26.7428L25.3998 26.6395L25.9815 26.7917C27.5581 27.6996 29.0423 28.738 30.4286 29.9123C31.429 30.7604 32.3858 31.6847 33.2938 32.685C36.0936 28.178 39.0783 24.0408 42.2316 20.2351C45.6838 16.0652 49.3481 12.2813 53.1973 8.82909L53.9584 8.53551H62.4776L60.7596 10.4438C55.4806 16.3099 50.691 22.3717 46.3634 28.6239C42.0359 34.8814 38.165 41.3401 34.7236 47.9891L33.6526 50.055L32.6685 47.9511C30.8527 44.053 28.6781 40.4757 26.0848 37.279C23.4915 34.0822 20.4742 31.2443 16.9567 28.8304L17.5928 26.7428Z",fill:"#00AB6F"})}),Object(m.jsx)("h3",{className:"font-weight-bold mt-4 text-center",children:"New subject created successfully!"})]})})]})}}}]);
//# sourceMappingURL=24.fbe21d03.chunk.js.map