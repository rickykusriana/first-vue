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

const router = new VueRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    mode: 'history',

    routes: [
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