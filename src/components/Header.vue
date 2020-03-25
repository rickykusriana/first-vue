<template>
    <div class="container-fluid bg-darkCobalt fg-white pos-fixed fixed-top z-top">
        <header class="app-bar container bg-darkCobalt fg-white pos-relative app-bar-expand-md" data-role="appbar">
            <a href="/" class="brand fg-white no-hover"><b>Hello</b>, world</a>
            <ul :class="'app-bar-menu ml-auto '+(this.$route.path == '/private' ? 'd-none' : '')">
                <li><router-link @click.native="closeMenu()" to="/home">Home</router-link></li>
                <li><router-link @click.native="closeMenu()" to="/profile">About Me</router-link></li>
                <li><router-link @click.native="closeMenu()" to="/portfolio">Portfolio</router-link></li>
                <li><router-link @click.native="closeMenu()" to="/blog">Blog</router-link></li>
                <li><router-link @click.native="closeMenu()" to="/location">You is Here</router-link></li>
                <!-- <li>
                    <a href="#" class="dropdown-toggle">Public API</a>
                    <ul class="d-menu" data-role="dropdown">
                        <li><router-link @click.native="closeMenu()" to="/location">You is Here</router-link></li>
                        <li><router-link @click.native="closeMenu()" to="/api/guest_info">Connection Information</router-link></li>
                    </ul>
                </li> -->
                <li>
                    <router-link @click.native="closeMenu()" to="/chat" class="text-bold fg-yellow">
                        <!-- <span :class="this.$route.path != '/chat' ? 'd-block ani-vertical' : 'd-block'">Public Chat</span> -->
                        Public Chat
                    </router-link>
                </li>
                <!-- <li><router-link @click.native="closeMenu()" to="/private">Private</router-link></li> -->
            </ul>
        </header>
    </div>
</template>

<script>
    
    export default {
        name: 'Header',
        methods: {
            closeMenu() {
                $('.hamburger').removeClass('active');
                $('.app-bar-menu').addClass('collapsed');
                $('.app-bar-menu').hide();
            }
        }
    }
</script>
