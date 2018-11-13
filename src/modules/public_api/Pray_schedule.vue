<template>
	<main v-if="json.status" class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<div style="padding-top: 100px;">
			<h1 style="text-align: center;">Pray Schedule</h1>
			<div class="card">
				<div class="d-flex flex-justify-center">
					<div class="card-content p-2">
						<!-- <dl class="horizontal p-5">
							<dt>IP Address</dt>
							<dd>{{ json.query }}</dd>
							<dt>Company Provider</dt>
							<dd>{{ json.as }}</dd>
							<dt>Provider Name</dt>
							<dd>{{ json.isp }}</dd>
							<dt>Region Name</dt>
							<dd>{{ json.regionName }}</dd>
							<dt>Region Code</dt>
							<dd>{{ json.region }}</dd>
							<dt>Country Name</dt>
							<dd>{{ json.country }}</dd>
							<dt>Country Code</dt>
							<dd>{{ json.countryCode }}</dd>
							<dt>Longitude</dt>
							<dd>{{ json.lon }}</dd>
							<dt>Latitude</dt>
							<dd>{{ json.lat }}</dd>
							<dt>Timezone</dt>
							<dd>{{ json.timezone }}</dd>
							<dt>Zip Code</dt>
							<dd>{{ json.zip }}</dd>
						</dl> -->
					</div>
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
				json: [],
			}
		},
		created() {
			var api = 'https://time.siswadi.com/pray/Jakarta';
			Axios.get(api)
				.then(response => {
					this.json = response.data
					console.log(response.data);
				})
		}
	}

</script>
