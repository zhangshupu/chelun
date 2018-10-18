<template>
  <div ref="index" class='index'>
    <div class="main" ref="main">
      <div class="child" v-for="(item,key,index) in BrandList" :key="index" ref="child">
        <p>{{key}}</p>
        <dl v-for="(value,ind) in item" :key="ind" @click="click_item(value.MasterID)">
          <dt><img :data-src="value.CoverPhoto.replace('http','https')"></dt>
          <dd>{{value.Name}}</dd>
        </dl>
      </div>
      <div class="letter" v-show="isShowLetter">{{letter}}</div>
    </div>
    <div class="list" @touchmove='touchmove($event)' @touchend='TouchEnd()' ref="list">
      <span @touchstart='touchstart(0,$event)'>#</span>
      <span v-for="(item,key,index) in BrandList" :key="index" ref="list_item" @touchstart='touchstart(index,$event)'>
        {{key}}
      </span>
    </div>
    <div :class="['right_box', isRightShow?'active':'']" ref="right_box" @touchstart='rightTouchstart($event)'
      @touchmove='rightTouchmove($event)' @touchend='rightTouchEnd()'>
      <Right />
    </div>
  </div>
</template>
<script>
  import Right from '../components/Right';
  import {
    lazyLoad
  } from '../utils/lazyLoad'
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex';
  export default {
    data() {
      return {
        origin: 0, // 手指按下时距离屏幕左边的距离
        right_Width: 0,
        dist: 0,
        letter: 'A',
        isShowLetter: false //判断中间的字母是否显示
      }
    },
    computed: {
      ...mapState({
        BrandList: state => state.index.BrandList,
        MakeList: state => state.index.MakeList,
        isRightShow: state => state.index.isRightShow
      })
    },
    mounted() {
      this.getBrandList();
    },
    updated() {
      lazyLoad('.index')
    },
    components: {
      Right,
    },
    methods: {
      ...mapActions({
        getBrandList: 'index/getBrandList',
        getMakeList: 'index/getMakeList'
      }),
      ...mapMutations({
        changeIsRightShow: 'index/changeIsRightShow'
      }),
      // 点击右侧字母滑动
      touchstart(ind, e) {
        // 根据字母的索引让最外面的盒子滚动
        this.$refs.index.scrollTop = this.$refs.child[ind].offsetTop
      },
      touchmove(e) {
        this.isShowLetter = true;
        // list 的高度
        let cont = this.$refs.list.getBoundingClientRect().height
        // main的高度
        let cont1 = this.$refs.main.getBoundingClientRect().height
        // list距离顶部的高度
        let distance = this.$refs.list.getBoundingClientRect().top
        // list滑动的距离
        let distan = e.changedTouches[0].pageY - distance
        // 每个字母的高度
        let item_height = this.$refs.list_item[0].getBoundingClientRect().height
        //计算滚动到第几个字母了
        let num = Math.floor((distan - item_height) / item_height);
        // 定义一个空数组存储字母列表的数据
        let arr = [];
        for (const key in this.BrandList) {
          arr.push(key)
        }
        // 判断滑动位置是否超过字母列表边界
        if (distan - item_height < 0) {
          this.letter = arr[0];
          this.$refs.index.scrollTop = 0
        } else if (distan > cont) {
          this.letter = arr[arr.length - 1]
          this.$refs.index.scrollTop = cont1 - document.documentElement.clientHeight
        } else {
          this.letter = arr[num]
          this.$refs.index.scrollTop = this.$refs.child[num].offsetTop
        }
      },
      // 滑动字母列表松开手指时执行
      TouchEnd() {
        this.isShowLetter = false;
      },
      // 点击车系
      click_item(ind) {
        this.getMakeList(ind)
      },
      // 求右边框手指按下时距离屏幕左边的距离
      rightTouchstart(e) {
        this.origin = e.changedTouches[0].pageX;
      },
      // 手指移动时右边框跟随移动
      rightTouchmove(e) {
        // 右边框的width值
        this.right_Width = this.$refs.right_box.getBoundingClientRect().width
        // 滑动是滑动的距离与整体盒子的比例
        this.dist = ((e.changedTouches[0].pageX - this.origin) / this.right_Width) * 100
        if (this.dist > 0) {
          this.$refs.right_box.style = `transform:translateX(${this.dist}%)`
        }
      },
      // 手指松开时右边框隐藏或者还原
      rightTouchEnd() {
        // 判断滑动的距离，当滑动的距离大于30%时，右边框消失，或者还原
        if (this.dist > 40) {
          // 清除行内样式
          this.$refs.right_box.style = ''
          this.changeIsRightShow()
        } else {
          // 清除行内样式
          this.$refs.right_box.style = ''
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import url('../styles/common.css');

  .index {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .main {
    width: 100%;
  }

  .child {
    width: 100%;
    background: #fefefe;

    >p {
      font-size: .33rem;
      height: .45rem;
      padding-left: 3%;
      box-sizing: border-box;
      background: #eee;
      color: #999;
      line-height: .45rem;
    }

    >dl {
      width: 94%;
      height: auto;
      display: flex;
      margin-left: 3%;
      box-sizing: border-box;
      border-bottom: solid .01rem #eee;
      align-items: center;

      >dt {
        width: 11%;
        height: 1rem;
        display: flex;
        align-items: center;

        >img {
          width: 100%;
        }
      }

      >dd {
        flex: 1;
        padding-left: .4rem;
        box-sizing: border-box;
        font-size: .30rem;
      }
    }
  }

  .list {
    position: fixed;
    right: .16rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;

    span {
      font-size: .25rem;
      color: #999;
      padding-bottom: .1rem;
    }
  }

  .letter {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
    width: .8rem;
    height: .8rem;
    background: #eee;
    color: #999;
    font-size: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right_box {
    width: 70%;
    height: 100%;
    position: fixed;
    background: #fff;
    top: 0;
    right: 0%;
    transform: translateX(100%);
    transition: all .2s;
  }

  .active {
    transform: translateX(0)
  }
</style>