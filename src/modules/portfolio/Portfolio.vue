<template>
	<main class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

		<h4>Portfolio</h4>
		<hr>
		<div class="row">

			<div class="cell-md-12" v-if="!detail">
                
                <p>Here are some of the website or application projects I've worked on</p>

                <div class="row">

                    <div class="cell-md-4 mt-5" v-for="(item, key) in items" :key="key">
                        <router-link :to="'portfolio/'+item.path">
                            <div class="img-container">
                                <img data-src="" alt="" :src="item.image" data-holder-rendered="true" style="border:1px solid #dedede; height: 270px; width: 100%; display: block;">
                                <div class="image-overlay op-dark">
                                    <h3 class="text-light pt-20">{{ item.title }}<b>{{ item.subtitle }}</b></h3>
                                    <p>{{ item.category }}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>

                </div>

			</div>

            <div class="cell-md-12" v-else>

                <p>{{ this.$route.path }}</p>

                <div class="row">
                    <div class="cell-md-5 mt-5">
                        <div class="img-container">
                            <img :src="items[detail].image" style="border:1px solid #dedede;">
                        </div>
                    </div>
                    <div class="cell-md-7 mt-5">
                        <h4>Project Description</h4>
                        <p>{{ items[detail].description }}</p>
                        <br>

                        <table>
                            <tbody>
                                <tr>
                                    <td width="90px">Category</td>
                                    <td>: {{ items[detail].category }}</td>
                                </tr>
                                <tr>
                                    <td>Link</td>
                                    <td>: <a :href="items[detail].link" target="_blank">{{ items[detail].link }}</a></td>
                                </tr>
                            </tbody>
                        </table>

                        
                    </div>

                    <div class="cell-lg-12 cell-sm-12 pr-1 mr-1">
                        <br><hr>
                        <router-link class="button secondary mt-2 float-right" :to="'/portfolio'">
                            <span class="mif-arrow-left"></span> Back to List
                        </router-link>
                    </div>
                    
                </div>

                

            </div>

		</div>
	</main>
</template>

<script>
	
	export default {

        props: ['detail'],
        
        data() {
			return {

                items: {
                    milariancms: {
                        path: "milariancms",
                        title: "MILARIAN",
                        subtitle: "CMS",
                        category: "CMS BLOG",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        image: "/assets/images/portfolio/milariancms.png",
                        link: "https://kodokode.com"
                    },
                    mastershop: {
                        path: "mastershop",
                        title: "MASTER",
                        subtitle: "SHOP",
                        category: "E-COMMERCE",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        image: "/assets/images/portfolio/mastershop.png",
                        link: "https://shop.kodokode.com"
                    },
                    masterpos: {
                        path: "masterpos",
                        title: "MASTER",
                        subtitle: "POS",
                        category: "POINT OF SALE",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        image: "/assets/images/portfolio/masterpos.png",
                        link: "https://pos.kodokode.com"
                    },
                    kamaratih: {
                        path: "kamaratih",
                        title: "KAMA",
                        subtitle: "RATIH",
                        category: "E-COMMERCE",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        image: "/assets/images/portfolio/kamaratih.png",
                        link: "https://booking.totokperut.com"
                    },
                    ozonegroup: {
                        path: "ozonegroup",
                        title: "OZONE",
                        subtitle: "GROUP",
                        category: "PERSONAL WEB",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        image: "/assets/images/portfolio/ozonegroup.png",
                        link: "http://ozonegroup.co.id"
                    },
                    clicon: {
                        path: "clicon",
                        title: "CLIC",
                        subtitle: "ON",
                        category: "PERSONAL WEB",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        image: "/assets/images/portfolio/clicon.png",
                        link: "http://myclicon.com"
                    }
                }
                
			}
		}
    }

</script>