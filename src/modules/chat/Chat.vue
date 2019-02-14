<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

		<h4>Chat</h4>
		<hr>
		
		<div class="row">
			<div class="cell-md-12">

				<div data-role="navview" data-compact="md" data-expanded="lg" data-toggle="#pane-toggle">

	                <nav class="navview-pane mt-2">
	                    <button class="pull-button">
							<span class="default-icon-menu"></span>
						</button>

	                    <div class="suggest-box">
	                        <input type="text" data-role="input" data-clear-button="false" data-search-button="true">
	                        <button class="holder">
	                            <span class="mif-search"></span>
	                        </button>
	                    </div>

	                    <ul class="navview-menu">
	                        <li class="item-separator"></li>
	                        <li>
	                            <a href="#">
	                                <span class="caption" style="margin-left:-30px;"><b>User online, from</b></span>
	                            </a>
	                        </li>
	                        
							<div v-for="row in address" :key="row.id">
								<li>
									<router-link :to="'/chat/'+getData(row.id, 'code')">
										<span class="icon"><span class="mif-chevron-right"></span></span>
										<span class="caption">{{ getData(row.id, 'city') }}</span>
									</router-link>
								</li>
							</div>

	                    </ul>
	                </nav>

	                <div class="navview-content pl-4-md pt-1">

	                    <div class="pb-1">
	                        <button id="pane-toggle" class="button square d-none-md"><span class="default-icon-menu"></span></button>
	                    </div>

						<div v-if="!username">
							<div class="input cell-md-4">
								<input
									autofocus
									required
									id="text_name"
									ref="text_name"
									v-model="text_name"
									v-on:keyup.enter="updateUsername" 
									type="text"
									data-role="input"
									data-role-input="true"
									data-clear-button="true"
									placeholder="Input your name here">
								<div 
									class="append bg-blue fg-white c-pointer" 
									v-on:click="updateUsername">
									<span class="mif-arrow-right"></span>
								</div>
							</div>
						</div>

						<div v-else>
							<div>
								<keep-alive>
									<div 
										class="messages" 
										ref="div_messages"
										data-role="panel" 
										data-height="432"
										v-keep-scroll-position
										v-chat-scroll="{always: true, smooth: false}">
										
										<div class="message" v-for="row in messages" :key="row.key">

											<div class="d-flex flex-row-r p-1" v-if="username == row.username">
												<div class="p-2 bg-lightGreen">
													{{ row.text }}
												</div>
											</div>

											<div class="d-flex flex-row p-1" v-else>
												<div class="p-2 bg-lightGray">
													<strong>{{ row.username }}</strong><br>
													{{ row.text }}
												</div>
											</div>

										</div>
									</div>
								</keep-alive>

								<p class="pt-2 pb-2">
									Hello, <b>{{username}}</b> 
									<a href="#" class="float-right" v-on:click="deleteUsername">Logout</a>
								</p>
								<div class="textarea autosize">
									<textarea 
										autofocus 
										id="text_msg" 
										ref="text_msg"
										v-model="text_msg"
										v-on:keyup.ctrl.enter="sendMessage"
										placeholder="Input message here (Ctrl + Enter to send)"
										data-role="textarea">
									</textarea>
									<div 
										class="append bg-blue fg-white pt-4 c-pointer" 
										v-on:click="sendMessage">
										<span class="mif-arrow-right mif-3x"></span>
									</div>
								</div>

							</div>
						</div>
						
	                </div>
	            </div>

            </div>
		</div>
	</main>
</template>

<script>
	
	import firebase from 'firebase/app'
	import 'firebase/database'
	import Geohash from 'latlon-geohash'
	import Axios from 'axios'

	let config = {
		apiKey: "AIzaSyAf6CpheRBvdE3ou2nQplp-CivMkQQUPPk",
		authDomain: "first-158002.firebaseapp.com",
		databaseURL: "https://first-158002.firebaseio.com",
		projectId: "first-158002",
		storageBucket: "first-158002.appspot.com",
		messagingSenderId: "541585712871"
	}

	firebase.initializeApp(config);
	let database = firebase.database();

	export default {

		name: 'Chat',

		data() {
			return {
				username: '',
				text_name: '',
				text_msg: null,
				messages: [],

				address: [],
				room: null,
				precision: 6,
			}
		},

		methods: {
			updateUsername(e) {
				e.preventDefault();
				if (e.target.value) {
					this.username = e.target.value;
				}
				else {
					this.username = this.text_name	
				}
			},

			deleteUsername() {
				this.div_height = 0;
				this.username = '';
				this.text_name = '';
			},

			sendMessage(e) {
				e.preventDefault();
				let message;
				if (e.target.value) {
					message = {
						username: this.username,
						text: e.target.value
					}
				}
				else {
					message = {
						username: this.username,
						text: this.text_msg
					}
				}
				
				if (e.target.value != '' || this.text_msg != null) {

					let key = this.room.push().key;
					this.room.child('messages/' + key).set(message)
				}

				e.target.value = ''
				this.text_msg = null
				this.$refs.text_msg.focus()
			},

			messageListener() {
				this.room.child('messages').on('child_added', (snapshot) => {
					// push the snapshot value into a data attribute
					this.messages.push(snapshot.val())
				})
			},

			getCity() {
				const itemsRef = database.ref('rooms');
				itemsRef.on('value', snapshot => {
					let data = snapshot.val();
					let address = [];
					Object.keys(data).forEach(key => {
						address.push({
							id: key,
							username: data[key].username,
							text: data[key].text
						});
					});
					this.address = address;
				});
			},

			// 

			init() {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition((position) => {
						
						// For get code location 
						var geohash = Geohash.encode(position.coords.latitude, position.coords.longitude, this.precision);

						// API, for get city name location
						var api = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyBGRvIwip4B9lRqd14sEK5wVlvukKDhID0';
						Axios.get(api)
							.then(response => {
								this.room = database.ref().child('rooms/' + geohash+'_'+response.data.results[0].address_components[6].long_name)
								this.messageListener()
							})

					}, (err) => {
						
					})
				} 
				else {
					console.error('Cannot access geolocation')
				}
			},
			
			getData(str, type) {
				var n = str.indexOf("_");
				if (type == 'code') {
					return str.substr(0, n);
				}
				else {
					return str.replace(str.substr(0, n)+'_', '');
				}

			},

		},

		watch: {
			username(new_username) {
				localStorage.username = new_username;
			}
		},

		mounted() {
			if (localStorage.username) {
				this.username = localStorage.username;
			}

			this.init()
			this.getCity()
		},

		updated() {
			if (this.username) {
				this.$refs.text_msg.focus()
			}
		}
	}

</script>
