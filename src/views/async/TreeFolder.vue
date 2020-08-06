<template>
  <div>
    <p>
      <h1>循环引用存在情况：使用一个模块系统依赖/导入组件，例如通过 webpack 或 Browserify，详见如下两种方式：</h1>
      <h1>备注：Vue.component 全局注册组件的不存在组件循环引用</h1>
      <a href="https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8">详情点击</a>
      <span>{{ folder.name }}</span>
      <tree-folder-contents :children="folder.children" />
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      folder: {
        name: 'father',
        children: ''
      }
    }
  },
  // 方法1： 等到生命周期钩子 beforeCreate
  beforeCreate: function () {
    this.$options.components.TreeFolderContents = require('./TreeFolderContents').default
  }
//   方法2：在本地注册组件的时候，你可以使用 webpack 的异步 import：
//   components: {
//     TreeFolderContents: () => import('./TreeFolderContents')
//   }
}
</script>

<style scoped>
</style>
