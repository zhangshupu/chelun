<template>
  <div class="swiperBox" @click="changeSwiperIsShow($event)">
    <swiper :options="swiperOption" class="swiper" ref="mySwiper">
      <swiper-slide v-for="(item,index) in imgList" :key="index">
        <img :src="item.Url.replace('{0}',item.HighSize)">
      </swiper-slide>
    </swiper>
    <div class="paginationHide">
      {{swiperInd+1}}/{{swiperSum}}
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css' //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    mounted() {
      if (this.imgList.length == 0) {
        this.getImgList(this.$router.history.current.query.SerialID);
      }
      this.swiper.slideTo(this.swiperInd, 1000, false);
    },
    computed: {
      swiperOption() {
        let that = this
        return {
          on: {
            slideChange: function () {
              that.changeSwiperInd(this.activeIndex)
              if (this.activeIndex == that.imgList.lenght) {
                that.getImgList(that.$router.history.current.query.SerialID)
              }
            },
          }
        }
      },
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      ...mapState({
        imgList: store => store.img.imgList,
        swiperSum: store => store.img.swiperSum,
        swiperInd: store => store.img.swiperInd,
      })
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      ...mapActions({
        getImgList: 'img/getImgList'
      }),
      ...mapMutations({
        changeSwiperInd: 'img/changeSwiperInd',
        changeSwiperIsShow: 'img/changeSwiperIsShow'
      })
    },
    changeSwiperIsShow(e) {
      if (e.target == e.currentTarget) {
        this.changeSwiperIsShow()
      }
    }
  }
</script>

<style scoped lang='scss'>
  .swiperBox {
    width: 100%;
    height: 100%;
    background: #000;
  }

  .swiper {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%)
  }

  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }

  .paginationHide {
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: .4rem;
  }
</style>