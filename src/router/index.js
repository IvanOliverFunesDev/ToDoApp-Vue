import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import TasksPage from '../pages/TasksPage.vue'
import NewTaskPage from '../pages/NewTaskPage.vue'
import EditTaskPage from '../pages/EditTaskPage.vue'

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/tasks', component: TasksPage },
    { path: '/tasks/new', component: NewTaskPage },
    { path: '/tasks/edit/:id', component: EditTaskPage, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
