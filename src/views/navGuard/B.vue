<template>
  <div>B组件</div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter B')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave B')
    next()
  }
}
</script>
