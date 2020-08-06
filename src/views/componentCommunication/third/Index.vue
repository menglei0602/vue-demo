<template>
  <div>
    <my-a></my-a>
    <my-b></my-b>
    <my-c></my-c>
  </div>
</template>

<script>
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
export default {
  components: {
    'my-a': A,
    'my-b': B,
    'my-c': C
  }
}
</script>

<style lang="less" scoped>
</style>
