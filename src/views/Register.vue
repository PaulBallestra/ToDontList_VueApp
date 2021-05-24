<template>
  <div class="register">
    <h1>Register </h1>

    <form @submit.prevent="register(form)">

      <label for="name"> Name </label>
      <br>
      <input type="text" id="name" name="name" v-model="form.name">
      <br><br>
      <label for="email"> Email </label><br>
      <input type="email" id="email" name="email" v-model="form.email">
      <br><br>
      <label for="password"> Password </label><br>
      <input type="password" id="password" name="password" v-model="form.password">
      <br><br>
      <button type="submit">Register</button>

    </form>

  </div>
</template>


<script>

  import { mapActions } from "vuex"

  export default {
    name: "Register",
    data() {
      return {
        form: {}
      };
    },
    methods: {

      ...mapActions({'register': 'auth/register'})

    }
  }
</script>