webpackJsonp([1],{"9M+g":function(t,e){},Fs8J:function(t,e,a){"use strict";var n=a("mvHQ"),s=a.n(n),r=a("Xxa5"),o=a.n(r),c=a("exGp"),i=a.n(c);e.a={name:"home",data:function(){return{posts:[],newPost:{author:"",title:"",text:""},showForm:!0}},created:function(){var t=this;return i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.refresh();case 1:case"end":return e.stop()}},e,t)}))()},methods:{refresh:function(){var t=this;return i()(o.a.mark(function e(){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://marcvida.pythonanywhere.com/posts/");case 3:if(a=e.sent,a.ok){e.next=6;break}throw Error(a.statusText);case 6:return e.next=8,a.json();case 8:n=e.sent,t.posts=n,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t.toast(e.t0.message);case 15:case"end":return e.stop()}},e,t,[[0,12]])}))()},onSubmit:function(t){var e=this;return i()(o.a.mark(function a(){var n;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,fetch("https://marcvida.pythonanywhere.com/posts/",{method:"POST",body:s()(e.newPost),headers:{"Content-type":"application/json; charset=UTF-8"}});case 4:if(n=a.sent,n.ok){a.next=7;break}throw Error(n.statusText);case 7:return a.next=9,n.json();case 9:e.refresh(),e.onReset(null),e.toast("Post created successfully","success"),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(1),e.toast(a.t0.message);case 17:case"end":return a.stop()}},a,e,[[1,14]])}))()},onReset:function(t){var e=this;t&&t.preventDefault(),this.newPost.author="",this.newPost.title="",this.newPost.text="",this.showForm=!1,this.$nextTick(function(){return e.showForm=!0})},toast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"danger";this.$bvToast.toast(t,{title:"danger"==e?"Error":"Success",variant:e,solid:!0})}}}},"IRG+":function(t,e){},LBnj:function(t,e){},M93x:function(t,e,a){"use strict";function n(t){a("LBnj")}var s=a("xJD8"),r=a("Q6Wj"),o=a("VU/8"),c=n,i=o(s.a,r.a,!1,c,null,null);e.a=i.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("Tqaz"),r=a("M93x"),o=a("YaEn"),c=a("qb6w"),i=(a.n(c),a("9M+g"));a.n(i);n.default.use(s.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},Q6Wj:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},Tnuy:function(t,e){},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),r=a("lO7g"),o=a("c27y");n.default.use(s.a),e.a=new s.a({base:"/devblog_frontend/",routes:[{path:"/",name:"Home",component:r.a},{path:"/about",name:"About",component:o.a}]})},Zs8U:function(t,e,a){"use strict";e.a={name:"about"}},c27y:function(t,e,a){"use strict";function n(t){a("Tnuy")}var s=a("Zs8U"),r=a("tEnf"),o=a("VU/8"),c=n,i=o(s.a,r.a,!1,c,"data-v-512142f5",null);e.a=i.exports},lO7g:function(t,e,a){"use strict";function n(t){a("IRG+")}var s=a("Fs8J"),r=a("vazx"),o=a("VU/8"),c=n,i=o(s.a,r.a,!1,c,"data-v-353cbe7a",null);e.a=i.exports},qb6w:function(t,e){},tEnf:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("About")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"d-flex flex-column"},[a("router-link",{staticClass:"text-center mb-3",attrs:{to:"/"}},[t._v("Home Page")])],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Welcome to DevBlog, my first website. It was made using Vue.js for the frontend, and Django for the backend. \n    As you can see, the website is very simple and basically just allows you to read and create posts that are stored in \n    a database. The main purpose of this project was to gain experience with full stack development using free tools only.\n    "),a("br"),a("br"),t._v("Have a good day\n    "),a("br"),a("br"),t._v("-MarcVida-"),a("br"),a("br")])}],r={render:n,staticRenderFns:s};e.a=r},vazx:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("DevBlog")]),t._v(" "),t._l(t.posts,function(e){return a("b-card",{key:e.id,staticClass:"mb-2 mx-auto bg-transparent",staticStyle:{"max-width":"1080px"},attrs:{title:e.title,tag:"article"}},[a("b-card-sub-title",{staticClass:"mb-2"},[t._v("Author: "+t._s(e.author))]),t._v(" "),a("b-card-text",[t._v("\n      "+t._s(e.text)+"\n    ")]),t._v(" "),a("b-card-footer",[t._v(t._s(e.date))])],1)}),t._v(" "),a("h2",[t._v("Create Post")]),t._v(" "),t.showForm?a("b-form",{staticClass:"d-flex flex-column mx-auto",staticStyle:{"max-width":"600px"},on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-input",{staticClass:"mb-2 bg-transparent",attrs:{placeholder:"Enter your name",required:""},model:{value:t.newPost.author,callback:function(e){t.$set(t.newPost,"author",e)},expression:"newPost.author"}}),t._v(" "),a("b-form-input",{staticClass:"mb-2 bg-transparent",attrs:{placeholder:"Enter post title",required:""},model:{value:t.newPost.title,callback:function(e){t.$set(t.newPost,"title",e)},expression:"newPost.title"}}),t._v(" "),a("b-form-textarea",{staticClass:"mb-2 bg-transparent",attrs:{id:"textarea",placeholder:"Enter post text",rows:"4","max-rows":"12",required:""},model:{value:t.newPost.text,callback:function(e){t.$set(t.newPost,"text",e)},expression:"newPost.text"}}),t._v(" "),a("b-button",{staticClass:"mx-auto mb-1",staticStyle:{"max-width":"100px"},attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),a("b-button",{staticClass:"mx-auto mb-2",staticStyle:{"max-width":"100px"},attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e(),t._v(" "),a("div",{staticClass:"d-flex flex-column"},[a("router-link",{staticClass:"text-center mb-3",attrs:{to:"/about"}},[t._v("About Page")])],1)],2)},s=[],r={render:n,staticRenderFns:s};e.a=r},xJD8:function(t,e,a){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.0bdad16e89b6b812c856.js.map