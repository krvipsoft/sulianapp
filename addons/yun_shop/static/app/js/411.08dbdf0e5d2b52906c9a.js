webpackJsonp([411],{FAC7:function(e,t,n){var a=n("Q7og");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("7c89c88c",a,!0,{})},Q7og:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.avatar[data-v-52e43e75] {\n  width: 100%;\n  height: 100%;\n}\n#add-class[data-v-52e43e75] {\n  background-color: #fff;\n}\n#add-class .box .name[data-v-52e43e75],\n  #add-class .box .recommend[data-v-52e43e75] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 2.75rem;\n    /*line-height: 2.75rem;*/\n    border-bottom: solid 0.0625rem #ebebeb;\n    font-size: 16px;\n    padding: 0 0.875rem;\n}\n#add-class .box .name i[data-v-52e43e75],\n    #add-class .box .recommend i[data-v-52e43e75] {\n      font-size: 12px;\n      color: #f15353;\n      margin-right: 0.375rem;\n}\n#add-class .box .name input[data-v-52e43e75],\n    #add-class .box .recommend input[data-v-52e43e75] {\n      border: none;\n}\n#add-class .box .name li[data-v-52e43e75]:first-child,\n    #add-class .box .recommend li[data-v-52e43e75]:first-child {\n      width: 6.875rem;\n      text-align: left;\n}\n#add-class .box .class-img[data-v-52e43e75] {\n    text-align: left;\n    font-size: 16px;\n    padding: 0 0.875rem 0.625rem 0.875rem;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n#add-class .box .class-img li[data-v-52e43e75] {\n      height: 2.75rem;\n      line-height: 2.75rem;\n}\n#add-class .box .class-img .icon-info-must[data-v-52e43e75] {\n      font-size: 12px;\n      color: #f15353;\n      margin-right: 0.375rem;\n}\n#add-class .box .class-img .icon-photobzhaoxiang[data-v-52e43e75] {\n      line-height: 5rem;\n      font-size: 24px;\n      color: #c9c9c9;\n}\n#add-class .box #bottom[data-v-52e43e75] {\n    border-top: solid 0.0625rem #ebebeb;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    background-color: #fff;\n    padding: 0 0.875rem;\n    font-size: 16px;\n}\n#add-class .box #bottom button[data-v-52e43e75] {\n      color: #fff;\n      width: 100%;\n      height: 2.5rem;\n      line-height: 2.5rem;\n      border-radius: 0.1875rem;\n      background-color: #f15353;\n      border: none;\n      margin: 0.375rem 0;\n}\n",""])},yA0J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Pexp"),i=n("Tg7E"),s={components:{cTitle:a.a},data:function(){return{classify_name:"",isRecommend:"",isOpen:"",judgeState:!0,imageUrl:"",uploadUrl:"",thumb:""}},activated:function(){this.init(),this.urlUp()},methods:{init:function(){this.classify_name="",this.thumb="",this.imageUrl="",this.isRecommend="",this.isOpen=""},sureAdd:function(){var e="";"1"==this.isOpen?e=1:"0"==this.isOpen&&(e=0);var t=this;if(t.judge(),1==t.judgeState){if("add"==t.$route.params.classify_id)var n={store_id:t.$route.params.store_id,name:t.classify_name,enabled:e,level:t.$route.params.level};else n={store_id:t.$route.params.store_id,name:t.classify_name,enabled:e,parent_id:t.$route.params.classify_id,level:t.$route.params.level};$http.post("plugin.store-cashier.frontend.store.goods-category.add-category",n).then(function(e){console.log("显示add",e),1==e.result?(t.$router.push(t.fun.getUrl("GoodsClassify",{store_id:t.$route.params.store_id})),t.$notify({background:"#f0f9eb",message:"添加成功",color:"#67c23a"})):t.$notify(e.msg)},function(e){console.log(e)})}else t.$notify({background:"#fef0f0",message:"分类信息不完整",color:"#f56c6c"})},judge:function(){this.judgeState=!0,""!=this.classify_name&&""!=this.isOpen||(this.judgeState=!1)},urlUp:function(){this.uploadUrl=this.fun.getRealUrl("plugin.store-cashier.frontend.store.goods.upload",{})},handleStoreSuccess:function(e,t){console.log(e),this.imageUrl=URL.createObjectURL(t.raw),1==e.result?this.thumb=e.data.img:Object(i.Toast)(e.msg)},beforeUpload:function(e){var t="image/png"===e.type||"image/jpeg"===e.type,n=e.size/1024/1024<2;return t||this.$notify("上传头像图片只能是 JPG或PNG 格式!"),n||this.$notify("上传头像图片大小不能超过 2MB!"),t&&n}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"add-class"}},[n("c-title",{attrs:{hide:!1,text:"商品分类"}}),e._v(" "),n("section",{staticStyle:{height:"40px"}}),e._v(" "),n("section",{staticClass:"box"},[n("ul",{staticClass:"name"},[e._m(0),e._v(" "),n("li",{staticStyle:{"line-height":"2.7rem"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.classify_name,expression:"classify_name"}],attrs:{type:"text",placeholder:"请输入分类名称"},domProps:{value:e.classify_name},on:{input:function(t){t.target.composing||(e.classify_name=t.target.value)}}})])]),e._v(" "),n("ul",{staticClass:"recommend"},[e._m(1),e._v(" "),n("li",{staticStyle:{width:"10rem"}},[n("van-radio-group",{staticStyle:{"margin-top":"0.65rem"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[n("van-radio",{staticStyle:{float:"left","margin-left":"0.5rem"},attrs:{name:"1","checked-color":"#f15353"}},[e._v("是")]),e._v(" "),n("van-radio",{staticStyle:{float:"left","margin-left":"0.5rem"},attrs:{name:"0","checked-color":"#f15353"}},[e._v("否")])],1)],1)]),e._v(" "),n("section",{style:{width:3==this.fun.getPhoneEnv()?"375px":"100%"},attrs:{id:"bottom"}},[n("button",{attrs:{type:"button"},on:{click:e.sureAdd}},[e._v("确认添加")])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticStyle:{"line-height":"2.7rem"}},[t("i",{staticClass:"iconfont icon-info-must"}),this._v("分类名称：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticStyle:{"line-height":"2.7rem"}},[t("i",{staticClass:"iconfont icon-info-must"}),this._v("是否开启")])}]};var r=n("VU/8")(s,o,!1,function(e){n("FAC7")},"data-v-52e43e75",null);t.default=r.exports}});