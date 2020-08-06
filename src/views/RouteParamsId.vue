<template>
  <div class="user">
    <h2>this.$router：{{paramsId}}</h2>
    <input type="button" value="点击后退" @click="goBack"/>
  </div>
</template>

<script>
export default {
  computed: {
    paramsId () {
      // 我们很快就会看到 `params` 是什么
      let temp = this.$route.params.id
      console.log(temp)
      return temp
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
