<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

		<h4>Chat</h4>
		<hr>

		<div class="row">
			<div class="cell-md-12">

				<div data-role="navview" data-compact="md" data-expanded="lg" data-toggle="#pane-toggle">

	                <nav class="navview-pane mt-2">
	                    <button :class="is_login ? 'pull-button' : 'pull-button disabled'">
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
	                        
							<div v-for="row in address" :key="row.name">
								<li>
									<router-link :to="'/chat/'+row.name">
										<span class="icon"><span class="mif-chevron-right"></span></span>
										<span class="caption">{{ row.name }}</span>
									</router-link>
								</li>
							</div>

	                    </ul>
	                </nav>

	                <div class="navview-content pl-4-md pt-1">

	                    <div class="pb-1">
	                        <button id="pane-toggle" class="button square d-none-md"><span class="default-icon-menu"></span></button>
	                    </div>

						<div v-if="!is_login">
							<form @submit.prevent="login">
								<div class="input mb-1 cell-md-4">
									<input 
										autofocus
										autocomplete="off" 
										name="username"
										ref="username"
										v-model="username"
										v-on:keydown="clear"
										:class="is_required ? 'alert' : ''" 
										type="text" 
										data-role="input"
										data-clear-button="false"
										data-custom-buttons="customButtons"
										data-role-input="true"
										placeholder="Input your name here">

									<div class="button-group">
										<button class="button primary">
				                        	<span class="mif-arrow-right"></span>
				                        </button>
									</div>
								</div>
								<small class="fg-red" v-if="is_required">{{ is_required }}</small>
							</form>
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
									<a href="#" class="float-right" v-on:click="logout">Logout</a>
								</p>
								<form class="textarea autosize" @submit.prevent="sendMessage">
									<textarea 
										autofocus 
										name="text_msg"
										ref="text_msg"
										v-model="text_msg"
										v-on:keydown="clear"
										v-on:keyup.ctrl.enter="sendMessage"
										:class="is_required ? 'alert' : ''"
										placeholder="Input message here (Ctrl + Enter to send)"
										data-role="textarea">
									</textarea>
									<div class="button-group">
										<button class="button large primary" style="min-height:68px;">
				                        	<span class="mif-arrow-right"></span>
				                        </button>
									</div>
								</form>
								<small class="fg-red" v-if="is_required">{{ is_required }}</small>

							</div>
						</div>
						
	                </div>
	            </div>

            </div>
		</div>
	</main>
</template>

<script>

	import { firestore } from '../../config/Firebase'
	import datetime from '../../config/Date_helper'
	import Geohash from 'latlon-geohash'
	import Axios from 'axios'

	export default {

		name: 'Chat',

		data() {
			return {
				username: '',
				text_msg: '',

				is_required: '',
				is_login: '',

				messages: [],

				address: [],
				room: null,
				precision: 6,
			}
		},

		methods: {

			login() {

				if (this.username) {

					let user = this.username

					firestore.collection("users").where("username", "==", user).get()
					.then(function(querySnapshot) {

						// Update status user login
						if (querySnapshot.docs.length > 0) {
							querySnapshot.forEach(function(doc) {
								
								firestore.collection("users").doc(doc.id).update({ status: "online", last_login: datetime });
								// console.log(doc.data());

							});
						}

						// Register new user
						else {
							firestore.collection('users').add({
								username: user,
								created_at: datetime,
								last_login: datetime,
								status: 'online'
							})
						}
					})
					.catch(function(error) {
						console.log("Error getting documents: ", error);
					});

					this.is_required = ''
					this.is_login = true
				}
				else {
					this.is_required = 'You must enter name to join'
					this.$refs.username.focus()
				}
			},

			logout() {

				let user = this.username
				
				firestore.collection("users").where("username", "==", user).get()
				.then(function(querySnapshot) {

					// Update status user login
					querySnapshot.forEach(function(doc) {
						
						firestore.collection("users").doc(doc.id).update({ status: "offline" });
					});
				})
				.catch(function(error) {
					console.log("Error getting documents: ", error);
				});

				this.username = ''
				this.text_msg = ''
				this.is_required = ''
				this.is_login = ''
			},

			clear() {
				this.is_required = ''
			},

			sendMessage() {

				if (this.text_msg) {

					// Set room
					firestore.collection('chat').doc(this.room).set({ name: this.room });

					// Save chat
					firestore.collection('chat').doc(this.room).collection('messages').add({
						username: this.username,
						text: this.text_msg,
						created_at: datetime
					})
					.then(function (docRef) {
						console.log('Document written with ID: ', docRef.id)
					})
					.catch(function (error) {
						console.error('Error adding document: ', error)
					})
				}
				else {
					this.is_required = 'This field is required'
				}

				this.$refs.text_msg.focus()
			},

			messageListener() {
				let self = this
				firestore.collection('chat').doc(this.room).collection('messages').get()
				.then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
						self.messages.push(doc.data());
					});
				}).catch(function(error) {
					console.log("Error getting document:", error);
				});
			},

			getCity() {

				let self = this
				firestore.collection("chat").get()
				.then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
						self.address.push(doc.data());
					});
				})
				.catch(function(error) {
					console.log("Error getting documents: ", error);
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
								this.room = response.data.results[0].address_components[6].long_name
								this.messageListener()
							})

					}, (error) => {
						console.log("Connot detect position:", error);
					})
				} 
				else {
					console.error('Cannot access geolocation')
				}
			},
		},

		watch: {
			username(new_username) {
				localStorage.username = new_username;
			},

			is_login(new_login) {
				localStorage.is_login = new_login;
			}
		},

		mounted() {
			if (localStorage.username) {
				this.username = localStorage.username;
			}

			if (localStorage.is_login) {
				this.is_login = localStorage.is_login;
			}

			this.init()
			this.getCity()
		},

		// updated() {
		// 	if (this.username) {
		// 		this.is_required = ''
		// 	}
		// }
	}

</script>
