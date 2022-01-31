<template>
  <div id="app">
    <div class="container">
      <h1>Todo List Manager</h1>
      <h5> Powered by Rails 6.1.4 | Vue.js 3.0 | Vuex 4.0 | Axios | SQLite3</h5>
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue';
import AddTodo from '@/components/AddTodo.vue';
import FilterTodos from '@/components/FilterTodos.vue';

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style>
body {
  background-color: #e8f7f0;
  line-height: 1.6;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>
