<template>
    <div class="container-fluid bg-darkCobalt fg-white pos-fixed fixed-top z-top">
        <header class="app-bar container bg-darkCobalt fg-white pos-relative app-bar-expand-md" data-role="appbar">
            <a href="/" class="brand fg-white no-hover">Hello, world</a>
            <ul class="app-bar-menu ml-auto">
                <li><a href="index.html">Home</a></li>
                <li><a href="intro.html">Guide</a></li>
                <li><a href="examples.html">Examples</a></li>
                <li class="d-none"><a href="#">Builder</a></li>
                <li><a href="sponsors.html">Sponsors</a></li>
                <li><a href="https://forum.metroui.org.ua">Forum</a></li>
            </ul>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
