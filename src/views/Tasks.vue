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

    </div>
</template>

<script>

    import { mapActions } from "vuex";

    export default {
        name: "Tasks",
        data() {
            return {
                form: {}
            };
        },
        methods: {

            ...mapActions({'createTask': 'auth/createTask'})

        }
    }

</script>