(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[50],{609:function(e,t,a){"use strict";var n=a(7),l=a(0),r=a(635);t.a=function(){var e=l.useState(!1),t=Object(n.a)(e,2),a=t[0],i=t[1];return l.useEffect((function(){i(Object(r.b)())}),[]),a}},613:function(e,t,a){"use strict";var n=a(71),l=a(968),r=a(0),i=(a(614),a(1));t.a=function(e){var t=e.attribiue,a=e.clients,s=Object(r.useState)([]),o=Object(n.a)(s,2),c=o[0],u=o[1];return Object(i.jsx)("div",{children:Object(i.jsx)(l.a,{rowKey:"id",rowSelection:{selectedRowKeys:c,onChange:function(e,t){u(e)}},columns:t,dataSource:a})})}},614:function(e,t,a){},615:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function l(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var r=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},s=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},o=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(l(e),l(t)))}),[]))},c=t.jsons2arrays=function(e,t){var a=t=t||o(e),n=t;i(t)&&(a=t.map((function(e){return e.label})),n=t.map((function(e){return e.key})));var r=e.map((function(e){return n.map((function(t){return u(t,e)}))}));return[a].concat(l(r))},u=t.getHeaderValue=function(e,t){var a=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,a,n){var l=e[t];if(void 0!==l&&null!==l)return l;n.splice(1)}),t);return void 0===a?e in t?t[e]:"":a},d=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},b=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return d(e)})).map((function(e){return""+a+e+a})).join(t)})).join("\n")},m=t.arrays2csv=function(e,t,a,n){return b(t?[t].concat(l(e)):e,a,n)},y=t.jsons2csv=function(e,t,a,n){return b(c(e,t),a,n)},p=t.string2csv=function(e,t,a,n){return t?t.join(a)+"\n"+e:e.replace(/"/g,'""')},f=t.toCSV=function(e,t,a,n){if(i(e))return y(e,t,a,n);if(s(e))return m(e,t,a,n);if("string"===typeof e)return p(e,t,a);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,a,n,l){var i=f(e,a,n,l),s=r()?"application/csv":"text/csv",o=new Blob([t?"\ufeff":"",i],{type:s}),c="data:"+s+";charset=utf-8,"+(t?"\ufeff":"")+i,u=window.URL||window.webkitURL;return"undefined"===typeof u.createObjectURL?c:u.createObjectURL(o)}},616:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var n,l=a(0),r=((n=l)&&n.__esModule,a(10));t.propTypes={data:(0,r.oneOfType)([r.string,r.array,r.func]).isRequired,headers:r.array,target:r.string,separator:r.string,filename:r.string,uFEFF:r.bool,onClick:r.func,asyncOnClick:r.bool,enclosingCharacter:r.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]},619:function(e,t,a){"use strict";a(0);var n=a(565),l=a(192),r=a(171),i=a(1),s=function(e){return Object(i.jsx)(n.a,{overlay:e.menu,placement:e.placement,trigger:["click"],children:Object(i.jsx)("div",{className:"ellipsis-dropdown",children:Object(i.jsx)(r.a,{})})})};s.defaultProps={trigger:"click",placement:"bottomRight",menu:Object(i.jsx)(l.a,{})},t.a=s},620:function(e,t,a){"use strict";var n=a(71),l=a(192),r=a(755),i=a(565),s=a(0),o=a(1),c=Object(o.jsxs)(l.a,{mode:"horizontal",children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)("div",{children:"All"})}),Object(o.jsxs)(l.a.SubMenu,{title:"Roles",children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"All"})},"subitem1"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Crew"})},"subitem1"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Ops Manager"})},"subitem2")]},"item1"),Object(o.jsxs)(l.a.SubMenu,{title:"Status",children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"All"})},"subitem1"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Active"})},"subitem2"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Terminated"})},"subitem2")]},"item2"),Object(o.jsxs)(l.a.SubMenu,{title:"Gender",children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"All"})},"subitem1"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Male"})},"subitem1"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Female"})},"subitem2")]},"item3")]});t.a=function(e){var t=Object(s.useState)(c),a=Object(n.a)(t,2),u=a[0],d=(a[1],Object(o.jsxs)(l.a,{mode:"horizontal",children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(o.Fragment,{children:"All"})},"subitem1"),Object(o.jsxs)(l.a.SubMenu,{title:"Category",children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"All"})},"subitem1")," ",Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Safety Course"})},"subitem1")," ",Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Language Course"})},"subitem2")]},"item1"),Object(o.jsxs)(l.a.SubMenu,{title:"Medium",children:[" ",Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"All"})},"subitem1")," ",Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"English"})},"subitem2"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Hindi"})},"subitem2"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Chinese"})},"subitem2"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Tamil"})},"subitem2"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Malay"})},"subitem2"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Thai"})},"subitem2")]},"item2")]})),b=Object(o.jsxs)(l.a,{children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(o.Fragment,{children:"All"})},"subitem1"),Object(o.jsxs)(l.a.SubMenu,{title:"Gender",children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"All"})},"subitem1")," ",Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Male"})},"subitem1")," ",Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Female"})},"subitem2")]},"item3")]}),m=Object(o.jsxs)(l.a,{children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(o.Fragment,{children:"All"})},"subitem1"),Object(o.jsxs)(l.a.SubMenu,{title:"Sections",children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"All"})},"subitem1")," ",Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Section 1- Course Intro"})},"subitem1")," ",Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(r.a,{children:"Section 2- Course Intro"})},"subitem2")]},"item3")]});return"course_curriculam"==e.type?Object(o.jsx)(i.a,{overlay:d,placement:"bottomLeft",children:e.children}):"curriculam_det"==e.type?Object(o.jsx)(i.a,{overlay:b,placement:"bottomLeft",children:e.children}):"subjects"==e.type?Object(o.jsx)(i.a,{overlay:m,placement:"bottomLeft",children:e.children}):Object(o.jsx)(i.a,{overlay:u,placement:"bottomLeft",children:e.children})}},634:function(e,t,a){"use strict";var n=a(4),l=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"}}]},name:"audio",theme:"outlined"},i=a(14),s=function(e,t){return l.createElement(i.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:r}))};s.displayName="AudioOutlined";var o=a(566),c=a(711),u=a(1),d=o.a.Search,b=function(e){return console.log(e)};t.a=function(){return Object(u.jsx)(c.b,{direction:"vertical",children:Object(u.jsx)(d,{placeholder:"Search",allowClear:!0,onSearch:b,style:{width:200}})})}},641:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(570),i=a(1),s=l.a.forwardRef((function(e,t){return Object(i.jsx)(r.a,{component:e.svg,className:e.className})}));t.a=s},646:function(e,t,a){"use strict";a(0);var n=a(108),l=a(647),r=a(53),i=a(570),s=a(1);t.a=function(e){var t=e.data,a=e.passing;return Object(s.jsx)(n.a,{disabled:!(!t||0!==t.length),icon:Object(s.jsx)(i.a,{component:r.B}),className:"d-flex align-items-center ml-2",children:t&&0!==t.length&&Object(s.jsx)(l.CSVLink,{data:t,headers:a,filename:"august-international.csv",children:"Export"})})}},647:function(e,t,a){e.exports=a(648)},648:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var n=r(a(649)),l=r(a(650));function r(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=n.default,t.CSVLink=l.default},649:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),i=(n=r)&&n.__esModule?n:{default:n},s=a(615),o=a(616);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,a=e.headers,n=e.separator,l=e.enclosingCharacter,r=e.uFEFF,i=e.target,s=e.specs,o=e.replace;this.state.page=window.open(this.buildURI(t,r,a,n,l),i,s,o)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);c.defaultProps=Object.assign(o.defaultProps,{target:"_blank"}),c.propTypes=o.propTypes,t.default=c},650:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),s=(n=i)&&n.__esModule?n:{default:n},o=a(615),c=a(616);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.buildURI=a.buildURI.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"buildURI",value:function(){return o.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var a=this.props,n=a.data,l=a.headers,r=a.separator,i=a.filename,s=a.enclosingCharacter,c=a.uFEFF,u=t&&"function"===typeof n?n():n,d=new Blob([c?"\ufeff":"",(0,o.toCSV)(u,l,r,s)]);return window.navigator.msSaveBlob(d,i),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(a){!1!==a?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.headers,r=t.separator,i=t.filename,o=t.uFEFF,c=t.children,u=(t.onClick,t.asyncOnClick,t.enclosingCharacter),d=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),b="undefined"===typeof window?"":this.buildURI(a,o,n,r,u);return s.default.createElement("a",l({download:i},d,{ref:function(t){return e.link=t},target:"_self",href:b,onClick:this.handleClick()}),c)}}]),t}(s.default.Component);u.defaultProps=c.defaultProps,u.propTypes=c.propTypes,t.default=u},651:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"G",(function(){return l})),a.d(t,"A",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"y",(function(){return c})),a.d(t,"x",(function(){return u})),a.d(t,"z",(function(){return d})),a.d(t,"w",(function(){return b})),a.d(t,"q",(function(){return m})),a.d(t,"o",(function(){return y})),a.d(t,"t",(function(){return p})),a.d(t,"g",(function(){return f})),a.d(t,"H",(function(){return h})),a.d(t,"B",(function(){return j})),a.d(t,"k",(function(){return k})),a.d(t,"i",(function(){return g})),a.d(t,"m",(function(){return v})),a.d(t,"p",(function(){return _})),a.d(t,"C",(function(){return O})),a.d(t,"a",(function(){return x})),a.d(t,"v",(function(){return S})),a.d(t,"D",(function(){return C})),a.d(t,"e",(function(){return I})),a.d(t,"I",(function(){return A})),a.d(t,"j",(function(){return w})),a.d(t,"n",(function(){return M})),a.d(t,"u",(function(){return N})),a.d(t,"E",(function(){return E})),a.d(t,"F",(function(){return T})),a.d(t,"s",(function(){return D})),a.d(t,"l",(function(){return L})),a.d(t,"h",(function(){return P})),a.d(t,"r",(function(){return R}));var n=[{label:"id",key:"id"},{label:"Admin Username",key:"name"},{label:"Mobile Number",key:"phone_number"},{label:"Email",key:"email"},{label:"Date of Birth",key:"dob"},{label:"Last Login Time",key:"lastLoginTime"},{label:"Status",key:"status"}],l=[{label:"User Id",key:"user_id"},{label:"Name",key:"name"},{label:"Mobile Number",key:"phone_number"},{label:"Email Id",key:"email"},{label:"Date Of Birth",key:"dob"},{label:"Last Login Date",key:"lastLoginTime"},{label:"Status",key:"status"}],r=[{label:"User Id",key:"id"},{label:"Student Name",key:"name"},{label:"Date of Birth",key:"dob"},{label:"Mobile Number",key:"phone_number"},{label:"Email",key:"email"},{label:"verificationRequestDone",key:"verificationRequestDate"}],i=[{label:"Id",key:"id"},{label:"Course Name",key:"course_name"},{label:"Course Category",key:"course_category"},{label:"Medium",key:"medium"},{label:"Subject",key:"subjects_count"},{label:"Lesson",key:"lesson_count"},{label:"Status",key:"status"}],s=[{label:"Course Id",key:"course_id"},{label:"Course Name",key:"batch_id"},{label:"Batch Id",key:"id"},{label:"Start Date",key:"start_date"},{label:"End Date",key:"end_date"},{label:"Capacity",key:"capacity"},{label:"Status",key:"status"}],o=[{label:"Course Id",key:"course_id"},{label:"Upcoming Classes",key:"class_name"},{label:"Batch Id",key:"batch_id"},{label:"Class Id",key:"class_id"},{label:"Class Date",key:"class_date"},{label:"Start Time",key:"start_time"},{label:"End Time",key:"end_time"},{label:"Teachers Invited",key:"teacher_id"}],c=[{label:"Id",key:"id"},{label:"Language Code",key:"language_code"},{label:"Language Name",key:"language_name"},{label:"Updated on",key:"updated_at"}],u=[{label:"Id",key:"id"},{label:"Course Name",key:"language_code"},{label:"Updated on",key:"updated_at"}],d=[{label:"Id",key:"id"},{label:"Venue Name",key:"venue_name"},{label:"Address",key:"key"},{label:"Venue Capacity",key:"venue_capacity"},{label:"Update on",key:"updated_at"}],b=[{label:"Id",key:"id"},{label:"Course Name",key:"course_name"},{label:"Course Category",key:"course_category"},{label:"Language Available",key:"language"},{label:"Duration",key:"course_duration"}],m=[{label:"Sr No.",key:"course_id"},{label:"Courses",key:"course_name"},{label:"Access",key:"access"},{label:"Course Status",key:"course_status"}],y=[{label:"Batch Id",key:"batch_id"},{label:"Class Id",key:"class_id"},{label:"Course Name",key:"course_name"},{label:"Class Date",key:"class_date"},{label:"Start Time",key:"start_time"},{label:"End Time",key:"end_time"},{label:"Date of Invite",key:"invite_date"},{label:"Date of Accept/Reject",key:"date_of_action"},{label:"Status",key:"status"}],p=[{label:"Batch Id",key:"batch_id"},{label:"Class Id",key:"class_id"},{label:"Course Name",key:"course_name"},{label:"Class Date",key:"class_date"},{label:"Start Time",key:"start_time"},{label:"End Time",key:"end_time"},{label:"Date of Application",key:"date_of_application"},{label:"Reason",key:"date_of_action"},{label:"Status",key:"status"}],f=[{label:"User Id",key:"id"},{label:"Admin Name",key:"name"},{label:"Ratings Given",key:"rating"},{label:"Remarks",key:"description"},{label:"Status",key:"status"}],h=[{label:"Id",key:"id"},{label:"Student Name",key:"student_name"},{label:"Age",key:"dob"},{label:"Gender",key:"gender"},{label:"Contact Number",key:"phone_number"},{label:"Email Id",key:"email"},{label:"Attendance",key:"present"}],j=[{label:"Id",key:"enrollment_id"},{label:"Course Name",key:"course_name"},{label:"Category",key:"course_category"},{label:"Language",key:"language"},{label:"Date of Enroll",key:"enrollment_date"},{label:"Status",key:"status"}],k=[{label:"Id",key:"id"},{label:"Course Name",key:"course_name"},{label:"Assessment",key:"asssessment_type"},{label:"Enrolled On",key:"enrollment_date"},{label:"Status",key:"status"}],g=[{label:"Course Id",key:"id"},{label:"Course Name",key:"course_name"},{label:"Batch Id",key:"batch_id"},{label:"Start Date",key:"start_date"},{label:"Total Classes",key:"total_classes"},{label:"Status",key:"status"}],v=[{label:"Id",key:"id"},{label:"Course Name",key:"course_name"},{label:"Certificate Title",key:"certification_title"},{label:"Awarded On",key:"issue_date"},{label:"Certificate",key:"thumbnail"}],_=[{label:"Id",key:"id"},{label:"Date",key:"class_date"},{label:"Start Time",key:"start_time"},{label:"End Time",key:"end_time"},{label:"Teacher Assigned",key:"teacher_name"},{label:"Status",key:"status"}],O=[{label:"Id",key:"id"},{label:"Subject Name",key:"subject_name"},{label:"Lessons",key:"lesson_count"},{label:"Estimate Time(Mins)",key:"lessonCounts"}],x=[{label:"User Id",key:"id"},{label:"Class Id",key:"class_id"},{label:"Student",key:"student_name"},{label:"Remarks Given",key:"rating"},{label:"Remarks",key:"description"}],S=[{label:"Id",key:"id"},{label:"Lesson",key:"lesson_name"},{label:"Lesson Type",key:"lesson_type_"},{label:"Estimated Time (Mins)",key:"estimated_time"}],C=[{label:"Id",key:"id"},{label:"Subject Name",key:"subject_name"},{label:"Lessons",key:"lesson_count"}],I=[{label:"Sr no",key:"id"},{label:"Lesson Name",key:"lesson_name"},{label:"Lesson type",key:"type"},{label:"Estimated Time",key:"estimated_time"}],A=[{label:"Id",key:"id"},{label:"Assignment",key:"assignment_name"},{label:"Assignment Type",key:"assignment_type"},{label:"Assignment Questions",key:"assignment_questions"},{label:"Submitted By",key:"submitted_by"},{label:"Pending Questions",key:"pending_submissions"},{label:"Status",key:"status"}],w=[{label:"Id",key:"id"},{label:"Student Name",key:"student_name"},{label:"Date Of Birth",key:"dob"},{label:"Contact No",key:"phone_number"},{label:"Email Id",key:"email"},{label:"Attendance",key:"present"}],M=[{label:"Class Name",key:"class_name"},{label:"Date",key:"class_date"},{label:"Start Time",key:"start_time"},{label:"End Time",key:"end_time"},{label:"Teacher Assigned",key:"teacher_name"},{label:"Status",key:"status"}],N=[{label:"Sr No",key:"sr"},{label:"Lesson",key:"lesson_name"},{label:"Lesson Type",key:"type"},{label:"Estimated Time (Mins)",key:"estimated_time"}],E=[{label:"Sr No",key:"sr"},{label:"Subject Name",key:"subject_name"},{label:"Lessons",key:"lesson_count"},{label:"Estimate Time (Mins)",key:"estimateTime"}],T=[{label:"User Id",key:"id"},{label:"Teacher Name",key:"teacher_name"},{label:"Teacher Email",key:"teacher_email"},{label:"Batch Name",key:"batch_name"},{label:"Class Name",key:"class_name"},{label:"Assigned on",key:"created_at"},{label:"Status",key:"teacher_status"}],D=[{label:"User Id",key:"user_id"},{label:"Student Name",key:"student_name"},{label:"Date of Birth",key:"student_dob"},{label:"Gender",key:"gender"},{label:"Mobile Number",key:"student_phone_number"},{label:"Email ID",key:"student_email"},{label:"Date of enroll",key:"enrollment_date"},{label:"Student Status",key:"student_status"}],L=[{label:"Sr No",key:"id"},{label:"Batch Id",key:"batch_id"},{label:"Start Date",key:"start_date"},{label:"End Date",key:"end_date"},{label:"Classes Done",key:"complete_class"},{label:"Classes Remaining",key:"remaining_class"},{label:"Capacity",key:"capacity"},{label:"Enroll Students",key:"student_enroll"},{label:"Status",key:"status"}],P=[{label:"Id",key:"id"},{label:"Assesment Title",key:"assessment_title"},{label:"Assessment Questions",key:"questionLength"},{label:"Start Date",key:"start_date"},{label:"Due Date",key:"due_date"},{label:"Attended By",key:"attend_by"},{label:"Status",key:"status"}],R=[{label:"ID",key:"course_id"},{label:"Course Material Name",key:"course_material_name"},{label:"File Type",key:"file_type"},{label:"URL",key:"URL"},{label:"Created By",key:"created_by"},{label:"Created On",key:"created_at"},{label:"Status",key:"status"}]},711:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(3),l=a(5),r=a(7),i=a(0),s=a(6),o=a.n(s),c=a(47),u=a(80);function d(e){var t=e.className,a=e.direction,r=e.index,s=e.marginDirection,o=e.children,c=e.split,u=e.wrap,d=i.useContext(y),b=d.horizontalSize,m=d.verticalSize,p=d.latestIndex,f={};return d.supportFlexGap||("vertical"===a?r<p&&(f={marginBottom:b/(c?2:1)}):f=Object(n.a)(Object(n.a)({},r<p&&Object(l.a)({},s,b/(c?2:1))),u&&{paddingBottom:m})),null===o||void 0===o?null:i.createElement(i.Fragment,null,i.createElement("div",{className:t,style:f},o),r<p&&c&&i.createElement("span",{className:"".concat(t,"-split"),style:f},c))}var b=a(609),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},y=i.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),p={small:8,middle:16,large:24};t.b=function(e){var t,a=i.useContext(u.b),s=a.getPrefixCls,f=a.space,h=a.direction,j=e.size,k=void 0===j?(null===f||void 0===f?void 0:f.size)||"small":j,g=e.align,v=e.className,_=e.children,O=e.direction,x=void 0===O?"horizontal":O,S=e.prefixCls,C=e.split,I=e.style,A=e.wrap,w=void 0!==A&&A,M=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),N=Object(b.a)(),E=i.useMemo((function(){return(Array.isArray(k)?k:[k,k]).map((function(e){return function(e){return"string"===typeof e?p[e]:e||0}(e)}))}),[k]),T=Object(r.a)(E,2),D=T[0],L=T[1],P=Object(c.a)(_,{keepEmpty:!0}),R=void 0===g&&"horizontal"===x?"center":g,F=s("space",S),B=o()(F,"".concat(F,"-").concat(x),(t={},Object(l.a)(t,"".concat(F,"-rtl"),"rtl"===h),Object(l.a)(t,"".concat(F,"-align-").concat(R),R),t),v),U="".concat(F,"-item"),J="rtl"===h?"marginLeft":"marginRight",z=0,V=P.map((function(e,t){return null!==e&&void 0!==e&&(z=t),i.createElement(d,{className:U,key:"".concat(U,"-").concat(t),direction:x,index:t,marginDirection:J,split:C,wrap:w},e)})),W=i.useMemo((function(){return{horizontalSize:D,verticalSize:L,latestIndex:z,supportFlexGap:N}}),[D,L,z,N]);if(0===P.length)return null;var G={};return w&&(G.flexWrap="wrap",N||(G.marginBottom=-L)),N&&(G.columnGap=D,G.rowGap=L),i.createElement("div",Object(n.a)({className:B,style:Object(n.a)(Object(n.a)({},G),I)},M),i.createElement(y.Provider,{value:W},V))}},712:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return r}));var n=[{id:"#123",applicant_name:"John Smith",key:"1",phone:"+65 123456",email:"johnsmith@gmail.com",status:"Active",action:"",gender:"male",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar.png",event_time:"10/10/2000",age:"23",course_role:"2"},{id:"#125",applicant_name:"Jane Cooper",key:"1",phone:"+65 123456",email:"jane@gmail.com",status:"Active",action:"",gender:"female",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar 2.png",event_time:"10/10/1994",age:"20",course_role:"1"},{id:"#127",applicant_name:"John Smith",key:"1",phone:"+65 123456",email:"johnsmith@gmail.com",status:"Active",action:"",gender:"male",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar.png",event_time:"10/10/2000",age:"23",course_role:"2"},{id:"#129",applicant_name:"Jane Cooper",key:"1",phone:"+65 123456",email:"jane@gmail.com",status:"Active",action:"",gender:"female",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar 2.png",event_time:"10/10/1994",age:"20",course_role:"1"},{id:"#132",applicant_name:"John Smith",key:"1",phone:"+65 123456",email:"johnsmith@gmail.com",status:"Active",action:"",gender:"male",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar.png",event_time:"10/10/2000",age:"23",course_role:"2"},{id:"#45",applicant_name:"Jane Cooper",key:"1",phone:"+65 123456",email:"jane@gmail.com",status:"Active",action:"",gender:"female",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar 2.png",event_time:"10/10/1994",age:"20",course_role:"1"},{id:"#312",applicant_name:"John Smith",key:"1",phone:"+65 123456",email:"johnsmith@gmail.com",status:"Active",action:"",gender:"male",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar.png",event_time:"10/10/2000",age:"23",course_role:"2"},{id:"#523",applicant_name:"Jane Cooper",key:"1",phone:"+65 123456",email:"jane@gmail.com",status:"Active",action:"",gender:"female",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar 2.png",event_time:"10/10/1994",age:"20",course_role:"1"}],l=[{id:"#123",avatar:"/img/avatar3.png",name:"Workplace Safety and Health in Construction Sites",Course_category:"Safety Courses",date:"10 Mar 2023 10:00-7:00Pm",venue:"Woodland",enroll:"25",assignment:"10",assesment:"2",status:"active"},{id:"#122",avatar:"/img/avatar3.png",name:"Workplace Safety and Health in Construction Sites",Course_category:"Safety Courses",date:"10 Mar 2023 10:00-7:00Pm",venue:"Woodland",enroll:"25",assignment:"10",assesment:"2",status:"active"},{id:"#124",avatar:"/img/avatar3.png",name:"Workplace Safety and Health in Construction Sites",Course_category:"Safety Courses",date:"10 Mar 2023 10:00-7:00Pm",venue:"Woodland",enroll:"25",assignment:"10",assesment:"2",status:"active"},{id:"#125",avatar:"/img/avatar3.png",name:"Workplace Safety and Health in Construction Sites",Course_category:"Safety Courses",date:"10 Mar 2023 10:00-7:00Pm",venue:"Woodland",enroll:"25",assignment:"10",assesment:"2",status:"active"},{id:"#127",avatar:"/img/avatar3.png",name:"Workplace Safety and Health in Construction Sites",Course_category:"Safety Courses",date:"10 Mar 2023 10:00-7:00Pm",venue:"Woodland",enroll:"25",assignment:"10",assesment:"2",status:"active"},{id:"#128",avatar:"/img/avatar3.png",name:"Workplace Safety and Health in Construction Sites",Course_category:"Safety Courses",date:"10 Mar 2023 10:00-7:00Pm",venue:"Woodland",enroll:"25",assignment:"10",assesment:"2",status:"active"}],r=[{id:"#123",applicant_name:"John Smith",key:"1",phone:"+65 123456789",email:"johnsmith@gmail.com",status:"Active",action:"",gender:"male",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar.png",dob:"11 Jan 1990",lastLoginDate:"11 May 2023, 10:00:25 Am"},{id:"#125",applicant_name:"Jane Cooper",key:"1",phone:"+65 123456789",email:"jane@gmail.com",status:"Active",action:"",gender:"female",nationality:"Singapore",role:"Teacher",avatar:"/img/Avatar 2.png",dob:"11 Jan 1990",lastLoginDate:"11 May 2023, 10:00:25 Am"},{id:"#121",applicant_name:"John Smith",key:"1",phone:"+65 123456789",email:"johnsmith@gmail.com",status:"Active",action:"",gender:"male",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar.png",dob:"11 Jan 1990",lastLoginDate:"11 May 2023, 10:00:25 Am"},{id:"#120",applicant_name:"Jane Cooper",key:"1",phone:"+65 123456789",email:"jane@gmail.com",status:"Inactive",action:"",gender:"female",nationality:"Singapore",role:"Teacher",avatar:"/img/Avatar 2.png",dob:"11 Jan 1990",lastLoginDate:"11 May 2023, 10:00:25 Am"},{id:"#129",applicant_name:"John Smith",key:"1",phone:"+65 123456789",email:"johnsmith@gmail.com",status:"Active",action:"",gender:"male",nationality:"Singapore",role:"Manager",avatar:"/img/Avatar.png",dob:"11 Jan 1990",lastLoginDate:"11 May 2023, 10:00:25 Am"},{id:"#130",applicant_name:"Jane Cooper",key:"1",phone:"+65 123456789",email:"jane@gmail.com",status:"Inactive",action:"",gender:"female",nationality:"Singapore",role:"Teacher",avatar:"/img/Avatar 2.png",dob:"11 Jan 1990",lastLoginDate:"11 May 2023, 10:00:25 Am"}]},869:function(e,t,a){},911:function(e,t,a){"use strict";a.r(t);var n=a(25),l=a.n(n),r=a(83),i=a(71),s=(a(969),a(192)),o=a(108),c=a(53),u=a(619),d=(a(641),a(0)),b=a(48),m=a(712),y=a(229),p=a(613),f=(a(869),a(220)),h=a.n(f),j=a(634),k=a(620),g=a(570),v=a(646),_=a(651),O=a(221),x=a(1);t.default=function(){var e=Object(d.useState)(m.b),t=Object(i.a)(e,2),a=(t[0],t[1],Object(d.useState)([])),n=Object(i.a)(a,2),f=n[0],S=n[1],C=[{title:"Id",dataIndex:"id"},{dataIndex:"course_picture",render:function(e){return Object(x.jsx)("img",{style:{width:"70px",height:"70px",borderRadius:"50%"},src:"".concat(e),alt:"..."})}},{title:"Course Name",dataIndex:"course_name"},{title:"Course Category",dataIndex:"course_category"},{title:"Medium",dataIndex:"medium"},{title:"Subject",dataIndex:"subjects_count"},{title:"Lessons",dataIndex:"lesson_count"},{title:"Students Enroll",dataIndex:"student_enrollel"},{title:"Status",dataIndex:"status",render:function(e){return Object(x.jsx)("div",{className:"".concat(1!==e?"text-danger":"text-success"," font-weight-semibold"),children:1!==e?"inactive":"active"})}},{title:"Action",render:function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(u.a,{menu:Object(x.jsx)(s.a,{children:Object(x.jsx)(s.a.Item,{children:Object(x.jsxs)(b.b,{to:{pathname:"curriculam_details",state:{id:e.id}},children:[" ",Object(x.jsx)(y.a,{className:"mr-2 "}),"View Details"]})})})})})}}],I=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(O.a,"/get-curriculum-list"));case 2:t=e.sent,S(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){I()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"d-flex justify-content-between mb-3",children:Object(x.jsxs)("div",{className:"",style:{display:"flex"},children:[Object(x.jsx)(j.a,{}),Object(x.jsx)(k.a,{type:"course_curriculam",children:Object(x.jsx)(o.a,{icon:Object(x.jsx)(g.a,{component:c.J}),className:"d-flex align-items-center ml-2",children:"Filters"})}),Object(x.jsx)(v.a,{data:f,passing:_.c})]})}),Object(x.jsx)("div",{children:Object(x.jsx)(p.a,{clients:f,attribiue:C})})]})}}}]);
//# sourceMappingURL=50.9f756583.chunk.js.map