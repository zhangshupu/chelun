<template>

  <div class="register">
    <header>
      注册页面
    </header>
    <section>
      <ul>
        <li><span>账号：</span><input type="text" v-model="name" placeholder="4到16位（字母，数字，下划线，减号）"></li>
        <li><span>密码：</span><input type="text" v-model="password" placeholder="最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"></li>
        <li><button @click="logine()">注册</button></li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        name: '',
        password: ''
      }
    },
    computed: {
      ...mapState({
        name_: store => store.logine.name,
        password_: store => store.logine.password,
        isShow: store => store.logine.isShow
      })
    },
    methods: {
      ...mapMutations({
        changeData: 'logine/changeData'
      }),
      logine() {
        //用户名正则，4到16位（字母，数字，下划线，减号）
        var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
        var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        if (uPattern.test(this.name)) {
          if (pPattern.test(this.password)) {
            this.changeData({
              name: this.name,
              password: this.password
            })
            this.$router.push('/logine')
          } else {
            alert('密码格式不正确，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符')
          }
        } else {
          alert('用户名格式不正确，请重新输入')
        }
      },
    }
  }
</script>

<style scoped>
  .register {
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
    flex-direction: column
  }

  header {
    width: 100%;
    text-align: center;
    padding: .3rem 0rem;
    background: #0df;
    font-size: .3rem;
    color: #fff;
  }

  section {
    flex: 1;
  }

  ul {
    width: 100%;
    padding: .3rem;
    box-sizing: border-box;
  }

  li {
    width: 100%;
    border-bottom: solid .01rem #ccc;
    padding: .05rem 0rem;
    display: flex;
    align-items: center;
  }

  li span {
    font-size: .3rem;
  }

  li input {
    width: 80%;
    height: .6rem;
    display: inline-block;
    padding-left: .3rem;
    outline: none;
    -webkit-appearance: none;
    font-size: .2rem;
  }

  li button {
    width: 90%;
    height: .7rem;
    background: #0df;
    border: none;
    margin-left: 5%;
    margin-top: 1rem;
    color: #fff;
  }

  li:last-child {
    border: none;
  }

  .box {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, .4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box div {
    width: 80%;
    padding: .2rem;
    background: #fff;
    box-sizing: border-box;
    border-radius: .08rem;
  }

  .box div h1 {
    width: 100%;
    text-align: center;
    font-size: .3rem;
  }

  .box div p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;
  }

  .box div p span {
    width: 50%;
    border-right: solid .01rem #eee;
    box-sizing: border-box;
    padding: .1rem 0rem;
    text-align: center
  }

  .box div p span:last-child {
    border-right: none;
  }
</style>