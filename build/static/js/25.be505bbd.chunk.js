(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[25],{941:function(t,e,n){"use strict";n.r(e);var a=n(25),c=n.n(a),s=n(83),i=n(71),r=n(0),o=n(784),u=n.n(o),l=(n(791),n(315)),b=n(108),j=n(566),d=n(187),f=n(220),h=n.n(f),p=n(221),x=n(1);e.default=function(){var t=new URLSearchParams(document.location.search).get("id"),e=Object(r.useState)(""),n=Object(i.a)(e,2),a=n[0],o=n[1],f=Object(r.useState)(""),m=Object(i.a)(f,2),O=m[0],g=m[1],v=Object(d.useHistory)(),w=function(){var e=Object(s.a)(c.a.mark((function e(){var n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&O){e.next=3;break}return l.b.error("Please enter title  and description !"),e.abrupt("return");case 3:if(n={notification_title:O,description:a,status:1,action:1,type:"system"},!t){e.next=11;break}return e.next=7,h.a.put("".concat(p.a,"/notifications/").concat(t),n);case 7:return 201===(s=e.sent).status&&(o(""),g(""),v.goBack()),l.b.success(s.data.msg),e.abrupt("return");case 11:return e.next=13,h.a.post("".concat(p.a,"/notifications"),n);case 13:201===(i=e.sent).status&&(o(""),g(""),v.goBack()),console.log(i);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(p.a,"/notifications/").concat(t));case 2:n=e.sent,console.log(n.data[0]),g(n.data[0].notification_title),o(n.data[0].description);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t&&k()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"py-3 mb-4 d-flex justify-content-between align-items-center",children:[Object(x.jsx)("h5",{children:"Notifications"}),Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{className:"mr-4 px-4 font-weight-semibold",htmlType:"button",onClick:function(){return v.goBack()},children:"Back"}),Object(x.jsx)(b.a,{className:"px-4 font-weight-semibold text-white bg-info",onClick:w,children:"Save"})]})]}),Object(x.jsx)("div",{className:"border rounded p-3 mb-4 bg-white d-flex justify-content-center align-items-center",children:Object(x.jsxs)("div",{className:"w-50 pt-5",style:{height:"60vh"},children:[Object(x.jsx)("h5",{children:"Notification Title"}),Object(x.jsx)(j.a,{value:O,placeholder:"Title",onChange:function(t){return g(t.target.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)("h5",{className:"mt-5",children:"Notification Text"}),Object(x.jsx)(u.a,{theme:"snow",value:a,onChange:o})]})})]})}}}]);
//# sourceMappingURL=25.be505bbd.chunk.js.map