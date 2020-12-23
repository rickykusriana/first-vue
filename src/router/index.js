import Vue from 'vue'
import VueRouter from 'vue-router'
import VueChatScroll from 'vue-chat-scroll'
import VueKeepScrollPosition from 'vue-keep-scroll-position'

import VueTypedJs from 'vue-typed-js'
import VueCountdownTimer from 'vuejs-countdown-timer'

// Init view
import Home from '@/modules/home/Home.vue'
import Test from '@/modules/home/Test.vue'

import Blog from '@/modules/blog/Blog.vue'
import Blog_detail from '@/modules/blog/Blog_detail.vue'
import Profile from '@/modules/profile/Profile.vue'
import Location from '@/modules/profile/Location.vue'
import Portfolio from '@/modules/portfolio/Portfolio.vue'
import Chat from '@/modules/chat/Chat.vue'
import Private from '@/modules/private/Private.vue'
// import Chat from '@/modules/chat/Chat-firebase-bck.vue'

import Guest from '@/modules/public_api/Guest.vue'
import Calendar from '@/modules/public_api/Calendar.vue'
import Pray from '@/modules/public_api/Pray_schedule.vue'

Vue.use(VueRouter);
Vue.use(VueChatScroll);
Vue.use(VueKeepScrollPosition);
Vue.use(VueTypedJs)

Vue.use(VueCountdownTimer);
// Vue.component('countdown', {
// 	data: function () {
// 		return {
// 			date: '2020-12-06 09.00.00'
// 		}
// 	},
// 	template: `<vue-countdown-timer
//                 :start-time="'2020-08-08 09:00:00'"
//                 :end-time="'2020-12-06 00:00:00'"
//                 :interval="1000"
//                 :start-label="'Until start:'"
//                 :end-label="''"
//                 label-position="begin"
//                 :end-text="'Event ended!'"
//                 :day-txt="'days,'"
//                 :hour-txt="'hours,'"
//                 :minutes-txt="'minutes,'"
//                 :seconds-txt="'seconds'">
//             </vue-countdown-timer>`
// })

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
        // Home
        {
            path: '/test',
            name: 'Test',
            component: Test
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
            path: '/location',
            name: 'Location',
            component: Location
        },

        // Chat
        {
            path: '/chat',
            name: 'Chat',
            component: Chat
        },
        
        // Private
        {
            path: '/private',
            name: 'Private',
            component: Private
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