<template>
  <div id="nav">
    <router-link to="/tasks">Tasks</router-link> |
    <router-link to="/auth/login">Login</router-link> |
    <router-link to="/auth/register">Register</router-link> |
    <router-link to="/auth/me">Me</router-link> |
    <a href="#" @click.prevent="logout">Logout</a>
  </div>
  <router-view/>
</template>

<script>

  import { mapActions } from "vuex"

  export default {
    methods: {
      ...mapActions({'logout': 'auth/logout'})
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>