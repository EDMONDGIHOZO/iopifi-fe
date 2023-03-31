import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PatientsView from "@/views/PatientsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: HomeView
        },
        {
            path: '/patients',
            name: 'patients',
            component: PatientsView
        },
        {
            path: '/providers',
            name: 'providers',
            component: PatientsView
        },
        {
            path: '/settings',
            name: 'settings',
            component: PatientsView
        }
    ]
})

export default router
