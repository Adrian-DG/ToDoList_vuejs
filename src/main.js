import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addToDo: (state, newTodo) => state.todos.push(newTodo)
  },
  getters: {
    getToDos: state => {
      return state.todos
    }
  }
})


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
