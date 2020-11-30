<template>
  <div id="app">
    <form-component/>  
    <button type="button" @click="showTodos">show todos</button>  
  </div>
</template>

<script>
import FormComponent from './components/form-component.vue'

export default {
  name: 'App',
  components: {
    FormComponent
  },
  methods: {
    showTodos(){
      const todos = this.$store.getters.getToDos
      console.log(todos)
    }
  }
}
</script>

<style>

</style>
