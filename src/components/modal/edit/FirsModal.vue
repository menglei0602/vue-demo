<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="应用名称" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入应用名称"></Input>
      </FormItem>
      <FormItem label="应用描述" prop="describe">
        <Input v-model="formValidate.describe" placeholder="请输入应用描述"></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
</style>
