<template>
  <div class="user">
    <h2>嵌套路由 User@ {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route)
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(from)
    next()
  }
}
</script>

<style scoped>
</style>
