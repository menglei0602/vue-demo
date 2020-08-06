<template>
  <Child ref="comA"></Child>
</template>
<script>
import Child from './Child.vue'
export default {
  components: {
    Child
  },
  mounted () {
    const comA = this.$refs.comA
    console.log(comA.title) // Vue.js
    comA.sayHello() // 弹窗
  }
}
</script>
