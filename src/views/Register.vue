<template>
  <div class="register">
    <h1>Register </h1>

    <form @submit.prevent="register">

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

  import axios from 'axios';

  export default {
    name: "Register",
    data() {
      return {
        form: {}
      };
    },
    methods: {
      register(){
        axios.post('http://127.0.0.1:8000/auth/register').then(response => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });

      }
    }
  }
</script>