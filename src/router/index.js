import Vue from 'vue'
import VueRouter from 'vue-router'

// Init view
import Dashboard from '@/modules/dashboard/Dashboard.vue'
import Profile from '@/modules/profile/Profile.vue'

Vue.use(VueRouter);

var routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/profile/:name',
        name: 'Profile',
        component: Profile,
        props: true
    },
    {
        path: '/',
        name: 'default',
        component: Dashboard
    }
];

export default new VueRouter({
    routes: routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    mode: 'history',
});