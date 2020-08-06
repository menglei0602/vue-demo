<template>
  <div>
    <Modal v-model="modal" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
      <p slot="header">
        <Icon type="ios-information-circle"></Icon>
        <span>Delete confirmation</span>
      </p>
      <div style="text-align:center">
        <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
        <p>Will you delete it?</p>
      </div>
      <div slot="footer">
        <Button @click="del">确定</Button>
        <Button @click="del">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // modal: this.flag
    }
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
    ok () {
      // this.$Message.info("Clicked ok");
      this.modal = false
      this.$emit('change', this.modal)
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>
