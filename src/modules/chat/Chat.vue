<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

		<h4>Room : {{ room }}</h4>
		<hr>

		<div class="row">
			<div class="cell-md-12">

				<div data-role="navview" data-compact="md" data-expanded="lg" data-toggle="#pane-toggle">

	                <nav class="navview-pane mt-2">
	                    <button :class="is_login ? 'pull-button' : 'pull-button disabled'">
							<span class="default-icon-menu"></span>
						</button>						
						
	                    <ul class="navview-menu">
							<li>
	                            <a href="#">
	                                <span class="caption" style="margin-left:-30px;"><b>Create new Room</b></span>
	                            </a>
	                        </li>
							<div class="suggest-box">
								<form @submit.prevent="createRoom">
									<div class="input mb-1">
										<input 
											autocomplete="off" 
											name="roomname"
											ref="roomname"
											v-model="roomname"
											v-on:keydown="clear"
											:class="is_required ? 'alert' : ''" 
											type="text" 
											data-role="input"
											data-clear-button="false"
											data-custom-buttons="customButtons"
											data-role-input="true"
											placeholder="Input room name">

										<div class="button-group">
											<button class="button primary">
												<span class="mif-arrow-right"></span>
											</button>
										</div>
									</div>
									<small class="fg-red pl-4" v-if="is_required">{{ is_required }}</small>
								</form>
							</div>


							<li class="item-separator"></li>
							<li class="item-separator"></li>
	                        <li>
	                            <a href="#">
	                                <span class="caption" style="margin-left:-30px;"><b>Available Room</b></span>
	                            </a>
	                        </li>
	                        
							<div v-for="row in address" :key="row.name">
								<li :class="room == row.name ? 'active' : ''">
									<a href="#" v-on:click="changeRoom(row.name, $event)">
										<span class="icon"><span class="mif-chevron-right"></span></span>
										<span class="caption">{{ row.name }}</span>
									</a>

									<!-- <router-link :to="{ name: 'Chat_detail', params: { 'room_chat': row.name }}">
										<span class="icon"><span class="mif-chevron-right"></span></span>
										<span class="caption">{{ row.name }}</span>
									</router-link> -->
									
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

								<span v-if="!room">
									<div class="example">Select room chat on the leftbar</div>
								</span>

								<span v-else>

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
								</span>

							</div>
						</div>
						
	                </div>
	            </div>

            </div>
		</div>
	</main>
</template>

<script>

	import { firestore, datetime } from '../../config/Firebase'
	import Axios from 'axios'

	export default {
		
		name: 'Chat',
		// props: ['room_chat'],

		data() {
			return {
				roomname: '',

				username: '',
				text_msg: '',

				is_required: '',
				is_login: '',

				messages: [],

				address: [],
				room: '',
				precision: 6,
			}
		},

		methods: {

			changeRoom(new_room) {
				this.room = new_room
			},

			createRoom() {
				if (this.roomname) {
					this.room = this.roomname

					// Set room
					firestore.collection('chat').doc(this.room).set({ 
						name: this.room, 
						created_by: this.username,
						created_at: datetime
					});

					this.is_required = ''
				}
				else {
					this.is_required = 'Room name is required'
					this.$refs.roomname.focus()
				}
			},

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
				this.room = ''
				this.messages = []
				
				// this.$router.push({ name: 'Chat', path: '/chat' });

			},

			clear() {
				this.is_required = ''
			},

			sendMessage() {
				var self = this;
				if (this.text_msg) {

					let data = {
						'username': this.username,
						'text': this.text_msg,
						'created_at': datetime
					}

					// Save chat
					firestore.collection('chat').doc(this.room).collection('messages').add(data)
					.then(function (docRef) {
						self.messages.push(data)
						console.log('Document written with ID: ', docRef.id)
					})
					.catch(function (error) {
						console.error('Error adding document: ', error)
					})
				}
				else {
					this.is_required = 'This field is required'
				}

				this.text_msg = ''
				this.is_required = ''
				this.$refs.text_msg.focus()
			},

			messageListener(room) {

				if (room) {
					firestore.collection('chat').doc(room).collection('messages').orderBy('created_at', 'asc').get()
					.then((querySnapshot) => {
						querySnapshot.forEach((doc) => {
							let data = {
								'username': doc.data().username,
								'text': doc.data().text
							}
							this.messages.push(data)
						})
					});

					// ref.onSnapshot(snapshot => {
					// 	snapshot.docChanges().forEach(change => {
					// 		if (change.type === "added") {
					// 			let doc = change.doc;
					// 			this.messages.push(doc.data());
					// 		}
					// 	});
					// }, err => {
					// 	console.log(`Encountered error: ${err}`);
					// });
				}
				else {
					console.log('Room not assign');
				}
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

		},

		watch: {
			username(new_username) {
				localStorage.username = new_username;
			},

			is_login(new_login) {
				localStorage.is_login = new_login;
			},
			
			room: function(new_room) {
				this.messageListener(new_room)
			}
      
		},

		mounted() {
			if (localStorage.username) {
				this.username = localStorage.username;
			}

			if (localStorage.is_login) {
				this.is_login = localStorage.is_login;
			}

			this.getCity()
		},

		// updated() {
		// 	if (this.username) {
		// 		this.is_required = ''
		// 	}
		// }
	}

</script>
