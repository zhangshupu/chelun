<template>
  <div class="pullbox" @scroll="scrollPage()" ref="pullbox">
    <div ref="box">
      <li v-for="(item,index) in imgList" :key="index">
        <img :src="item.Url.replace('{0}',item.HighSize)" @click="clickImg(index)" alt="">
      </li>
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
        imgList: store => store.img.imgList,
        isFetch: store => store.img.isFetch
      })
    },
    mounted() {
      if (this.imgList.length == 0) {
        this.getImgList(this.$router.history.current.query.SerialID)
      }
    },
    methods: {
      ...mapActions({
        getImgList: 'img/getImgList'
      }),
      ...mapMutations({
        clickImg:'img/SwiperIsShow'
      }),
      scrollPage() {
        let height = window.innerHeight;
        let domRect = this.$refs.box.getBoundingClientRect()
        let that = this;
        if (height - domRect.top >= domRect.height - 20 && this.isFetch) {
          this.getImgList(this.$router.history.current.query.SerialID)
        }
      }
    }
  }
</script>

<style scoped lang='scss'>
  .pullbox {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow: auto;
    background: #fff;

    >div {
      width: 100%;
      overflow: hidden;
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  li {
    width: 32.6%;
    margin-bottom: .1rem;

    >img {
      width: 100%;
      display: block;
    }
  }
</style>