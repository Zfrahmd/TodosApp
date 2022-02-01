<template>
  <div class="todolist">
    <h1>Todo List Manager</h1>
    <h6 class="py-1"> Powered by Rails 6.1.4 | Vue.js 3.0 | Vuex 4.0 | Axios | SQLite3</h6>
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from "@/components/Todos/Todos.vue";
import AddTodo from "@/components/Todos/AddTodo.vue";
import FilterTodos from "@/components/Todos/FilterTodos.vue";

export default {
  name: "TodoList",
  components: {
    AddTodo,
    FilterTodos,
    Todos,
    
  },
};
</script>

