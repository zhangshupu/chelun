<template>
  <div class="city">
    <div class="province">
      <p>省份</p>
      <ul>
        <li v-for="(item,index) in cityList" :key="index" @click="selectCity(item.CityID)">
          {{item.CityName}}
        </li>
      </ul>
    </div>
    <div class="Urban" v-show="UrbanIsShow">
      <ul :class="UrbanIsShow?'showul':''">
        <li v-for="(item,index) in UrbanList" :key="index" @click="clickUrban([carId,item.CityID,item.CityName])">
          {{item.CityName}}
        </li>
      </ul>
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
        carId: 0,
      }
    },
    mounted() {
      this.carId = this.$router.history.current.query.carId
    },
    computed: {
      ...mapState({
        cityList: store => store.inquiry.cityList,
        UrbanList: store => store.inquiry.UrbanList,
        UrbanIsShow: store => store.inquiry.UrbanIsShow
      })
    },
    methods: {
      ...mapActions({
        selectCity: 'inquiry/getUrban',
        clickUrban: 'inquiry/getCityID'
      })
    }
  }
</script>

<style scoped lang='scss'>
  .city {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .province {
    width: 100%;

    p {
      height: .4rem;
      line-height: .4rem;
      font-size: .24rem;
      padding-left: .2rem;
      background: #f4f4f4;
    }

    ul {
      width: 100%;

      li {
        padding-left: .3rem;
        font-size: .28rem;
        height: .8rem;
        line-height: .8rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        margin-left: .1rem;
        position: relative;
      }

    }
  }

  .Urban {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    background: rgba(0, 0, 0, .6);

    ul {
      height: 100%;
      transform: translate3d(100%, 0, 0);
      background: #fff;
      overflow: auto;
      animation: showul .3s;
      animation-fill-mode: forwards;

      li {
        padding-left: .3rem;
        font-size: .28rem;
        height: .8rem;
        line-height: .8rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        margin-left: .1rem;
        transition: all .5s;
      }
    }

    @keyframes showul {
      0% {
        transform: translate3d(100%, 0, 0);
      }

      100% {
        transform: translate3d(30%, 0, 0);
      }
    }
  }
</style>