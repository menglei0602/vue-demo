<template>
  <div id="app">
    <app-header v-on:titleChanged="updateTitle" ></app-header>
    <h2>{{title}}</h2>
  </div>
</template>
<script>
import Header from './Child.vue'
export default {
  name: 'App',
  data () {
    return {
      title: '传递的是一个值'
    }
  },
  methods: {
    updateTitle (e) { // 声明这个函数
      this.title = e
    }
  },
  components: {
    'app-header': Header
  }
}
</script>
