<template>
  <div>SaveFirst:{{firstData}}</div>
</template>

<script>
export default {
  name: 'SaveFirst',
  data () {
    return {
      firstData: 0
    }
  },
  mounted () {
    this.firstData = 1
  },
  activated () {
    this.firstData++
  }
}
</script>

<style scoped>
</style>
