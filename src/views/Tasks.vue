<template>
    <div class="tasks">
        <h1> Tasks </h1>

        <form @submit.prevent="createTask(form)">

            <label for="body"> New Task </label><br>
            <input type="text" id="body" name="body" placeholder="Body" v-model="form.body">

            <button type="submit">Save</button>

        </form>

        <br><br>
        - LISTE DES TACHES -

        
        {{ tasks }}

    </div>
</template>

<script>

    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "Tasks",
        data() {
            return {
                form: {}
            };
        },
        methods: {
            ...mapActions({'createTask': 'auth/createTask'}),
            //...mapActions({'getTasks': 'auth/getTasks'})
        },
        computed: {
            ...mapGetters({'tasks': 'auth/tasks'})
            //JE N'ARRIVE PAS A RECUP LES TASKS JE COMPRENDS PAS POURQUOI :(
        }
    }

</script>