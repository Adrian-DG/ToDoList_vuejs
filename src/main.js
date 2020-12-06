import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addToDo: (state, newTodo) => state.todos.push(newTodo), 
    removeTodo: (state, index) => state.todos.splice(index, 1) 
  },
  getters: {
    getToDos: state => state.todos
  }
})


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
