<template>
  <div class="details">
    <div>
      <router-link :to="{path:'/img', query:{'SerialID':detailsData.SerialID}}" tag="div" class="banner">
        <img :src="detailsData.Picture">
        <span>{{detailsData.pic_group_count}}张照片</span>
      </router-link>
      <div class="info">
        <ul>
          <li>{{detailsData.market_attribute?detailsData.market_attribute.dealer_price:''}}</li>
          <li>指导价：{{detailsData.market_attribute? detailsData.market_attribute.official_refer_price:''}}</li>
        </ul>
        <router-link :to="{path:'/inquiry',query:{carId:item[0].car_id,SerialID:detailsData.SerialID}}" tag="button"
          v-for="(item,key,index) in list" :key="index" v-if="index==0">询问低价</router-link>
      </div>
      <div class='table'>
        <span v-for="(item,index) in yearList" :key="index" @click="clickTable([index,item])" :class="show_index==index?'active':''">{{item}}</span>
      </div>
      <div class="main">
        <div class="list_item" v-for="(item,key,index) in list" :key="index">
          <p>{{key}}</p>
          <div v-for="(items,ind) in item" :key="ind" class="item_box">
            <h2>{{items.market_attribute.year}}款 {{items.car_name}}</h2>
            <h3>{{items.horse_power}}马力{{items.gear_num}}档</h3>
            <p>
              指导价
              <em>{{items.market_attribute.official_refer_price}}</em>
              <span>{{items.market_attribute.dealer_price_min}}起</span>
            </p>
            <router-link :to="{path:'/inquiry',query:{carId:items.car_id}}" tag="h5">询问低价</router-link>
          </div>
        </div>
      </div>
      <router-link :to="{path:'/inquiry',query:{carId:item[0].car_id}}" tag="footer" v-for="(item,key,index) in list"
        :key="index" v-if="index==0">
        <h3>{{detailsData.BottomEntranceTitle}}</h3>
        <p>本地经销商为你报价</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapState({
        detailsData: store => store.details.detailsData,
        list: store => store.details.list,
        yearList: store => store.details.yearList,
        show_index: store => store.details.show_index
      })
    },
    components: {

    },
    mounted() {
      // 获取地址栏参数
      this.getDetailsData(this.$router.history.current.query.id)
    },
    methods: {
      ...mapActions({
        getDetailsData: 'details/getDetailsData',
      }),
      ...mapMutations({
        clickTable: 'details/changeShow_index'
      }),
    }
  }
</script>

<style scoped lang='scss'>
  @import url('../styles/common.css');

  .details {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .banner {
    width: 100%;
    position: relative;
    background: #fff;
    height: 3.29rem;
    overflow: hidden;

    >img {
      width: 100%;
      display: block;
      transform: translateY(-.7rem)
    }

    >span {
      position: absolute;
      right: .3rem;
      bottom: .3rem;
      padding: .03rem .06rem;
      background: rgba(0, 0, 0, .4);
      border-radius: .2rem;
      color: #fff;
    }
  }

  .info {
    width: 100%;
    padding: .2rem .1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;

    >ul {
      li:nth-child(1) {
        font-size: .36rem;
        color: #f00;
        font-weight: 500;
      }

      li:nth-child(2) {
        font-size: .26rem;
        color: #ccc;
      }
    }

    button {
      padding: .15rem 1rem;
      background: #00afff;
      color: #fff;
      font-size: .32rem;
      border-radius: .1rem;
      box-sizing: border-box;
      border: none;
    }
  }

  .table {
    width: 100%;
    padding: .16rem .3rem;
    box-sizing: border-box;
    display: flex;
    background: #fff;
    margin-top: .15rem;

    >span {
      font-size: .32rem;
      margin-right: .46rem;
    }

    .active {
      color: #00afff;
    }
  }

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1.1rem;
    box-sizing: border-box;
  }

  .list_item {
    width: 100%;

    >p {
      font-size: .28rem;
      width: 100%;
      padding: .05rem .3rem;
      box-sizing: border-box;
      color: #999;

    }

    .item_box {
      width: 100%;
      background: #fff;
      box-sizing: border-box;
      margin-bottom: .19rem;

      >h2 {
        font-size: .31rem;
        font-weight: normal;
        padding: 0 .3rem;
        box-sizing: border-box;
      }

      >h3 {
        font-size: .26rem;
        color: #ccc;
        margin-top: .05rem;
        font-weight: normal;
        padding: 0 .3rem;
        box-sizing: border-box;
      }

      >p {
        width: 100%;
        text-align: right;
        font-size: .24rem;
        color: #999;
        padding: 0 .3rem;
        box-sizing: border-box;

        em {
          margin-left: .04rem;
          margin-right: .2rem;
        }

        >span {
          color: #f00;
          font-size: .30rem;
        }
      }

      >h5 {
        width: 100%;
        margin-top: .04rem;
        border-top: solid .01rem #eee;
        padding: .17rem 0;
        text-align: center;
        font-size: .32rem;
        font-weight: normal;
        color: #00afff;
        box-sizing: border-box;
      }
    }

    .item_box:last-child {
      margin-bottom: 0;
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background: #00afff;
    font-size: .32rem;
    color: #fff;
    text-align: center;

    >h3 {
      margin-top: .05rem;
    }

    >p {
      font-size: .24rem;
    }
  }
</style>