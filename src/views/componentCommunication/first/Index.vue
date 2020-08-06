<template>
  <div id="app">
    <users v-bind:users="users"></users>
  </div>
</template>
<script>
import Users from './Users'
export default {
  name: 'App',
  data () {
    return {
      users: ['Henry', 'Bucky', 'Emily']
    }
  },
  components: {
    'users': Users
  }
}
</script>

<style lang="less" scoped>

</style>
