(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)n=r[d],i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("Header"),a("div",{staticClass:"row flex-xl-nowrap"},[a("div",{staticClass:"cell-md-1 cell-xl-1 pr-0 "}),a("keep-alive",[a("router-view",{directives:[{name:"keep-scroll-position",rawName:"v-keep-scroll-position"}]})],1)],1)],1)},o=[],n=a("795b"),r=a.n(n),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid bg-darkCobalt fg-white pos-fixed fixed-top z-top"},[a("header",{staticClass:"app-bar container bg-darkCobalt fg-white pos-relative app-bar-expand-md",attrs:{"data-role":"appbar"}},[t._m(0),a("ul",{staticClass:"app-bar-menu ml-auto"},[a("li",[a("router-link",{attrs:{to:"/home"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/profile"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("About Me")])],1),a("li",[a("router-link",{attrs:{to:"/portfolio"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("Portfolio")])],1),a("li",[a("router-link",{attrs:{to:"/blog"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("Blog")])],1),a("li",[a("router-link",{attrs:{to:"/api/guest_info"},nativeOn:{click:function(e){t.closeMenu()}}},[t._v("You is Here")])],1),a("li",[a("router-link",{staticClass:"text-bold fg-yellow",attrs:{to:"/chat"},nativeOn:{click:function(e){t.closeMenu()}}},[a("span",{class:"/chat"!=this.$route.path?"d-block ani-vertical":"d-block"},[t._v("Public Chat")])])],1)])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"brand fg-white no-hover",attrs:{href:"/"}},[a("b",[t._v("Hello")]),t._v(", world")])}],u={name:"Header",methods:{closeMenu:function(){$(".hamburger").removeClass("active"),$(".app-bar-menu").addClass("collapsed"),$(".app-bar-menu").hide()}}},d=u,m=a("2877"),p=Object(m["a"])(d,l,c,!1,null,null,null);p.options.__file="Header.vue";var f=p.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell-md-2 cell-xl-2 pr-0 border-right bd-gray",attrs:{id:"sidenav"}},[t._m(0),a("nav",{staticClass:"pt-1",attrs:{id:"doc-nav","data-role":"collapse","data-toggle-element":"#doc-nav-toggle"}},[a("div",{staticClass:"doc-nav-item"},[a("b",[t._v("Navigation")]),a("ul",{staticClass:"toc-nav"},[a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/home"}},[t._v("Home")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/user/1234"}},[t._v("Tutorial")])],1)])]),a("div",{staticClass:"doc-nav-item"},[a("b",[t._v("Useful API")]),a("ul",{staticClass:"toc-nav"},[a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/api/guest_info"}},[t._v("You is Here")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/api/prayer_schedule"}},[t._v("Prayer Schedule")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/api/2"}},[t._v("Api 2")])],1)])]),a("div",{staticClass:"doc-nav-item"},[a("b",[t._v("Our Team")]),a("ul",{staticClass:"toc-nav"},[a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/profile/mbenx"}},[t._v("mbenx")])],1),a("li",{staticClass:"done"},[a("router-link",{attrs:{to:"/profile/rickykusriana"}},[t._v("rickykusriana")])],1)])]),t._m(1)])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"expand-button ml-2 d-block d-none-md",attrs:{id:"doc-nav-toggle"}},[a("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"doc-nav-item"},[a("b",[t._v("Thanks to")]),a("ul",{staticClass:"toc-nav"},[a("li",{staticClass:"done"},[a("a",{attrs:{target:"_blank",href:"https://vuejs.org/"}},[t._v("VueJS")])]),a("li",{staticClass:"done"},[a("a",{attrs:{target:"_blank",href:"https://www.heroku.com/"}},[t._v("Heroku")])]),a("li",{staticClass:"done"},[a("a",{attrs:{target:"_blank",href:"https://metroui.org.ua/"}},[t._v("Metro Ui")])])])])}],_={name:"Sidebar"},h=_,b=Object(m["a"])(h,g,v,!1,null,null,null);b.options.__file="Sidebar.vue";var C=b.exports,x=a("bc3a"),k=a.n(x),y={name:"app",components:{Header:f,Sidebar:C},data:function(){return{refCount:0,isLoading:!1}},methods:{setLoading:function(t){t?(this.refCount++,this.isLoading=!0):this.refCount>0&&(this.refCount--,this.isLoading=this.refCount>0)}},created:function(){var t=this;k.a.interceptors.request.use(function(e){return t.setLoading(!0),e},function(e){return t.setLoading(!1),r.a.reject(e)}),k.a.interceptors.response.use(function(e){return t.setLoading(!1),e},function(e){return t.setLoading(!1),r.a.reject(e)})},mounted:function(){Metro.init()}},w=y,E=Object(m["a"])(w,i,o,!1,null,null,null);E.options.__file="App.vue";var S=E.exports,j=(a("7f7f"),a("8c4f")),q=a("123d"),P=a.n(q),O=a("7df5"),L=a.n(O),A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("div",{staticStyle:{"text-align":"center","padding-top":"200px"}},[a("h1",[t._v("Welcome")]),a("hr"),a("p",{staticClass:"text-leader"},[t._v("\n\t\t\tHi, nice to meet you. Come here let's make a changing, "),a("br"),t._v(" there is still time for a cup of coffee\n\t\t")])])])}],M={name:"Home"},R=M,T=Object(m["a"])(R,A,I,!1,null,null,null);T.options.__file="Home.vue";var H=T.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.posts.length?a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("Blog")]),a("hr"),a("div",{staticClass:"row"},[t._m(0),t._l(t.posts,function(e){return a("div",{key:e.id,staticClass:"cell-lg-3 cell-sm-6 pt-4 p-0 m-0"},[a("div",{staticClass:"card image-header"},[a("div",{staticClass:"card-header fg-white",style:{height:"180px",backgroundImage:"linear-gradient( to bottom,  rgba(255,255,255,0), black 100% ), url("+t.getImg(e.content)+")"}},[a("h6",[t._v(t._s(e.title))])]),a("div",{staticClass:"card-content p-2"},[a("p",{staticClass:"fg-gray"},[a("span",{staticClass:"mif-alarm"}),t._v(" "+t._s(e.published))]),t._v("\n\t\t\t\t\t"+t._s(t.getText(e.title+" -- "+e.content))+" ...\n\t\t\t\t")]),a("div",{staticClass:"card-footer"},[a("router-link",{staticClass:"button secondary",attrs:{to:"/blog/"+e.id+"/"+e.title.replace(/ /g,"-").toLowerCase()}},[t._v("Read more ...")])],1)])])}),a("div",{staticClass:"cell-lg-12 cell-sm-12 pr-1 mr-1"},[a("ul",{staticClass:"pagination float-right"},[this.next_page?a("li",{staticClass:"page-item service"},[a("router-link",{staticClass:"page-link",attrs:{to:"/blog"}},[a("span",{staticClass:"mif-arrow-left"}),t._v(" Prev Page\n\t\t\t\t\t")])],1):a("li",{staticClass:"page-item service"},[a("router-link",{staticClass:"page-link",attrs:{to:"blog/"+t.nextPageToken}},[t._v("\n\t\t\t\t\t\tNext Page "),a("span",{staticClass:"mif-arrow-right"})])],1)])])],2)]):t._e()},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell-md-12"},[a("p",[t._v("From Blogger API ")]),a("span",{staticClass:"fg-gray"},[t._v("\n\t\t\t\thttps://rickykusriana.blogspot.com\n\t\t\t")])])}],z={props:["next_page"],methods:{getText:function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent.substr(0,128)||e.innerText.substr(0,128)},getImg:function(t){var e=document.createElement("div");if(e.style.display="none",document.body.appendChild(e),e.innerHTML=t,null!=e.querySelector("img"))return e.querySelector("img").src}},data:function(){return{posts:[],nextPageToken:""}},watch:{next_page:function(t){var e=this;if(t)var a="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is&pageToken="+t;else a="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is";k.a.get(a).then(function(t){e.posts=t.data.items,e.nextPageToken=t.data.nextPageToken})}},mounted:function(){var t=this;if(this.next_page)var e="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is&pageToken="+this.next_page;else e="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is";k.a.get(e).then(function(e){t.posts=e.data.items,t.nextPageToken=e.data.nextPageToken})}},D=z,U=Object(m["a"])(D,B,N,!1,null,null,null);U.options.__file="Blog.vue";var G=U.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.posts.title?a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v(t._s(t.posts.title))]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"cell-md-12"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"fg-gray"},[a("span",{staticClass:"mif-alarm"}),t._v(" "+t._s(t.posts.published)+" | \n\t\t\t\t\t"),a("span",{staticClass:"mif-user"}),t._v(" "+t._s("Unknown"==t.posts.author.displayName?"Ricky Kusriana Subagja":t.posts.author.displayName)+"\n\t\t\t\t")]),a("p",{domProps:{innerHTML:t._s(t.posts.content)}}),a("br"),a("p",{attrs:{align:"right"}},[t._v("Original Post : "),a("a",{attrs:{target:"_blank",href:t.posts.url}},[t._v(t._s(t.posts.url))])])])]),a("div",{staticClass:"cell-lg-12 cell-sm-12 pr-1 mr-1"},[a("hr"),a("router-link",{staticClass:"button secondary mt-2 float-right",attrs:{to:"/blog"}},[a("span",{staticClass:"mif-arrow-left"}),t._v(" Back to List\n\t\t\t")])],1)])]):t._e()},Q=[],V={props:["id"],methods:{getText:function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent.substr(3,100)||e.innerText.substr(3,100)},getPostID:function(){return this.id}},data:function(){return{posts:[]}},created:function(){var t=this,e="https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts/"+this.getPostID()+"?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is";k.a.get(e).then(function(e){t.posts=e.data})}},Z=V,J=Object(m["a"])(Z,K,Q,!1,null,null,null);J.options.__file="Blog_detail.vue";var Y=J.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.profile&&t.profile.status?a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("About Me")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"cell-md-12"},[a("p",[t._v(t._s(t.profile.full_name))]),a("span",{staticClass:"fg-gray"},[t._v("\n\t\t\t\t"+t._s(t.profile.about)+"\n\t\t\t")]),a("p",[t._v(t._s(t.profile.bio))]),a("div",{staticClass:"example text-center"},t._l(t.profile.link_profile,function(e){return a("span",{key:e.id},[a("a",{class:"button "+e.app_color+" outline cell-md-2 cell-xs-12",attrs:{target:"_blank",href:e.app_url}},[a("span",{class:e.app_icon}),t._v(" "+t._s(e.app_name)+"\n\t\t\t\t\t")]),t._v(" \n\t\t\t\t")])}))])])]):t._e()},F=[],X={data:function(){return{profile:[]}},created:function(){var t=this,e="https://kodokode-1540384975077.firebaseio.com/profile/rickykusriana.json";k.a.get(e).then(function(e){t.profile=e.data})}},tt=X,et=Object(m["a"])(tt,W,F,!1,null,null,null);et.options.__file="Profile.vue";var at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.json?a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("Location Information")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"cell-md-12"},[a("pre",[t._v(t._s(t.json))]),t._m(0)])])]):t._e()},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-2 p-0 m-0"},[a("table",{staticClass:"table cell-border table-border options-table"},[a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Value")])])]),a("tbody")])])}],ot=a("ead3"),nt=a.n(ot),rt={data:function(){return{json:[]}},mounted:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){nt.a.encode(e.coords.latitude,e.coords.longitude,0);var a="https://maps.googleapis.com/maps/api/geocode/json?latlng="+e.coords.latitude+","+e.coords.longitude+"&key=AIzaSyBGRvIwip4B9lRqd14sEK5wVlvukKDhID0";k.a.get(a).then(function(e){t.json={street:e.data.results[0].address_components[1].long_name,formatted_address:e.data.results[0].formatted_address,geometry:e.data.results[0].geometry.location},console.log(e.data.results[0])})},function(t){console.log("Connot detect position:",t)}):Metro.toast.create("Cannot access geolocation",null,5e3)}},lt=rt,ct=Object(m["a"])(lt,st,it,!1,null,null,null);ct.options.__file="Location.vue";var ut=ct.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("Portfolio")]),a("hr"),a("div",{staticClass:"row"},[t.detail?a("div",{staticClass:"cell-md-12"},[a("p",[t._v(t._s(this.$route.path))]),a("div",{staticClass:"row"},[a("div",{staticClass:"cell-md-5 mt-5"},[a("div",{staticClass:"img-container"},[a("img",{staticStyle:{border:"1px solid #dedede"},attrs:{src:t.items[t.detail].image}})])]),a("div",{staticClass:"cell-md-7 mt-5"},[a("h4",[t._v("Project Description")]),a("p",[t._v(t._s(t.items[t.detail].description))]),a("br"),a("table",[a("tbody",[a("tr",[a("td",{attrs:{width:"90px"}},[t._v("Category")]),a("td",[t._v(": "+t._s(t.items[t.detail].category))])]),a("tr",[a("td",[t._v("Link")]),a("td",[t._v(": "),a("a",{attrs:{href:t.items[t.detail].link,target:"_blank"}},[t._v(t._s(t.items[t.detail].link))])])])])])]),a("div",{staticClass:"cell-lg-12 cell-sm-12 pr-1 mr-1"},[a("br"),a("hr"),a("router-link",{staticClass:"button secondary mt-2 float-right",attrs:{to:"/portfolio"}},[a("span",{staticClass:"mif-arrow-left"}),t._v(" Back to List\n                        ")])],1)])]):a("div",{staticClass:"cell-md-12"},[a("p",[t._v("Here are some of the website or application projects I've worked on")]),a("div",{staticClass:"row"},t._l(t.items,function(e,s){return a("div",{key:s,staticClass:"cell-md-4 mt-5"},[a("router-link",{attrs:{to:"portfolio/"+e.path}},[a("div",{staticClass:"img-container"},[a("img",{staticStyle:{border:"1px solid #dedede",height:"270px",width:"100%",display:"block"},attrs:{"data-src":"",alt:"",src:e.image,"data-holder-rendered":"true"}}),a("div",{staticClass:"image-overlay op-dark"},[a("h3",{staticClass:"text-light pt-20"},[t._v(t._s(e.title)),a("b",[t._v(t._s(e.subtitle))])]),a("p",[t._v(t._s(e.category))])])])])],1)}))])])])},mt=[],pt={props:["detail"],data:function(){return{items:{milariancms:{path:"milariancms",title:"MILARIAN",subtitle:"CMS",category:"CMS BLOG",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/assets/images/portfolio/milariancms.png",link:"https://kodokode.com"},mastershop:{path:"mastershop",title:"MASTER",subtitle:"SHOP",category:"E-COMMERCE",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/assets/images/portfolio/mastershop.png",link:"https://shop.kodokode.com"},masterpos:{path:"masterpos",title:"MASTER",subtitle:"POS",category:"POINT OF SALE",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/assets/images/portfolio/masterpos.png",link:"https://pos.kodokode.com"},kamaratih:{path:"kamaratih",title:"KAMA",subtitle:"RATIH",category:"E-COMMERCE",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/assets/images/portfolio/kamaratih.png",link:"https://booking.totokperut.com"},ozonegroup:{path:"ozonegroup",title:"OZONE",subtitle:"GROUP",category:"PERSONAL WEB",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/assets/images/portfolio/ozonegroup.png",link:"http://ozonegroup.co.id"},clicon:{path:"clicon",title:"CLIC",subtitle:"ON",category:"PERSONAL WEB",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/assets/images/portfolio/clicon.png",link:"http://myclicon.com"}}}}},ft=pt,gt=Object(m["a"])(ft,dt,mt,!1,null,null,null);gt.options.__file="Portfolio.vue";var vt=gt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("Public Chat")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"cell-md-12"},[a("div",{attrs:{"data-role":"navview","data-compact":"md","data-expanded":"lg","data-toggle":"#pane-toggle"}},[a("nav",{staticClass:"navview-pane mt-2"},[a("button",{class:t.is_login?"pull-button":"pull-button disabled"},[a("span",{staticClass:"default-icon-menu"})]),a("ul",{staticClass:"navview-menu"},[t._m(0),a("div",{staticClass:"suggest-box"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createRoom(e)}}},[a("div",{staticClass:"input mb-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.room_name,expression:"room_name"}],ref:"room_name",class:t.is_required?"alert":"",attrs:{autocomplete:"off",name:"room_name",type:"text","data-role":"input","data-clear-button":"false","data-custom-buttons":"customButtons","data-role-input":"true",placeholder:"Input room name"},domProps:{value:t.room_name},on:{keydown:t.clear,input:function(e){e.target.composing||(t.room_name=e.target.value)}}}),t._m(1)]),t.is_required?a("small",{staticClass:"fg-red pl-4"},[t._v(t._s(t.is_required))]):t._e()])]),a("li",{staticClass:"item-separator"}),a("li",{staticClass:"item-separator"}),t._m(2),t._l(t.address,function(e){return a("div",{key:e.name},[a("li",{class:t.room==e.name?"active":""},[a("a",{attrs:{href:"#"},on:{click:function(a){t.changeRoom(e.name,a)}}},[t._m(3,!0),a("span",{staticClass:"caption"},[t._v(t._s(e.name))])])])])})],2)]),a("div",{staticClass:"navview-content pl-4-md pt-1"},[t._m(4),t.is_login?a("div",[a("div",[a("div",{staticClass:"dialog",attrs:{"data-role":"dialog",id:"demoDialog1"}},[a("div",{staticClass:"dialog-title"},[t._v("Confirmation")]),a("div",{staticClass:"dialog-content"},[t._v("\n\t\t\t\t\t\t\t\t\t\tAre you sure to delete this room?\n\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"dialog-actions"},[a("button",{staticClass:"button js-dialog-close"},[t._v("No")]),a("button",{staticClass:"button success js-dialog-close",on:{click:function(e){t.deleteRoom(t.room)}}},[t._v("Yes")])])]),a("div",{staticClass:"panel mx-auto"},[a("div",{staticClass:"panel-title"},[a("span",{staticClass:"caption"},[t._v("Room Name : "),a("b",[t._v(t._s(t.room))])]),t.room_owner?a("span",{staticClass:"mif-cross icon fg-red",staticStyle:{cursor:"pointer",float:"right",position:"absolute",right:"0"},attrs:{onclick:"Metro.dialog.open('#demoDialog1')",title:"Delete Room"}}):t._e()])]),a("keep-alive",[a("div",{directives:[{name:"keep-scroll-position",rawName:"v-keep-scroll-position"},{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!0,smooth:!1},expression:"{always: true, smooth: false}"}],ref:"div_messages",staticClass:"messages panel",attrs:{"data-role":"panel","data-height":"432"}},t._l(t.messages[0],function(e,s){return a("div",{key:s,staticClass:"message"},[t.username==e.username?a("div",{staticClass:"d-flex flex-row-r p-1"},[a("div",{staticClass:"p-2 bg-lightGreen"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])]):a("div",{staticClass:"d-flex flex-row p-1"},[a("div",{staticClass:"p-2 bg-lightGray"},[a("strong",[t._v(t._s(e.username))]),a("br"),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])}))]),a("p",{staticClass:"pt-2 pb-2"},[t._v("\n\t\t\t\t\t\t\t\t\tHello, "),a("b",[t._v(t._s(t.username))]),a("a",{staticClass:"float-right",attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")])]),t.room?a("span",[a("form",{staticClass:"textarea autosize",on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text_msg,expression:"text_msg"}],ref:"text_msg",class:t.is_required?"alert":"",attrs:{autofocus:"",name:"text_msg",placeholder:"Input message here (Ctrl + Enter to send)","data-role":"textarea"},domProps:{value:t.text_msg},on:{keydown:t.clear,keyup:function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter"))&&e.ctrlKey?t.sendMessage(e):null},input:function(e){e.target.composing||(t.text_msg=e.target.value)}}}),t._m(6)]),t.is_required_msg?a("small",{staticClass:"fg-red"},[t._v(t._s(t.is_required_msg))]):t._e()]):a("span",[a("div",{staticClass:"example"},[t._v("Select room chat on the leftbar")])])],1)]):a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"input mb-1 cell-md-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],ref:"username",class:t.is_required?"alert":"",attrs:{autofocus:"",autocomplete:"off",name:"username",type:"text","data-role":"input","data-clear-button":"false","data-custom-buttons":"customButtons","data-role-input":"true",placeholder:"Input your username"},domProps:{value:t.username},on:{keydown:t.clear,input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._m(5)]),t.is_required?a("small",{staticClass:"fg-red"},[t._v(t._s(t.is_required))]):t._e()])])])])])])])},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"caption",staticStyle:{"margin-left":"-30px"}},[a("b",[t._v("Create new Room")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-group"},[a("button",{staticClass:"button primary"},[a("span",{staticClass:"mif-arrow-right"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"caption",staticStyle:{"margin-left":"-30px"}},[a("b",[t._v("Available Room")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("span",{staticClass:"mif-chevron-right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-1"},[a("button",{staticClass:"button square d-none-md",attrs:{id:"pane-toggle"}},[a("span",{staticClass:"default-icon-menu"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-group"},[a("button",{staticClass:"button primary"},[a("span",{staticClass:"mif-arrow-right"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-group"},[a("button",{staticClass:"button large primary",staticStyle:{"min-height":"68px"}},[a("span",{staticClass:"mif-arrow-right"})])])}],bt=(a("ac6a"),a("59ca")),Ct=a.n(bt),xt=(a("66ce"),a("e71f"),{apiKey:"AIzaSyAf6CpheRBvdE3ou2nQplp-CivMkQQUPPk",authDomain:"first-158002.firebaseapp.com",databaseURL:"https://first-158002.firebaseio.com",projectId:"first-158002",storageBucket:"first-158002.appspot.com",messagingSenderId:"541585712871"});Ct.a.initializeApp(xt);Ct.a.database();var kt=Ct.a.firestore(),yt=Ct.a.firestore.FieldValue.serverTimestamp(),wt={name:"Chat",data:function(){return{room_name:"",room_owner:!1,room:!1,username:"",text_msg:"",is_login:!1,is_required:"",is_required_msg:"",messages:[],address:[]}},methods:{changeRoom:function(t){this.room=t,Metro.toast.create("Join to "+t,null,3e3)},createRoom:function(){this.room_name?(this.room=this.room_name,kt.collection("chat").doc(this.room).set({name:this.room,created_by:this.username,created_at:yt}),Metro.toast.create("Room created",null,3e3),this.is_required="",this.room_name=""):(this.is_required="Room name is required",this.$refs.room_name.focus())},deleteRoom:function(t){kt.collection("chat").doc(t).delete().then(function(){}).catch(function(t){console.error("Error removing document: ",t)}),kt.collection("chat").doc(t).collection("messages").orderBy("created_at","asc").get().then(function(e){e.forEach(function(e){kt.collection("chat").doc(t).collection("messages").doc(e.id).delete().then(function(){}).catch(function(t){console.error("Error removing document: ",t)})})}),this.room=!1},login:function(){if(this.username){var t=this.username;kt.collection("users").where("username","==",t).get().then(function(e){e.docs.length>0?e.forEach(function(t){kt.collection("users").doc(t.id).update({status:"online",last_login:yt})}):kt.collection("users").add({username:t,created_at:yt,last_login:yt,status:"online"})}).catch(function(t){console.log("Error getting documents: ",t)}),this.is_required="",this.is_login=!0}else this.is_required="You must enter name to join",this.$refs.username.focus()},logout:function(){var t=this.username;kt.collection("users").where("username","==",t).get().then(function(t){t.forEach(function(t){kt.collection("users").doc(t.id).update({status:"offline"})})}).catch(function(t){console.log("Error getting documents: ",t)}),this.clear(),this.username="",this.text_msg="",this.is_login="",this.room=!1,this.room_owner=!1,this.messages=[]},clear:function(){this.is_required="",this.is_required_msg=""},sendMessage:function(){this.text_msg?(kt.collection("chat").doc(this.room).collection("messages").add({username:this.username,text:this.text_msg,created_at:yt}),this.text_msg="",this.is_required_msg=""):this.is_required_msg="This field is required",this.$refs.text_msg.focus()},messageListener:function(){var t=[];this.messages=[];var e=this;this.room?(kt.collection("chat").doc(this.room).collection("messages").orderBy("created_at","asc").onSnapshot(function(a){a.docChanges().forEach(function(e){"added"===e.type&&t.push(e.doc.data())}),e.messages.push(t)}),kt.collection("chat").doc(this.room).get().then(function(t){t.exists&&(e.room_owner=e.username==t.data().created_by)}).catch(function(t){console.log("Error getting document:",t)})):(console.log("Room not assign"),this.messages=[])},roomListener:function(){var t=this;kt.collection("chat").onSnapshot(function(e){e.docChanges().forEach(function(e){if("added"===e.type&&t.address.push(e.doc.data()),"removed"===e.type){console.log("Removed city: ",e.doc.data().name);for(var a=0;a<t.address.length-1;a++)t.address[a].name===e.doc.data().name&&t.address.splice(a,1);t.room=!1,t.messages[0]=[],Metro.toast.create("Room deleted by owner",null,5e3)}})})}},watch:{username:function(t){localStorage.username=t},is_login:function(t){localStorage.is_login=t},room:function(t){this.messageListener()}},mounted:function(){localStorage.username&&(this.username=localStorage.username),localStorage.is_login&&(this.is_login=localStorage.is_login),this.roomListener(),this.messageListener()}},Et=wt,St=Object(m["a"])(Et,_t,ht,!1,null,null,null);St.options.__file="Chat.vue";var jt=St.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.json.status?a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("Connection Information")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"cell-md-12"},[a("div",{staticClass:"row mt-2 p-0 m-0"},[a("table",{staticClass:"table cell-border table-border options-table"},[t._m(0),a("tbody",[a("tr",[t._m(1),a("td",[t._v(t._s(t.json.query))])]),a("tr",[t._m(2),a("td",[t._v(t._s(t.json.as))])]),a("tr",[t._m(3),a("td",[t._v(t._s(t.json.isp))])]),a("tr",[t._m(4),a("td",[t._v(t._s(t.json.regionName))])]),a("tr",[t._m(5),a("td",[t._v(t._s(t.json.region))])]),a("tr",[t._m(6),a("td",[t._v(t._s(t.json.country))])]),a("tr",[t._m(7),a("td",[t._v(t._s(t.json.countryCode))])]),a("tr",[t._m(8),a("td",[t._v(t._s(t.json.lon))])]),a("tr",[t._m(9),a("td",[t._v(t._s(t.json.lat))])]),a("tr",[t._m(10),a("td",[t._v(t._s(t.json.timezone))])])])]),t._m(11)])])])]):t._e()},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Value")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("IP Address")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Company Provider")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Provider Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Region Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Region Code")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Country Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Country Code")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Longitude")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Latitude")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("code",[t._v("Timezone")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",{staticClass:"float-right pt-2 pr-2"},[t._v("\n\t\t\t\t    Source : "),a("a",{attrs:{target:"_blank",href:"http://ip-api.com"}},[t._v("http://ip-api.com")])])}],Ot={data:function(){return{json:[]}},created:function(){var t=this,e="http://ip-api.com/json";k.a.get(e).then(function(e){t.json=e.data})}},$t=Ot,Lt=Object(m["a"])($t,qt,Pt,!1,null,null,null);Lt.options.__file="Guest.vue";var At=Lt.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[a("h4",[t._v("My Calendar")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"authentification"},[a("h2",[t._v("VueJS + Google Calendar Example")]),t._v("\n\t\t\tAuthentification\n\t\t\t"),t.authorized?t._e():a("button",{on:{click:t.handleAuthClick}},[t._v("Sign In")]),t.authorized?a("button",{on:{click:t.handleSignoutClick}},[t._v("Sign Out")]):t._e()]),a("hr"),t.authorized?a("button",{on:{click:t.getData}},[t._v("Get Data")]):t._e(),t.authorized&&t.items?a("div",{staticClass:"item-container"},[a("pre",{domProps:{innerHTML:t._s(t.items)}})]):t._e()])])},Mt=[],Rt=(a("a481"),a("f499")),Tt=a.n(Rt),Ht="212725181958-aap40b25cq7d9dst0q1a2ukdp6b87rsq.apps.googleusercontent.com",Bt="AIzaSyAm_12XlCIhVbYbWUKxc22ObCixAI2CDAs",Nt=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],zt="https://www.googleapis.com/auth/calendar.readonly",Dt={mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://apis.google.com/js/api.js"),t.async=!0,document.head.appendChild(t)},data:function(){return{items:void 0,api:void 0,authorized:!1}},created:function(){this.api=gapi,this.handleClientLoad()},methods:{handleClientLoad:function(){this.api.load("client:auth2",this.initClient)},initClient:function(){var t=this;t.api.client.init({apiKey:Bt,clientId:Ht,discoveryDocs:Nt,scope:zt}).then(function(e){t.api.auth2.getAuthInstance().isSignedIn.listen(t.authorized)})},handleAuthClick:function(t){var e=this;r.a.resolve(this.api.auth2.getAuthInstance().signIn()).then(function(t){e.authorized=!0})},handleSignoutClick:function(t){var e=this;r.a.resolve(this.api.auth2.getAuthInstance().signOut()).then(function(t){e.authorized=!1})},getData:function(){var t=this,e=this;e.api.client.calendar.events.list({calendarId:"primary",timeMin:(new Date).toISOString(),showDeleted:!1,singleEvents:!0,maxResults:10,orderBy:"startTime"}).then(function(a){e.items=t.syntaxHighlight(a.result.items),console.log(e.items)})},syntaxHighlight:function(t){return"string"!=typeof t&&(t=Tt()(t,void 0,2)),t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),t.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(t){var e="number";return/^"/.test(t)?e=/:$/.test(t)?"key":"string":/true|false/.test(t)?e="boolean":/null/.test(t)&&(e="null"),'<span class="'+e+'">'+t+"</span>"})}}},Ut=Dt,Gt=Object(m["a"])(Ut,It,Mt,!1,null,null,null);Gt.options.__file="Calendar.vue";var Kt=Gt.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.json.status?a("main",{staticClass:"cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md"},[t._m(0)]):t._e()},Vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"100px"}},[a("h1",{staticStyle:{"text-align":"center"}},[t._v("Pray Schedule")]),a("div",{staticClass:"card"},[a("div",{staticClass:"d-flex flex-justify-center"},[a("div",{staticClass:"card-content p-2"})])])])}],Zt={data:function(){return{json:[]}},created:function(){var t=this,e="https://time.siswadi.com/pray/Jakarta";k.a.get(e).then(function(e){t.json=e.data,console.log(e.data)})}},Jt=Zt,Yt=Object(m["a"])(Jt,Qt,Vt,!1,null,null,null);Yt.options.__file="Pray_schedule.vue";var Wt=Yt.exports;s["a"].use(j["a"]),s["a"].use(P.a),s["a"].use(L.a);var Ft=new j["a"]({linkActiveClass:"active",linkExactActiveClass:"active",mode:"history",routes:[{path:"/home",name:"Home",component:H},{path:"/blog",name:"Blog",component:G},{path:"/blog/:next_page",name:"Next_page",component:G,props:!0},{path:"/blog/:id/:meta_url",name:"Blog_detail",component:Y,props:!0},{path:"/portfolio",name:"Portfolio",component:vt},{path:"/portfolio/:detail",name:"Portfolio_detail",component:vt,props:!0},{path:"/profile",name:"Profile",component:at},{path:"/location",name:"Location",component:ut},{path:"/chat",name:"Chat",component:jt},{path:"/api/guest_info",name:"Guest",component:At},{path:"/api/calendar",name:"Calendar",component:Kt},{path:"/api/prayer_schedule",name:"Pray",component:Wt},{path:"/",name:"default",component:H}]});Ft.beforeResolve(function(t,e,a){t.name&&NProgress.start(),a()}),Ft.afterEach(function(t,e){NProgress.done()});var Xt=Ft;s["a"].config.productionTip=!1,new s["a"]({router:Xt,data:{},methods:{},render:function(t){return t(S)}}).$mount("#app")}});
//# sourceMappingURL=app.06403e7e.js.map