<template>
  <div class="index">
    <header>
      登陆页面
    </header>
    <section>
      <ul>
        <li><span>账号：</span><input type="text" v-model="name" placeholder="请输入你的账号"></li>
        <li><span>密码：</span><input type="password" v-model="password" placeholder="请输入你的密码"></li>
        <li><button @click="logine()">登陆</button></li>
      </ul>
    </section>
    <div class="box" v-show="isShow">
      <div>
        <h1>此账户不存在，是否进入注册页面</h1>
        <p><span @click="cancel()">取消</span><span @click="confirm()">确定</span></p>
      </div>
    </div>
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
        changeIsShow: 'logine/changeIsShow',
      }),
      logine() {
        console.log(this.name == this.name_)
        if (this.name != '' && this.password != '') {
          if (this.name_ !== '') {
            if (this.name == this.name_) {
              if (this.password == this.password_) {
                this.$router.push('/index')
              } else {
                alert('密码不正确')
              }
            } else {
              this.changeIsShow(true)
            }
          } else {
            this.changeIsShow(true)
          }
        } else {
          alert('账号或密码不能为空');
        }
      },
      cancel() {
        this.changeIsShow(false)
      },
      confirm() {
        this.changeIsShow(false)
        this.$router.push('/register')
      }
    }
  }
</script>

<style scoped>
  .index {
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
    width: 70%;
    height: .6rem;
    display: inline-block;
    padding-left: .3rem;
    outline: none;
    -webkit-appearance: none;
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