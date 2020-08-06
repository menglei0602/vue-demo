<template>
  <div>
      grandchild:{{name}}
  </div>
</template>

<script>
export default {
  inject: ['name']
}
</script>

<style lang="less" scoped>
</style>
