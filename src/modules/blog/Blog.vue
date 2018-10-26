<template>
	<main v-if="posts && posts.length" class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4>Blog</h4>
		<hr>
		<div class="row">
			<div v-for="post of posts" class="cell-md-3 p-0 m-0">
				<div class="card image-header">
					<div class="card-header fg-white" v-bind:style="{ backgroundImage: 'url('+getImg(post.post_content)+')' }">
						{{ post.post_title }}
					</div>
					<div class="card-content p-2">
						<p class="fg-gray">Posted on {{ post.created_at }}</p>
						
						{{ getText(post.post_content) }} ...

					</div>
					<div class="card-footer">
						<router-link class="button secondary" :to="'blog/'+post.id+'/'+post.meta_url">Read More</router-link>
					</div>
				</div>
			</div>

		</div>
			
	</main>
</template>

<script>

	import Axios from 'axios'

	export default {

		methods: {
			getText(html) {
				var tmp = document.createElement('div');
				tmp.innerHTML = html;
				return tmp.textContent.substr(0, 128) || tmp.innerText.substr(0, 128);
			},
			getImg(html) {
				
				var elem = document.createElement('div');
				elem.style.display = 'none';
				document.body.appendChild(elem);
				elem.innerHTML = html;

				if (elem.querySelector('img') != null) {
					return elem.querySelector('img').src;
				}
			}
		},

		data() {
			return {
				posts: []
			}
		},

		created() {
			// var api = 'http://localhost/masterapp/api/post/blog?X-API-KEY=SeVf4BIX2R8KmZaE7JwoD1CgUkz6OLyQpMdTtG0r';
			var api = 'http://kodokode.com/api/post/blog?X-API-KEY=SeVf4BIX2R8KmZaE7JwoD1CgUkz6OLyQpMdTtG0r';
			Axios.get(api)
				.then(response => {
					this.posts = response.data
				})
		}
	}

</script>
