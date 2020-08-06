<template>

  <div>
    <h3>B组件：{{age}}</h3>
    <button @click="send">将年龄发送给C组件</button>
  </div>
</template>

<script>
export default {
  data () {
	  return {
	    age: 20
	  }
  },
  methods: {
	  send () {
	    this.$Event.$emit('data-b', this.age)
	  }
  }
}
</script>

<style lang="less" scoped>
</style>
