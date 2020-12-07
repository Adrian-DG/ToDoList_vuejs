<template>
  <div id="app">
    <form-component/>  
    <todo-list-component/>
  </div>
</template>

<script>
import FormComponent from './components/form-component.vue'
import TodoListComponent from './components/todo-list-component.vue'

export default {
  name: 'App',
  components: {
    FormComponent,
    TodoListComponent
  }
}
</script>

<style>
  #app {
    width: 100%;
    min-height: 100vh;
    height: auto;
  }
</style>
