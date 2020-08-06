<template>
  <div class="hello">
    <Button @click="handleRender">实例化使用方法</Button>
  </div>
</template>
<script>
import FirsModal from './FirsModal.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  components: {
    FirsModal
  },
  methods: {
    handleRender () {
      this.$Modal.confirm({
        title: 'demoqqq',
        render: (h) => {
          return h(FirsModal, {// 在此处使用引入的组件
            ref: 'firstModal'
          })
        },
        width: 400,
        closable: false,
        cancelText: '取消',
        okText: '确定',
        //   loading: true,
        onOk () {
          console.log('实例化使用方法')
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
