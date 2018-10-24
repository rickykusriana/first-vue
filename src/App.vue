<template>
    <div id="app">

        <Header/>

        <div class="container-fluid">
            <div class="row flex-xl-nowrap">
                
                <Sidebar/>
                
                <router-view></router-view>
                
            </div>
        </div>

    </div>
</template>

<script>
    import Header from './components/Header'
    import Sidebar from './components/Sidebar'

    export default {
        name: 'app',
        components: {
            Header,
            Sidebar
        }
    }
</script>