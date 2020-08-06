<template>
<!--
    子组件1 slot不写name ，子组件2 slot写 name="content"，内容可以正常渲染。
原因： 子组件1不写name,此时的slot插槽内容为原来子组件1 slot内容及子组件2内容.(匿名插槽)
2.子组件1 slot写name="panel" ，子组件2 slot写 name="content"，只能渲染子组件1的插槽内 容。
原因：具名插槽，只会显示对应内容。此时slot是帮 <h1 slot="panel">我是panel</h1>占位。
3.子组件1 和 子组件2 slot都不写 name，只能渲染子组件1的插槽内容。
这个正常情况是都显示，panel中的slot和情况一一样，content中的slot按道理也能显示对应插槽内容。（想不通）

    详细解释链接：https://segmentfault.com/q/1010000015861296 -->
  <div>
    <Panel>
      <h1 slot="panel">我是panel</h1>
      <Content>test
        <p slot="content">我是content</p>
      </Content>
    </Panel>
  </div>
</template>

<script>
import Panel from './Panel.vue'
import Content from './Content.vue'
export default {
  components: {
    Panel,
    Content
  }
}
</script>

<style scoped>
</style>
