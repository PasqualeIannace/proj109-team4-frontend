import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppRestaurantDetail from './pages/AppRestaurantDetail.vue';
import AppCart from './pages/AppCart.vue';
import AppSearch from './pages/AppSearch.vue';

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
            path: '/restaurant/:id',
            name: 'user-details',
            component: AppRestaurantDetail,
            props: true
        },
        {
            path: '/cart',
            name: 'cart',
            component: AppCart,
        },
        {
            path: '/restaurant_types',
            name: 'restaurant_types',
            component: AppSearch,
        },

    ]
});

export { router };