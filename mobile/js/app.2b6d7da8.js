(function(t){function e(e){for(var a,n,l=e[0],r=e[1],c=e[2],p=0,d=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,l=1;l<s.length;l++){var r=s[l];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),o=s.n(a);o.a},3847:function(t,e,s){},"3a88":function(t,e,s){"use strict";var a=s("8392"),o=s.n(a);o.a},"4eea":function(t,e,s){"use strict";var a=s("c2e6"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);s("9e1f"),s("450d");var a=s("6ed5"),o=s.n(a),i=(s("10cb"),s("f3ad")),n=s.n(i),l=(s("1951"),s("eedf")),r=s.n(l),c=(s("1f1a"),s("4e4b")),u=s.n(c),p=(s("6611"),s("e772")),d=s.n(p),h=(s("0c67"),s("299c")),f=s.n(h),b=(s("1760"),s("9883")),v=s.n(b),w=(s("a7cc"),s("df33")),g=s.n(w),_=(s("cb70"),s("b370")),m=s.n(_),y=(s("960d"),s("defb")),C=s.n(y),k=(s("bd49"),s("18ff")),P=s.n(k),S=(s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("2b0e")),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"NavBar"},[s("span",{staticClass:"NavBtn",on:{click:t.onClickLeft}},[t._v(t._s(t.NavTip))]),t._v(" sci酷 "),s("el-tooltip",{attrs:{effect:"light",placement:"bottom"}},[s("div",{staticClass:"wxcode",attrs:{slot:"content"},slot:"content"},[t._v("微信公众号：sci酷")]),s("a",{staticClass:"NavBtn_right"},[t._v("关注")])])],1),s("div",{staticClass:"NavLeft",style:{width:t.leftWidth}},[s("img",{staticStyle:{width:"100%"},attrs:{src:"http://www.jubao.fun:3003/assets/logo.png",alt:"sciCool"},on:{click:function(e){return t.choose(4)}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:"35%"==t.leftWidth,expression:"leftWidth=='35%'"}],staticClass:"leftItem"},[s("div",{on:{click:function(e){return e.stopPropagation(),t.choose(0)}}},[t._v("谷歌学术")]),s("div",{on:{click:function(e){return e.stopPropagation(),t.choose(1)}}},[t._v("sci-hub")]),s("div",{on:{click:function(e){return e.stopPropagation(),t.choose(2)}}},[t._v("免费查重")]),s("div",{on:{click:function(e){return e.stopPropagation(),t.choose(3)}}},[t._v("交流区")]),s("el-dropdown",[s("span",{staticClass:"el-dropdown-link"},[t._v(" 工具箱"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{disabled:""}},[t._v("链接到外部网站")]),s("el-dropdown-item",{attrs:{divided:""}},[s("a",{attrs:{href:"http://www.webofknowledge.com/",target:"_blank"}},[t._v("Web of Science")])]),s("el-dropdown-item",[s("a",{attrs:{href:"https://academic.microsoft.com/home",target:"_blank"}},[t._v("Microsoft Academic")])]),s("el-dropdown-item",[s("a",{attrs:{href:"https://www.cnki.net/",target:"_blank"}},[t._v("知网cnki")])]),s("el-dropdown-item",[s("a",{attrs:{href:"http://www.wanfangdata.com.cn/index.html",target:"_blank"}},[t._v("万方数据库")])]),s("el-dropdown-item",[s("a",{attrs:{href:"http://www.cqvip.com/",target:"_blank"}},[t._v("维普数据库")])]),s("el-dropdown-item",[s("a",{attrs:{href:"http://xueshu.baidu.com/",target:"_blank"}},[t._v("百度学术")])])],1)],1),s("el-dropdown",[s("span",{staticClass:"el-dropdown-link"},[t._v(" 神秘花园"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{disabled:""}},[t._v("照片墙")]),s("el-dropdown-item",[s("a",{attrs:{href:"http://www.jubao.fun",target:"_blank"}},[t._v("福利多")])]),s("el-dropdown-item",[s("a",{attrs:{href:"http://chat.jubao.fun",target:"_blank"}},[t._v("漂流河")])])],1)],1)],1)]),s("router-view"),t._m(0)],1)},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"z-index":"-1",position:"absolute",bottom:"0","font-size":"12px","margin-left":"5px","margin-right":"5px"}},[s("div",[t._v("严正声明:数据内容完全收集于互联网，本站不对任何内容负责，仅作学习测试，从本站获取所有数据请于24小时内删除。")]),s("div",[t._v("—— 本站访问完全免费，不做任何盈利 ©2019-2020 ——")])])}],V={name:"App",data:function(){return{leftWidth:"0px",NavTip:"导航"}},methods:{onClickLeft:function(){"35%"==this.leftWidth?(this.leftWidth="0",this.NavTip="导航"):(this.leftWidth="35%",this.NavTip="关闭")},choose:function(t){switch(t){case 0:this.$router.push({path:"/google"});break;case 1:this.$router.push({path:"/scihub"});break;case 2:this.$router.push({path:"/paper"});break;case 3:this.$router.push({path:"/forum"});break;case 4:this.$router.push({path:"/"});break}this.leftWidth="0",this.NavTip="导航"}}},T=V,j=(s("034f"),s("2877")),L=Object(j["a"])(T,x,A,!1,null,null,null),O=L.exports,N=s("8c4f"),D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{staticClass:"pic-wrap",attrs:{src:"http://www.jubao.fun:3003/assets/google.png",alt:"sciCool"}}),s("div",{staticClass:"search-wrap"},[s("el-input",{staticClass:"input-with-select",attrs:{placeholder:"在此输入内容直接搜索"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[s("el-select",{staticClass:"select",attrs:{slot:"prepend"},on:{change:t.currentSel},slot:"prepend",model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[s("el-option",{attrs:{label:"1号镜像",value:"0"}}),s("el-option",{attrs:{label:"2号镜像",value:"1"}}),s("el-option",{attrs:{label:"3号镜像",value:"2"}})],1),s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"})],1)],1),s("div",{staticStyle:{"margin-top":"100px"}},[t._v("你也可以直接跳转镜像网站："),s("br"),s("a",{staticStyle:{margin:"0 3px"},attrs:{href:t.webData[0],target:"_blank"}},[t._v("镜像1")]),t._v("| "),s("a",{staticStyle:{margin:"0 3px"},attrs:{href:t.webData[1],target:"_blank"}},[t._v("镜像2")]),t._v("| "),s("a",{staticStyle:{margin:"0 3px"},attrs:{href:t.webData[2],target:"_blank"}},[t._v("镜像3")])])])},M=[],$={name:"google",data:function(){return{input:"",select:"镜像1",url:"https://en.yaodeyo.com:92/scholar?q=",webData:["https://en.yaodeyo.com:92/scholar?q=","https://scholar.niostack.com/scholar?q=","https://x.sci-hub.org.cn/scholar?hl=zh-TW&as_sdt=0%2C5&q="]}},methods:{currentSel:function(t){this.url=this.webData[t]},search:function(){window.open(this.url+this.input)},getWebData:function(){}}},R=$,W=(s("757f"),Object(j["a"])(R,D,M,!1,null,"69539f21",null)),I=W.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"pic-wrap"}),s("div",{staticClass:"search-wrap"},[s("el-input",{attrs:{placeholder:"请输入DOI"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}},[s("template",{slot:"prepend"},[t._v("DOI")]),s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"})],2),s("div",{staticStyle:{"margin-top":"20px"}},[t._v("自动选择最快镜像")])],1)])},F=[],z={name:"scihub",data:function(){return{input1:"",url:"https://sci-hub.se/"}},methods:{search:function(){window.open(this.url+this.input1)}}},B=z,q=(s("7280"),Object(j["a"])(B,E,F,!1,null,"d91b9258",null)),Y=q.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{staticStyle:{width:"80%",margin:"30px"},attrs:{src:"http://www.jubao.fun:3003/assets/logo.png",alt:"sciCool"}}),s("div",{staticClass:"title"},[t._v("这真的是一个严肃的学术工具")]),s("div",{staticClass:"cont"},[t._v("自动获取谷歌学术、scihub等最新镜像链接")]),s("div",{staticClass:"tip"},[t._v("今天是"+t._s(t.getToday())+"^_^")])])},H=[],G={name:"index",props:{},data:function(){return{today:""}},methods:{getToday:function(){var t=new Date,e=t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日";return e}}},K=G,Q=(s("3a88"),Object(j["a"])(K,J,H,!1,null,"60bfac48",null)),U=Q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"title"},[t._v("测试免费可用的查重网站，至于效果请自测")]),t._l(t.paperData,(function(e){return s("div",{key:e.id,staticClass:"sitewrap",on:{click:function(s){return t.onClick(e.web)}}},[s("span",{staticClass:"site_title"},[t._v(t._s(e.title))]),s("span",{staticClass:"site_note"},[t._v(t._s(e.note))])])}))],2)},Z=[],tt={name:"paper",data:function(){return{paperData:[{title:"PaperPass",web:"https://www.paperpass.com/",note:"需要微信扫码"},{title:"查查呗",web:"https://www.paperccb.com/",note:"需要微信扫码"},{title:"PaperFree",web:"https://www.paperfree.cn/",note:"需要手机注册"},{title:"paperTime",web:"http://www.papertime.cn/",note:"需要微信扫码"},{title:"PaperYY",web:"https://www.paperyy.com/",note:"需要微信扫码"},{title:"论文降重大师",web:"http://www.paperaa.com/",note:"需要下载"},{title:"学术家",web:"http://www.xueshujia.com/",note:"需要微信扫码"}]}},methods:{onClick:function(t){window.open(t,"_blank")}}},et=tt,st=(s("fe5f"),Object(j["a"])(et,X,Z,!1,null,"043c2752",null)),at=st.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{attrs:{type:"text",disabled:"",id:"scrollLeftBox"}}),s("div",{staticClass:"btnwrap"},[s("el-button",{attrs:{type:"success",plain:"",size:"mini",disabled:t.subPostView},on:{click:function(e){t.newPostVisible=!0}}},[t._v("发帖")]),t.subPostView?s("el-button",{attrs:{type:"warning",plain:"",size:"mini"},on:{click:function(e){t.rePostVisible=!0}}},[t._v("回复")]):t._e()],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.subPostView,expression:"!subPostView"}],staticClass:"postwrap"},[s("div",{staticClass:"classwrap"},[s("div",{staticClass:"classbtn"},[t._v("筛选器:")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#66b1ff"},on:{click:function(e){return t.selectCategory(0)}}},[t._v("工科")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#3ca758"},on:{click:function(e){return t.selectCategory(1)}}},[t._v("理科")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#a6b338"},on:{click:function(e){return t.selectCategory(2)}}},[t._v("文科")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#dc749f"},on:{click:function(e){return t.selectCategory(3)}}},[t._v("灌水")]),s("span",{staticClass:"classbtn",staticStyle:{"background-color":"#e20739"},on:{click:function(e){return t.selectCategory(4)}}},[t._v("建议")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.selAuthor,expression:"selAuthor"}],staticStyle:{width:"100px","margin-right":"8px"},attrs:{type:"text",placeholder:"只看该话题主"},domProps:{value:t.selAuthor},on:{input:function(e){e.target.composing||(t.selAuthor=e.target.value)}}}),s("el-button",{staticStyle:{"margin-right":"50px"},attrs:{icon:"el-icon-search",size:"mini",circle:""},on:{click:t.selectAuthor}}),s("span",{staticClass:"clearbtn",on:{click:t.clearSel}},[t._v("清除筛选")])],1),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"infinite-list",staticStyle:{overflow:"auto",height:"475px"},attrs:{"infinite-scroll-disabled":"disabled","infinite-scroll-distance":"1"}},[t._l(t.postArray,(function(e,a){return s("div",{key:a,staticClass:"post"},[0==e.category?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#66b1ff"}},[t._v("工科")]):t._e(),1==e.category?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#3ca758"}},[t._v("理科")]):t._e(),2==e.category?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#a6b338"}},[t._v("文科")]):t._e(),3==e.category?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#dc749f"}},[t._v("灌水")]):t._e(),4==e.category?s("div",{staticClass:"post_class",staticStyle:{"background-color":"#e20739"}},[t._v("建议")]):t._e(),s("div",{staticClass:"post_title",class:{title_hover:a==t.hoverIndex},on:{click:function(s){return t.intoPostDetail(e)},mouseover:function(e){t.hoverIndex=a},mouseleave:function(e){t.hoverIndex=-1}}},[t._v(t._s(e.title))]),s("div",{staticClass:"post_author"},[t._v("话题主："+t._s(e.author))]),s("div",{staticClass:"post_time"},[t._v("发表时间："+t._s(t.timeFormat(e.postTime)))]),s("div",{staticClass:"last_time"},[t._v("最后回复："+t._s(t.timeFormat(e.lastTime)))])])})),t.loading?s("p",[t._v("加载中...")]):t._e(),t.noMore?s("p",[t._v("没有更多了")]):t._e()],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.subPostView,expression:"subPostView"}],staticClass:"postwrap"},[s("div",{staticClass:"sub_wrap"},[s("div",{staticClass:"sub_back",on:{click:t.backToPostList}},[s("i",{staticClass:"el-icon-arrow-left"}),t._v("返回")]),s("div",{staticClass:"sub_title"},[t._v(t._s(t.subPost.title))]),s("div",{staticClass:"sub_content",staticStyle:{height:"50px"}},[t._v(t._s(t.subPost.content))]),s("div",{staticClass:"sub_time"},[t._v("发表时间："+t._s(t.timeFormat(t.subPost.postTime)))]),s("div",{staticClass:"sub_author"},[t._v("话题主："+t._s(t.subPost.author))])]),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadSub,expression:"loadSub"}],staticClass:"infinite-list",staticStyle:{width:"100%","overflow-y":"auto",height:"390px"},attrs:{"infinite-scroll-disabled":"disabledSub","infinite-scroll-distance":"1"}},[t._l(t.subPostReply,(function(e,a){return s("div",{key:a,staticStyle:{"border-bottom":"1px solid #fff",float:"left"}},[s("div",{staticClass:"sub_content"},[t._v(t._s(e.content))]),s("div",{staticClass:"sub_time"},[t._v("回复时间："+t._s(t.timeFormat(e.postTime)))]),s("div",{staticClass:"sub_author"},[t._v("回帖人："+t._s(e.author))])])})),t.loadingSub?s("p",[t._v("加载中...")]):t._e(),t.noMoreSub?s("p",[t._v("没有更多了")]):t._e()],2)]),s("el-dialog",{staticStyle:{width:"500px"},attrs:{title:"发表新话题",visible:t.newPostVisible},on:{"update:visible":function(e){t.newPostVisible=e}}},[s("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入标题"},model:{value:t.postTitle,callback:function(e){t.postTitle=e},expression:"postTitle"}},[s("el-select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},on:{change:t.newPostViewClassSel},slot:"prepend",model:{value:t.classSel,callback:function(e){t.classSel=e},expression:"classSel"}},[s("el-option",{attrs:{label:"工科",value:"0"}}),s("el-option",{attrs:{label:"理科",value:"1"}}),s("el-option",{attrs:{label:"文科",value:"2"}}),s("el-option",{attrs:{label:"灌水",value:"3"}}),s("el-option",{attrs:{label:"建议",value:"4"}})],1)],1),s("el-input",{staticStyle:{margin:"5px 0"},attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.postContent,callback:function(e){t.postContent=e},expression:"postContent"}}),s("el-input",{staticStyle:{width:"100px",float:"left"},attrs:{placeholder:"话题主昵称"},model:{value:t.postAuthor,callback:function(e){t.postAuthor=e},expression:"postAuthor"}}),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.newPostVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.newPostCommit}},[t._v("发 表")])],1)],1),s("el-dialog",{attrs:{title:"回复该话题",visible:t.rePostVisible},on:{"update:visible":function(e){t.rePostVisible=e}}},[s("el-input",{staticStyle:{margin:"5px 0"},attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.reContent,callback:function(e){t.reContent=e},expression:"reContent"}}),s("el-input",{staticStyle:{width:"100px",float:"left"},attrs:{placeholder:"回帖人昵称"},model:{value:t.reAuthor,callback:function(e){t.reAuthor=e},expression:"reAuthor"}}),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.rePostVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.rePostCommit}},[t._v("发 表")])],1)],1)],1)},it=[],nt=s("2909"),lt=s("bc3a"),rt=s.n(lt),ct="http://www.scicool.club",ut={name:"forum",data:function(){return{page:1,pageSub:1,hoverIndex:-1,postArray:[],loading:!1,loadingSub:!1,subPost:{},subPostReply:[],subPostView:!1,selAuthor:"",selCatgory:"",newPostVisible:!1,classSel:"工科",classSelValue:"0",postContent:"",postTitle:"",postAuthor:"",rePostVisible:!1,reContent:"",reAuthor:""}},mounted:function(){this.initNotice(),this.initPostList()},computed:{noMore:function(){return this.postArray.length<10*this.page},disabled:function(){return this.loading||this.noMore},noMoreSub:function(){return this.subPostReply.length<10*this.pageSub},disabledSub:function(){return this.loadingSub||this.noMoreSub}},methods:{initPostList:function(){this.getPostList(1)},getPostList:function(t){var e=this;this.loading=!0,rt.a.get(ct+"/api/posts/getPostList",{params:{page:t,author:this.selAuthor,category:this.selCatgory}}).then((function(t){var s;200==t.data.code?((s=e.postArray).push.apply(s,Object(nt["a"])(t.data.data)),e.loading=!1):(console.log(t.data.data),alert("网络错误"+t.data.code))}))},getSubReList:function(t,e){var s=this;this.loadingSub=!0,rt.a.get(ct+"/api/subPosts/getReList",{params:{page:e,pid:t}}).then((function(t){var e;200==t.data.code?((e=s.subPostReply).push.apply(e,Object(nt["a"])(t.data.data)),s.loadingSub=!1):(console.log(t.data.data),alert("网络错误"+t.data.code))}))},initNotice:function(){var t="1、交流区无需注册，可以自由留言；2、请自觉遵守网络文明公约，严禁攻击诋毁、低俗色情等内容；3、保持学术纯洁，莫谈国是；4、点击上面的“神秘花园”可能会有意外收获；5、欢迎发表对网站的意见建议；",e=document.getElementById("scrollLeftBox");setInterval((function(){e.value=t,t=t.substring(1,t.length)+t.substring(0,1)}),1e3)},newPostCommit:function(){var t=this;this.newPostVisible=!1;var e={category:this.classSelValue,title:this.postTitle,content:this.postContent,author:this.postAuthor};rt.a.post(ct+"/api/posts/submitPost",e).then((function(e){200==e.data.code?(t.postArray=[],t.postContent="",t.postTitle="",t.postAuthor="",t.getPostList(1)):console.log("网络错误"+e.data.code)}))},rePostCommit:function(){var t=this;this.rePostVisible=!1,rt.a.post(ct+"/api/subPosts/submitRe",{pid:this.subPost._id,content:this.reContent,author:this.reAuthor}).then((function(e){200==e.data.code?rt.a.post(ct+"/api/posts/updateLastTime",{pid:t.subPost._id}).then((function(){t.subPostReply=[],t.reContent="",t.reAuthor="",t.getSubReList(t.subPost._id,1)})):console.log("网络错误"+e.data.code)}))},newPostViewClassSel:function(t){this.classSelValue=t},selectCategory:function(t){this.selCatgory=t,this.postArray=[],this.getPostList(1)},selectAuthor:function(){this.selAuthor?(this.postArray=[],this.getPostList(1)):alert("还没输入话题主的名字呢")},clearSel:function(){this.selCatgory="",this.selAuthor="",this.postArray=[],this.getPostList(1)},load:function(){this.page++,this.loading=!0,this.getPostList(this.page)},loadSub:function(){this.pageSub++,this.getSubReList(this.subPost._id,this.pageSub)},intoPostDetail:function(t){this.subPost=t,this.subPostView=!0,this.getSubReList(t._id,1)},backToPostList:function(){this.subPostView=!1,this.subPostReply=[],this.subPost={},this.pageSub=1},timeFormat:function(t){t=new Date(t);var e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),o=t.getHours(),i=t.getMinutes(),n=t.getSeconds();return e+"-"+s+"-"+a+" "+o+":"+i+":"+n}}},pt=ut,dt=(s("4eea"),Object(j["a"])(pt,ot,it,!1,null,"16782058",null)),ht=dt.exports;S["default"].use(N["a"]);var ft=N["a"].prototype.push;N["a"].prototype.push=function(t){return ft.call(this,t).catch((function(t){return t}))};var bt=new N["a"]({routes:[{path:"/",component:U},{path:"/google",component:I},{path:"/scihub",component:Y},{path:"/paper",component:at},{path:"/forum",component:ht}]});S["default"].config.productionTip=!1,S["default"].use(n.a).use(r.a).use(u.a).use(d.a).use(f.a).use(v.a).use(g.a).use(m.a).use(C.a).use(P.a),S["default"].prototype.$prompt=o.a.prompt,new S["default"]({router:bt,render:function(t){return t(O)}}).$mount("#app")},7280:function(t,e,s){"use strict";var a=s("952c"),o=s.n(a);o.a},"73b2":function(t,e,s){},"757f":function(t,e,s){"use strict";var a=s("3847"),o=s.n(a);o.a},8392:function(t,e,s){},"85ec":function(t,e,s){},"952c":function(t,e,s){},c2e6:function(t,e,s){},fe5f:function(t,e,s){"use strict";var a=s("73b2"),o=s.n(a);o.a}});
//# sourceMappingURL=app.2b6d7da8.js.map