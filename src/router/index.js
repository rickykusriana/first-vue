import Vue from 'vue'
import VueRouter from 'vue-router'

// Init view
import Home from '@/modules/home/Home.vue'
import Blog from '@/modules/blog/Blog.vue'
import Blog_detail from '@/modules/blog/Blog_detail.vue'
import Profile from '@/modules/profile/Profile.vue'

import Calendar from '@/modules/public_api/Calendar.vue'
import Guest from '@/modules/public_api/Guest.vue'
import Pray from '@/modules/public_api/Pray_schedule.vue'

Vue.use(VueRouter);

var routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },

    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/blog/:id/:meta_url',
        name: 'Blog_detail',
        component: Blog_detail,
        props: true
    },

    {
        path: '/api/calendar',
        name: 'Calendar',
        component: Calendar
    },

    {
        path: '/api/guest_info',
        name: 'Guest',
        component: Guest
    },
    {
        path: '/api/prayer_schedule',
        name: 'Pray',
        component: Pray
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
        component: Home
    }
];

export default new VueRouter({
    routes: routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    mode: 'history',
});