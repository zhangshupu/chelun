<template>
  <div id="app">
    <router-view></router-view>
    <Loading v-show="loadingIsShow" />
  </div>
</template>

<script>
  import Loading from './components/Loading.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'App',
    computed: {
      ...mapState({
        loadingIsShow: store => store.loadingIsShow
      })
    },
    components: {
      Loading
    }
  }
</script>

<style lang='scss'>
  @import url('./styles/common.css');

  #app {
    width: 100%;
    height: 100%;
  }
</style>