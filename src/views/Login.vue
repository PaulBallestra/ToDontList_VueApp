<template>
    <div class="login">
        <h1> Login </h1>

        <form @submit.prevent="login(form)">

            <label for="email"> Email </label><br>
            <input type="email" id="email" name="email" v-model="form.email">
            <br><br>
            <label for="password"> Password </label><br>
            <input type="password" id="password" name="password" v-model="form.password">

            <br><br>
            <button type="submit">Login</button>

        </form>

    </div>
</template>

<script>

    import { mapActions } from "vuex"

    export default {
        name: "Login",
        data() {
            return {
                form: {}
            };
        },
        methods: {

            ...mapActions({'login': 'auth/login'})

        }
    }
</script>
