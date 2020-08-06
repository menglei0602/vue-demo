<template>
  <div>SaveDefault:{{defaultData}}</div>
</template>

<script>
export default {
  name: 'SaveDefault',
  data () {
    return {
      defaultData: 0
    }
  },
  mounted () {
    this.defaultData = 1
  },
  activated () {
    this.defaultData++
  }
}
</script>

<style scoped>
</style>
