<template>
  <div>
    <Child></Child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  provide: {
    name: '浪里行舟'
  },
  components: {
    Child
  }
}
</script>

<style lang="less" scoped>
</style>
