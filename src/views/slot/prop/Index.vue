<template>
  <div>
    <todo-list v-bind:todos="todos">
      <template v-slot:todo1="{ todo3 }">
        <span v-if="todo3.isComplete">✓</span>
        {{ todo3.text }}
      </template>
    </todo-list>
    <!-- 有问题 -->
    <todo-list v-bind:todos="todos">
      <template v-slot:todo1="todo5">
        <span v-if="todo5.isComplete">✓</span>
        {{ todo5.text }}
      </template>
    </todo-list>

    <!-- 在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 todo3 重命名为 todo4： -->
    <todo-list v-bind:todos="todos">
      <template v-slot:todo1="{ todo3:todo4 }">
        <span v-if="todo4.isComplete">✓</span>
        {{ todo4.text }}
      </template>
    </todo-list>
    
    <!-- 插槽 prop 是 undefined 的情形 -->
    <todo-list v-bind:todos="todos">
      <template v-slot:todo1="{ todo_no={isComplete:true, text: '插槽 prop 是 undefined'} }">
        <span v-if="todo_no.isComplete">✓</span>
        {{ todo_no.text }}
      </template>
    </todo-list>
  </div>
</template>

<script>
import TodoList from "./TodoList"
export default {
    components: {
        TodoList,
    },
};
</script>

<style scoped>
</style>