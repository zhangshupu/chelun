<template>
  <div class="loading">
    <img src="http://img.zcool.cn/community/01cddc57a93f670000018c1bff1e12.gif" alt="">
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang='scss'>
  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #212121;
    display: flex;
    justify-content: center;
    align-items: center;

    >img {
      width: 50%;
      display: block;
    }
  }
</style>