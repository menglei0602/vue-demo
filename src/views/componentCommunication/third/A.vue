<template>
  <div>
    <h3>A组件：{{name}}</h3>
    <button @click="send">将名字发送给C组件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'tom'
    }
  },
  methods: {
    send () {
      this.$Event.$emit('data-a', this.name)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
