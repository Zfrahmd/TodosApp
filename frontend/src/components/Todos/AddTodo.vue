<template>
    <div class="">
        <h5>Add Todo:</h5>
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
    border-radius: 20px;
    outline: 0;
}

input[type="text"] {
    border: 1px solid #444;
    border-radius: 20px;
    width: 100%;
    padding: 10px;
    transition: all 0.3s ease;
}

input[type="text"]:hover, input[type="text"]:focus {
    border: 1px solid #41b883;
    transition: all 0.3s ease;
    
}

input[type="submit"] {
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px;
    margin-left: 1%;
    transition: all 0.3s ease;
}

input[type="submit"]:hover, input[type="submit"]:focus {
    background: #318b63;
    transition: all 0.3s ease;   
}

</style>