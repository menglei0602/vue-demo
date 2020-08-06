<template>
  <div>SaveSecondDetail:{{id}}</div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  mounted () {
    console.log(this.$route)
    this.id = this.$route.query.id
  },
  activated () {
    // if (this.$route.path === "/state-save/second/detail") {
    this.id++
    console.log('activated')
    console.log(this.id)
    // }
  }
}
</script>

<style scoped>
</style>
