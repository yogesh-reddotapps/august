(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[21],{737:function(e,t,c){"use strict";var n=c(220),a=c.n(n).a.create({baseURL:"http://18.140.159.50:3333/",headers:{"Content-Type":"application/json"}});t.a=a},955:function(e,t,c){"use strict";c.r(t);var n=c(15),a=c(25),s=c.n(a),l=c(83),r=c(71),i=c(896),o=c(566),j=c(897),d=c(170),u=c(108),m=c(969),b=c(737),h=c(0),p=c(42),x=c(187),O=c(221),v=c(1);t.default=function(){var e=i.a.useForm(),t=Object(r.a)(e,1)[0],c=Object(p.useLocation)(),a=new URLSearchParams(c.search).get("id"),f=Object(h.useState)(!1),C=Object(r.a)(f,2),N=C[0],_=C[1],w=Object(x.useHistory)(),y=function(){var e=Object(l.a)(s.a.mark((function e(t){var c,n,l,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log("Success:",t),!a){e.next=10;break}return c={id:a,venue_name:t.venue_name,venue_capacity:t.venue_capacity,postal_code:t.postal_code,block_number:t.block_number,street_number:t.street_number,unit_number:t.unit_number,country:t.country,level_no:"01"},e.next=6,b.a.post("/api/admin-update-venues",c,{headers:{"Content-Type":"application/json"}});case 6:return n=e.sent,console.log(n),200===n.status&&(_(!0),setTimeout((function(){_(!1),w.goBack()}),1200)),e.abrupt("return");case 10:return l={venue_name:t.venue_name,venue_capacity:t.venue_capacity,postal_code:t.postal_code,block_number:t.block_number,street_number:t.street_number,unit_number:t.unit_number,country:t.country,level_no:"01"},console.log("test",l),e.next=14,b.a.post("/api/admin-add-venue",l,{headers:{"Content-Type":"application/json"}});case 14:r=e.sent,console.log(r),200===r.status&&(_(!0),setTimeout((function(){_(!1),w.goBack()}),1200)),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Object(b.a)({method:"post",url:"".concat(O.a,"/get-venues-by-id"),headers:{"Content-Type":"application/json"},data:{id:a}}).then((function(e){var c=e.data.data[0];t.setFieldsValue(Object(n.a)({},c))}))}catch(c){console.log(c)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){"/app/masters/venue/add_new"!==c.pathname&&g()}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(i.a,{form:t,onFinish:y,children:[Object(v.jsxs)("div",{className:"border rounded p-3 mb-4 bg-white",children:[Object(v.jsxs)("h5",{className:"text-info mb-4",children:[a?"Edit":"Add"," New Venue"]}),Object(v.jsx)("h5",{children:"Venue Id"}),Object(v.jsx)(i.a.Item,{name:"id",children:Object(v.jsx)(o.a,{disabled:!0,className:"w-50"})}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("h5",{children:"Venue Name"}),Object(v.jsx)(i.a.Item,{name:"venue_name",children:Object(v.jsx)(o.a,{className:"w-50",placeholder:"Venue Name"})})]}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("h5",{children:"Venue Capacity"}),Object(v.jsx)(i.a.Item,{name:"venue_capacity",children:Object(v.jsx)(j.a,{className:"w-50",defaultValue:0})})]}),Object(v.jsx)("h5",{className:"mt-4",children:"Address"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h5",{children:"Residential/Postal Code"}),Object(v.jsx)(i.a.Item,{name:"postal_code",children:Object(v.jsx)(o.a,{className:"w-50",placeholder:"Residential/Postal Code"})})]}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("h5",{children:"Block No"}),Object(v.jsx)(i.a.Item,{name:"block_number",children:Object(v.jsx)(o.a,{className:"w-50",placeholder:"Block No"})})]}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("h5",{children:"Street No"}),Object(v.jsx)(i.a.Item,{name:"street_number",children:Object(v.jsx)(o.a,{className:"w-50",placeholder:"Street No"})})]}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("h5",{children:"Unit No (if applicable)"}),Object(v.jsx)(i.a.Item,{name:"unit_number",children:Object(v.jsx)(o.a,{className:"w-50",placeholder:"Unit No"})})]}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("h5",{children:"Level No"}),Object(v.jsx)(i.a.Item,{name:"level_no",children:Object(v.jsx)(o.a,{className:"w-50",placeholder:"Level No"})})]}),Object(v.jsxs)("div",{className:"mt-4 w-50",children:[Object(v.jsx)("h5",{children:"Country"}),Object(v.jsx)(i.a.Item,{name:"country",initialValue:"Singapore",children:Object(v.jsx)(d.a,{className:"w-100",children:Object(v.jsx)(d.a.Option,{value:"Singapore",children:"Singapore"})})})]})]}),Object(v.jsxs)("div",{className:"d-flex mt-3 justify-content-end",children:[Object(v.jsx)(i.a.Item,{children:Object(v.jsx)(u.a,{onClick:function(){return w.goBack()},children:"Cancel"})}),Object(v.jsx)(i.a.Item,{children:Object(v.jsx)(u.a,{className:"text-white bg-info ml-3",htmlType:"submit",children:"Save"})})]})]}),Object(v.jsx)(m.a,{width:500,footer:null,visible:N,children:Object(v.jsxs)("div",{className:"d-flex my-3 align-items-center flex-column justify-content-center",children:[Object(v.jsx)("svg",{width:"65",height:"64",viewBox:"0 0 65 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M32.5 0C37.4636 0 42.1609 1.13082 46.358 3.14781C44.64 4.50697 43.0471 5.81176 41.5629 7.06762C38.7358 6.04009 35.6859 5.48012 32.5054 5.48012C25.1823 5.48012 18.5496 8.44852 13.7545 13.2491C8.95396 18.0496 5.98556 24.6769 5.98556 32C5.98556 39.3231 8.95396 45.9504 13.7545 50.7509C18.555 55.5515 25.1823 58.5199 32.5054 58.5199C39.8286 58.5199 46.4613 55.5515 51.2564 50.7509C56.0569 45.9504 59.0253 39.3231 59.0253 32C59.0253 30.2603 58.8568 28.5532 58.536 26.9059C59.9115 25.1118 61.3196 23.3231 62.7603 21.5508C63.8911 24.8236 64.5054 28.3411 64.5054 32C64.5054 40.8345 60.9227 48.8372 55.1327 54.6273C49.3427 60.4173 41.34 64 32.5054 64C23.6709 64 15.6682 60.4173 9.87819 54.6273C4.08274 48.8372 0.5 40.8345 0.5 32C0.5 23.1655 4.08274 15.1628 9.87275 9.37275C15.6628 3.58274 23.6655 0 32.5 0ZM17.5928 26.7428L25.3998 26.6395L25.9815 26.7917C27.5581 27.6996 29.0423 28.738 30.4286 29.9123C31.429 30.7604 32.3858 31.6847 33.2938 32.685C36.0936 28.178 39.0783 24.0408 42.2316 20.2351C45.6838 16.0652 49.3481 12.2813 53.1973 8.82909L53.9584 8.53551H62.4776L60.7596 10.4438C55.4806 16.3099 50.691 22.3717 46.3634 28.6239C42.0359 34.8814 38.165 41.3401 34.7236 47.9891L33.6526 50.055L32.6685 47.9511C30.8527 44.053 28.6781 40.4757 26.0848 37.279C23.4915 34.0822 20.4742 31.2443 16.9567 28.8304L17.5928 26.7428Z",fill:"#00AB6F"})}),Object(v.jsx)("h3",{className:"font-weight-bold mt-4 text-center",children:"New venue created successfully!"})]})})]})}}}]);
//# sourceMappingURL=21.a0115581.chunk.js.map