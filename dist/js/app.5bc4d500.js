(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},a={app:0},n=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0a74":function(t,e,r){"use strict";r("1547")},"0be0":function(t,e,r){},"0e1b":function(t,e,r){},1547:function(t,e,r){},"23b0":function(t,e,r){"use strict";r("d059")},"400e":function(t,e,r){"use strict";r("0be0")},"56d7":function(t,e,r){"use strict";r.r(e);var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view"),r("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"header-section"},[r("header",[r("div",{staticClass:"collapse bg-dark",attrs:{id:"navbarHeader"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col-sm-4 offset-md-1 py-4"},[r("h4",{staticClass:"text-white"},[t._v("Link Router")]),r("ul",{staticClass:"list-unstyled"},[r("h2",[t._v("Hello")]),t._l(t.links,(function(e){return r("li",{key:e.title},[r("router-link",{staticClass:"nav-link",attrs:{href:"#",to:e.url}},[t._v(" "+t._s(e.title)+" ")])],1)}))],2)])])])]),r("div",{staticClass:"navbar navbar-dark bg-dark shadow-sm"},[r("div",{staticClass:"container"},[r("router-link",{staticClass:"navbar-brand d-flex align-items-center",attrs:{to:"/"}},[r("svg",{staticClass:"me-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","aria-hidden":"true",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}}),r("circle",{attrs:{cx:"12",cy:"13",r:"4"}})]),r("strong",[t._v("Users-CRM")])]),t._m(1)],1)])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-8 col-md-7 py-4"},[r("h4",{staticClass:"text-white"},[t._v("About")]),r("p",{staticClass:"text-muted"},[t._v("Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarHeader","aria-controls":"navbarHeader","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],c={data(){return{links:[{title:"Home",url:"/"},{title:"Users",url:"/users"}]}}},l=c,u=(r("a148"),r("2877")),d=Object(u["a"])(l,o,i,!1,null,"81b3a91e",null),p=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},v=[],f={},b=f,g=Object(u["a"])(b,h,v,!1,null,null,null),m=g.exports,_={name:"App",components:{Header:p,Footer:m}},C=_,y=Object(u["a"])(C,a,n,!1,null,null,null),k=y.exports,w=r("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"home-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12"},[r("div",{staticClass:"block"},[r("router-link",{attrs:{to:"/users"}},[r("h1",{staticClass:"text-center"},[t._v("go to users")])])],1)])])])])])},S=[],j={},O=j,P=(r("0a74"),Object(u["a"])(O,x,S,!1,null,"76809596",null)),$=P.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},H=[],M={},U=M,A=Object(u["a"])(U,E,H,!1,null,"07e79a64",null),D=A.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"users-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 mt-5"},[r("table",{staticClass:"table"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("name")}}},[t._v("Name")]),r("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("username")}}},[t._v("User Name")]),r("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("phone")}}},[t._v("Phone")]),r("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("website")}}},[t._v("Website")]),r("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("address")}}},[t._v("Adress")])])]),r("tbody",t._l(t.usersSort,(function(e,s){return r("tr",{key:s},[r("td",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[t._v(" "+t._s(e.name)+" ")])])]),r("td",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[t._v(" "+t._s(e.username)+" ")])])]),r("td",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[t._v(" "+t._s(e.phone)+" ")])])]),r("td",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[t._v(" "+t._s(e.website)+" ")])])]),r("td",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[t._v(" "+t._s(e.address.street)+" ")])])])])})),0)]),r("h6",[t._v("Debug: sort: "+t._s(t.currrentSort)+", dir: "+t._s(t.correntSortDir)+", page: "+t._s(this.page.current))])])]),r("Button",{attrs:{users:t.users}})],1)])])},B=[],N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"button-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 mt-5"},[r("div",{staticClass:"block"},[r("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.prevPage()}}},[t._v("Back")]),r("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.nextPage()}}},[t._v("Next")])])])])])])])},F=[],J={props:{users:{type:Array,required:!0}},data(){return{page:{}}},created(){this.page=this.$store.getters.getPage},methods:{prevPage(){this.page.current>1&&(this.page.current-=1)},nextPage(){this.page.current*this.page.length<this.users.length&&(this.page.current+=1)}}},R=J,q=(r("400e"),Object(u["a"])(R,N,F,!1,null,"2a625680",null)),z=q.exports,L=r("bc3a"),V=r.n(L),W={components:{Button:z},data(){return{page:{},users:[],currrentSort:"name",correntSortDir:"asc"}},computed:{},created(){this.page=this.$store.getters.getPage,V.a.get("https://jsonplaceholder.typicode.com/users").then(t=>{this.users=t.data}).catch(t=>{console.log(t)})},computed:{usersSort(){return this.users.sort((t,e)=>{let r=1;return"desc"===this.currrentSortDir&&(r=-1),t[this.currrentSort]<e[this.currrentSort]?-1*r:t[this.currrentSort]>e[this.currrentSort]?1*r:0}).filter((t,e)=>{let r=(this.page.current-1)*this.page.length,s=this.page.current*this.page.length;if(e>=r&&e<s)return!0})}},methods:{sort(t){t===this.currrentSort&&(this.correntSortDir="asc"===this.currrentSortDir?"desc":"asc"),this.currrentSort=t}}},G=W,I=(r("23b0"),Object(u["a"])(G,T,B,!1,null,null,null)),K=I.exports;s["a"].use(w["a"]);var Q=new w["a"]({mode:"history",routes:[{path:"/",name:"home",component:$},{path:"*",name:"NotFound",component:D},{path:"/users",name:"users",component:K}]}),X=r("2f62"),Y={state:{page:{current:1,length:3},users:[]},mutations:{setUsersStore(t,e){t.users=e}},actions:{setUsersStore({commit:t},e){t("setUsersStore",e)}},getters:{getUsersArray(t){return t.users},getPage(t){return t.page}}};s["a"].use(X["a"]);var Z=new X["a"].Store({modules:{users:Y},mutations:{},actions:{}}),tt=r("0a63"),et=r.n(tt);s["a"].use(et.a),s["a"].config.productionTip=!1,new s["a"]({router:Q,store:Z,render:function(t){return t(k)}}).$mount("#app")},a148:function(t,e,r){"use strict";r("0e1b")},d059:function(t,e,r){}});
//# sourceMappingURL=app.5bc4d500.js.map