<template>
  <div>
    <Button type="primary" @click="modal1 = true">普通组件使用方法</Button>
    <Modal
      v-model="modal1"
      title="普通组件使用方法"
      @on-ok="ok"
      @on-cancel="cancel">
     <FirsModal></FirsModal>//使用自定义组件
    </Modal>
  </div>
</template>
<script>
import FirsModal from './FirsModal.vue'
export default {
  name: 'Modal',
  data () {
    return {
      modal1: false
    }
  },
  methods: {
    ok () {},
    cancel () {}
  },
  components: {
    FirsModal// 定义自定义组件
  }
}
</script>
<style scoped>
</style>
