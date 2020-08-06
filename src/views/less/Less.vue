<template>
  <div class="test1">less测试
    <div class="test2">
      <ul>
        <li>我的公司</li>
        <li>我的公司</li>
        <li>我的公司</li>
      </ul>
    </div>
    <div class="note">
      <!-- 变量 -->
      <ul>
        <li>
          <div>变量</div>
          <ol start="0">
            <li id="wrap">值变量</li>
            <li></li>
            <li></li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// @import '../../assets/styles/test.less';

@import "~@/assets/styles/test.less"; // CSS loader 会把把非根路径的url解释为相对路径， 加~前缀才会解释成模块路径。
.test1 {
  .test2 {
    font-size: 50px;
    ul > li {
      &:hover {
        color: @test_color;
      }
    }
  }
}
// .note > ul > li:before {
//   content: counter(sectioncounter) "、";
//   counter-increment: sectioncounter;
// }
</style>
