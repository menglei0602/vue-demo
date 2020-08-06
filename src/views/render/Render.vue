
<script>

export default {
  render: function (createElement) {
    return createElement(
      'h' + this.level, // 标签名称
      this.$slots.default // 子元素数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
// render函数等价于如下template模板
// <template>
//   <div>
//     <h1 v-if="level === 1">
//       <slot></slot>
//     </h1>
//     <h2 v-else-if="level === 2">
//       <slot></slot>
//     </h2>
//     <h3 v-else-if="level === 3">
//       <slot></slot>
//     </h3>
//     <h4 v-else-if="level === 4">
//       <slot></slot>
//     </h4>
//     <h5 v-else-if="level === 5">
//       <slot></slot>
//     </h5>
//     <h6 v-else-if="level === 6">
//       <slot></slot>
//     </h6>
//   </div>
// </template>

</script>

<style scoped>
</style>
