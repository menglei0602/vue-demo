<template>
  <div>
    <form action>
      <p>
        用户名:
        <input type="text" v-model="name" placeholder="用户名" @blur="checkname()">
        <span>{{msgname}}</span>
      </p>
      <!-- <p>
        密码:
        <input @keyup="checkpassword()" type="password" v-model="password" placeholder="密码">
        <span>{{msgpassword}}</span>
      </p>
      <p>
        <input type="button" v-model="btn" @click="codebtn()">
        <input type="text" placeholder="验证码">
        <span></span>
      </p>
      <p>
        <input type="checkbox" v-modal="check" @click="checkagree()">同意"服务条款"和"隐私权相关政策"
        <span>{{msgagree}}</span>
      </p>
      <hr>-->
      <p>
        <input type="submit" value="注册" @click="register($event)">
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      msgname: '',
      check: true,
      msgpassword: '',
      msgagree: '',
      btn: '获取验证码',
      disab: false,
      c: 60
    }
  },
  methods: {
    checkname: function () {
      debugger
      let flag = false
      if (this.name.length === 0) {
        this.msgname = '用户名不能为空'
      } else if (this.name.length < 2) {
        this.msgname = '用户名至少2个字符'
      } else {
        this.msgname = ''
        flag = true
      }
      console.log(this.name)
      return flag
    },
    checkpassword: function () {
      var word = this.password.trim()
      if (word.length == 0) this.msgpassword = '密码不能为空'
      var count = 0
      if (/[0-9]/.test(word)) {
        count++
      }
      if (/[A-Za-z]/.test(word)) {
        count++
      }
      if (/[^0-9A-Za-z]/.test(word)) {
        count++
      }
      if (count == 3 && word.length >= 6) {
        this.msgpassword = '高强度'
      } else if (count == 2 && word.length >= 6) {
        this.msgpassword = '中强度'
      } else {
        this.msgpassword = '低强度'
      }
      return word.length >= 0
    },
    codebtn: function () {
      console.log(1)
      this.disab = true
      setTimeout(this.enableCodeBtn, 1000)
    },
    enableCodeBtn: function () {
      if (this.c > 0) {
        this.btn = this.c + '秒后重新获取'
        setTimeout(this.enableCodeBtn, 1000) // 1 秒后再次调用自己
        this.c--
      } else {
        this.disab = false
        this.btn = '获取短信验证码'
        this.c = 60
      }
    },
    checkagree: function () {
      if (!this.check) {
        this.msgagree = ''
      } else {
        this.msgagree = '必须勾选'
      }
      return this.check
    },
    register: function (event) {
      event.preventDefault()
      //   if (this.checkname() & this.checkpassword() & this.checkagree()) {
      if (this.checkname()) {
        console.log('success')
      } else {
        console.error('error')
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
