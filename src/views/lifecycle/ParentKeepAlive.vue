<template>
  <div>
    <Child></Child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  props: {
    keepAliveFlag: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      ifFlag: true,
      showFlag: true,
      parentNum: 1,
      childNum: 1
    }
  },
  components: {
    Child
  },
  beforeCreate: function () {
    console.log('father beforeCreate')
  },
  created: function () {
    console.log('father created')
  },
  beforeMount: function () {
    console.log('father beforeMount')
  },
  mounted: function () {
    console.log('father mounted')
  },
  beforeUpdate: function () {
    console.log('father beforeUpdate')
  },
  updated: function () {
    console.log('father updated')
  },
  activated: function () {
    console.log('father activated')
  },
  deactivated: function () {
    console.log('father deactivated')
  },
  beforeDestroy: function () {
    console.group('father beforeDestroy 销毁前状态===============》')
    var state = {
      el: this.$el,
      data: this.$data,
      message: this.message
    }
    console.log(this.$el)
    console.log(state)
    console.log('father beforeDestroy')
  },
  destroyed: function () {
    console.group('father destroyed 销毁完成状态===============》')
    var state = {
      el: this.$el,
      data: this.$data,
      message: this.message
    }
    console.log(this.$el)
    console.log(state)
    console.log('father destroyed')
  }
}
</script>

<style lang="less" scoped>
</style>
