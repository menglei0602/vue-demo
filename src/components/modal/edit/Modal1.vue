<template>
  <div>
    <Modal v-model="modal" :mask-closable="false" draggable width="360">
      <p slot="header" class="header">
        <Icon type="ios-information-circle"></Icon>
        <span class="mainTitle">弹窗标题</span>
        <span class="secondTitle">辅助信息，如果必要</span>
      </p>
      <div style="text-align:center">
        <Child></Child>
      </div>
      <div slot="footer">
        <Button type="primary" @click="confirm">确定</Button>
        <Button @click="cancel">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import Child from './Child.vue'
export default {
  data () {
    return {
      // modal: this.flag
    }
  },
  components: {
    Child
  },
  props: {
    flag: Boolean
  },
  computed: {
    modal () {
      let flag = this.flag
      console.log(flag)
      return flag
    }
  },
  methods: {
    confirm () {
      // this.modal = false;
      this.$emit('change')
    },
    cancel () {
      this.modal = false
      this.$emit('change', this.modal)
    }
  }
}
</script>

<style scoped>
.header {
  font-weight: normal;
}
.secondTitle {
  font-size: 12px;
  padding-left: 10px;
}
</style>
