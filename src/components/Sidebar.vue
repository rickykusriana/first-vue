<template>

    <div class="cell-md-2 cell-xl-2 pr-0 border-right bd-gray" id="sidenav">
        <button class="expand-button ml-2 d-block d-none-md" id="doc-nav-toggle"><span></span></button>
        <nav id="doc-nav" class="pt-1" data-role="collapse" data-toggle-element="#doc-nav-toggle">
            <div class="doc-nav-item">
                <b>Navigation</b>
                <ul class="toc-nav">

                    <li class="done"><router-link to="/dashboard">Dashboard</router-link></li>
                    <li class="done"><router-link to="/form">Form</router-link></li>
                    <li class="done"><router-link to="/user/1234">Menu 2</router-link></li>

                </ul>
            </div>
            <div class="doc-nav-item">
                <b>Our Team</b>
                <ul class="toc-nav">
                    <li class="done"><router-link to="/profile/mbenx">mbenx</router-link></li>
                    <li class="done"><router-link to="/profile/rickykusriana">rickykusriana</router-link></li>
                </ul>
            </div>

            <div class="doc-nav-item">
                <b>Thanks to</b>
                <ul class="toc-nav">
                    <li class="done"><a target="_blank" href="https://vuejs.org/">VueJS</a></li>
                    <li class="done"><a target="_blank" href="https://www.heroku.com/">Heroku</a></li>
                    <li class="done"><a target="_blank" href="https://metroui.org.ua/">Metro Ui</a></li>
                </ul>
            </div>

        </nav>
    </div>

</template>

<script>
    export default {
        name: 'Sidebar'
    }
</script>
