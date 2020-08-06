<template>
  <div class="hello">
    <ul>
      <li v-for="(user, index) in users" :key="index">{{user}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    users: { // 这个就是父组件中子标签自定义名字
      type: Array,
      required: true
    }
  }
}
</script>
