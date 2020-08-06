<template>
  <div>
    <!-- 详见：https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6 -->
    <h2>$listeners将原生事件绑定到组件</h2>
    <h3>根元素上不是input元素，导致父级的 focus.native 监听器将静默失败</h3>
    <base-input v-on:focus="onFocus" v-on:input="onInput"></base-input>
    <h3>$listeners解决上面的问题</h3>
    <base-input-listeners v-on:focus="onFocus" v-on:input="onInput"></base-input-listeners>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue'
import BaseInputListeners from './BaseInputListeners.vue'
export default {
  components: {
    BaseInput,
    BaseInputListeners
  },
  methods: {
    onFocus () {
      console.log('onFocus')
    },
    onInput () {
      console.log('onInput')
    }
  }
}
</script>

<style scoped>
</style>
