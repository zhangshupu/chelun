<template>
  <div class="color">
    <p>全部颜色</p>
    <div>
      <p class="type">
        <span :class="[index==ind?'active':'']" v-for="(item,key,index) in ColourData" :key="index" @click="ClickSpan(index)">
          {{key}}
        </span>
      </p>
      <ul v-for="(item,key,index) in ColourData" v-if="index==ind" :key="index">
        <li @click="clickColor(items.ColorId)" v-for="(items,ind) in item" :key='ind'>
          <span :style="{'background':items.Value}"></span>
          {{items.Name}}
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
        ind: 0,
        SerialID: '',
        query: {}
      }
    },
    computed: {
      ...mapState({
        ColourData: store => store.colour.ColourData
      }),
    },
    mounted() {
      this.SerialID = this.$router.history.current.query.SerialID
      this.query = this.$router.history.current.query
      this.getColourData(this.SerialID)
    },
    methods: {
      ...mapActions({
        getColourData: 'colour/getColourData'
      }),
      ...mapMutations({

      }),
      clickColor(ColorId) {
         _hmt.push(['_trackEvent','汽车报价','tap','颜色选择']);
        this.query.ColorID = ColorId;
        this.$router.push({
          path: '/img',
          query: this.query
        })
      },
      ClickSpan(ind) {
        this.ind = ind
      }
    },
  }
</script>

<style scoped lang='scss'>
  .color {
    width: 100%;
    height: 100%;

    >p {
      width: 100%;
      background: #fff;
      margin-top: .2rem;
      padding: .1rem 0;
      text-align: center;
      font-size: .3rem;
      color: #00afff;
    }

    >div {
      width: 100%;
      margin-top: .2rem;

      .type {
        width: auto;
        overflow: auto;
        padding: .2rem 0;
        box-sizing: border-box;
        display: flex;
        background: #fff;

        span {
          margin: 0 .3rem;
          font-size: .3rem;
        }

        .active {
          color: #00afff;
        }
      }

      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        justify-content: space-between;
        margin-top: .2rem;
        padding: .3rem 3%;
        box-sizing: border-box;

        li {
          width: 48%;
          border: solid .01rem #3aacff;
          padding: .2rem 0;
          margin-bottom: .2rem;
          display: flex;
          align-items: center;
          padding-left: .2rem;
          box-sizing: border-box;

          span {
            width: .4rem;
            height: .4rem;
            display: block;
            margin-right: .2rem;
          }
        }
      }
    }
  }
</style>