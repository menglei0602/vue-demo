<template>
  <div>
    <h3>C组件：{{name}}，{{age}}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      age: ''
    }
  },
  mounted () {
    // 在模板编译完成后执行
    this.$Event.$on('data-a', name => {
      this.name = name // 箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
    })
    this.$Event.$on('data-b', age => {
      this.age = age
    })
  }
}
</script>

<style lang="less" scoped>
</style>
