(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/DtW":function(e,t,n){"use strict";var r=n("rePB"),o=n("q1tI"),i=n.n(o),a=n("/MKj"),c=n("nOHt"),l=n("wx14"),s=i.a.createElement;var u=function(e){return s("svg",Object(l.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"arrow-right",className:"arrow-right-solid_svg__svg-inline--fa arrow-right-solid_svg__fa-arrow-right arrow-right-solid_svg__fa-w-14",viewBox:"0 0 448 512"},e),s("path",{fill:"currentColor",d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}))},d=n("EHoS"),f=n("xwfA"),p=i.a.createElement,m={container:{position:"relative",height:45,width:100,backgroundColor:f.a,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:10,boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)",fontSize:20},deleteButton:{position:"absolute",top:-8,right:-8,backgroundColor:f.d,height:20,width:20,borderRadius:10,display:"flex",justifyContent:"center",alignItems:"center",fontSize:12,boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)",cursor:"pointer"},emptyContainer:{height:45,width:100,border:"dashed #000",borderWidth:1,borderRadius:10}},y=function(e){var t=e.code,n=e.order,r=Object(a.b)(),o=function(){r({type:d.b,payload:n})};return t?p("div",{style:m.container},t,p("div",{style:m.deleteButton,onClick:o},"x")):p("div",{style:m.emptyContainer})},g=i.a.createElement;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={container:{position:"fixed",bottom:"30px",left:0,right:0,zIndex:2,display:"flex",justifyContent:"center",color:"#fff"},modalContainer:{width:360,height:70,backgroundColor:f.c,borderRadius:12,boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)",display:"flex"},modulesContainer:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0px 20px",fontSize:20},actionContainer:{width:40,height:"100%",display:"flex",alignItems:"center",cursor:"pointer"},arrowIcon:{height:25}};t.a=function(){var e=Object(c.useRouter)(),t=Object(a.c)((function(e){return e.compare.firstModuleId})),n=Object(a.c)((function(e){return e.compare.firstModuleCode})),r=Object(a.c)((function(e){return e.compare.secondModuleId})),o=Object(a.c)((function(e){return e.compare.secondModuleCode}));return g("div",{style:h({visibility:t||r?"visible":"hidden"},v.container)},g("div",{style:v.modalContainer},g("div",{style:v.modulesContainer},g(y,{code:n,order:d.g}),"vs",g(y,{code:o,order:d.k})),g("div",{style:v.actionContainer,onClick:function(){t&&r&&e.push({pathname:"/module-comparison",query:{firstModuleId:t,secondModuleId:r}})}},g(u,{style:v.arrowIcon}))))}},"6VBw":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=n("q1tI"),l=n.n(c),s=n("TSYQ"),u=n.n(s);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=n("ZUlO"),y=n("Kwbf"),g=n("Gu+u");function b(e){return"object"===p(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===p(e.icon)||"function"===typeof e.icon)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){var r=e[n];switch(n){case"class":t.className=r,delete t.class;break;default:t[n]=r}return t}),{})}function v(e){return Object(m.generate)(e)[0]}function w(e){return e?Array.isArray(e)?e:[e]:[]}var x="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",C=!1,j={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var O=function(e){var t,n,r=e.icon,o=e.className,i=e.onClick,s=e.style,u=e.primaryColor,d=e.secondaryColor,p=a(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),m=j;if(u&&(m={primaryColor:u,secondaryColor:d||v(u)}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;Object(c.useEffect)((function(){C||(Object(g.insertCss)(e,{prepend:!0}),C=!0)}),[])}(),t=b(r),n="icon should be icon definiton, but got ".concat(r),Object(y.a)(t,"[@ant-design/icons] ".concat(n)),!b(r))return null;var w=r;return w&&"function"===typeof w.icon&&(w=f(f({},w),{},{icon:w.icon(m.primaryColor,m.secondaryColor)})),function e(t,n,r){return r?l.a.createElement(t.tag,f(f({key:n},h(t.attrs)),r),(t.children||[]).map((function(r,o){return e(r,"".concat(n,"-").concat(t.tag,"-").concat(o))}))):l.a.createElement(t.tag,f({key:n},h(t.attrs)),(t.children||[]).map((function(r,o){return e(r,"".concat(n,"-").concat(t.tag,"-").concat(o))})))}(w.icon,"svg-".concat(w.name),f({className:o,onClick:i,style:s,"data-icon":w.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},p))};O.displayName="IconReact",O.getTwoToneColors=function(){return f({},j)},O.setTwoToneColors=function(e){var t=e.primaryColor,n=e.secondaryColor;j.primaryColor=t,j.secondaryColor=n||v(t),j.calculated=!!n};var k=O;function I(e){var t=o(w(e),2),n=t[0],r=t[1];return k.setTwoToneColors({primaryColor:n,secondaryColor:r})}I("#1890ff");var S=c.forwardRef((function(e,t){var n=e.className,r=e.icon,l=e.spin,s=e.rotate,d=e.tabIndex,f=e.onClick,p=e.twoToneColor,m=a(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),y=u()("anticon",i({},"anticon-".concat(r.name),Boolean(r.name)),n),g=u()({"anticon-spin":!!l||"loading"===r.name}),b=d;void 0===b&&f&&(b=-1);var h=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,v=o(w(p),2),x=v[0],C=v[1];return c.createElement("span",Object.assign({role:"img","aria-label":r.name},m,{ref:t,tabIndex:b,onClick:f,className:y}),c.createElement(k,{className:g,icon:r,primaryColor:x,secondaryColor:C,style:h}))}));S.displayName="AntdIcon",S.getTwoToneColor=function(){var e=k.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},S.setTwoToneColor=I;t.a=S},KI7k:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),i=n("HaE+");var a=n("q1tI"),c=n.n(a),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},s=n("6VBw"),u=function(e,t){return a.createElement(s.a,Object.assign({},e,{ref:t,icon:l}))};u.displayName="LeftOutlined";var d=a.forwardRef(u),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},p=function(e,t){return a.createElement(s.a,Object.assign({},e,{ref:t,icon:f}))};p.displayName="RightOutlined";var m=a.forwardRef(p),y=c.a.createElement,g={container:{width:30,height:30,borderRadius:15,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",border:0,backgroundColor:"#fff",outline:0},icon:{color:"#BEBEBE",fontSize:20}},b=function(e){var t=e.direction,n=e.onClick;return y("button",{style:g.container,onClick:n},y("left"===t?d:m,{style:g.icon}))},h=n("nOHt"),v=n("/MKj"),w=n("EHoS"),x=n("j1SK"),C=n("xwfA"),j=c.a.createElement,O={container:{flex:1,width:300,height:170,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",color:"#fff",margin:"0px 10px",cursor:"pointer"},upperContainer:{position:"relative",left:15,height:20,zIndex:1,display:"flex",justifyContent:"center",alignItems:"center",paddingTop:20},moduleCode:{display:"flex",justifyContent:"center",alignItems:"center",height:40,width:100,backgroundColor:C.a,fontSize:16,borderRadius:10,boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)"},compareButton:{position:"relative",left:40,height:30,width:30,borderRadius:15,backgroundColor:C.c,display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)",cursor:"pointer"},lowerContainer:{width:300,height:150,display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:C.e,fontFamily:"Roboto",borderRadius:15,boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)"},moduleTitle:{display:"flex",height:80,justifyContent:"center",alignItems:"center",textAlign:"center",fontWeight:"bold",fontSize:20,marginTop:25,padding:"5px 20px 0px 20px"},ratings:{height:50,display:"flex",justifyContent:"center",alignItems:"center",fontSize:20},ratingsIcon:{height:20,color:C.g,marginBottom:4,marginRight:10}},k=function(e){var t,n=e.module,r=Object(h.useRouter)(),o=Object(v.b)(),i=n.code,a=n.title,c=n.rating,l=n._id,s=(null===c||void 0===c?void 0:null===(t=c.star)||void 0===t?void 0:t.value)||0,u=function(){r.push({pathname:"/module-review",query:{id:l}})};return j("div",{style:O.container},j("div",{style:O.upperContainer},j("div",{style:O.moduleCode,onClick:u},i),j("div",{style:O.compareButton,onClick:function(){o({type:w.a,payload:{id:l,code:i}})}},"vs")),j("div",{style:O.lowerContainer,onClick:u},j("div",{style:O.moduleTitle},a),j("div",{style:O.ratings},j(x.a,{style:O.ratingsIcon})," ",s.toFixed(1))))},I=c.a.createElement,S=function(e){var t=e.modules,n=Object(a.useState)(0),r=n[0],o=n[1],i=t.map((function(e,t){return I(k,{module:e,key:t})})),c=i.slice(r,r+3);return I("div",{style:{display:"flex",alignItems:"center",marginBottom:20}},I(b,{direction:"left",onClick:function(){o(r-3<=0?0:r-3)}}),c,I(b,{direction:"right",onClick:function(){r+3>i.length-3?o(i.length-3):o(r+3)}}))},E=n("ZGPg"),M=n("/DtW"),R=n("k+jj"),T=n("xQNW"),_=c.a.createElement;t.default=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(v.c)((function(e){return e.auth.isLoggedIn})),n=Object(v.c)((function(e){var t;return null===(t=e.auth.user)||void 0===t?void 0:t._id})),r=Object(a.useState)([]),l=r[0],s=r[1],u=Object(a.useState)([]),d=u[0],f=u[1],p=Object(a.useState)([]),m=p[0],y=p[1];Object(a.useEffect)((function(){g()}),[n]);var g=function(){var e=Object(i.a)(o.a.mark((function e(){var t,r,i,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.searchModule("cs1");case 2:return t=e.sent,r=function(e,n){e.length<3?n(e.concat(t)):n(e)},e.next=6,R.a.getMostRatedModules();case 6:return i=e.sent,r(i.mods,f),e.next=10,R.a.getMostViewedModules();case 10:if(a=e.sent,r(a.mods,s),e.prev=12,!n){e.next=18;break}return e.next=16,R.a.getRecommendedModules(n);case 16:c=e.sent,r(c.mods,y);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(12),console.log("User has insufficient activities to get recommended");case 23:case"end":return e.stop()}}),e,null,[[12,20]])})));return function(){return e.apply(this,arguments)}}();return _(c.a.Fragment,null,_(M.a,null),_(E.a,{title:"Trending Modules"}),_(S,{modules:l}),_(E.a,{title:"Popular Modules"}),_(S,{modules:d}),t&&function(){if(n)return m.length>0?(console.log("Recommended:",m),_(c.a.Fragment,null,_(E.a,{title:"Recommended For You"}),_(S,{modules:m}))):_(c.a.Fragment,null,_(E.a,{title:"Recommended For You"}),_("p",{style:{textAlign:"center",paddingTop:"20px"}},"Sorry we do not have enough information about you to recommend modules for you!"))}())}},ZGPg:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement,i={container:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"8vh",fontSize:"1.5em",color:"#838383",fontFamily:"Mukta"}};t.a=function(e){var t=e.title;return o("div",{style:i.container},t)}},j1SK:function(e,t,n){"use strict";var r=n("wx14"),o=n("q1tI"),i=n.n(o).a.createElement;t.a=function(e){return i("svg",Object(r.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"star",className:"star-solid_svg__svg-inline--fa star-solid_svg__fa-star star-solid_svg__fa-w-18",viewBox:"0 0 576 512"},e),i("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}))}},"k+jj":function(e,t,n){"use strict";var r=n("o0o1"),o=n.n(r),i=n("HaE+"),a=n("vDqi"),c=n.n(a),l=n("cr+I"),s=n.n(l),u=n("rOcY"),d="".concat(u.a,"/api/recommendation"),f=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"similarity",n=s.a.stringify({type:"similarity"}),r=s.a.stringify({userId:t}),e.next=5,c.a.get("".concat(d,"/?").concat(n,"&").concat(r),{withCredentials:!0});case 5:return i=e.sent,e.abrupt("return",i.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"most-rated",t=s.a.stringify({type:"most-rated"}),e.next=4,c.a.get("".concat(d,"/?").concat(t),{withCredentials:!0});case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"most-viewed",t=s.a.stringify({type:"most-viewed"}),e.next=4,c.a.get("".concat(d,"/?").concat(t),{withCredentials:!0});case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.a={getRecommendedModules:f,getMostRatedModules:p,getMostViewedModules:m}}}]);