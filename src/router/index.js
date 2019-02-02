import Vue from 'vue'
import VueRouter from 'vue-router'

// Init view
import Home from '@/modules/home/Home.vue'
import Blog from '@/modules/blog/Blog.vue'
import Blog_detail from '@/modules/blog/Blog_detail.vue'
import Profile from '@/modules/profile/Profile.vue'
import Portfolio from '@/modules/portfolio/Portfolio.vue'
import Portfolio_detail from '@/modules/portfolio/Portfolio_detail.vue'

import Guest from '@/modules/public_api/Guest.vue'
import Calendar from '@/modules/public_api/Calendar.vue'
import Pray from '@/modules/public_api/Pray_schedule.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    mode: 'history',

    routes: [
        // Home
        {
            path: '/home',
            name: 'Home',
            component: Home
        },

        // Blog
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/blog/:next_page',
            name: 'Next_page',
            component: Blog,
            props: true
        },
        {
            path: '/blog/:id/:meta_url',
            name: 'Blog_detail',
            component: Blog_detail,
            props: true
        },

        // Portfolio
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/portfolio/:detail',
            name: 'Portfolio_detail',
            component: Portfolio,
            props: true
        },

        // Profile
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },

        {
            path: '/api/guest_info',
            name: 'Guest',
            component: Guest
        },
        {
            path: '/api/calendar',
            name: 'Calendar',
            component: Calendar
        },
        {
            path: '/api/prayer_schedule',
            name: 'Pray',
            component: Pray
        },

        {
            path: '/',
            name: 'default',
            component: Home
        }
    ]
})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router