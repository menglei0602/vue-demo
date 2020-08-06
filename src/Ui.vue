<template>
  <div id="root">
    <div class="left">
      <div>
          <h1>ui--ant design</h1>
          <h2>form-rules整个表单校验规则</h2>
          <router-link class="jl" to="/ant-design/form/rules">form-rules</router-link>
          <h2>form-rules-item表单项目校验规则</h2>
          <router-link class="jl" to="/ant-design/form/rules-item">form-rules-item</router-link>
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less">
#root {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 780px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.left {
  width: 350px;
  margin: 0 10px;
  > div {
    border: 1px solid #eee;
    margin-top: 5px;
    cursor: pointer;
    > h1 {
      text-align: left;
    }
  }
}
.right {
  position: fixed;
  left: 420px;
  top: 10px;
  > div {
    border: 4px solid #eee;
    > div {
      border: 2px dashed #57a3f3;
    }
  }
}

.jl {
  padding: 0 20px;
}
</style>
