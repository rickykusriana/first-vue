<template>
	<main v-if="posts.title" class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4>{{ posts.title }}</h4>
		<hr>
		<div class="row">
			<div class="cell-md-12">
				<div class="card-content">
					<p class="fg-gray">
						<span class="mif-alarm"></span> {{ posts.published }} | 
						<span class="mif-user"></span> {{ posts.author.displayName == 'Unknown' ? 'Ricky Kusriana Subagja' : posts.author.displayName }}
					</p>
					<p v-html="posts.content"></p>

					<br>
					<p align="right">Original Post : <a target="_blank" :href="posts.url">{{ posts.url }}</a></p>
				</div>
			</div>

			<div class="cell-lg-12 cell-sm-12 pr-1 mr-1">
				<hr>
				<router-link class="button secondary mt-2 float-right" :to="'/blog'">
					<span class="mif-arrow-left"></span> Back to List
				</router-link>
			</div>

		</div>
	</main>
</template>

<script>

	import Axios from 'axios'
	
	export default {

		props: ['id'],

		data() {
			return {
				posts: []
			}
		},

		watch: {

			id: function(post_id) {

				this.posts = []

				var api = 'https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts/'+post_id+'?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is';
			
				Axios.get(api)
				.then(response => {
					this.posts = response.data
				})
				
				window.scrollTo({ top: 0 });
			}
		},

		mounted() {
			// var api = 'http://localhost/masterapp/api/post/blog?id='+this.getPostID()+'&X-API-KEY=SeVf4BIX2R8KmZaE7JwoD1CgUkz6OLyQpMdTtG0r';
			// var api = 'http://kodokode.com/api/post/blog?id='+this.getPostID()+'&X-API-KEY=SeVf4BIX2R8KmZaE7JwoD1CgUkz6OLyQpMdTtG0r';

			var api = 'https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts/'+this.id+'?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is';
			
			Axios.get(api)
			.then(response => {
				this.posts = response.data
			})
		}
	}

</script>
