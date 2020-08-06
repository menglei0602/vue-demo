<template>
  <div>A组件</div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter A')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave A')
    next()
  }
}
</script>
