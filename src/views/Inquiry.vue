<template>
  <div class="inquiry">
    <header>
      可向多个商家咨询最低价，商家及时回复<em>?</em>
    </header>
    <div class="content">
      <div class="row">
        <img src="http://img2.bitautoimg.com/autoalbum/files/20180802/883/0255378836_3.jpg" alt="">
        <div class="center">
          <h3>奥迪A4L</h3>
          <p>2018款 30周年版 30 TFSL 进取版</p>
        </div>
        <div class="left">
          ›
        </div>
      </div>
      <div class="info">
        <p class="tip">个人信息</p>
        <ul>
          <li>
            <span>姓名</span>
            <input type="text" placeholder="输入你的真实中文姓名">
          </li>
          <li>
            <span>手机</span>
            <input type="text" placeholder="输入你的真实手机号码">
          </li>
          <li class="yan">
            <span>验证码</span>
            <input type="text" placeholder="输入验证码">
            <span>获取验证码</span>
          </li>
          <li @click="ShowCity()">
            <span>城市</span>
            <span>
              {{cityName}}
            </span>
          </li>
        </ul>
        <div class="quotation">
          <button>询最低价</button>
        </div>
      </div>
      <div class="list">
        <p class="tip">选择报价经销商</p>
        <ul>
          <li :class="index<3?'active':''" @click="clickItem(index)" ref="item_li" v-for="(item,index) in inquiryData.list"
            :key="index">
            <p>
              <span>{{item.dealerShortName}}</span>
              <span>{{item.vendorPrice}}万</span>
            </p>
            <p>
              <span>{{item.address}}</span>
              <span>售{{item.saleRange}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <button>询最低价</button>
    </footer>
    <div :class="['cityBox',cityIsShow?'show':'']">
      <City />
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  import City from '../components/City'
  export default {
    computed: {
      ...mapState({
        inquiryData: store => store.inquiry.inquiryData,
        cityName: store => store.inquiry.cityName,
        cityIsShow: store => store.inquiry.cityIsShow
      })
    },

    mounted() {
      let carId = this.$router.history.current.query.carId
      this.getInquiryData(carId);
      this.getCityList()
    },
    components: {
      City
    },
    methods: {
      ...mapActions({
        getInquiryData: 'inquiry/getInquiryData',
        getCityList: 'inquiry/getCityList'
      }),
      ...mapMutations({
        ShowCity: 'inquiry/changeShowCity'
      }),
      clickItem(ind) {
        if (this.$refs.item_li[ind].getAttribute('class') == 'active') {
          this.$refs.item_li[ind].className = ''
        } else {
          this.$refs.item_li[ind].className = 'active'
        }
      },
    }
  }
</script>

<style lang='scss' scoped>
  @import url('../styles/common.css');

  .inquiry {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  header {
    height: .6rem;
    line-height: .6rem;
    width: 100%;
    background: #79cd92;
    color: #fff;
    font-size: .3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    em {
      display: inline-block;
      width: .36rem;
      height: .36rem;
      border: solid .01rem #fff;
      border-radius: 50%;
      text-align: center;
      line-height: .36rem;
      margin-left: .05rem;
    }
  }

  .content {
    flex: 1;
    width: 100%;
    height: auto;
    background: #f4f4f4;
    overflow-y: scroll;
  }

  .row {
    background: #fff;
    padding: .32rem .18rem .24rem;
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    >img {
      width: 2.3rem;
      height: 1.41rem;
      border: 1px solid #eee;
      box-sizing: border-box;
      border-radius: 5px;
    }

    .center {
      margin-left: .2rem;
      width: 4.3rem;

      h3 {
        font-size: .36rem;
        line-height: 1;
        font-weight: normal;
      }

      p {
        margin-top: .26rem;
        font-size: .32rem;
        line-height: 1.2;
        color: #333;
      }
    }

    .left {
      font-size: .8rem;
      color: #ccc;
      margin-left: .06rem;
    }
  }

  .info {
    width: 100%;

    .tip {
      padding: 0 .2rem;
      height: .5rem;
      line-height: .5rem;
      font-size: .24rem;
      color: #666;
      background: #eee;
    }

    ul {
      background: #fff;
      padding: 0 .2rem;

      li:not(.yan) {
        font-size: .32rem;
        height: .88rem;
        line-height: .88rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        color: #000;

        input {
          font-size: .32rem;
          padding-right: .2rem;
          width: 88%;
          text-align: right;
          box-sizing: border-box;
          color: #555;
          border: none;
          display: inline-block;
          outline: none;
          -webkit-appearance: none;
        }

        span:nth-child(2) {
          display: inline-block;
          width: 88%;
          color: #555;
          text-align: right;
          box-sizing: border-box;
        }

        span:nth-child(2):after {
          content: "";
          display: inline-block;
          padding-top: .16rem;
          padding-right: .16rem;
          border-top: 1px solid silver;
          border-right: 1px solid silver;
          transform: rotate(45deg);
        }
      }

      .yan {
        font-size: .32rem;
        height: .88rem;
        line-height: .88rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        color: #000;
        input {
          font-size: .32rem;
          padding-right: .2rem;
          width: 60%;
          text-align: right;
          box-sizing: border-box;
          color: #555;
          border: none;
          display: inline-block;
          outline: none;
          -webkit-appearance: none;
        }
        span:last-child{
          background: #eee;
          padding: .1rem .06rem;
          color: #999;
        }
      }
    }

    >div {
      background: #fff;
      text-align: center;
      padding-top: .3rem;
      padding-bottom: .28rem;

      button {
        font-size: .32rem;
        color: #fff;
        width: 80%;
        background: #3aacff;
        height: .7rem;
        border-radius: .1rem;
        border: none;
      }
    }
  }

  .list {
    width: 100%;

    .tip {
      height: .5rem;
      line-height: .5rem;
    }

    ul {
      background: #fff;
      padding: 0 .18rem;

      li {
        position: relative;
        padding: .26rem 0 .26rem .54rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        height: 1.65rem;

        p:first-child {
          font-size: .3rem;
        }

        p:first-child span:last-child {
          font-size: .24rem;
          float: right;
          color: red;
        }

        p:nth-child(2) {
          margin-top: .1rem;
          font-size: .24rem;
          color: #a2a2a2;
        }

        p:nth-child(2) span:first-child {
          display: inline-block;
          max-width: 4.6rem;
        }

        p:nth-child(2) span:nth-child(2) {
          float: right;
        }
      }

      li:before {
        content: "";
        display: inline-block;
        width: .32rem;
        height: .32rem;
        border-radius: 50%;
        border: 2px solid #ccc;
        box-sizing: border-box;
        position: absolute;
        left: .05rem;
        top: 50%;
        transform: translate3d(0, -50%, 0);
      }

      li.active:before {
        background: #3aacff;
        border: none;
      }

      li.active:after {
        content: "";
        display: inline-block;
        padding-top: .17rem;
        padding-right: .1rem;
        border: 2px solid #fff;
        -webkit-transform: rotate(40deg) translate3d(0, -50%, 0);
        transform: rotate(40deg) translate3d(0, -50%, 0);
        position: absolute;
        left: .07rem;
        border-left: none;
        border-top: none;
        top: 47%;
      }
    }
  }

  footer {
    width: 100%;

    button {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      background: #3aacff;
      text-align: center;
      font-size: .34rem;
      color: #fff;
      border: none;
    }
  }

  .cityBox {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    bottom: -100%;
    background: #fff;
    transition: all .3s;
  }

  .show {
    bottom: 0%;
  }
</style>