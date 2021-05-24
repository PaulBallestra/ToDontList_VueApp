import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Me from '../views/Me.vue'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  { //REGISTER
    path: '/auth/register',
    name: 'Register',
    component: Register
  },
  { //LOGIN
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  { //ME
    path: '/auth/me',
    name: 'Me',
    component: Me
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
