<template>
    <div class="">
        <h3>Add Todo</h3>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="submit">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'AddTodo',
    data() {
        return {
            title: ""
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(event) {
            event.preventDefault();
            this.addTodo(this.title);
            this.title = "";
        }
    }

}
</script>

<style scoped>

form {
    display: flex;
    padding: 5px;
    border: 1px solid #ccc;
    outline: 0;
}

input[type="text"] {
    border: 1px solid #444;
    width: 100%;
    padding: 10px;    
}

input[type="text"]:hover, input[type="text"]:focus {
    border: 1px solid #41b883;
    
}

input[type="submit"] {
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
    padding: 10px;
    margin-left: 1%;
}

input[type="submit"]:hover, input[type="submit"]:focus {
    background: #318b63;    
}

</style>