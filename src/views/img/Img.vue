<template>
  <div>
    <!-- 成功引入的三种方法： -->
    <!-- 1 -->
    <img src="~@/views/img/qq.png" width="100">
    <!-- 2 -->
    <div class="img1"></div>
    <!-- 3 -->
    <div class="img2" :style="{backgroundImage: 'url(' + img + ')' }"></div>
  </div>
</template>

<script>
import Img from '@/views/img/qq.png'

export default {
  data () {
    return {
      img: Img
    }
  }
}
</script>

<style lang="less" scope>
  .img1{
    width: 100px;
    height: 100px;
    background: url('~@/views/img/qq.png') center center no-repeat;
    background-size: 100px auto;
  }
  .img2{
    width: 100px;
    height: 100px;
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: 100px auto;
  }
</style>
