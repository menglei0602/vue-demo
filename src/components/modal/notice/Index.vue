<template>
  <div>
    <Button type="primary" @click="toggle">封装的模态框</Button>
    <Modal :flag="flag" @change="close"></Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  data () {
    return {
      flag: false
    }
  },
  components: {
    Modal
  },
  methods: {
    toggle () {
      this.flag = true
      console.log(this.flag)
    },
    close (flag) {
      this.flag = !flag
      console.log(this.flag)
    }
  }
}
</script>

<style scoped>
</style>
