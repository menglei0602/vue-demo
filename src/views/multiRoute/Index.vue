<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style scoped>
</style>
