<template>
    <header class="header">
        <div class="form-box">
            <form class="form" @submit.prevent="onSubmit">
                <h1 class="title">ToDo's List</h1>
                <input v-model="todo.title" type="text" class="form-control" placeholder="Title" required>
                <textarea v-model="todo.body" class="form-control" rows="5" placeholder="body" required></textarea>
                <div class="form-row">
                    <input v-model="todo.date" type="date" class="form-control" required>
                    <select v-model="todo.priority" name="" id="" class="form-control" required>
                        <option :value="0" selected>Choose priority</option>
                        <option :value="item" v-for="(item, index) in priorities" :key="index">
                            {{ item }}
                        </option>
                    </select>
                </div>
                <div class="submit-box">
                    <button type="submit" class="submit-btn">Add ToDo</button>
                </div>
            </form>
        </div>
    </header>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
    name: 'form-component',
    data() {
        return {
            // priorities: ['High', 'Medium', 'Low'],
            priorities: ['Low', 'Medium', 'High'],
            todo: { title: '', body: '', date: '', priority: '', status: false }
        }
    },
    methods: {
        /* this function get todo object keys, iterate the todo object and reset it's values */
        resetModel() {
            const keys = Object.keys(this.todo)
            keys.forEach(key => {
                this.todo[key] = ''
            })
        },
        onSubmit(){
            const { title, body, date, priority, status } = this.todo

            this.$store.commit('addToDo', {
                id: uuidv4(),
                title: title,
                body: body,
                date: date,
                priority: priority,
                status: status
            })

            this.resetModel()

        }
    }
}
</script>

<style scoped>
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        .form-box {
            width: 50%;
        }
    }

    .header {
        width: 100%;
        min-height: 45vh;
        height: auto;
        background-color: #303841;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .form-box {
        height: 70%;
    }
    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .title {
        text-align: center;
        color: whitesmoke;
    }
    .form-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .form-row .form-control {
        width: 45%;
    }
    .form-control {
        border: none;
        border-radius: 0.5em;
        min-height: 2.5em;
        margin-bottom: 1em;
        padding-top: 0.3em;
        padding-left: 1em;
        background-color: whitesmoke;
    }
    .submit-box {
        width: 100%;
        padding: 0.5em 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .submit-btn {
        border: none;
        border-radius: 0.5em;
        background-color: rgb(98, 192, 98);
        color: #fff;
        width: 100%;
        height: 2.5em;
        font-weight: 900;
    }
</style>