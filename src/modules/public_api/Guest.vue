<template>
	<main v-if="json.status" class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4>Connection Information</h4>
		<hr>
		<div class="row">
			<div class="cell-md-12 p-0 m-0">
				<div class="card-content pl-2 pr-2">
					<table class="table cell-border table-border options-table">
		                <thead>
			                <tr>
			                    <th>Name</th>
			                    <th>Value</th>
			                </tr>
		                </thead>
		                <tbody>
			                <tr>
			                    <td><code>IP Address</code></td>
			                    <td>{{ json.query }}</td>
			                </tr>
			                <tr>
			                    <td><code>Company Provider</code></td>
			                    <td>{{ json.as }}</td>
			                </tr>
			                <tr>
			                    <td><code>Provider Name</code></td>
			                    <td>{{ json.isp }}</td>
			                </tr>
			                <tr>
			                    <td><code>Region Name</code></td>
			                    <td>{{ json.regionName }}</td>
			                </tr>
			                <tr>
			                    <td><code>Region Code</code></td>
			                    <td>{{ json.region }}</td>
			                </tr>
			                <tr>
			                    <td><code>Country Name</code></td>
			                    <td>{{ json.country }}</td>
			                </tr>
			                <tr>
			                    <td><code>Country Code</code></td>
			                    <td>{{ json.countryCode }}</td>
			                </tr>
			                <tr>
			                    <td><code>Longitude</code></td>
			                    <td>{{ json.lon }}</td>
			                </tr>
			                <tr>
			                    <td><code>Latitude</code></td>
			                    <td>{{ json.lat }}</td>
			                </tr>
			                <tr>
			                    <td><code>Timezone</code></td>
			                    <td>{{ json.timezone }}</td>
			                </tr>
		                </tbody>
		            </table>

		            <small class="float-right pt-2 pr-2">
					    Source : <a target="_blank" href="http://ip-api.com">http://ip-api.com</a>
					</small>
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
			var api = 'http://ip-api.com/json';
			Axios.get(api)
				.then(response => {
					this.json = response.data
				})
		}
	}

</script>
