webpackJsonp([9],{"59XL":function(t,n){},"I/JL":function(t,n){},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("IvJb"),i=a("4YfN"),o=a.n(i),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loading"},[n("img",{attrs:{src:"http://img.zcool.cn/community/01cddc57a93f670000018c1bff1e12.gif",alt:""}})])}]};var u=a("C7Lr")({},r,!1,function(t){a("I/JL")},"data-v-af2c08b6",null).exports,s=a("9rMa"),c={name:"App",computed:o()({},Object(s.d)({loadingIsShow:function(t){return t.loadingIsShow}})),components:{Loading:u}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),this._v(" "),n("Loading",{directives:[{name:"show",rawName:"v-show",value:this.loadingIsShow,expression:"loadingIsShow"}]})],1)},staticRenderFns:[]};var h=a("C7Lr")(c,l,!1,function(t){a("59XL")},null,null).exports,m=a("zO6J"),d={namespaced:!0,state:{isShow:!1,name:"zhangshupu",password:"aA@123"},mutations:{changeIsShow:function(t,n){t.isShow=n},changeData:function(t,n){t.name=n.name,t.password=n.password}},actions:{}},g=a("3cXf"),p=a.n(g),f={namespaced:!0,state:{ColourData:[]},mutations:{updataColourData:function(t,n){t.ColourData=n}},actions:{getColourData:function(t,n){var a=t.commit;y.getColour(n).then(function(t){a("updataColourData",t.data)})}}},I=(a("IiyV"),"https://baojia.chelun.com");function w(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e={method:n};return"POST"==n&&(e.body=p()(a)),-1==t.indexOf("?")?t+="?_="+ +new Date:t+="&_="+ +new Date,fetch(I+t,e).then(function(t){return t.json()}).then(function(t){return t})}var y={getBrandList:function(){return w("/v2-car-getMasterBrandList.html")},getMakeList:function(t){return w("/v2-car-getMakeListByMasterBrandId.html?MasterID="+t)},getDetails:function(t){return w("/v2-car-getInfoAndListById.html?SerialID="+t)},getInquiry:function(t,n){return w("/v2-dealer-alllist.html?carId="+t+"&cityId="+n)},getCityId:function(){return w("/location-client.html")},getCityList:function(){return w("/v1-city-alllist.html")},getUrban:function(t){return w("/v1-city-alllist.html?provinceid="+t)},getImgData:function(t){var n="";for(var a in t)""!=t[a]&&(n+="&"+a+"="+t[a]);return w("/v2-car-getImageList.html?"+(n=n.slice(1)))},getColour:function(t){return w("/v2-car-getModelImageYearColor.html?SerialID="+t)},getImgList:function(t){return w("/v2-car-getCategoryImageList.html?SerialID="+t[0]+"&ImageID="+t[1]+"&Page="+t[2]+"&PageSize=30")}},S={namespaced:!0,state:{isRightShow:!1,BrandList:{},MakeList:[]},mutations:{updateBrandList:function(t,n){t.BrandList=n},updataMakeList:function(t,n){t.MakeList=n,t.isRightShow=!0},changeIsRightShow:function(t,n){t.isRightShow=!1}},actions:{getBrandList:function(t){var n=t.commit;y.getBrandList().then(function(t){var a={};t.data.forEach(function(t){void 0==a[t.Spelling.slice(0,1)]?(a[t.Spelling.slice(0,1)]=[],a[t.Spelling.slice(0,1)].push(t)):a[t.Spelling.slice(0,1)].push(t)}),n("updateBrandList",a)})},getMakeList:function(t,n){var a=t.commit;y.getMakeList(n).then(function(t){a("updataMakeList",t.data)})}}};function L(t){var n=[],a={};return t.forEach(function(t){var e=t.exhaust_str+"/"+t.max_power_str+" "+t.inhale_type;-1!=n.indexOf(e)?a[e].push(t):(n.push(e),a[e]=[t])}),a}function v(t){return t.sort(function(t,n){return t.exhaust!=n.exhaust?t.exhaust-n.exhaust:t.max_power_str!=n.max_power_str?t.max_power_str-n.max_power_str:t.inhale_type!=n.inhale_type?t.inhale_type-n.inhale_type:n.market_attribute.year-t.market_attribute.year})}var D={namespaced:!0,state:{detailsData:{},list:[],yearList:[],show_index:0},mutations:{updataDetails:function(t,n){var a,e;t.detailsData=n,t.list=L(v(n.list)),t.yearList=(a=n.list,e=["全部"],a.forEach(function(t,n){-1==e.indexOf(t.market_attribute.year)&&e.push(t.market_attribute.year)}),e.sort(function(t,n){return n-t}))},changeShow_index:function(t,n){var a;t.show_index=n[0],"全部"==n[1]?t.list=L(v(t.detailsData.list)):t.list=L(v((a=n[1],t.detailsData.list.filter(function(t){return t.market_attribute.year==a}))))}},actions:{getDetailsData:function(t,n){var a=t.commit;y.getDetails(n).then(function(t){a("updataDetails",t.data)})}}},_=a("6LYt"),b=a.n(_),C={namespaced:!0,state:{inquiryData:{},cityName:"",cityList:[],UrbanList:[],cityIsShow:!1,UrbanIsShow:!1},mutations:{updataInquiry:function(t,n){t.cityName=n[0],t.inquiryData=n[1],t.cityIsShow=!1,t.UrbanIsShow=!1},updataCityList:function(t,n){t.cityList=n},updataUrban:function(t,n){t.UrbanList=n,t.UrbanIsShow=!0,console.log(t.UrbanList)},changeShowCity:function(t,n){t.cityIsShow=!0}},actions:{getInquiryData:function(t,n){var a=t.commit;y.getCityId().then(function(t){y.getInquiry(n,t.data.CityID).then(function(n){a("updataInquiry",[t.data.CityName,n.data])})})},getCityList:function(t,n){var a=t.commit;y.getCityList().then(function(t){a("updataCityList",t.data)})},getUrban:function(t,n){var a=t.commit;y.getUrban(n).then(function(t){a("updataUrban",t.data)})},getCityID:function(t,n){var a=t.commit;console.log(n),y.getInquiry(n[0],n[1]).then(function(t){a("updataInquiry",[n[2],t.data])})}}},x={imgData:[],imgList:[],pullIsShow:!1,ImageID:0,query:{CarID:"",ColorID:"",SerialID:""},page:1,isFetch:!1,swiperIsShow:!1,swiperInd:0,swiperSum:0},q={namespaced:!0,state:x,mutations:{updataImgData:function(t,n){t.imgData=n,t.pullIsShow=!1,t.swiperIsShow=!1},changeColorId:function(t,n){t.query.ColorID=n},changeCarID:function(t,n){t.query.CarID=n},changeSerialID:function(t,n){t.query.SerialID=n},throttle:function(t,n){t.isFetch=!1},changeIsShow:function(t,n){t.pullIsShow=!0,t.swiperSum=n[0],t.ImageID=n[1],t.page=1},updataImgList:function(t,n){t.imgList=t.imgList.concat(n),t.page+=1,t.isFetch=!0},shangeSwiperIsShow:function(t,n){t.swiperIsShow=!0,t.pullIsShow=!1,t.swiperInd=n[0],t.swiperSum=n[1],t.ImageID=n[2],t.page=1},changeSwiperIsShow:function(t,n){t.swiperIsShow=!1},changeSwiperInd:function(t,n){t.swiperInd=n},SwiperIsShow:function(t,n){t.swiperInd=n,t.swiperIsShow=!0,t.pullIsShow=!1}},actions:{getImgData:function(t,n){var a=t.commit;a("changeSerialID",n),y.getImgData(x.query).then(function(t){a("updataImgData",t.data)})},getImgList:function(t,n){var a=t.commit;a("throttle"),y.getImgList([n,x.ImageID,x.page]).then(function(t){a("updataImgList",t.data.List)})}}};e.a.use(s.a);var M=new s.a.Store({state:{loadingIsShow:!0},mutations:{changeLoading:function(t,n){t.loadingIsShow=n}},modules:{logine:d,index:S,details:D,inquiry:C,img:q,colour:f},plugins:[b()()]});e.a.use(m.a);var k=new m.a({routes:[{path:"/logine",name:"Logine",component:function(){return a.e(7).then(a.bind(null,"JqkR"))}},{path:"/register",name:"Register",component:function(){return a.e(3).then(a.bind(null,"tcoL"))}},{path:"/index",name:"Index",component:function(){return a.e(1).then(a.bind(null,"mlqX"))}},{path:"/details",name:"Details",component:function(){return a.e(5).then(a.bind(null,"JrXK"))}},{path:"/inquiry",name:"Inquiry",component:function(){return a.e(2).then(a.bind(null,"0/ND"))}},{path:"/img",name:"Img",component:function(){return a.e(0).then(a.bind(null,"MXAf"))}},{path:"/colour",name:"Colour",component:function(){return a.e(4).then(a.bind(null,"72pM"))}},{path:"/carModel",name:"CarModel",component:function(){return a.e(6).then(a.bind(null,"SNBr"))}},{path:"/",redirect:"/logine"}]});k.beforeEach(function(t,n,a){M.commit("changeLoading",!0),a()}),k.afterEach(function(){M.commit("changeLoading",!1)});var B=k;a("XRwP");e.a.config.productionTip=!1,e.a.config.productionTip=!1,new e.a({el:"#app",store:M,router:B,components:{App:h},template:"<App/>"})},XRwP:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.d63bdd4550efcea5d1db.js.map