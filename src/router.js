import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppRestaurantDetail from './pages/AppRestaurantDetail.vue';
import AppCart from './pages/AppCart.vue';
import Payment from './pages/Payment.vue';
import StatusOrder from './pages/StatusOrder.vue';
import ThankYou from './pages/ThankYou.vue';
// Vue.use(Router);
// import Router from 'vue-router';

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
            path: '/payment',
            name: 'payment',
            component: Payment,
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: ThankYou,
        },

    ]
});

export { router };