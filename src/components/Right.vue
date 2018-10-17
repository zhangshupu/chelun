<template>
  <div class="right">
    <div class="child" v-for="(item,index) in MakeList" :key="index">
      <p>{{item.GroupName}}</p>
      <router-link :to="{path:'/details',query:{'id':value.SerialID}}" v-for="(value,ind) in item.GroupList" :key="ind"
        class="dl">
        <dt><img :data-src="value.Picture.replace('http','https')"></dt>
        <dd>
          <p class="title">{{value.AliasName}}</p>
          <p class="price">{{value.DealerPrice}}</p>
        </dd>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {
    lazyLoad
  } from '../utils/lazyLoad'
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex';
  export default {
    computed: {
      ...mapState({
        MakeList: state => state.index.MakeList,
      })
    },
    updated() {
      lazyLoad('.right')
    },
    methods: {
      ...mapActions({

      }),
    }
  }
</script>

<style scoped lang='scss'>
  .right {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #fff;
    border-left: solid .01rem #eee;

    .main {
      width: 100%;
    }

    .child {
      width: 100%;

      >p {
        font-size: .25rem;
        height: .45rem;
        padding-left: 3%;
        box-sizing: border-box;
        background: #eee;
        color: #000;
        line-height: .45rem;
      }

      .dl {
        width: 94%;
        height: auto;
        display: flex;
        margin-left: 3%;
        box-sizing: border-box;
        border-bottom: solid .01rem #eee;
        align-items: center;
        padding: .1rem 0;

        >dt {
          width: 35%;
          display: flex;
          align-items: center;

          >img {
            width: 100%;
          }
        }

        >dd {
          flex: 1;
          padding-left: .3rem;
          box-sizing: border-box;
          font-size: .30rem;

          .title {
            font-size: .34rem;
            color: #5f687a;
          }

          .price {
            font-size: .28rem;
            color: #f00;
            margin-top: .05rem
          }
        }
      }
    }
  }
</style>