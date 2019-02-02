<template>
	<main v-if="posts.length" class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4>Blog</h4>
		<hr>
		<div class="row">

			<div class="cell-md-12">
				<p>From Blogger API </p>
				<span class="fg-gray">
					https://rickykusriana.blogspot.com
				</span>
			</div>

			<div v-for="post of posts" :key="post.id" class="cell-lg-3 cell-sm-6 pt-4 p-0 m-0">

				<div class="card image-header">

					<div class="card-header fg-white" v-bind:style="{ height:'180px', backgroundImage: 'linear-gradient( to bottom,  rgba(255,255,255,0), black 100% ), url('+getImg(post.content)+')' }">
						<h6>{{ post.title }}</h6>
					</div>
					<div class="card-content p-2">
						<p class="fg-gray"><span class="mif-alarm"></span> {{ post.published }}</p>
						{{ getText(post.title+' -- '+post.content) }} ...
					</div>
					<div class="card-footer">
						<router-link class="button secondary" :to="'/blog/'+post.id+'/'+post.title.replace(/ /g, '-').toLowerCase()">Read more ...</router-link>
					</div>
				</div>
			</div>

			<div class="cell-lg-12 cell-sm-12 pr-1 mr-1">
				<ul class="pagination float-right">
					
					<li class="page-item service" v-if="this.next_page">
						<router-link class="page-link" :to="'/blog'">
							<span class="mif-arrow-left"></span> Prev Page
						</router-link>
					</li>

					<li class="page-item service" v-else>
						<router-link class="page-link" :to="'blog/'+nextPageToken">
							Next Page <span class="mif-arrow-right"></span>
						</router-link>
					</li>

				</ul>
			</div>

		</div>

	</main>
</template>

<script>

	import Axios from 'axios'

	export default {

		props: ['next_page'],

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
				posts: [],
				nextPageToken: ''
			}
		},

		watch: {
			next_page: function (value) {

				if (value) {
					var api = 'https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is&pageToken='+value;
				}
				else {
					var api = 'https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is';
				}

				Axios.get(api)
					.then(response => {
						this.posts = response.data.items
						this.nextPageToken = response.data.nextPageToken
					})
			}
		},

		mounted() {

			if (this.next_page) {
				var api = 'https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is&pageToken='+this.next_page;
			}
			else {
				var api = 'https://www.googleapis.com/blogger/v3/blogs/9128430119229959313/posts?key=AIzaSyBntE0pCcddmdpOkEfjg0bbw1kHSZ1Q5is';
			}

			Axios.get(api)
				.then(response => {
					this.posts = response.data.items
					this.nextPageToken = response.data.nextPageToken
				})
		}
	}

</script>
