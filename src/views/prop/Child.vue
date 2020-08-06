<template>
  <div>
    <div>
      <div>{{prop}}</div>
      <div>
        {{id}}
        {{title}}
      </div>
      <div>{{propE}}</div>
      <div>{{propF}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prop: String,
    id: String,
    title: String,
    // 带有默认值的对象
    propE: {
      type: Object
      // 对象或数组默认值必须从一个工厂函数获取
    //   default: function() {
    //     return { message: "hello" };
    //   }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
</style>
