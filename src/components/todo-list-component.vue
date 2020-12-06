<template>
    <div class="container">
        <div class="title">
            <h3>My ToDos</h3>
            <hr>
        </div>
        <ul class="todos-list">
            <li class="todo-item" v-for="(todo, index) in myTodos" :key="index" >
                <todo-item-component :todo="todo" @selected-todo="getSelectedTodo(index)"/>              
            </li>
        </ul>
    </div>
</template>

<script>
import TodoItemComponent from './todo-item-component.vue'
export default {
    name: 'todo-list-component',
    components: {
      TodoItemComponent
    },
    computed: {
        myTodos() { 
            return this.$store.getters.getToDos
        }
    },
    methods: {
        getSelectedTodo(index) {
            this.$store.commit('removeTodo', index)            
        }
    }
}
</script>

<style scoped>
    .container {
        width: 95%;
        height: 50vh;
        margin: 1em auto;
    }
    .todos-list {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .todo-item {
        width: 18%;
        height: 20vh;
        list-style: none;
        margin: 0.5em 1em;
    }
</style>