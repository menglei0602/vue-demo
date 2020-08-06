<template>
  <div>
    <ul>
      <li v-for="todo2 in filteredTodos" v-bind:key="todo2.id">
        <!--
    我们为每个 todo 准备了一个插槽，
    将 `todo` 对象作为一个插槽的 prop 传入。
        -->
        <slot name="todo1" v-bind:todo3="todo2">
          <!-- 后备内容 -->
          {{ todo2.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            filteredTodos: [
                {text: "a", isComplete: false},
                {text: "b", isComplete: false},
                {text: "c", isComplete: true},
                {text: "d", isComplete: false},
                {text: "e", isComplete: false}
            ]
        }
    },
};
</script>

<style scoped>
</style>