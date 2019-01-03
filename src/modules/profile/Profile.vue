<template>
	<main v-if="profile && profile.status" class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4>About Me</h4>
		<hr>
		<div class="row">
			<div class="cell-md-12">				
				<p>{{ profile.full_name }}</p>
				<span class="fg-gray">
					{{ profile.about }}
				</span>

				<div class="example">
					<span v-for="row of profile.link_profile" :key="row.id">
						<a target="_blank" :href="row.app_url" :class="'button '+row.app_color+' outline cell-md-2 cell-xs-12'">
							<span :class="row.app_icon"></span> {{ row.app_name }}
						</a>&nbsp;
					</span>
				</div>
			</div>
		</div>
	</main>
</template>

<script>

	import Axios from 'axios'
	
	export default {

		data() {
			return {
				profile: [],
			}
		},
		created() {
			var api = 'https://kodokode-1540384975077.firebaseio.com/profile/rickykusriana.json';
			Axios.get(api)
				.then(response => {
					this.profile = response.data
				})
		}
	}

</script>