<template>
    <div class="">
        <h4>Todos</h4>
        <div class="legend">
            <span>Double click to mark as completed</span>
            <span><span class="incomplete-box"></span> = Incomplete</span>
            <span><span class="complete-box"></span> = Complete</span>
        </div>
        <div class="todos">
            <!-- allTodos is an api request -->
            <div
            v-for="todo in allTodos"
            :key="todo.id" 
            @dblclick="onDoubleClick(todo)"
            class="todo"
            v-bind:class="{'is-complete':todo.completed}">
            {{ todo.title }}
            <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>    
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    // impoort our getters(todos) and actions(fetching/updating/deleting todos
    name: "Todos",
    methods: {
        ...mapActions([
            'fetchTodos',
            'deleteTodo',
            'updateTodo'
        ]),
        onDoubleClick(currentTodo) {
            const updatedTodo = {
                id: currentTodo.id,
                title: currentTodo.title,
                completed: !currentTodo.completed
            }
            this.updateTodo(updatedTodo);

        }
    },
    computed: {
        ...mapGetters([
            'allTodos',
        ])
    },
    // makes the initial creation and api request 
    created() {
        this.fetchTodos();
    }
}
</script>

<style scoped>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
}
.todo:hover {
    border: 1px solid #555;
    transition: all 0.3s ease;
}

i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
}

.legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
.complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
}
.incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b882;
}

.is-complete {
    background: #35495e;
    color:#fff;
}

@media (max-width: 500px) {
    .todos {
        grid-template-columns: 1fr;
    }
}

</style>