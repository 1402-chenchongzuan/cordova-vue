webpackJsonp([9],{AyDw:function(t,s,e){"use strict";var i={data:function(){return{currentIndex:0}},props:{list:{type:Array,default:[]}},computed:{},methods:{selectClass:function(t){return this.currentIndex===t?"selected":""},switchItem:function(t){this.currentIndex=t,this.$emit("switchItem",t)}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"switches"},[e("ul",{staticClass:"switches-list"},t._l(t.list,function(s,i){return e("li",{staticClass:"item",on:{click:function(s){t.switchItem(i)}}},[e("div",{class:["line",t.selectClass(i)]}),t._v(" "),e("div",{staticClass:"icon-box"},[e("div",{class:["icon",s.className]})]),t._v(" "),e("span",{staticClass:"text",domProps:{textContent:t._s(s.name)}})])}))])},staticRenderFns:[]};var a=e("VU/8")(i,n,!1,function(t){e("LH09")},"data-v-b1a69ae0",null);s.a=a.exports},LH09:function(t,s){},MqKw:function(t,s){},jIT1:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),n=e.n(i),a=e("NYxO"),c=e("tRvw"),o=e("AyDw"),l=e("qwAB"),r=e("F4+m"),h=e("hhm8"),u=e("mK0g"),d=e("T452"),m={data:function(){return{load:!0,switchVal:0,switchList:[{name:"上衣类",className:"clothes"},{name:"裤裙类",className:"culottes"},{name:"皮草类",className:"overcoat"},{name:"装饰类",className:"decorate"},{name:"鞋包类",className:"shoes"}],list:[]}},components:{Switches:o.a,Scroll:l.a,NoResult:c.a},mixins:[r.f],created:function(){this.$route.query.top?(this.type=d.e.topLaundry,this.setShopList(this.topLaundryList),this._findLaundryList(this.switchVal)):(this.type=d.e.laundry,this.setShopList(this.laundryList),this._findLaundryList(this.switchVal))},computed:n()({},Object(a.b)(["shopList","shopBarHeight","laundryList","topLaundryList"])),methods:n()({_findLaundryList:function(t){var s=this;Object(u.b)(t,this.type).then(function(t){t.code===d.b&&(console.log(t.data),s.load=!1,s.list=t.data)})},handleShopBar:function(t){var s=this;this.$nextTick(function(){var e=t.length>0?s.shopBarHeight+"px":"";s.$refs.scrollContainer.style.bottom=e,s.$refs.scroll.refresh()})},addShop:function(t){var s=Object(h.b)(this.shopList,t);this.setShopList(s),this.$route.query.top?this.setTopLaundryList(s):this.setLaundryList(s)},switchItem:function(t){this.switchVal=t,console.log("switch:"+t)},price:function(t){return"¥ "+t/100},imgUrl:function(t){return null!=t?d.c+"/rwlmall/images/"+t:""},bgImg:function(t){return"background-image:url("+t+")"}},Object(a.c)({setShopList:"SET_SHOP_LIST",setLaundryList:"SET_LAUNDRY_LIST",setTopLaundryList:"SET_TOP_LAUNDRY_LIST"})),watch:{switchVal:function(t){this._findLaundryList(t),this.$refs.scroll.scrollTo(0,0)}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"laundry",on:{touchmove:function(t){t.preventDefault()}}},[e("switches",{attrs:{list:t.switchList},on:{switchItem:t.switchItem}}),t._v(" "),e("loading",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}]}),t._v(" "),e("no-result",{directives:[{name:"show",rawName:"v-show",value:!t.list.length>0&&!t.load,expression:"!list.length>0&&!load"}],staticClass:"zh-center",attrs:{title:"商品正在赶来的路上..."}}),t._v(" "),e("div",{ref:"scrollContainer",staticClass:"scroll-container"},[e("scroll",{ref:"scroll",attrs:{data:t.list}},[e("div",{staticClass:"shop-container"},[e("ul",{staticClass:"shop-list"},t._l(t.list,function(s){return 0!==s.stock?e("li",{staticClass:"shop-item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl(s.logo),expression:"imgUrl(item.logo)"}],staticClass:"clothes-img"}),t._v(" "),e("span",{staticClass:"text",domProps:{textContent:t._s(s.name)}}),t._v(" "),e("span",{staticClass:"price",domProps:{textContent:t._s(t.price(s.price))}}),t._v(" "),e("div",{staticClass:"add-shop",on:{click:function(e){t.addShop(s)}}},[e("i",{staticClass:"iconfont icon-icon-test"})])]):t._e()}))])])],1)],1)},staticRenderFns:[]};var f=e("VU/8")(m,p,!1,function(t){e("MqKw")},"data-v-fc019014",null);s.default=f.exports}});
//# sourceMappingURL=9.e08299542cb975714588.js.map