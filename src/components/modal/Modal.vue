<template>
  <div>
    <Modal v-model="modal" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
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
