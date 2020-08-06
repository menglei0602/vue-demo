<template>
  <div>
      name:{{name}}
      <Grandchild></Grandchild>
  </div>
</template>

<script>
import Grandchild from './Grandchild.vue'
export default {
  inject: ['name'],
  components: {
    Grandchild
  }
}
</script>

<style lang="less" scoped>
</style>
