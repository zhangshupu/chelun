webpackJsonp([7],{JqkR:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=s("4YfN"),o=s.n(t),a=s("9rMa"),i={data:function(){return{name:"",password:""}},computed:o()({},Object(a.d)({name_:function(e){return e.logine.name},password_:function(e){return e.logine.password},isShow:function(e){return e.logine.isShow}})),methods:o()({},Object(a.c)({changeIsShow:"logine/changeIsShow"}),{logine:function(){console.log(this.name==this.name_),""!=this.name&&""!=this.password?""!==this.name_&&this.name==this.name_?this.password==this.password_?this.$router.push("/index"):alert("密码不正确"):this.changeIsShow(!0):alert("账号或密码不能为空")},cancel:function(){this.changeIsShow(!1)},confirm:function(){this.changeIsShow(!1),this.$router.push("/register")}})},r={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"index"},[s("header",[e._v("\n    登陆页面\n  ")]),e._v(" "),s("section",[s("ul",[s("li",[s("span",[e._v("账号：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入你的账号"},domProps:{value:e.name},on:{input:function(n){n.target.composing||(e.name=n.target.value)}}})]),e._v(" "),s("li",[s("span",[e._v("密码：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入你的密码"},domProps:{value:e.password},on:{input:function(n){n.target.composing||(e.password=n.target.value)}}})]),e._v(" "),s("li",[s("button",{on:{click:function(n){e.logine()}}},[e._v("登陆")])])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"box"},[s("div",[s("h1",[e._v("此账户不存在，是否进入注册页面")]),e._v(" "),s("p",[s("span",{on:{click:function(n){e.cancel()}}},[e._v("取消")]),s("span",{on:{click:function(n){e.confirm()}}},[e._v("确定")])])])])])},staticRenderFns:[]};var c=s("C7Lr")(i,r,!1,function(e){s("LXm8")},"data-v-0ff07648",null);n.default=c.exports},LXm8:function(e,n){}});
//# sourceMappingURL=7.202c0208ae1ff790af29.js.map