<template>
    <div id="app">

        <Header/>

        <div class="container-fluid">
            <div class="row flex-xl-nowrap">
                
                <Sidebar/>
                
                <main v-if="isLoading" class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
                    <div class="d-flex flex-justify-center" style="bottom: -200px;">
                        <ul class="unstyled-list icon-list text-center">
                            <li><span class="mif-spinner3 ani-spin"></span></li>
                        </ul>
                    </div>
                </main>

                <router-view></router-view>
                
            </div>
        </div>

    </div>
</template>

<script>
    import Header from './components/Header'
    import Sidebar from './components/Sidebar'

    import Axios from 'axios'

    export default {
        name: 'app',
        components: {
            Header,
            Sidebar
        },
        
        data() {
            return {
                refCount: 0,
                isLoading: false
            }
        },

        methods: {
            setLoading(isLoading) {
                if (isLoading) {
                    this.refCount++;
                    this.isLoading = true;
                } 
                else if (this.refCount > 0) {
                    this.refCount--;
                    this.isLoading = (this.refCount > 0);
                }
            }
        },

        created() {
            Axios.interceptors.request.use((config) => {
                    this.setLoading(true);
                    return config;
                }, (error) => {
                    this.setLoading(false);
                    return Promise.reject(error);
                }
            );

            Axios.interceptors.response.use((response) => {
                    this.setLoading(false);
                    return response;
                }, (error) => {
                    this.setLoading(false);
                    return Promise.reject(error);
                }
            );
        }
    }
</script>