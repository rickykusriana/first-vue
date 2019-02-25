<template>
	<main v-if="json" class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4>Location Information</h4>
		<hr>
		<div class="row">
			<div class="cell-md-12">

				<div class="row mt-2 p-0 m-0">

					<vue-json-pretty
						class="example cell-12"
						:path="'res'"
						:data="{ json }">
					</vue-json-pretty>

		        </div>
		    </div>
		</div>
	</main>
</template>


<script>

	import VueJsonPretty from 'vue-json-pretty'
    import Geohash from 'latlon-geohash'
	import Axios from 'axios'
	
	export default {
		
		data() {
			return {
				json: [],
			}
		},
		mounted() {
			if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    
                    // For get code location 
                    var geohash = Geohash.encode(position.coords.latitude, position.coords.longitude, 0);

                    // API, for get city name location
                    var api = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyBGRvIwip4B9lRqd14sEK5wVlvukKDhID0';
                    Axios.get(api)
                        .then(response => {
							
                            this.json = {
								'street': response.data.results[0].address_components[1].long_name,
								'city': response.data.results[0].address_components[6].long_name,
                                'formatted_address': response.data.results[0].formatted_address,
                                'geometry': response.data.results[0].geometry.location
							}

                            // console.log(response.data.results[0])
                        })

                }, (error) => {
                    console.log("Connot detect position:", error);
                })
            }
            else {
                Metro.toast.create('Cannot access geolocation', null, 5000)
            }
		},
		components: {
			VueJsonPretty
		},
	}

</script>
