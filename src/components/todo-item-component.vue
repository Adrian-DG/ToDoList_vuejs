<template>
    <div class="card" v-bind:style="{ 'background-color' : priorityLevel }">
        <div class="card-header">
            <div class="title">{{ todo.title }}</div>
            <button @click="removeTodo()" class="btn">X</button>
        </div>
        <div class="card-body">
            <div class="text">{{ todo.body }}</div>
            <div class="row">
                <small class="date">{{ todo.date }}</small>
                <small class="tag">{{ todo.priority }}</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todo-item-component',
        data() { 
            return {

            }
        }, 
        props: ['todo'],
        computed: {
            priorityLevel() {
                if(this.todo.priority === 'Medium') { 
                    return '#ffffbe'                     
                }else if(this.todo.priority === 'High'){
                    return '#ffbebe'
                }

                return '#cbffbe'               
    
            }
        },
        methods: {
            removeTodo() {
                this.$emit('selected-todo')
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 100%;
        height: 100%;
        /*background-color: rgb(250, 250, 126); */
        color: rgb(121, 121, 121);
        border-radius: 0.5em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-header {
        width: 95%;
        height: 20%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        font-size: 1.3rem;
        font-weight: 700;
    }

    .btn {
        font-size: 1.1rem;
        border: none;
        color: rgb(165, 165, 165);
        background-color: transparent;
        padding: 0.2em;
        border-radius: 0.2em;
    }

    .btn:hover {
        background-color: rgb(165, 165, 165);
        color: whitesmoke;
    }

    .card-body {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .text {
        width: 95%;
        height: 70%;
        opacity: 0.7;
        margin: auto;
    }

    .row {
        width: 90%;
        height: 20%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>