<template>
	<main v-if="posts && posts.length" class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4>{{ post_title }}</h4>
		<hr>
		<div class="row">
			<div v-for="post of posts" class="cell-md-12 p-0 m-0">
				<div class="card-content pl-2 pr-2">						
					<p class="fg-gray">Posted on {{ post.created_at }}</p>
					<span v-html="post.post_content"></span>
				</div>
			</div>
		</div>
	</main>
</template>

<script>

	import Axios from 'axios'
	
	export default {

		props: ['id'],

		methods: {
			getText(html) {
				var tmp = document.createElement('div');
				tmp.innerHTML = html;
				return tmp.textContent.substr(3, 100) || tmp.innerText.substr(3, 100);
			},
			getPostID() {
				return this.id;
			}
		},

		data() {
			return {
				post_title: '...',
				posts: [],
			}
		},
		created() {
			// var api = 'http://localhost/masterapp/api/post/blog?id='+this.getPostID()+'&X-API-KEY=SeVf4BIX2R8KmZaE7JwoD1CgUkz6OLyQpMdTtG0r';
			var api = 'http://kodokode.com/api/post/blog?id='+this.getPostID()+'&X-API-KEY=SeVf4BIX2R8KmZaE7JwoD1CgUkz6OLyQpMdTtG0r';
			Axios.get(api)
				.then(response => {
					this.post_title = response.data[0].post_title
					this.posts = response.data
				})
		}
	}

</script>
