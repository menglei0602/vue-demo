<template>
  <div>
    <!-- <Child prop="father" :propE="{a:'b'}" :propF="'success'"></Child> -->

    <!-- 传入一个对象的所有属性 -->
    <Child v-bind="post"></Child>

    <div id="ref-outside-component" v-on:click="consoleRef">
      <component-father ref="outsideComponentRef"></component-father>
      <p>ref在外面的组件上</p>
    </div>

  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  data () {
    return {
      post: {
        id: '1',
        title: 'My Journey with Vue'
      }
    }
  },
  components: {
    Child
  }
}
</script>

<style scoped>
</style>
