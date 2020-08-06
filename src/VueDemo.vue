<template>
  <div id="root">
    <div class="left">
      <div>
        <div>
          <h1>嵌套路由</h1>
          <router-link class="jl" to="/user/foo">/user/foo</router-link>
          <router-link class="jl" to="/user/foo/profile">/user/foo/profile</router-link>
          <router-link class="jl" to="/user/fooOther/posts">/user/fooOther/posts</router-link>
        </div>
        <div>
          <h1>嵌套路由---relative params</h1>
          <router-link class="jl" to="/user/foo">/user/foo</router-link>
          <router-link class="jl" :to="{ params: { id: 2 }}">/user/foo/profile</router-link>
          <router-link class="jl" :to="{ params: { id: 3 }}">/user/foo/posts</router-link>
        </div>
        <div>
          <h1>动态路由---$route.params.id---根据id渲染不同内容</h1>
          <router-link class="jl" to="/dynamicRouting/foo">/dynamicRouting/foo</router-link>
          <router-link class="jl" to="/dynamicRouting/other">/dynamicRouting/other</router-link>
        </div>
        <div>
          <h1>this.router</h1>
          <router-link to="/routeParamsId/test">RouteParamsId</router-link>
        </div>
        <div>
          <h1>less测试</h1>
          <router-link to="/less">less</router-link>
        </div>
        <div>
          <h1>v-model测试</h1>
          <router-link to="/vmodel">vmodel</router-link>
        </div>
        <div>
          <h1>modal封装</h1>
          <router-link to="/modal">模态窗封装</router-link>
        </div>
        <div>
          <h1>render渲染函数</h1>
          <router-link to="/render">render渲染函数</router-link>
        </div>
        <div>
          <h1>插槽</h1>
          <router-link tag="div" to="/slot">插槽</router-link>
          <router-link tag="div" to="/prop-slot">作用域插槽</router-link>
        </div>
        <div>
          <h1>prop封装</h1>
          <router-link to="/prop">prop封装</router-link>
        </div>
        <div>
          <h1>状态保存</h1>
          <router-link to="/state-save">状态保存</router-link>
        </div>
        <div>
          <h1>引入img</h1>
          <router-link to="/img">引入img</router-link>
        </div>
        <div>
          <h1>vue表单校验</h1>
          <router-link to="/validator">vue表单校验</router-link>
        </div>
        <div>
          <h1>六种组件间通信方式</h1>
          <router-link to="/componentCommunication/first" tag="div">1.父组件向子组件传值</router-link>
          <router-link to="/componentCommunication/second" tag="div">2.子组件向父组件传值（通过事件形式）</router-link>
          <router-link
            to="/componentCommunication/third"
            tag="div"
          >3.通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。</router-link>
          <router-link to="/componentCommunication/fourth" tag="div">4.$attrs/$listeners</router-link>
          <router-link to="/componentCommunication/fifth1" tag="div">5.1 provide/inject(非响应式)</router-link>
          <router-link to="/componentCommunication/fifth2" tag="div">5.2 provide/inject(响应式)</router-link>
          <router-link to="/componentCommunication/sixth" tag="div">6. $parent / $children与 ref</router-link>
        </div>
        <div>
          <h1>父子组件生命周期调用顺序</h1>
          <router-link to="/lifecycle">lifecycle</router-link>
        </div>
        <div>
          <h1>es6相关</h1>
          <h2>proxy</h2>
          <router-link to="/es6Proxy">es6Proxy</router-link>
        </div>
        <div>
          <h1>导航守卫</h1>
          <h2>navGuard</h2>
          <div>
            <router-link to="/navGuardA">navGuardA</router-link>
          </div>
          <div>
            <router-link to="/navGuardB">navGuardB</router-link>
          </div>
        </div>
        <div>
          <h1>单页面多路由区域操作</h1>
          <div>
            <router-link tag="h1" to="/multiRoute/any/h1">multiRouteH1</router-link>
            <router-link tag="h1" to="/multiRoute/any/h2">multiRouteH2</router-link>
            <router-link :to="{name:'MultiRouteH1'}">
              <h1>H1</h1>
            </router-link>
            <router-link :to="{name:'MultiRouteH2'}">
              <h1>H2</h1>
            </router-link>
          </div>
        </div>
        <div>
          <h1>单向数据流</h1>
          <div>
            <router-link to="/oneWayDataFlow">oneWayDataFlow</router-link>
          </div>
        </div>
        <div>
          <h1>异步组件</h1>
          <div>
            <router-link to="/asyncComponents">asyncComponents</router-link>
          </div>
        </div>
        <div>
          <h1>其它--零碎知识点</h1>
          <h2>event</h2>
          <router-link to="/other">other</router-link>
        </div>
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
  min-width: 360px;
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
