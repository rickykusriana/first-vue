<template>

	<main v-if="profile && profile.status" class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4>Hello {{ $route.params.name }} / {{ name }} </h4>
		<hr>
		<div class="row">

			<p>{{ profile.full_name }}</p>

			<div v-for="row of profile" class="cell-md-12 p-0 m-0">
				<div class="card-content pl-2 pr-2">
					<p class="fg-gray">Posted on {{ row.full_name }}</p>
				</div>
			</div>
		</div>
	</main>

</template>

<script>

	import Axios from 'axios'
	
	export default {
		props: ['name'],

		watch: {
			name: function (value) {
				var api = 'https://kodokode-1540384975077.firebaseio.com/profile/'+value+'.json';

				Axios.get(api)
					.then(response => {
						this.profile = response.data
					})
			}
		},

		data() {
			return {
				profile: [],
			}
		},
		mounted() {
			var api = 'https://kodokode-1540384975077.firebaseio.com/profile/'+this.name+'.json';
			Axios.get(api)
				.then(response => {
					this.profile = response.data
				})
		}
	}

</script>