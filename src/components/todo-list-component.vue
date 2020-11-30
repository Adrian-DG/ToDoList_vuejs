<template>
    <div class="container">
        <div class="title">
            <h3>My ToDos</h3>
            <hr>
        </div>
        <ul class="todos-list">
            <li class="todo-item" v-for="(todo, index) in myTodos" :key="index">
                {{ todo.title }}              
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'todo-list-component',
    computed: {
        myTodos() { 
            return this.$store.getters.getToDos
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
        width: 20%;
        height: 20vh;
        border: 1px solid black;
        list-style: none;
        margin: 0 1em;
    }
</style>