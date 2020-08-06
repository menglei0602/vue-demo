<template>
<!-- 在iview基础上，对模态框封装之插槽方式行不通，不要浪费时间了 -->
  <div>
    <Button type="primary" @click="toggle">封装的模态框</Button>

    <Modal :flag="flag" @change="confirm">
      <Slot slot="header">
        <Icon type="ios-information-circle"></Icon>
        <span class="mainTitle">弹窗标题 father</span>
        <span class="secondTitle">辅助信息，如果必要</span>
      </Slot>

      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="应用名称" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入应用名称"></Input>
        </FormItem>
        <FormItem label="应用描述" prop="describe">
          <Input v-model="formValidate.describe" placeholder="请输入应用描述"></Input>
        </FormItem>
      </Form>

      <Slot v-slot:footer>
        <p>Here's some contact info</p>
      </Slot>
    </Modal>
    <!-- <Modal :flag="flag" @change="confirm"></Modal> -->
  </div>
</template>

<script>
import Modal from './Modal1.vue'
export default {
  data () {
    return {
      flag: false,
      formValidate: {
        name: '',
        describe: ''
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: '应用名称不能为空',
            trigger: 'blur'
          }
        ]
      }
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
    confirm (flag) {
      this.flag = false
      console.log(this.flag)
      this.handleSubmit()
    },
    handleSubmit () {
      this.$refs[this.formValidate].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style scoped>
.modal {
  font-size: 30px;
}

.header {
  font-weight: normal;
}
.secondTitle {
  font-size: 12px;
  padding-left: 10px;
}
</style>
