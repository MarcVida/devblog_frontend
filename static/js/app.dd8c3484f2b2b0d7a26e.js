webpackJsonp([1],{"9M+g":function(t,e){},"9iz6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],r={render:i,staticRenderFns:n};e.a=r},Fs8J:function(t,e,a){"use strict";var i=a("Xxa5"),n=a.n(i),r=a("exGp"),o=a.n(r);e.a={name:"home",data:function(){return{posts:[{id:1,date:"2023-04-19",author:"Marc",title:"Hello world",text:"Irure esse quis cupidatat et quis consectetur veniam pariatur amet pariatur enim ipsum. Sit excepteur nisi consequat esse ullamco pariatur velit proident qui cupidatat sit sint Lorem. Ullamco enim consequat nisi nostrud pariatur irure dolor sunt nulla. Laborum non dolore culpa minim ipsum ex consequat in tempor laborum deserunt. Officia ea id et nulla ullamco. Exercitation exercitation occaecat Lorem aute exercitation aute velit pariatur quis. Elit cillum pariatur ipsum pariatur dolore amet nostrud ullamco dolore."},{id:2,date:"2023-04-22",author:"Bob",title:"A new world",text:"Aute duis minim velit id nulla est mollit veniam esse. Voluptate cupidatat ad dolor esse sunt do sunt exercitation veniam. Sit ea sint cupidatat fugiat incididunt dolore adipisicing do commodo. Sit magna occaecat minim ipsum pariatur qui excepteur. Cillum sit laboris do nisi eu incididunt aliquip."}]}},created:function(){var t=this;return o()(n.a.mark(function e(){var a,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("blabla");case 3:return a=e.sent,e.next=6,a.json();case 6:i=e.sent,posts=i,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.error(e.t0.message);case 13:case"end":return e.stop()}},e,t,[[0,10]])}))()},methods:{error:function(t){this.$bvToast.toast(t,{title:"Error",variant:"danger",solid:!0})}}}},M93x:function(t,e,a){"use strict";function i(t){a("lLxy")}var n=a("xJD8"),r=a("9iz6"),o=a("VU/8"),u=i,s=o(n.a,r.a,!1,u,null,null);e.a=s.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("Tqaz"),r=a("M93x"),o=a("YaEn"),u=a("qb6w"),s=(a.n(u),a("9M+g"));a.n(s);i.default.use(n.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},U0Pz:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("About")]),t._v(" "),a("p",[t._v("This is a sample page. The main purpose of this page is to check if it is navigable from the Home page. That's about it.")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("Home Page")])],1)},n=[],r={render:i,staticRenderFns:n};e.a=r},WUHc:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("DevBlog")]),t._v(" "),t._l(t.posts,function(e){return a("b-card",{key:e.id,staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"1080px"},attrs:{title:e.title,tag:"article"}},[a("b-card-sub-title",{staticClass:"mb-2"},[t._v("Author: "+t._s(e.author))]),t._v(" "),a("b-card-text",[t._v("\n      "+t._s(e.text)+"\n    ")]),t._v(" "),a("b-card-footer",[t._v(t._s(e.date))])],1)}),t._v(" "),a("router-link",{attrs:{to:"/about"}},[t._v("About Page")])],2)},n=[],r={render:i,staticRenderFns:n};e.a=r},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),n=a("/ocq"),r=a("lO7g"),o=a("c27y");i.default.use(n.a),e.a=new n.a({mode:"history",base:"/devblog_frontend/",routes:[{path:"/",name:"Home",component:r.a},{path:"/about",name:"About",component:o.a}]})},Zs8U:function(t,e,a){"use strict";e.a={name:"about"}},bN4V:function(t,e){},c27y:function(t,e,a){"use strict";function i(t){a("bN4V")}var n=a("Zs8U"),r=a("U0Pz"),o=a("VU/8"),u=i,s=o(n.a,r.a,!1,u,"data-v-991b991e",null);e.a=s.exports},lLxy:function(t,e){},lO7g:function(t,e,a){"use strict";function i(t){a("pb6c")}var n=a("Fs8J"),r=a("WUHc"),o=a("VU/8"),u=i,s=o(n.a,r.a,!1,u,"data-v-00ac1cf4",null);e.a=s.exports},pb6c:function(t,e){},qb6w:function(t,e){},xJD8:function(t,e,a){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.dd8c3484f2b2b0d7a26e.js.map