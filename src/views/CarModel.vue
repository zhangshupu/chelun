<template>
  <div class="car">
    <div class='table'>
      <span v-for="(item,index) in yearList" :key="index" @click="clickTable([index,item])" :class="show_index==index?'active':''">{{item}}</span>
    </div>
    <div class="main">
      <div class="list_item" v-for="(item,key,index) in list" :key="index">
        <p>{{key}}</p>
        <div @click="clickCar(items.car_id)" class="item_box" v-for="(items,ind) in item" :key="ind">
          <h2>{{items.market_attribute.year}}款 {{items.car_name}}</h2>
          <h3>{{items.horse_power}}马力{{items.gear_num}}档</h3>
          <p>
            指导价
            <em>{{items.market_attribute.official_refer_price}}</em>
            <span>{{items.market_attribute.dealer_price_min}}起</span>
          </p>
        </div>
      </div>
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
    data() {
      return {
        SerialID: ''
      }
    },
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
      this.SerialID = this.$router.history.current.query.SerialID;
      // 获取地址栏参数
      this.getDetailsData(this.SerialID)
    },
    methods: {
      ...mapActions({
        getDetailsData: 'details/getDetailsData',
      }),
      ...mapMutations({
        clickTable: 'details/changeShow_index',
        changeCarID: 'img/changeCarID'
      }),
      clickCar(CarID) {
        _hmt.push(['_trackEvent', '汽车报价', 'tap', '车款选择']);
        this.changeCarID(CarID)
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang='scss'>
  .car {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow: auto;
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
      border-bottom: solid .01rem #ccc;

      >h2 {
        font-size: .31rem;
        font-weight: normal;
        padding: 0 .3rem;
        box-sizing: border-box;
      }

      >h3 {
        font-size: .26rem;
        color: #ccc;
        margin-top: .04rem;
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
    }

    .item_box:last-child {
      margin-bottom: 0;
    }
  }
</style>