<template>
  <div class="user">
    <template v-if="id==='foo'">foo</template>
    <template v-else>other</template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 'foo'
    }
  },
  mounted () {
    this.id = this.$route.params.id
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(this.$route)
    this.id = to.params.id
    next()
  }
}
</script>

<style scoped>
</style>
