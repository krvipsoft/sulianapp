webpackJsonp([584],{IKNF:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("SJI6");var i,r=t("Pexp"),o=t("Tg7E"),a={data:function(){return{toi:this.fun.getKeyByI(),myType:window.localStorage.type,store:{name:"",thumb:""},income:{money_total:0,sure_withdraw_money:0},store_set:{is_cash_pay:"",is_open_cashier:"",is_write_information:""},title:"",vedioSrc:""}},mounted:function(){console.log("mounted"),this.toi=this.fun.getKeyByI(),this.getStoreInfo(),this.initData()},methods:{toPage:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"cashierOrderlist"!==n?this.$router.push(this.fun.getUrl(n,{},e)):this.$router.push(this.fun.getUrl(n,{status:"0",orderType:"cashier"}))},goback:function(){this.$router.go(-1)},getStoreInfo:function(){var n=this;$http.get("plugin.store-cashier.frontend.cashier.center.index",{i:this.fun.getKeyByI(),type:this.fun.getTyep()}).then(function(e){console.log("cashier::",e),1==e.result?(console.log("cashier::",e.data),n.store=e.data.store,n.income=e.data.income,n.store_set=e.data.store_set):o.MessageBox.alert(e.msg)},function(n){})},openTime:function(n){var e=this;i=setInterval(function(){e.vedioSrc="",$http.get("plugin.store-cashier.frontend.cashier.voice-broadcast.index",{store_id:n}).then(function(n){if(1==n.result){e.vedioSrc=n.data.url,e.wxPlay(e.vedioSrc)}}).catch(function(n){console.log(n)})},5e3)},wxPlay:function(n){var e=this,t={url:document.location.href};$http.post("member.member.wxJsSdkConfig",t).then(function(t){1==t.result&&(wx.config(t.data.config),wx.ready(function(){var t=!1;if(window.addEventListener("pageshow",function(){if(t&&(window.location.reload(),!e.fun.isTextEmpty(n))){var i=document.getElementById("yp");console.log(i),i.play()}}),window.addEventListener("pagehide",function(){if(t=!0,!e.fun.isTextEmpty(n)){var i=document.getElementById("yp");console.log(i),i.play()}}),!e.fun.isTextEmpty(n)){var i=document.getElementById("yp");console.log(i),i.play()}}))}).catch(function(n){console.log(n)})},closeTimeInterval:function(){console.log("dsdsdsdsds"),clearInterval(i)},initData:function(){this.title="收银台"}},activated:function(){this.toi=this.fun.getKeyByI(),this.getStoreInfo(),this.initData()},created:function(){this.toi=this.fun.getKeyByI()},beforeDestroy:function(){console.log("破坏了哈哈哈"),this.closeTimeInterval()},watch:{},components:{cTitle:r.a,Loadmore:o.Loadmore}},d={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"all"}},[t("div",{attrs:{id:"member"}},[t("c-title",{attrs:{hide:!1,text:n.title}}),n._v(" "),t("div",{staticStyle:{width:"100%",height:"40px"}}),n._v(" "),t("div",{staticClass:"header"},[t("div",{staticClass:"user"},[t("div",{staticClass:"user-head"},[t("img",{attrs:{src:n.store.thumb}})]),n._v(" "),t("div",{staticClass:"cashier-name",attrs:{"data-v-21e0c5a4":""}},[n._v("\n          "+n._s(n.store.name)+"\n        ")]),n._v(" "),t("div",{staticClass:"user-info"},[t("router-link",{attrs:{to:n.fun.getUrl("withdrawal")}},[t("div",{staticClass:"user-name"},[t("div",{staticClass:"b-tixian"},[n._v(n._s(this.fun.initWithdrawal()))])])])],1)])]),n._v(" "),t("div",{attrs:{id:"userinfo"}},[t("ul",[t("li",[t("span",[n._v("￥"+n._s(n.income.money_total))]),n._v(" "),t("br"),n._v("累计实收金额\n        ")]),n._v(" "),t("li",[t("span",[n._v("￥"+n._s(n.income.sure_withdraw_money))]),n._v(" "),t("br"),n._v("可"+n._s(this.fun.initWithdrawal())+"金额\n        ")])])]),n._v(" "),t("div",{staticClass:"cart"},[t("div",{staticClass:"list1",staticStyle:{border:"none"},on:{click:function(e){return n.toPage("cashier_qr")}}},[t("yd-icon",{staticClass:"iconfont icon-member-receipt-code1",staticStyle:{"margin-right":"0.375rem"},attrs:{custom:"",size:"1.625rem",color:"#f15353"}}),n._v(" "),t("span",[n._v("收款二维码")]),n._v(" "),t("i",{staticClass:"fa fa-angle-right"})],1),n._v(" "),t("div",{staticClass:"list1",on:{click:function(e){return n.toPage("cashierOrderlist")}}},[t("yd-icon",{staticClass:"iconfont icon-member-order4",staticStyle:{"margin-right":"0.375rem"},attrs:{custom:"",size:"1.625rem",color:"#f15353"}}),n._v(" "),t("span",[n._v("我的订单")]),n._v(" "),t("i",{staticClass:"fa fa-angle-right"})],1),n._v(" "),t("div",{staticClass:"list1",on:{click:function(e){return n.toPage("presentationRecord",{from:"store_cashier"})}}},[t("yd-icon",{staticClass:"iconfont icon-member-withdrawals1",staticStyle:{"margin-right":"0.375rem"},attrs:{custom:"",size:"1.625rem",color:"#f15353"}}),n._v(" "),t("span",[n._v("我的提成")]),n._v(" "),t("i",{staticClass:"fa fa-angle-right"})],1),n._v(" "),t("div",{staticClass:"list1",on:{click:function(e){return n.toPage("cashier_stat")}}},[t("yd-icon",{staticClass:"iconfont icon-member-manage1",staticStyle:{"margin-right":"0.375rem"},attrs:{custom:"",size:"1.625rem",color:"#f15353"}}),n._v(" "),t("span",[n._v("统计结算")]),n._v(" "),t("i",{staticClass:"fa fa-angle-right"})],1)]),n._v(" "),t("div",{staticStyle:{height:"2.5rem",clear:"both"}}),n._v(" "),5==n.myType?t("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return n.outInfo(e)}}},[n._v("退出登录")]):n._e(),n._v(" "),t("div",{staticStyle:{height:"3.75rem",clear:"both"}})],1),n._v(" "),t("div",{ref:"hook",attrs:{id:"ewm"},on:{click:function(e){return n.openQrCode("none")}}},[t("div",{staticClass:"pic"},[t("img",{attrs:{src:n.poster,alt:""}})])]),n._v(" "),t("div",{attrs:{id:"jpg"}})])},staticRenderFns:[]};var l=t("VU/8")(a,d,!1,function(n){t("nTRe")},"data-v-0d4bec36",null);e.default=l.exports},nTRe:function(n,e,t){var i=t("se3U");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("1512b77a",i,!0,{})},se3U:function(n,e,t){var i=t("kxFB");(n.exports=t("FZ+f")(!1)).push([n.i,'\n#copyright[data-v-0d4bec36] {\n  color: #a7a7a7;\n  margin: 0.625rem 0;\n}\n.header[data-v-0d4bec36] {\n  height: auto;\n  background: #f15353;\n  background-size: 100% 100%;\n  padding: 1.25rem;\n  position: relative;\n}\n.header .user[data-v-0d4bec36] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    text-align: center;\n}\n.header .user .cashier-name[data-v-0d4bec36] {\n      text-align: left;\n      -webkit-box-flex: 2;\n          -ms-flex: 2;\n              flex: 2;\n      margin-left: 0.625rem;\n      line-height: 1.875rem;\n      color: #fff;\n      font-weight: bold;\n      font-size: 18px;\n}\n.header .user .user-head[data-v-0d4bec36] {\n      height: 3.25rem;\n      width: 3.25rem;\n      background: #fff;\n      border-radius: 50%;\n      border: 0.125rem solid #fff;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      float: left;\n      overflow: hidden;\n}\n.header .user .user-head img[data-v-0d4bec36] {\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n}\n.header .user .user-info[data-v-0d4bec36] {\n      margin-top: 0.6875rem;\n      float: left;\n      color: #fff;\n}\n.header .user .set[data-v-0d4bec36] {\n      position: absolute;\n      right: 0.625rem;\n      top: 0.625rem;\n      color: #fff;\n      font-size: 14px;\n}\n.header .user .user-info .user-name[data-v-0d4bec36] {\n      width: auto;\n      font-size: 14px;\n}\n.header .user .user-info .user-name .b-tixian[data-v-0d4bec36] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        width: 4.75rem;\n        margin-top: 0.5rem;\n        margin: 0 auto;\n        padding: 0.3125rem;\n        border-radius: 1.125rem;\n        color: #fff;\n        background: rgba(255, 255, 255, 0.3);\n}\n.header .user .user-info .user-other[data-v-0d4bec36] {\n      height: 1.25rem;\n      width: auto;\n      font-size: 0.643em;\n      line-height: 1.25rem;\n      opacity: 0.8;\n}\n.header .user-gold[data-v-0d4bec36] {\n    height: 2.1875rem;\n    width: 94%;\n    padding: 0.3125rem 3%;\n    border-bottom: 0.0625rem solid #f5f3f3;\n    background: #fff;\n    font-size: 12px;\n    line-height: 2.1875rem;\n}\n.header .user-gold .title[data-v-0d4bec36] {\n    height: 2.1875rem;\n    width: auto;\n    float: left;\n    color: #666;\n}\n.header .user-gold .num[data-v-0d4bec36] {\n    height: 2.1875rem;\n    width: auto;\n    float: left;\n    color: #f90;\n}\n.header .user-gold .draw[data-v-0d4bec36] {\n    width: 5rem;\n    height: 1.875rem;\n    background: #6c9;\n    float: right;\n}\n.header .user-op[data-v-0d4bec36] {\n    height: 2.1875rem;\n    width: 94%;\n    padding: 0.3125rem 3%;\n    border-bottom: 0.0625rem solid #f5f3f3;\n    background: #fff;\n    font-size: 12px;\n    line-height: 2.1875rem;\n}\n.money-center[data-v-0d4bec36] {\n  background: #fff;\n  border-bottom: 0.0625rem solid #f5f3f3;\n  margin-top: 0.625rem;\n  overflow: hidden;\n}\n#userinfo[data-v-0d4bec36] {\n  background: #fff;\n  margin-bottom: 0.625rem;\n}\n#userinfo ul[data-v-0d4bec36] {\n    padding: 1rem 0;\n}\n#userinfo ul li a[data-v-0d4bec36] {\n      color: #8c8c8c;\n      text-align: center;\n      display: block;\n}\n#userinfo ul li a span[data-v-0d4bec36] {\n      color: #222;\n      font-size: 14px;\n}\n#userinfo ul li[data-v-0d4bec36]:first-child {\n      border-right: solid 0.0625rem #ebebeb;\n}\n#userinfo ul li[data-v-0d4bec36] {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      width: 33%;\n      float: left;\n      width: 50%;\n      box-sizing: border-box;\n      border: 0;\n}\n#userinfo ul li span[data-v-0d4bec36] {\n        color: #f15353;\n        font-size: 18px;\n        display: inline-block;\n        margin-bottom: 0.375rem;\n        font-weight: bold;\n}\n#userinfo ul li small[data-v-0d4bec36] {\n        font-weight: normal;\n        font-size: 12px;\n}\n#userinfo ul li[data-v-0d4bec36]:last-child {\n      border: 0;\n}\n#userinfo ul li a[data-v-0d4bec36] {\n      color: #8c8c8c;\n      text-align: center;\n      display: block;\n}\n#userinfo ul li a span[data-v-0d4bec36] {\n      color: #222;\n      font-size: 16px;\n      margin-bottom: 0.3125rem;\n      display: inline-block;\n}\n#userinfo ul li a[data-v-0d4bec36] {\n      color: #8c8c8c;\n      font-size: 12px;\n}\n#userinfo ul li[data-v-0d4bec36]:after {\n      content: "";\n      display: block;\n      clear: both;\n}\n#userinfo ul[data-v-0d4bec36]:after {\n    content: "";\n    display: block;\n    clear: both;\n}\n#orderlist[data-v-0d4bec36] {\n  background: #fff;\n  margin: 0.625rem 0;\n}\n.ordertltie[data-v-0d4bec36] {\n  text-align: left;\n  text-indent: 0.9375rem;\n  width: 100%;\n  height: 2.25rem;\n  border-bottom: 0.0625rem solid #f5f3f3;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.ordertltie i[data-v-0d4bec36] {\n    line-height: 2.286rem;\n    color: #999;\n    font-size: 20px;\n    float: right;\n    padding-right: 0.9375rem;\n}\n.ordertltie a .ordername[data-v-0d4bec36] {\n    float: left;\n    line-height: 2.286rem;\n    font-size: 14px;\n    color: #333;\n}\n.order_pub[data-v-0d4bec36] {\n  width: 25%;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n#orderlist .puball[data-v-0d4bec36] {\n  color: #000000;\n  border-left: 0.0625rem solid #8f9295;\n}\n.badge[data-v-0d4bec36] {\n  position: absolute;\n  left: 50%;\n  top: -0.3125rem;\n  background-color: #ff4949;\n  border-radius: 0.625rem;\n  color: #fff;\n  line-height: 0.875rem;\n  font-size: 12px;\n  padding: 0 0.3125rem;\n}\n#tool[data-v-0d4bec36] {\n  background: #fff;\n  overflow: hidden;\n}\n#tool h3[data-v-0d4bec36] {\n    color: #333;\n    margin: 0;\n    padding-left: 0.9375rem;\n    text-align: left;\n    border-bottom: 0.0625rem solid #f5f3f3;\n    font-size: 14px;\n    font-weight: normal;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    line-height: 2.286rem;\n    height: 2.286rem;\n}\n#tool li img[data-v-0d4bec36] {\n    width: 28%;\n    margin-bottom: 0.3125rem;\n}\n#tool ul li[data-v-0d4bec36] {\n    position: relative;\n    float: left;\n    width: 25%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    text-align: center;\n    padding: 0.9375rem 0;\n    font-size: 12px;\n    height: 25vw;\n}\n#tool ul li a[data-v-0d4bec36] {\n    color: #8c8c8c;\n}\n#tool ul li i[data-v-0d4bec36] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 0.625rem;\n    color: #fff;\n    line-height: 2.25rem;\n    font-size: 20px;\n    margin-bottom: 0.25rem;\n}\n.listStat[data-v-0d4bec36] {\n  height: 2.75rem;\n  background: #fff;\n  border-top: 0.0625rem solid #ebebeb;\n  font-size: 14px;\n  line-height: 2.75rem;\n  color: #333;\n  text-align: left;\n  margin-left: 0.875rem;\n}\n.listStat[data-v-0d4bec36]:first-child {\n  border-top: none;\n}\n.list1[data-v-0d4bec36] {\n  height: 2.75rem;\n  background: #fff;\n  padding-right: 0.875rem;\n  margin-left: 0.875rem;\n  border-top: 0.0625rem solid #ebebeb;\n  font-size: 16px;\n  line-height: 2.75rem;\n  color: #333;\n  text-align: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n}\n.statRight[data-v-0d4bec36] {\n  float: right;\n  line-height: 2.75rem;\n  display: inline-block;\n  font-size: 14px;\n  padding-right: 0.875rem;\n  color: #f15353;\n  width: 7.5rem;\n  /* height: 1.25rem; */\n  text-align: right;\n  background-size: 1.25rem;\n}\n.list1 i.fa.fa-angle-right[data-v-0d4bec36] {\n  float: right;\n  line-height: 2.75rem;\n  display: inline-block;\n  font-size: 1.5rem;\n  color: #c9c9c9;\n  text-align: center;\n  background-size: 1.25rem;\n  position: absolute;\n  right: 0.875rem;\n}\n.list1 .ico[data-v-0d4bec36] {\n  display: inline-block;\n  margin-right: 0.625rem;\n  color: #929292;\n  width: 1.25rem;\n  height: 1.25rem;\n  text-align: center;\n  background-size: 1.25rem;\n  float: left;\n  margin-top: 0.75rem;\n}\n.list1 .marketing[data-v-0d4bec36] {\n  background-image: url('+i(t("Qx/f"))+");\n}\n.list1 .extension[data-v-0d4bec36] {\n  background-image: url("+i(t("6JrH"))+");\n}\n.list1 .newsetting[data-v-0d4bec36] {\n  background-image: url("+i(t("/IyX"))+");\n}\n.allorder[data-v-0d4bec36] {\n  float: right;\n  color: #909090;\n  margin-right: 0.625rem;\n  text-decoration: none;\n  font-size: 12px;\n}\n.order[data-v-0d4bec36] {\n  width: 100%;\n  background: #fff;\n  margin-top: 0.625rem;\n  border-bottom: 0.0625rem solid #f5f3f3;\n}\n.order_all[data-v-0d4bec36] {\n  width: 100%;\n  padding: 0.875rem 0rem;\n  color: #666;\n  overflow: hidden;\n}\n.order_all a i[data-v-0d4bec36] {\n  font-size: 1.25rem;\n  margin-bottom: 0.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  background-size: 1.25rem;\n}\n.order_all a .money[data-v-0d4bec36] {\n  background-image: url("+i(t("Etsf"))+");\n}\n.order_all a .box[data-v-0d4bec36] {\n  background-image: url("+i(t("omNA"))+");\n}\n.order_all a .car[data-v-0d4bec36] {\n  background-image: url("+i(t("eu9N"))+");\n}\n.order_all a .refun[data-v-0d4bec36] {\n  background-image: url("+i(t("A+aA"))+");\n}\n.order_pub[data-v-0d4bec36] {\n  height: 2.375rem;\n  float: left;\n  border-left: 0.0625rem solid #eee;\n  padding-top: 0.125rem;\n  text-align: center;\n  color: #8c8c8c;\n  position: relative;\n  font-size: 12px;\n}\n.order_pub span[data-v-0d4bec36] {\n  height: 0.875rem;\n  background: #f30;\n  border-radius: 0.5rem;\n  position: absolute;\n  top: 0;\n  right: 6%;\n  padding: 0 0.3125rem;\n  font-size: 12px;\n  color: #fff;\n  line-height: 0.875rem;\n}\n.data-btn button[data-v-0d4bec36] {\n  background-color: #f15353;\n  width: 80%;\n  height: 2.5rem;\n  font-size: 14px;\n  margin: 1rem auto;\n  border-radius: 1.25rem;\n}\n.data-btn .yd-button[data-v-0d4bec36] {\n  padding: 0;\n}\n.cart[data-v-0d4bec36] {\n  height: auto;\n  width: 100%;\n  background: #fff;\n}\n.new-ullist[data-v-0d4bec36] {\n  border-top: 0.0625rem solid #f5f3f3;\n  overflow: hidden;\n  padding: 0.875rem 0;\n}\n.new-ullist ul li[data-v-0d4bec36] {\n  position: relative;\n  float: left;\n  width: 25%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n  padding: 0.625rem 0;\n  font-size: 12px;\n}\n.new-ullist ul li a[data-v-0d4bec36] {\n  color: #8c8c8c;\n}\n.new-ullist ul li i[data-v-0d4bec36] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.625rem;\n  color: #fff;\n  line-height: 2.25rem;\n  font-size: 20px;\n  margin-bottom: 0.25rem;\n}\n.set a[data-v-0d4bec36] {\n  color: #fff;\n  font-size: 20px;\n}\n#ewm[data-v-0d4bec36] {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  background: rgba(140, 140, 140, 0.72);\n  z-index: 9;\n  display: none;\n  padding-top: 5%;\n}\n#ewm .pic[data-v-0d4bec36] {\n    width: 70%;\n    margin: auto;\n    background: #fff;\n    border-radius: 0.625rem;\n    overflow: hidden;\n}\n#ewm .pic .title[data-v-0d4bec36] {\n      padding: 0.625rem;\n      border-bottom: 0.0625rem solid #ddd;\n}\n#ewm .pic .title img[data-v-0d4bec36] {\n        height: 2.5rem;\n        width: 2.5rem;\n        border-radius: 50%;\n        display: inline-block;\n        vertical-align: middle;\n}\n#ewm .pic .title span[data-v-0d4bec36] {\n        margin-left: 0.9375rem;\n        vertical-align: middle;\n        font-size: 16px;\n}\n#ewm .pic .ewm img[data-v-0d4bec36] {\n      width: 50%;\n      display: block;\n      float: right;\n}\n#ewm img[data-v-0d4bec36] {\n    width: 100%;\n    display: block;\n}\n.clearfix[data-v-0d4bec36] {\n  clear: both;\n}\n",""])}});