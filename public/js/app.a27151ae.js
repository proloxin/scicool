(function(t){function e(e){for(var a,o,c=e[0],r=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==n[r]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"00f1":function(t,e,s){"use strict";var a=s("0e84"),n=s.n(a);n.a},"034f":function(t,e,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"0e84":function(t,e,s){},1420:function(t,e,s){"use strict";var a=s("c1e4"),n=s.n(a);n.a},"2bcd":function(t,e,s){"use strict";var a=s("afe6"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("9e1f"),s("450d");var a=s("6ed5"),n=s.n(a),i=(s("4ca3"),s("443e")),o=s.n(i),c=(s("8bd8"),s("4cb2")),r=s.n(c),l=(s("ce18"),s("f58e")),u=s.n(l),p=(s("10cb"),s("f3ad")),d=s.n(p),f=(s("1951"),s("eedf")),h=s.n(f),v=(s("1f1a"),s("4e4b")),b=s.n(v),m=(s("6611"),s("e772")),_=s.n(m),w=(s("0c67"),s("299c")),g=s.n(w),x=(s("1760"),s("9883")),y=s.n(x),C=(s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("2b0e")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"head"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"200px"},attrs:{src:s("cf05"),alt:"sciCool"}})]),a("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#0076a4","text-color":"#fff","active-text-color":"#56aa35"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"1"}},[t._v("google学术")]),a("el-menu-item",{attrs:{index:"2"}},[t._v("sci-hub")]),a("el-menu-item",{attrs:{index:"3"}},[t._v("免费查重")]),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[t._v("工具箱")]),a("el-menu-item",{attrs:{disabled:""}},[t._v("链接到外部网站")]),a("el-menu-item",{attrs:{index:"4-1"}},[a("a",{attrs:{href:"http://www.webofknowledge.com/",target:"_blank"}},[t._v("Web of Science")])]),a("el-menu-item",{attrs:{index:"4-2"}},[a("a",{attrs:{href:"https://academic.microsoft.com/home",target:"_blank"}},[t._v("Microsoft Academic")])]),a("el-menu-item",{attrs:{index:"4-3"}},[a("a",{attrs:{href:"https://www.cnki.net/",target:"_blank"}},[t._v("知网cnki")])]),a("el-menu-item",{attrs:{index:"4-4"}},[a("a",{attrs:{href:"http://www.wanfangdata.com.cn/index.html",target:"_blank"}},[t._v("万方数据库")])]),a("el-menu-item",{attrs:{index:"4-5"}},[a("a",{attrs:{href:"http://www.cqvip.com/",target:"_blank"}},[t._v("维普数据库")])]),a("el-menu-item",{attrs:{index:"4-6"}},[a("a",{attrs:{href:"http://xueshu.baidu.com/",target:"_blank"}},[t._v("百度学术")])])],2),a("el-menu-item",{attrs:{index:"5"}},[t._v("交流区")]),a("el-submenu",{attrs:{index:"6"}},[a("template",{slot:"title"},[t._v("神秘花园")]),a("el-menu-item",{attrs:{disabled:""}},[t._v("建议使用手机访问")]),a("el-menu-item",{attrs:{index:"6-1",disabled:""}},[t._v("照片墙")]),a("el-menu-item",{attrs:{index:"6-2"}},[a("a",{attrs:{href:"http://www.jubao.fun",target:"_blank"}},[t._v("福利多")])]),a("el-menu-item",{attrs:{index:"6-3"}},[a("a",{attrs:{href:"http://chat.jubao.fun",target:"_blank"}},[t._v("漂流河")])])],2),a("el-tooltip",{attrs:{effect:"light",placement:"bottom"}},[a("div",{staticClass:"wxcode",attrs:{slot:"content"},slot:"content"}),a("a",{staticClass:"wxtip"},[t._v("微信公众号：sci酷")])])],1)],1),a("router-view",{staticStyle:{height:"550px"}}),t._m(0)],1)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"z-index":"-1",position:"absolute",width:"1140px"}},[s("div",[t._v("严正声明:本站数据内容完全收集于互联网，本站不对内容负责，如有侵权，请联系站长删除")]),s("div",[t._v("请在法律允许范围内正确访问，本站仅作学习测试，从本站获取的所有数据请于24小时内删除")]),s("div",[t._v("本站访问完全免费，不做任何盈利 ©2019-2020 ")])])}],S={name:"App",data:function(){return{}},methods:{handleSelect:function(t,e){switch(t){case"1":this.$router.push({path:"/google"}).catch((function(t){console.log(t)}));break;case"2":this.$router.push({path:"/scihub"}).catch((function(t){console.log(t)}));break;case"3":this.$router.push({path:"/paper"}).catch((function(t){console.log(t)}));break;case"5":this.$router.push({path:"/forum"}).catch((function(t){console.log(t)}));break;default:break}}}},T=S,O=(s("034f"),s("2877")),j=Object(O["a"])(T,k,P,!1,null,null,null),$=j.exports,I=s("8c4f"),D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"pic-wrap"}),s("div",{staticClass:"search-wrap"},[s("el-input",{staticClass:"input-with-select",attrs:{placeholder:"在此输入内容直接搜索"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[s("el-select",{staticClass:"select",attrs:{slot:"prepend"},on:{change:t.currentSel},slot:"prepend",model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[s("el-option",{attrs:{label:"1号镜像",value:"0"}}),s("el-option",{attrs:{label:"2号镜像",value:"1"}}),s("el-option",{attrs:{label:"3号镜像",value:"2"}})],1),s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"})],1)],1),s("div",[t._v("你也可以直接跳转镜像网站： "),s("a",{staticStyle:{margin:"0 3px"},attrs:{href:t.webData[0],target:"_blank"}},[t._v("1号镜像")]),t._v("| "),s("a",{staticStyle:{margin:"0 3px"},attrs:{href:t.webData[1],target:"_blank"}},[t._v("2号镜像")]),t._v("| "),s("a",{staticStyle:{margin:"0 3px"},attrs:{href:t.webData[2],target:"_blank"}},[t._v("3号镜像")])])])},E=[],M={name:"google",data:function(){return{input:"",select:"1号镜像",url:"https://en.yaodeyo.com:92/scholar?q=",webData:["https://en.yaodeyo.com:92/scholar?q=","https://scholar.niostack.com/scholar?q=","https://x.sci-hub.org.cn/scholar?hl=zh-TW&as_sdt=0%2C5&q="]}},methods:{currentSel:function(t){this.url=this.webData[t]},search:function(){window.open(this.url+this.input)},getWebData:function(){}}},z=M,A=(s("2bcd"),Object(O["a"])(z,D,E,!1,null,"22aaa8d4",null)),q=A.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"pic-wrap"}),s("div",{staticClass:"search-wrap"},[s("el-input",{attrs:{placeholder:"请输入DOI"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}},[s("template",{slot:"prepend"},[t._v("DOI")]),s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"})],2)],1)])},V=[],L={name:"scihub",data:function(){return{input1:"",url:"https://sci-hub.se/"}},methods:{search:function(){window.open(this.url+this.input1)}}},N=L,W=(s("e43d"),Object(O["a"])(N,B,V,!1,null,"5c043290",null)),Y=W.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"title"},[t._v("It's a XE de 工具网站。。。。")]),s("div",{staticClass:"cont"},[t._v("每日更新维护确保可用，让你学海泛舟欲罢不能em")]),s("div",{staticClass:"tip"},[t._v("今天都"+t._s(t.getToday())+"了，睡什么睡，搞科研")])])},J=[],R={name:"index",props:{},data:function(){return{today:""}},methods:{getToday:function(){var t=new Date,e=t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日";return e}}},X=R,G=(s("1420"),Object(O["a"])(X,F,J,!1,null,"5f447a34",null)),H=G.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"title"},[t._v("测试免费可用的查重网站，至于效果请自测")]),t._l(t.paperData,(function(e){return s("div",{key:e.id,staticClass:"sitewrap"},[s("span",{staticClass:"site_title"},[t._v(t._s(e.title))]),s("span",{staticClass:"site_web"},[s("a",{attrs:{href:e.web,target:"_blank"}},[t._v(t._s(e.web))])]),s("span",{staticClass:"site_note"},[t._v(t._s(e.note))])])}))],2)},Q=[],U={name:"paper",data:function(){return{paperData:[{title:"PaperPass",web:"https://www.paperpass.com/",note:"需要微信扫码"},{title:"查查呗",web:"https://www.paperccb.com/",note:"需要微信扫码"},{title:"PaperFree",web:"https://www.paperfree.cn/",note:"需要手机注册"},{title:"paperTime",web:"http://www.papertime.cn/",note:"需要微信扫码"},{title:"PaperYY",web:"https://www.paperyy.com/",note:"需要微信扫码"},{title:"论文降重大师",web:"http://www.paperaa.com/",note:"需要下载"},{title:"学术家",web:"http://www.xueshujia.com/",note:"需要微信扫码"}]}},methods:{}},Z=U,tt=(s("c89a"),Object(O["a"])(Z,K,Q,!1,null,"6bbe138c",null)),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{attrs:{type:"text",disabled:"",id:"scrollLeftBox"}}),s("div",{staticClass:"btnwrap"},[s("el-button",{attrs:{type:"success",plain:"",size:"mini"},on:{click:t.newPost}},[t._v("发帖")]),t.subPost?s("el-button",{attrs:{type:"warning",plain:"",size:"mini"}},[t._v("回复")]):t._e()],1),t.subPostView?t._e():s("div",{staticClass:"postwrap"},[s("div",{staticClass:"classwrap"},[s("div",{staticClass:"classbtn"},[t._v("筛选器:")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#66b1ff"},on:{click:function(e){return t.selectClass(1)}}},[t._v("工科")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#3ca758"},on:{click:function(e){return t.selectClass(2)}}},[t._v("理科")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#a6b338"},on:{click:function(e){return t.selectClass(3)}}},[t._v("文科")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#dc749f"},on:{click:function(e){return t.selectClass(4)}}},[t._v("灌水")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#e20739"},on:{click:function(e){return t.selectClass(5)}}},[t._v("建议")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.authorInput,expression:"authorInput"}],staticStyle:{width:"100px","margin-right":"8px"},attrs:{type:"text",placeholder:"只看该话题主"},domProps:{value:t.authorInput},on:{input:function(e){e.target.composing||(t.authorInput=e.target.value)}}}),s("el-button",{attrs:{icon:"el-icon-search",size:"mini",circle:""},on:{click:t.selectAuthor}})],1),s("div",{staticClass:"infinite-list",staticStyle:{overflow:"auto",height:"475px"}},t._l(t.postArray,(function(e,a){return s("div",{key:a,staticClass:"post"},[1==e.class?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#66b1ff"}},[t._v("工科")]):t._e(),2==e.class?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#3ca758"}},[t._v("理科")]):t._e(),3==e.class?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#a6b338"}},[t._v("文科")]):t._e(),4==e.class?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#dc749f"}},[t._v("灌水")]):t._e(),5==e.class?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#e20739"}},[t._v("建议")]):t._e(),s("div",{staticClass:"post_title",class:{title_hover:a==t.hoverIndex},on:{click:function(s){return t.intoPostDetail(e)},mouseover:function(e){t.hoverIndex=a},mouseleave:function(e){t.hoverIndex=-1}}},[t._v(t._s(e.title))]),s("div",{staticClass:"post_author"},[t._v("话题主："+t._s(e.author))]),s("div",{staticClass:"post_time"},[t._v("发表时间："+t._s(e.postTime))]),s("div",{staticClass:"last_time"},[t._v("最后回复："+t._s(e.lastTime))])])})),0)]),t.subPostView?s("div",{staticClass:"postwrap"},[s("div",{staticClass:"sub_wrap"},[s("div",{staticClass:"sub_back",on:{click:t.backToPostList}},[s("i",{staticClass:"el-icon-arrow-left"}),t._v("返回")]),s("div",{staticClass:"sub_title"},[t._v(t._s(t.subPost.title))]),s("div",{staticClass:"sub_content",staticStyle:{height:"50px"}},[t._v(t._s(t.subPost.content))]),s("div",{staticClass:"sub_time"},[t._v("发表时间："+t._s(t.subPost.postTime))]),s("div",{staticClass:"sub_author"},[t._v("话题主："+t._s(t.subPost.author))])]),s("div",{staticClass:"infinite-list",staticStyle:{overflow:"auto",height:"390px"}},t._l(t.subPostReply,(function(e,a){return s("div",{key:a,staticStyle:{"border-bottom":"1px solid #fff",float:"left"}},[s("div",{staticClass:"sub_content"},[t._v(t._s(e.content))]),s("div",{staticClass:"sub_time"},[t._v("回复时间："+t._s(e.postTime))]),s("div",{staticClass:"sub_author"},[t._v("回帖人："+t._s(e.author))])])})),0)]):t._e()])},at=[],nt={name:"forum",data:function(){return{count:10,hoverIndex:-1,postArray:[{class:1,pid:"1234",title:"第一条留言第一条留言第一条留言",author:"我叫大师兄的好朋友",content:"这是第一条留言的内容，很多多很多这是第一条留言的内容，很多多很多",postTime:"2020-05-01 12:35",lastTime:"2020-05-01 15:35"},{class:2,title:"第二条留言",author:"loxinstarter",postTime:"2020-05-01 12:35",lastTime:"2020-05-01 15:35"}],loading:!1,subPost:{},subPostReply:[{author:"我叫大师兄的好朋友",content:"这是第一条留言的内容，很多多很多这是第一条留言的内容，很多多很多",postTime:"2020-05-01 12:35"},{author:"我叫二师兄",content:"这是第大师兄是第一条留言的内容，很多多很多",postTime:"2020-05-01 12:35"}],subPostView:!1,authorInput:""}},mounted:function(){this.initNotice()},computed:{noMore:function(){return this.count>=200},disabled:function(){return this.loading||this.noMore}},methods:{initNotice:function(){var t="1、交流区无需注册，可以自由留言；2、请自觉遵守网络文明公约，严禁攻击诋毁、低俗色情等内容；3、保持学术纯洁，莫谈国是；4、点击上面的“神秘花园”可能会有意外收获；5、欢迎发表对网站的意见建议；",e=document.getElementById("scrollLeftBox");setInterval((function(){e.value=t,t=t.substring(1,t.length)+t.substring(0,1)}),1e3)},newPost:function(){var t=this;this.$prompt("请输入邮箱","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"邮箱格式不正确"}).then((function(e){var s=e.value;t.$message({type:"success",message:"你的邮箱是: "+s})})).catch((function(){t.$message({type:"info",message:"取消输入"})}))},selectClass:function(){},selectAuthor:function(){this.authorInput?console.log(this.authorInput):alert("还没输入话题主的名字呢")},load:function(){var t=this;this.loading=!0,setTimeout((function(){t.count+=2,t.loading=!1}),2e3)},intoPostDetail:function(t){this.subPost=t,this.subPostView=!0},backToPostList:function(){this.subPostView=!1,this.subPost={}}}},it=nt,ot=(s("00f1"),Object(O["a"])(it,st,at,!1,null,"47c6a4e4",null)),ct=ot.exports;C["default"].use(I["a"]);var rt=I["a"].prototype.push;I["a"].prototype.push=function(t){return rt.call(this,t).catch((function(t){return t}))};var lt=new I["a"]({routes:[{path:"/",component:H},{path:"/google",component:q},{path:"/scihub",component:Y},{path:"/paper",component:et},{path:"/forum",component:ct}]});C["default"].config.productionTip=!1,C["default"].use(o.a).use(r.a).use(u.a).use(d.a).use(h.a).use(b.a).use(_.a).use(g.a).use(y.a),C["default"].prototype.$prompt=n.a.prompt,new C["default"]({router:lt,render:function(t){return t($)}}).$mount("#app")},"85ec":function(t,e,s){},afe6:function(t,e,s){},c1e4:function(t,e,s){},c89a:function(t,e,s){"use strict";var a=s("d238"),n=s.n(a);n.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.5b6819d4.png"},cff1:function(t,e,s){},d238:function(t,e,s){},e43d:function(t,e,s){"use strict";var a=s("cff1"),n=s.n(a);n.a}});
//# sourceMappingURL=app.a27151ae.js.map