<template>
  <div>
    <!-- <div>
      v-if显示/隐藏会触发子组件的生命周期钩子
      <button @click="ifFlag = !ifFlag">子组件显示/隐藏（v-if）</button>
      <Child v-if="ifFlag"></Child>
    </div>
    <div>
      v-show显示/隐藏不会触发子组件的生命周期钩子
      <button @click="showFlag = !showFlag">子组件显示/隐藏（v-show）</button>
      <Child v-show="showFlag"></Child>
    </div>
    <div>
      <button @click="parentNum++">更新父组件</button>
      {{parentNum}}
    </div>
    <div>
      <button @click="childNum++">更新子组件（通过prop传参）</button>
      {{childNum}}
      <Child :childNum="childNum"></Child>
    </div> -->
    <!-- 1.对父组件控制时 -->
    <Child></Child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
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
