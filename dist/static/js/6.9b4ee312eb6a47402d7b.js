webpackJsonp([6],{"6SxG":function(t,e){},SNBr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("4YfN"),n=a.n(i),r=a("9rMa"),s={data:function(){return{SerialID:""}},computed:n()({},Object(r.d)({detailsData:function(t){return t.details.detailsData},list:function(t){return t.details.list},yearList:function(t){return t.details.yearList},show_index:function(t){return t.details.show_index}})),components:{},mounted:function(){this.SerialID=this.$router.history.current.query.SerialID,this.getDetailsData(this.SerialID)},methods:n()({},Object(r.b)({getDetailsData:"details/getDetailsData"}),Object(r.c)({clickTable:"details/changeShow_index",changeCarID:"img/changeCarID"}),{clickCar:function(t){_hmt.push(["_trackEvent","汽车报价","tap","车款选择"]),this.changeCarID(t),this.$router.go(-1)}})},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"car"},[a("div",{staticClass:"table"},t._l(t.yearList,function(e,i){return a("span",{key:i,class:t.show_index==i?"active":"",on:{click:function(a){t.clickTable([i,e])}}},[t._v(t._s(e))])})),t._v(" "),a("div",{staticClass:"main"},t._l(t.list,function(e,i,n){return a("div",{key:n,staticClass:"list_item"},[a("p",[t._v(t._s(i))]),t._v(" "),t._l(e,function(e,i){return a("div",{key:i,staticClass:"item_box",on:{click:function(a){t.clickCar(e.car_id)}}},[a("h2",[t._v(t._s(e.market_attribute.year)+"款 "+t._s(e.car_name))]),t._v(" "),a("h3",[t._v(t._s(e.horse_power)+"马力"+t._s(e.gear_num)+"档")]),t._v(" "),a("p",[t._v("\n          指导价\n          "),a("em",[t._v(t._s(e.market_attribute.official_refer_price))]),t._v(" "),a("span",[t._v(t._s(e.market_attribute.dealer_price_min)+"起")])])])})],2)}))])},staticRenderFns:[]};var l=a("C7Lr")(s,c,!1,function(t){a("6SxG")},"data-v-3ec9abdf",null);e.default=l.exports}});
//# sourceMappingURL=6.9b4ee312eb6a47402d7b.js.map