import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppFood from './pages/AppFood.vue';
import AppUser from "./pages/AppUser.vue";
import AppFoodDetail from './pages/AppFoodDetail.vue';
import AppUserDetail from './pages/AppUserDetail.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/foods',
            name: 'foods',
            component: AppFood
        },
        {
            path: '/users',
            name: 'users',
            component: AppUser
        },
        {
            path: '/foods:id',
            name: 'details',
            component: AppFoodDetail,
            props: true
        },
        {
            path: '/users/:id',
            name: 'user-details',
            component: AppUserDetail,
            props: true
        },
    ]
});

export { router };