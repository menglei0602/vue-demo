<template>
  <div>
    <button @click="childNumTemp++">更新子组件（子组件内部+prop变量）</button>
    <div>{{childNumTemp}}</div>

    <button @click="temp++">更新子组件（子组件内部+自身变量）</button>
    <div>{{temp}}</div>
  </div>
</template>

<script>
export default {
  props: {
    childNum: {
      type: Number
    }
  },
  data () {
    return {
      temp: 1
    //   childNumTemp: this.childNum
    }
  },
  //   props属性更新时，通过watch/computed监听变化，同步子组件状态
  //   watch: {
  //     childNum() {
  //       this.childNumTemp = this.childNum;
  //     }
  //   },
  computed: {
    childNumTemp () {
      return this.childNum
    }
  },
  beforeCreate: function () {
    console.log('child beforeCreate')
  },
  created: function () {
    console.log('child created')
  },
  beforeMount: function () {
    console.log('child beforeMount')
  },
  mounted: function () {
    console.log('child mounted')
  },
  deactivated: function () {
    console.log('child deactivated')
  },
  activated: function () {
    console.log('child activated')
  },
  beforeUpdate: function () {
    console.log('child beforeUpdate')
  },
  updated: function () {
    console.log('child updated')
  },
  beforeDestroy: function () {
    console.group('child beforeDestroy 销毁前状态===============》')
    var state = {
      el: this.$el,
      data: this.$data,
      message: this.message
    }
    console.log(this.$el)
    console.log(state)
    console.log('child beforeDestroy')
  },
  destroyed: function () {
    console.group('child destroyed 销毁完成状态===============》')
    var state = {
      el: this.$el,
      data: this.$data,
      message: this.message
    }
    console.log(this.$el)
    console.log(state)
    console.log('child destroyed')
  }
}
</script>

<style lang="less" scoped>
</style>
