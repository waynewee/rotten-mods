_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"3Pwz":function(e,t,a){"use strict";var n=a("rePB"),r=a("q1tI"),i=a.n(r),o=a("xQut"),c=a("xwfA"),s=i.a.createElement;function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={seeMoreButtonContainer:{display:"flex",justifyContent:"center"},seeMoreButton:{backgroundColor:c.h,boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)",padding:12,borderRadius:10,color:"#fff"}};t.a=function(e){var t=e.style,a=e.fetchMoreData;return s("div",{style:d.seeMoreButtonContainer},s(o.a,{onClick:a,style:u(u({},d.seeMoreButton),t)},"See More"))}},"8Skl":function(e,t,a){"use strict";var n=a("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},i=a("6VBw"),o=function(e,t){return n.createElement(i.a,Object.assign({},e,{ref:t,icon:r}))};o.displayName="DownOutlined";t.a=n.forwardRef(o)},Q3Rx:function(e,t,a){"use strict";var n=a("wx14"),r=a("q1tI"),i=a.n(r).a.createElement;t.a=function(e){return i("svg",Object(n.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"bookmark",className:"bookmark-solid_svg__svg-inline--fa bookmark-solid_svg__fa-bookmark bookmark-solid_svg__fa-w-12",viewBox:"0 0 384 512"},e),i("path",{fill:"currentColor",d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"}))}},Vfi8:function(e,t,a){"use strict";var n=a("wx14"),r=a("q1tI"),i=a.n(r).a.createElement;t.a=function(e){return i("svg",Object(n.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"pen-alt",className:"pen-alt-solid_svg__svg-inline--fa pen-alt-solid_svg__fa-pen-alt pen-alt-solid_svg__fa-w-16",viewBox:"0 0 512 512"},e),i("path",{fill:"currentColor",d:"M497.94 74.17l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91zm-246.8-20.53c-15.62-15.62-40.94-15.62-56.56 0L75.8 172.43c-6.25 6.25-6.25 16.38 0 22.62l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l101.82-101.82 22.63 22.62L93.95 290.03A327.038 327.038 0 00.17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 00195.34-93.8l196.79-196.79-82.77-82.77-84.85-84.85z"}))}},W6yM:function(e,t,a){"use strict";var n=a("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM668 345.9L621.5 312 572 347.4V124h96v221.9z"}}]},name:"book",theme:"filled"},i=a("6VBw"),o=function(e,t){return n.createElement(i.a,Object.assign({},e,{ref:t,icon:r}))};o.displayName="BookFilled";t.a=n.forwardRef(o)},im0w:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),i=a("HaE+"),o=a("q1tI"),c=a.n(o),s=a("/MKj"),l=a("xQNW"),u=a("jBY8"),d=a("vDqi"),f=a.n(d),v=a("cr+I"),p=a.n(v),b=a("rOcY"),g="".concat(b.a,"/api/event"),m={addEvent:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n,i){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(g,{userId:t,sub:a,subId:n,type:i});case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),getEvent:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n,i){var o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=p.a.stringify({sub:t,subId:a,userId:n,type:i}),e.next=3,f.a.get("".concat(g,"/?").concat(o));case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),deleteEvent:function(){var e=Object(i.a)(r.a.mark((function e(t,a,n,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete(g,{params:{sub:t,subId:a,userId:n,type:i}});case 2:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}()},y=a("ye7r"),h=a("0lvd"),x=a("HNwB"),w=a("xwfA"),O=c.a.createElement,_=new Date,j=_.getFullYear()%2e3,k=1===(_.getMonth()<6?2:1)?j+1:j,M={text:"",ratingIds:[],workload:10,semesterTaken:1,acadYearTaken:"".concat(k-1,"/").concat(k)},S=function(e){var t=e.code,a=e.modId,n=e.updateReviews,c=e.updateModule,l=e.isModalVisible,d=e.setModalVisibility,f=e.reviewByUser,v=(e.ratingsByUser,null!==f&&void 0!==f?f:M),p=Object(o.useState)(v.text),b=p[0],g=p[1],m=Object(o.useState)(3),_=m[0],j=m[1],k=Object(o.useState)(3),S=k[0],C=k[1],I=Object(o.useState)(v.semesterTaken),V=I[0],z=I[1],B=Object(o.useState)(v.acadYearTaken),E=B[0],P=B[1],R=Object(o.useState)("Submit"),D=R[0],N=R[1],L=Object(o.useState)(w.i),q=L[0],H=L[1],T=Object(s.c)((function(e){var t;return null===(t=e.auth.user)||void 0===t?void 0:t._id}));Object(o.useEffect)((function(){var e=null===f||void 0===f?void 0:f.ratingIds;(null===e||void 0===e?void 0:e.length)>0&&Object(y.a)(e,C,j)}),[]);var A=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Y()){e.next=4;break}return N("You have forgotten to fill in at least one of the fields. Once done click this button!"),H(w.d),e.abrupt("return");case 4:if(t={text:b,semesterTaken:V,acadYearTaken:E,modId:a,userId:T,ratings:[{type:"difficulty",value:_},{type:"star",value:S}]},!f){e.next=10;break}return e.next=8,u.a.updateReviewOfModule(t,f._id);case 8:e.next=12;break;case 10:return e.next=12,u.a.addReviewOfModule(t);case 12:d(!1),n(),c();case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){return 0!==S&&0!==_&&""!==b};return O(h.a,{backgroundColor:w.h,submitColor:q,title:"".concat(f?"Edit":"Add"," Review"),isModalVisible:l,setModalVisibility:function(e){d(e),H(w.i),N("Submit")},onSubmit:A,submitText:D},O(x.a,{label:"Module Code",type:"text",value:t}),O(x.a,{label:"Review",type:"textarea",value:b,setValue:g}),O(x.a,{label:"Year Taken",type:"annualYear",value:E,setValue:P}),O(x.a,{label:"Semester Taken",type:"semester",value:V,setValue:z}),O(x.a,{label:"Difficulty",type:"difficulty",value:_,setValue:j}),O(x.a,{label:"Ratings",type:"rate",value:S,setValue:C}))},C=c.a.createElement,I=function(e){var t,a=e.code,n=e.modId,c=e.ratingsByUser,l=e.isModalVisible,d=e.setModalVisibility,f=e.updateModule,v=Object(s.c)((function(e){var t;return null===(t=e.auth.user)||void 0===t?void 0:t._id})),p=Object(o.useState)(null!==(t=null===c||void 0===c?void 0:c.value)&&void 0!==t?t:3),b=p[0],g=p[1],m=Object(o.useState)("Submit"),y=m[0],O=m[1],_=Object(o.useState)(w.i),j=_[0],k=_[1];Object(o.useEffect)((function(){var e;g(null!==(e=null===c||void 0===c?void 0:c.value)&&void 0!==e?e:0)}),[c]);var M=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S()){e.next=4;break}return O("You did not rate the module. Once done click this button!"),k(w.d),e.abrupt("return");case 4:if(!c){e.next=9;break}return e.next=7,u.a.updateRating(b,"star",v,n,"mod",c._id);case 7:e.next=11;break;case 9:return e.next=11,u.a.addRating(b,"star",v,n,"mod");case 11:f(),d(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){return 0!==b};return C(h.a,{backgroundColor:w.h,submitColor:j,title:"Rate the Module",isModalVisible:l,setModalVisibility:function(e){d(e),k(w.i),O("Submit")},onSubmit:M,submitText:y},C(x.a,{label:"Module Code",type:"text",value:a}),C(x.a,{label:"Ratings",type:"rate",value:b,setValue:g}))},V=a("BvKs"),z=a("jsC+"),B=a("8Skl"),E=a("rePB"),P=a("elgY"),R=a("yRN5"),D=c.a.createElement;function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q={container:{display:"flex",marginLeft:20,padding:"10px 0px"},iconContainer:{display:"flex",justifyContent:"center",width:26},text:{marginLeft:10,color:"#838383",textOverflow:"ellipsis"}},H=function(e){var t=e.Icon,a=e.text,n=e.iconStyle;return D("div",{style:q.container},D("div",{style:q.iconContainer},D(t,{style:L({height:20},n)})),D("span",{style:q.text},a))},T=a("wx14"),A=c.a.createElement;var Y=function(e){return A("svg",Object(T.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"user-clock",className:"user-clock-solid_svg__svg-inline--fa user-clock-solid_svg__fa-user-clock user-clock-solid_svg__fa-w-20",viewBox:"0 0 640 512"},e),A("path",{fill:"currentColor",d:"M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z"}))},F=c.a.createElement;var U=function(e){return F("svg",Object(T.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"coins",className:"coins-solid_svg__svg-inline--fa coins-solid_svg__fa-coins coins-solid_svg__fa-w-16",viewBox:"0 0 512 512"},e),F("path",{fill:"currentColor",d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"}))},W=c.a.createElement;var Q=function(e){return W("svg",Object(T.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"hourglass-half",className:"hourglass-half-solid_svg__svg-inline--fa hourglass-half-solid_svg__fa-hourglass-half hourglass-half-solid_svg__fa-w-12",viewBox:"0 0 384 512"},e),W("path",{fill:"currentColor",d:"M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z"}))},K=c.a.createElement;var J=function(e){return K("svg",Object(T.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"layer-group",className:"layer-group-solid_svg__svg-inline--fa layer-group-solid_svg__fa-layer-group layer-group-solid_svg__fa-w-16",viewBox:"0 0 512 512"},e),K("path",{fill:"currentColor",d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 00-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"}))},X=a("j1SK"),G=c.a.createElement,Z=function(e){return G("svg",Object(T.a)({"aria-hidden":"true","data-prefix":"far","data-icon":"star",className:"star-regular_svg__svg-inline--fa star-regular_svg__fa-star star-regular_svg__fa-w-18",viewBox:"0 0 576 512"},e),G("path",{fill:"currentColor",d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"}))},$=c.a.createElement;var ee=function(e){return $("svg",Object(T.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"university",className:"university-solid_svg__svg-inline--fa university-solid_svg__fa-university university-solid_svg__fa-w-16",viewBox:"0 0 512 512"},e),$("path",{fill:"currentColor",d:"M496 128v16a8 8 0 01-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 01-8-8v-16a8 8 0 014.941-7.392l232-88a7.996 7.996 0 016.118 0l232 88A8 8 0 01496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 008 8h464a8 8 0 008-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"}))},te=a("Q3Rx"),ae=c.a.createElement;var ne=function(e){return ae("svg",Object(T.a)({"aria-hidden":"true","data-prefix":"far","data-icon":"bookmark",className:"bookmark-regular_svg__svg-inline--fa bookmark-regular_svg__fa-bookmark bookmark-regular_svg__fa-w-12",viewBox:"0 0 384 512"},e),ae("path",{fill:"currentColor",d:"M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 016-6h276c3.314 0 6 2.683 6 5.996V428.43z"}))},re=c.a.createElement;var ie=function(e){return re("svg",Object(T.a)({"aria-hidden":"true","data-prefix":"far","data-icon":"check-square",className:"check-square-regular_svg__svg-inline--fa check-square-regular_svg__fa-check-square check-square-regular_svg__fa-w-14",viewBox:"0 0 448 512"},e),re("path",{fill:"currentColor",d:"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"}))},oe=a("W6yM"),ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"}}]},name:"book",theme:"outlined"},se=a("6VBw"),le=function(e,t){return o.createElement(se.a,Object.assign({},e,{ref:t,icon:ce}))};le.displayName="BookOutlined";var ue=o.forwardRef(le),de=a("Vfi8"),fe=a("xQut"),ve=c.a.createElement,pe=function(e){var t=e.userId,a=e.modId,n=e.plannedModId,c=e.isModalVisible,s=e.setModalVisibility,l=Object(o.useState)(1),u=l[0],d=l[1],f=Object(o.useState)(1),v=f[0],p=f[1],b=function(){var e=Object(i.a)(r.a.mark((function e(){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=2*(u-1)+v,!n){e.next=6;break}return e.next=4,R.a.updatePlannedMod(n,t,a,i);case 4:e.next=8;break;case 6:return e.next=8,R.a.addPlannedMod(t,a,i);case 8:Object(y.e)(t),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return ve(h.a,{title:"Add to Study Planner",backgroundColor:w.f,isModalVisible:c,setModalVisibility:s,submitColor:w.i,onSubmit:b},ve(x.a,{label:"Year",type:"year",value:u,setValue:d}),ve(x.a,{label:"Semester",type:"semester",value:v,setValue:p}))},be=a("tsqr"),ge=c.a.createElement;function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ye(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(Object(a),!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var he={container:{fontFamily:"Roboto",marginTop:30},moduleMeta:{display:"flex",justifyContent:"space-between",alignItems:"center",height:80},moduleInformation:{display:"flex",justifyContent:"flex-start"},moduleCode:{backgroundColor:w.a,height:80,borderRadius:12,display:"flex",justifyContent:"center",alignItems:"center",fontSize:"26px",color:"white",padding:"0px 30px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},moduleSmallDetailsColumn:{display:"flex",flexDirection:"column",justifyContent:"space-between"},actionsBar:{display:"flex"},actionIcon:{height:25,margin:"0px 10px"},infoContainer:{backgroundColor:w.e,marginTop:10,borderRadius:15,padding:"20px 30px 30px 30px",color:"#fff",boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)"},moduleTitle:{fontSize:30,fontWeight:"bold"},moduleDescription:{textAlign:"justify",fontWeight:300},iconStyle:{color:"#B9B9B9"}},xe=function(e){var t,a,n,c,l,u=e.module,d=e.setAddReviewModalVisibility,f=e.setAddRatingsModalVisibility,v=e.reviewByUser,p=Object(o.useState)(!1),b=p[0],g=p[1],m=Object(s.c)((function(e){var t;return null===(t=e.auth.user)||void 0===t?void 0:t._id})),h=null===(t=Object(s.c)((function(e){return e.personalModules.bookmarks})).find((function(e){return e.modId===(null===u||void 0===u?void 0:u._id)})))||void 0===t?void 0:t._id,x=null===(a=Object(s.c)((function(e){return e.personalModules.plannedMods})).find((function(e){return e.modId===(null===u||void 0===u?void 0:u._id)})))||void 0===a?void 0:a._id,O=Object(s.c)((function(e){return e.schools})),_=Object(s.c)((function(e){return e.auth.isLoggedIn})),j=u.code,k=u.workload,M=void 0===k?10:k,S=u.rating,C=u.schoolId,I=u.description,V=u.title,z=u.credit,B=void 0===z?4:z,E=u.semester,D=void 0===E?[1,2]:E,N=u.prereqs,L=u._id,q=null===(n=O.find((function(e){return e._id===C})))||void 0===n?void 0:n.name,T=(null===S||void 0===S?void 0:null===(c=S.difficulty)||void 0===c?void 0:c.value)||0,A=(null===S||void 0===S?void 0:null===(l=S.star)||void 0===l?void 0:l.value)||0,F=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=3;break}return Object(y.b)(),e.abrupt("return");case 3:if(h){e.next=8;break}return e.next=6,P.a.addBookmark(m,L);case 6:e.next=10;break;case 8:return e.next=10,P.a.deleteBookmark(h);case 10:Object(y.c)(m);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=3;break}return Object(y.b)(),e.abrupt("return");case 3:if(x){e.next=7;break}g(!0),e.next=10;break;case 7:return e.next=9,R.a.removePlannedMod(x);case 9:Object(y.e)(m);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return ge("div",{style:he.container},ge("div",{style:he.moduleMeta},ge("div",{style:he.moduleInformation},ge("div",{style:he.moduleCode},j),ge("div",{style:he.moduleSmallDetailsColumn},ge(H,{Icon:ee,text:"University: ".concat(q),iconStyle:he.iconStyle}),ge(H,{Icon:Q,text:"Semester(s) offered: ".concat(D.sort().join(", ")),iconStyle:he.iconStyle})),ge("div",{style:he.moduleSmallDetailsColumn},ge(H,{Icon:U,text:"Credit: ".concat(B),iconStyle:he.iconStyle}),ge(H,{Icon:Y,text:"Workload/Week: ".concat(M," hours"),iconStyle:he.iconStyle})),ge("div",{style:he.moduleSmallDetailsColumn},ge(H,{Icon:ie,text:"Pre-reqs: ".concat(N.join(", ")||"None"),iconStyle:he.iconStyle}),ge(H,{Icon:J,text:"Difficulty: ".concat(T.toFixed(1),"/5"),iconStyle:he.iconStyle}))),ge("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignContent:"center",height:"100%",fontSize:14}},ge("div",{style:{display:"flex",justifyContent:"flex-end",padding:"10px 10px 10px 0px",width:"100%",color:"#838383"}},ge("div",null,ge(X.a,{style:{height:20,color:w.g,margin:"0px 10px"}})),"".concat(A.toFixed(1))),ge("div",{style:he.actionsBar},ge(fe.a,{onClick:W},ge(x?oe.a:ue,{style:ye(ye({},he.actionIcon),{},{color:"#76CCB7",fontSize:25})})),ge(fe.a,{onClick:F},ge(h?te.a:ne,{style:ye(ye({},he.actionIcon),{},{color:"#289FA7"})})),ge(fe.a,{onClick:function(){_?v?be.b.error("You have posted a Review before. Edit your Review instead!"):f(!0):Object(y.b)()}},ge(Z,{style:ye(ye({},he.actionIcon),{},{color:w.g})})),ge(fe.a,{onClick:function(){_?d(!0):Object(y.b)()}},ge(de.a,{style:ye(ye({},he.actionIcon),{},{color:"#7497CC"})}))))),ge("div",{style:he.infoContainer},ge("div",{style:he.moduleTitle},V),ge("div",{style:he.moduleDescription},I)),ge(pe,{isModalVisible:b,setModalVisibility:g,modId:L,userId:m,plannedModId:x}))},we=a("zmtl"),Oe=a("3Pwz"),_e=c.a.createElement,je=function(e,t){return new Date(e.createdAt)<new Date(t.createdAt)?1:-1},ke=function(e){var t=e.initialModule,a=e.reviews,n=Object(o.useState)(t),d=n[0],f=n[1],v=Object(o.useState)(a),p=v[0],b=v[1],g=Object(o.useState)(20),y=g[0],h=g[1],x=Object(o.useState)(!1),w=x[0],O=x[1],_=Object(o.useState)(!1),j=_[0],k=_[1],M=Object(o.useState)(null),C=M[0],E=M[1],P=Object(s.c)((function(e){var t;return null===(t=e.auth.user)||void 0===t?void 0:t._id})),R=p.find((function(e){return e.userId===P}));Object(o.useEffect)((function(){L(),m.addEvent(P,"mod",d._id,"view")}),[]);var D=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.getReviewsOfModule(d._id);case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getModule(d._id);case 2:(t=e.sent).prereqs=d.prereqs,f(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.getRating("mod",d._id,P,"star");case 3:t=e.sent,E(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),E(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),q=function(e,t){return new Date(e.createdAt)>new Date(t.createdAt)?1:-1},H=function(e,t){var a,n,r,i,o,c,s=null!==(a=null===(n=e.reaction)||void 0===n?void 0:null===(r=n.like)||void 0===r?void 0:r.count)&&void 0!==a?a:0;return(null!==(i=null===(o=t.reaction)||void 0===o?void 0:null===(c=o.like)||void 0===c?void 0:c.count)&&void 0!==i?i:0)-s},T=function(e){var t=p.concat([]);t.sort(e),b(t)},A=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.getReviewsOfModule(d._id);case 2:t=e.sent,b(t),h(y+10);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=_e(V.a,null,_e(V.a.Item,null,_e(fe.a,{onClick:function(){return T(je)}},"Newest")),_e(V.a.Item,null,_e(fe.a,{onClick:function(){return T(q)}},"Oldest")),_e(V.a.Item,null,_e(fe.a,{onClick:function(){return T(H)}},"Most Likes")));return d?_e(c.a.Fragment,null,_e(xe,{module:d,setAddReviewModalVisibility:O,setAddRatingsModalVisibility:k,reviewByUser:R}),_e("div",{style:Me.reviewsHeader},_e("span",{style:Me.reviewsHeaderTitle},"Reviews"),_e(z.a,{overlay:Y},_e("div",{style:{marginRight:20}},_e("a",{style:{color:"#595959",marginRight:6,fontSize:18}},"Sort"),_e(B.a,null)))),_e(we.a,{updateReviews:D,reviews:p}),p.length>=10&&_e(Oe.a,{fetchMoreData:A}),_e(S,{code:d.code,modId:d._id,updateReviews:D,isModalVisible:w,setModalVisibility:O,reviewByUser:R,updateModule:N,ratingsByUser:C}),_e(I,{code:d.code,modId:d._id,isModalVisible:j,setModalVisibility:k,ratingsByUser:C,updateModule:N})):_e("div",{style:Me.moduleNotFoundPage},_e("span",{style:{}},"Module not found!"))},Me={reviewsHeader:{height:"8vh",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0px 10px",fontFamily:"Mukta",color:"#838383"},reviewsHeaderTitle:{fontSize:"26px"},moduleNotFoundPage:{display:"flex",height:"80vh",width:"100%",justifyContent:"center",alignItems:"center"}};ke.getInitialProps=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n,o,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,n=a.id,e.prev=2,e.next=5,l.a.getModule(n);case 5:return o=e.sent,e.next=8,Promise.all(o.prereqs.map(function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getModule(t);case 2:return a=e.sent,e.abrupt("return",a.code);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:return c=e.sent,o.prereqs=c,e.next=12,u.a.getReviewsOfModule(o._id,10);case 12:return(s=e.sent).sort(je),e.abrupt("return",{initialModule:o,reviews:s});case 17:return e.prev=17,e.t0=e.catch(2),e.abrupt("return",{initialModule:null,reviews:[]});case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}();t.default=ke},j1SK:function(e,t,a){"use strict";var n=a("wx14"),r=a("q1tI"),i=a.n(r).a.createElement;t.a=function(e){return i("svg",Object(n.a)({"aria-hidden":"true","data-prefix":"fas","data-icon":"star",className:"star-solid_svg__svg-inline--fa star-solid_svg__fa-star star-solid_svg__fa-w-18",viewBox:"0 0 576 512"},e),i("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}))}},y71F:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/module-review",function(){return a("im0w")}])}},[["y71F",1,2,0,4,5,6,8,9,10,7]]]);