<template>
  <div>
    <div>
      <p>执行顺序，请在控制台查看打印</p>
      <div>
        <!-- 1.对父组件控制时 -->
        <button @click="ifFlag = !ifFlag">父组件显示/隐藏（v-if）</button>
        <Parent v-if="ifFlag"></Parent>
      </div>
      <div>
        <button @click="keepAliveFlag = !keepAliveFlag">父组件显示/隐藏（v-if+keepAliveFlag）</button>
        <keep-alive>
          <ParentKeepAlive v-if="keepAliveFlag"></ParentKeepAlive>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Parent from './Parent.vue'
import ParentKeepAlive from './ParentKeepAlive.vue'
export default {
  data () {
    return {
      ifFlag: true,
      keepAliveFlag: true
    }
  },
  components: {
    Parent,
    ParentKeepAlive
  },
  beforeCreate: function () {
    console.log('liefcycle beforeCreate')
  },
  created: function () {
    console.log('liefcycle created')
  },
  beforeMount: function () {
    console.log('liefcycle beforeMount')
  },
  mounted: function () {
    console.log('liefcycle mounted')
  },
  beforeUpdate: function () {
    console.log('liefcycle beforeUpdate')
  },
  updated: function () {
    console.log('liefcycle updated')
  },
  activated: function () {
    console.log('liefcycle activated')
  },
  deactivated: function () {
    console.log('liefcycle deactivated')
  },
  beforeDestroy: function () {
    console.group('liefcycle beforeDestroy 销毁前状态===============》')
    var state = {
      el: this.$el,
      data: this.$data,
      message: this.message
    }
    console.log(this.$el)
    console.log(state)
    console.log('liefcycle beforeDestroy')
  },
  destroyed: function () {
    console.group('liefcycle destroyed 销毁完成状态===============》')
    var state = {
      el: this.$el,
      data: this.$data,
      message: this.message
    }
    console.log(this.$el)
    console.log(state)
    console.log('liefcycle destroyed')
  }
}
</script>

<style lang="less" scoped>
</style>
