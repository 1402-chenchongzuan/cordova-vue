webpackJsonp([17],{LCET:function(t,e){},MtFf:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),r=s("NYxO"),a=s("T452"),c=s("qwAB"),l=s("F4+m"),o={data:function(){return{pullUp:!0}},components:{Scroll:c.a},props:{list:{type:Array,default:[]},hasMore:{type:Boolean,default:!1}},mixins:[l.a],methods:i()({payOrderClick:function(t,e){this.$router.push({name:"orders-payChose",query:{totalPrice:e},params:{id:t}})},cancelOrderClick:function(t){var e=this;this.$alert("您确定取消该订单吗",["确定","取消"]).then(function(){e._cancelOrder(e.judgeTypeUrl(t),t).then(function(){e.$emit("finishReload")})})},finishOrderClick:function(t){var e=this;this.$alert("您确定完结该订单吗",["确定","取消"]).then(function(){e._finishOrder(e.judgeTypeUrl(t),t).then(function(){e.$emit("finishReload")})})},scrollTop:function(){this.$refs.scroll.scrollTo(0,0)},searchMore:function(){this.$emit("searchMore")},judgeType:function(t){switch(t.slice(-3)){case a.d.laundry:return"laundryProduct";case a.d.mall:return"mallProduct";case a.d.furniture:return"furnitureProduct"}},imgUrl:function(t){return null!=t?a.c+"/rwlmall/images/"+t:""},totalPrice:function(t){var e=this.judgeType(t.id),s=0;return t.items.forEach(function(t){s+=t.count*t[e].price}),s/100},price:function(t){return"¥ "+t/100},standard:function(t){return t?"净含量："+t:""},checkProgress:function(t,e){var s=this.judgeType(t.id);this.$router.push({path:"/orders/details",query:{totalPrice:e,type:s}}),this.setSelectItem(t)}},Object(r.c)({setSelectItem:"SET_SELECT_ITEM"}))},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orders-list"},[s("scroll",{ref:"scroll",attrs:{data:t.list,pullUp:t.pullUp},on:{scrollToEnd:t.searchMore}},[s("ul",[t._l(t.list,function(e){return s("li",{staticClass:"item"},[t._l(e.items,function(n){return s("div",{staticClass:"item-info"},[s("img",{attrs:{src:""}}),t._v(" "),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"price-container"},[s("span",{staticClass:"name",domProps:{textContent:t._s(n[t.judgeType(e.id)].name)}}),t._v(" "),s("span",{staticClass:"price",domProps:{textContent:t._s(t.price(n[t.judgeType(e.id)].price))}})]),t._v(" "),s("div",{staticClass:"number-container"},[s("span",{staticClass:"name",domProps:{textContent:t._s(t.standard(n[t.judgeType(e.id)].standard))}}),t._v(" "),s("span",{staticClass:"number"},[t._v("x"+t._s(n.count))])])])])}),t._v(" "),s("p",{staticClass:"price-sum"},[s("span",{staticClass:"text"},[t._v("共"+t._s(e.items.length)+"件商品合计：\n      ")]),s("span",{staticClass:"sum"},[t._v("¥ "+t._s(t.totalPrice(e)))])]),t._v(" "),s("div",{staticClass:"button-container"},[0===e.payStatus&&0===e.status?s("span",{staticClass:"pay",on:{click:function(s){t.payOrderClick(e.id,t.totalPrice(e))}}},[t._v("付款")]):t._e(),t._v(" "),0===e.status?s("span",{staticClass:"cancel",on:{click:function(s){t.cancelOrderClick(e.id)}}},[t._v("取消订单")]):t._e(),t._v(" "),s("span",{staticClass:"check",on:{click:function(s){t.checkProgress(e,t.totalPrice(e))}}},[t._v("查看进度")]),t._v(" "),4===e.status?s("span",{staticClass:"finish",on:{click:function(s){t.finishOrderClick(e.id)}}},[t._v("完结订单")]):t._e()])],2)}),t._v(" "),s("loading",{directives:[{name:"show",rawName:"v-show",value:t.hasMore,expression:"hasMore"}]})],2)])],1)},staticRenderFns:[]};var d=s("VU/8")(o,u,!1,function(t){s("LCET")},"data-v-4258ea70",null);e.default=d.exports}});
//# sourceMappingURL=17.a8bf5a248b17e32e8e68.js.map