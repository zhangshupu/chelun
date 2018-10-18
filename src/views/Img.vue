<template>
  <div class="car_img">
    <div class="flex-row">
      <p>
        <router-link :to="{path:'/colour',query:query}" tag="span">颜色</router-link>
      </p>
      <p>
        <router-link :to="{path:'/carModel',query:query}" tag="em">车款</router-link>
      </p>
    </div>
    <div class="main">
      <ul class="img-default" v-for="(item,ind) in imgData" :key="ind">
        <div @click="clickShow([item.Count,item.Id])">
          <p>{{item.Name}}</p>
          <span>{{item.Count}}></span>
        </div>
        <li v-for="(items,ind) in item.List" :key="ind">
          <img :data-src="items.Url.replace('{0}',items.LowSize)" @click="clickImg([ind,item.Count,item.Id])" alt="">
        </li>
      </ul>
    </div>
    <div class="pull" v-if="pullIsShow">
      <Pull />
    </div>
    <div class="swiper" v-if="swiperIsShow">
      <Swiper />
    </div>
  </div>
</template>

<script>
  import {
    lazyLoad
  } from '../utils/lazyLoad';
  import Pull from '../components/Pull'
  import Swiper from '../components/Swiper'
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    data() {
      return {
        query: {}
      }
    },
    components: {
      Pull,
      Swiper
    },
    computed: {
      ...mapState({
        imgData: store => store.img.imgData,
        pullIsShow: store => store.img.pullIsShow,
        swiperIsShow: store => store.img.swiperIsShow
      })
    },
    mounted() {
      this.query = this.$router.history.current.query;
      this.getImgData(this.$router.history.current.query.SerialID)
    },
    updated() {
      lazyLoad('.main')
    },
    methods: {
      ...mapActions({
        getImgData: 'img/getImgData',
      }),
      ...mapMutations({
        clickShow: 'img/changeIsShow',
        clickImg: 'img/shangeSwiperIsShow'
      })
    },
  }
</script>

<style scoped lang='scss'>
  .car_img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  .flex-row {
    position: fixed;
    background: #fff;
    top: 0;
    width: 100%;
    height: .8rem;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    z-index: 99;

    p {
      width: 50%;
      text-align: center;
      box-sizing: border-box;
      color: #454545;
      display: inline-block;

      span {
        max-width: 2.6rem;
        display: inline-block;
        vertical-align: middle;
        line-height: 1.25;
        font-size: .28rem;
      }

      em {
        text-overflow: ellipsis;
        font-size: .28rem;
        overflow: hidden;
      }
    }

    p:nth-child(2) {
      border-left: 1px solid #ececec;
    }

    p:after {
      content: "";
      display: inline-block;
      padding-top: .16rem;
      padding-right: .16rem;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      transform: rotate(135deg);
      margin-left: .2rem;
      vertical-align: 5%;
    }
  }

  .main {
    width: 100%;
    overflow: auto;
    padding-top: .98rem;
  }

  .img-default {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;

    >div {
      width: 32.7%;
      height: 1.7rem;
      position: absolute;
      background: rgba(56, 90, 130, .5);
      top: 0;
      left: 0;
      color: #fff;
      text-align: center;
      font-size: .28rem;

      p {
        margin-top: .4rem;
      }
    }

    li {
      width: 32.7%;
      margin-bottom: .09rem;
      height: 1.7rem;

      >img {
        width: 100%;
        display: block;
        height: 1.7rem;
      }
    }
  }

  .pull {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 199;
  }

  .swiper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 199;
  }
</style>