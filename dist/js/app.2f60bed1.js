(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row flex-xl-nowrap"},[a("div",{staticClass:"cell-md-1 cell-xl-1 pr-0 "}),a("router-view")],1)])],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid bg-darkCobalt fg-white pos-fixed fixed-top z-top"},[a("header",{staticClass:"app-bar container bg-darkCobalt fg-white pos-relative app-bar-expand-md",attrs:{"data-role":"appbar"}},[t._m(0),a("ul",{staticClass:"app-bar-menu ml-auto"},[a("li",[a("router-link",{attrs:{to:"/home"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/profile"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("About Me")])],1),a("li",[a("router-link",{attrs:{to:"/portfolio"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("Portfolio")])],1),a("li",[a("router-link",{attrs:{to:"/blog"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("Blog")])],1),a("li",[a("router-link",{attrs:{to:"/api/guest_info"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("You is Here")])],1)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"brand fg-white no-hover",attrs:{href:"/"}},[a("b",[t._v("Hello")]),t._v(", world")])}],l={name:"Header",methods:{closeMenu:function(){$(".hamburger").removeClass("active"),$(".app-bar-menu").addClass("collapsed"),$(".app-bar-menu").hide()}}},c=l,u=a("2877"),d=Object(u["a"])(c,i,o,!1,null,null,null);d.options.__file="Header.vue";var p=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell-md-2 cell-xl-2 pr-0 border-right bd-gray",attrs:{id:"sidenav"}},[t._m(0),a("nav",{staticClass:"pt-1",attrs:{id:"doc-nav","data-role":"collapse","data-toggle-element":"#doc-nav-toggle"}},[a("div",{staticClass:"doc-nav-item"},[a("b",[t._v("Navigation")]),a("ul",{staticClass:"toc-nav"},[a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/home"}},[t._v("Home")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/user/1234"}},[t._v("Tutorial")])],1)])]),a("div",{staticClass:"doc-nav-item"},[a("b",[t._v("Useful API")]),a("ul",{staticClass:"toc-nav"},[a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/api/guest_info"}},[t._v("You is Here")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/api/prayer_schedule"}},[t._v("Prayer Schedule")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/api/2"}},[t._v("Api 2")])],1)])]),a("div",{staticClass:"doc-nav-item"},[a("b",[t._v("Our Team")]),a("ul",{staticClass:"toc-nav"},[a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/profile/mbenx"}},[t._v("mbenx")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/profile/rickykusriana"}},[t._v("rickykusriana")])],1)])]),t._m(1)])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"expand-button ml-2 d-block d-none-md",attrs:{id:"doc-nav-toggle"}},[a("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"doc-nav-item"},[a("b",[t._v("Thanks to")]),a("ul",{staticClass:"toc-nav"},[a("li",{staticClass:"done"},[a("a",{attrs:{target:"_blank",href:"https://vuejs.org/"}},[t._v("VueJS")])]),a("li",{staticClass:"done"},[a("a",{attrs:{target:"_blank",href:"https://www.heroku.com/"}},[t._v("Heroku")])]),a("li",{staticClass:"done"},[a("a",{attrs:{target:"_blank",href:"https://metroui.org.ua/"}},[t._v("Metro Ui")])])])])}],f={name:"Sidebar"},_=f,h=Object(u["a"])(_,v,m,!1,null,null,null);h.options.__file="Sidebar.vue";var g=h.exports,b=a("bc3a"),C=a.n(b),k={name:"app",components:{Header:p,Sidebar:g},data:function(){return{refCount:0,isLoading:!1}},methods:{setLoading:function(t){t?(this.refCount++,this.isLoading=!0):this.refCount>0&&(this.refCount--,this.isLoading=this.refCount>0)}},created:function(){var t=this;C.a.interceptors.request.use(function(e){return t.setLoading(!0),e},function(e){return t.setLoading(!1),Promise.reject(e)}),C.a.interceptors.response.use(function(e){return t.setLoading(!1),e},function(e){return t.setLoading(!1),Promise.reject(e)})}},x=k,y=Object(u["a"])(x,s,r,!1,null,null,null);y.options.__file="App.vue";var w=y.exports,j=(a("7f7f"),a("8c4f")),E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("div",{staticStyle:{"text-align":"center","padding-top":"200px"}},[a("h1",[t._v("Welcome")]),a("hr"),a("p",{staticClass:"text-leader"},[t._v("\n\t\t\tHi, nice to meet you. Come here let's make a changing, "),a("br"),t._v(" there is still time for a cup of coffee\n\t\t")])])])}],P={name:"Home"},O=P,H=Object(u["a"])(O,E,S,!1,null,null,null);H.options.__file="Home.vue";var T=H.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.posts.length?a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("Blog")]),a("hr"),a("div",{staticClass:"row"},[t._l(t.posts,function(e){return a("div",{key:e.id,staticClass:"cell-lg-3 cell-sm-6 p-0 m-0"},[a("div",{staticClass:"card image-header"},[a("div",{staticClass:"card-header fg-white",style:{height:"180px",backgroundImage:"linear-gradient( to bottom,  rgba(255,255,255,0), black 100% ), url("+t.getImg(e.content)+")"}},[a("h6",[t._v(t._s(e.title))])]),a("div",{staticClass:"card-content p-2"},[a("p",{staticClass:"fg-gray"},[a("span",{staticClass:"mif-alarm"}),t._v(" "+t._s(e.published))]),t._v("\n\t\t\t\t\t"+t._s(t.getText(e.title+" -- "+e.content))+" ...\n\t\t\t\t")]),a("div",{staticClass:"card-footer"},[a("router-link",{staticClass:"button secondary",attrs:{to:"/blog/"+e.id+"/"+e.title.replace(/ /g,"-").toLowerCase()}},[t._v("Read more ...")])],1)])])}),a("div",{staticClass:"cell-lg-12 cell-sm-12 pr-1 mr-1"},[a("ul",{staticClass:"pagination float-right"},[this.next_page?a("li",{staticClass:"page-item service"},[a("router-link",{staticClass:"page-link",attrs:{to:"/blog"}},[a("span",{staticClass:"mif-arrow-left"}),t._v(" Prev Page\n\t\t\t\t\t")])],1):a("li",{staticClass:"page-item service"},[a("router-link",{staticClass:"page-link",attrs:{to:"blog/"+t.nextPageToken}},[t._v("\n\t\t\t\t\t\tNext Page "),a("span",{staticClass:"mif-arrow-right"})])],1)])])],2)]):t._e()},I=[],M={props:["next_page"],methods:{getText:function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent.substr(0,128)||e.innerText.substr(0,128)},getImg:function(t){var e=document.createElement("div");if(e.style.display="none",document.body.appendChild(e),e.innerHTML=t,null!=e.querySelector("img"))return e.querySelector("img").src}},data:function(){return{posts:[],nextPageToken:""}},watch:{next_page:function(t){var e=this;if(t)var a="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is&pageToken="+t;else a="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is";C.a.get(a).then(function(t){e.posts=t.data.items,e.nextPageToken=t.data.nextPageToken})}},mounted:function(){var t=this;if(this.next_page)var e="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is&pageToken="+this.next_page;else e="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is";C.a.get(e).then(function(e){t.posts=e.data.items,t.nextPageToken=e.data.nextPageToken})}},L=M,z=Object(u["a"])(L,A,I,!1,null,null,null);z.options.__file="Blog.vue";var B=z.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.posts.title?a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v(t._s(t.posts.title))]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"cell-md-12"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"fg-gray"},[a("span",{staticClass:"mif-alarm"}),t._v(" "+t._s(t.posts.published)+" | \n\t\t\t\t\t"),a("span",{staticClass:"mif-user"}),t._v(" "+t._s("Unknown"==t.posts.author.displayName?"Ricky Kusriana Subagja":t.posts.author.displayName)+"\n\t\t\t\t")]),a("p",{domProps:{innerHTML:t._s(t.posts.content)}})])]),a("div",{staticClass:"cell-lg-12 cell-sm-12 pr-1 mr-1"},[a("hr"),a("router-link",{staticClass:"button secondary mt-2 float-right",attrs:{to:"/blog"}},[a("span",{staticClass:"mif-arrow-left"}),t._v(" Back to List\n\t\t\t")])],1)])]):t._e()},D=[],q={props:["id"],methods:{getText:function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent.substr(3,100)||e.innerText.substr(3,100)},getPostID:function(){return this.id}},data:function(){return{posts:[]}},created:function(){var t=this,e="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts/"+this.getPostID()+"?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is";C.a.get(e).then(function(e){t.posts=e.data})}},J=q,R=Object(u["a"])(J,N,D,!1,null,null,null);R.options.__file="Blog_detail.vue";var Z=R.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.profile&&t.profile.status?a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("About Me")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"cell-md-12"},[a("p",[t._v(t._s(t.profile.full_name))]),a("span",{staticClass:"fg-gray"},[t._v("\n\t\t\t\t"+t._s(t.profile.about)+"\n\t\t\t")]),a("div",{staticClass:"example"},t._l(t.profile.link_profile,function(e){return a("span",{key:e.id},[a("a",{class:"button "+e.app_color+" outline cell-md-2 cell-xs-12",attrs:{target:"_blank",href:e.app_url}},[a("span",{class:e.app_icon}),t._v(" "+t._s(e.app_name)+"\n\t\t\t\t\t")]),t._v(" \n\t\t\t\t")])}))])])]):t._e()},G=[],U={data:function(){return{profile:[]}},created:function(){var t=this,e="https://kodokode-1540384975077.firebaseio.com/profile/rickykusriana.json";C.a.get(e).then(function(e){t.profile=e.data})}},V=U,K=Object(u["a"])(V,Q,G,!1,null,null,null);K.options.__file="Profile.vue";var Y=K.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("My Calendar")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"authentification"},[a("h2",[t._v("VueJS + Google Calendar Example")]),t._v("\n\t\t\tAuthentification\n\t\t\t"),t.authorized?t._e():a("button",{on:{click:t.handleAuthClick}},[t._v("Sign In")]),t.authorized?a("button",{on:{click:t.handleSignoutClick}},[t._v("Sign Out")]):t._e()]),a("hr"),t.authorized?a("button",{on:{click:t.getData}},[t._v("Get Data")]):t._e(),t.authorized&&t.items?a("div",{staticClass:"item-container"},[a("pre",{domProps:{innerHTML:t._s(t.items)}})]):t._e()])])},X=[],F=(a("a481"),"212725181958-aap40b25cq7d9dst0q1a2ukdp6b87rsq.apps.googleusercontent.com"),tt="AIzaSyAm_12XlCIhVbYbWUKxc22ObCixAI2CDAs",et=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],at="https://www.googleapis.com/auth/calendar.readonly",nt={mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://apis.google.com/js/api.js"),t.async=!0,document.head.appendChild(t)},data:function(){return{items:void 0,api:void 0,authorized:!1}},created:function(){this.api=gapi,this.handleClientLoad()},methods:{handleClientLoad:function(){this.api.load("client:auth2",this.initClient)},initClient:function(){var t=this;t.api.client.init({apiKey:tt,clientId:F,discoveryDocs:et,scope:at}).then(function(e){t.api.auth2.getAuthInstance().isSignedIn.listen(t.authorized)})},handleAuthClick:function(t){var e=this;Promise.resolve(this.api.auth2.getAuthInstance().signIn()).then(function(t){e.authorized=!0})},handleSignoutClick:function(t){var e=this;Promise.resolve(this.api.auth2.getAuthInstance().signOut()).then(function(t){e.authorized=!1})},getData:function(){var t=this,e=this;e.api.client.calendar.events.list({calendarId:"primary",timeMin:(new Date).toISOString(),showDeleted:!1,singleEvents:!0,maxResults:10,orderBy:"startTime"}).then(function(a){e.items=t.syntaxHighlight(a.result.items),console.log(e.items)})},syntaxHighlight:function(t){return"string"!=typeof t&&(t=JSON.stringify(t,void 0,2)),t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),t.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(t){var e="number";return/^"/.test(t)?e=/:$/.test(t)?"key":"string":/true|false/.test(t)?e="boolean":/null/.test(t)&&(e="null"),'<span class="'+e+'">'+t+"</span>"})}}},st=nt,rt=Object(u["a"])(st,W,X,!1,null,null,null);rt.options.__file="Calendar.vue";var it=rt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.json.status?a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("Connection Information")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"cell-md-12 p-0 m-0"},[a("div",{staticClass:"card-content pl-2 pr-2"},[a("table",{staticClass:"table cell-border table-border options-table"},[t._m(0),a("tbody",[a("tr",[t._m(1),a("td",[t._v(t._s(t.json.query))])]),a("tr",[t._m(2),a("td",[t._v(t._s(t.json.as))])]),a("tr",[t._m(3),a("td",[t._v(t._s(t.json.isp))])]),a("tr",[t._m(4),a("td",[t._v(t._s(t.json.regionName))])]),a("tr",[t._m(5),a("td",[t._v(t._s(t.json.region))])]),a("tr",[t._m(6),a("td",[t._v(t._s(t.json.country))])]),a("tr",[t._m(7),a("td",[t._v(t._s(t.json.countryCode))])]),a("tr",[t._m(8),a("td",[t._v(t._s(t.json.lon))])]),a("tr",[t._m(9),a("td",[t._v(t._s(t.json.lat))])]),a("tr",[t._m(10),a("td",[t._v(t._s(t.json.timezone))])])])]),t._m(11)])])])]):t._e()},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Value")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("IP Address")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Company Provider")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Provider Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Region Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Region Code")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Country Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Country Code")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Longitude")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Latitude")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Timezone")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",{staticClass:"float-right pt-2 pr-2"},[t._v("\n\t\t\t\t    Source : "),a("a",{attrs:{target:"_blank",href:"http://ip-api.com"}},[t._v("http://ip-api.com")])])}],ct={data:function(){return{json:[]}},created:function(){var t=this,e="http://ip-api.com/json";C.a.get(e).then(function(e){t.json=e.data})}},ut=ct,dt=Object(u["a"])(ut,ot,lt,!1,null,null,null);dt.options.__file="Guest.vue";var pt=dt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.json.status?a("main",{staticClass:"cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[t._m(0)]):t._e()},mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"100px"}},[a("h1",{staticStyle:{"text-align":"center"}},[t._v("Pray Schedule")]),a("div",{staticClass:"card"},[a("div",{staticClass:"d-flex flex-justify-center"},[a("div",{staticClass:"card-content p-2"})])])])}],ft={data:function(){return{json:[]}},created:function(){var t=this,e="https://time.siswadi.com/pray/Jakarta";C.a.get(e).then(function(e){t.json=e.data,console.log(e.data)})}},_t=ft,ht=Object(u["a"])(_t,vt,mt,!1,null,null,null);ht.options.__file="Pray_schedule.vue";var gt=ht.exports;n["a"].use(j["a"]);var bt=new j["a"]({linkActiveClass:"active",linkExactActiveClass:"active",mode:"history",routes:[{path:"/home",name:"Home",component:T},{path:"/blog",name:"Blog",component:B},{path:"/blog/:next_page",name:"Next_page",component:B,props:!0},{path:"/blog/:id/:meta_url",name:"Blog_detail",component:Z,props:!0},{path:"/api/calendar",name:"Calendar",component:it},{path:"/api/guest_info",name:"Guest",component:pt},{path:"/api/prayer_schedule",name:"Pray",component:gt},{path:"/profile",name:"Profile",component:Y},{path:"/",name:"default",component:T}]});bt.beforeResolve(function(t,e,a){t.name&&NProgress.start(),a()}),bt.afterEach(function(t,e){NProgress.done()});var Ct=bt;n["a"].config.productionTip=!1,new n["a"]({router:Ct,data:{},methods:{},render:function(t){return t(w)}}).$mount("#app")}});
//# sourceMappingURL=app.2f60bed1.js.map