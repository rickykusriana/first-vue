<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

		<h4>Public Chat</h4>
		<hr>

		<div class="row">
			<div class="cell-md-12">

                <!-- Login form -->
                <div v-if="!is_login" class="pt-10">
                    <center>
                    <!-- <button data-role="ripple" class="button block primary" @click="loginAnon()">
                        <span class="mif-enter pr-2"></span> Sign In Anonymously
                    </button> -->
                    <button data-role="ripple" class="button block alert" @click="loginGoogle()">
                        <span class="mif-google-plus pr-2"></span> Sign In with Google
                    </button>
                    </center>
                </div>

                <div v-else>

                    <div data-role="navview" data-compact="md" data-expanded="lg" data-toggle="#pane-toggle">

                        <!-- Sidebar Room Chat -->
                        <nav v-if="is_login" id="navview" class="navview-pane mt-2">
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
                                                name="room_name"
                                                ref="room_name"
                                                v-model="room_name"
                                                v-on:keydown="clear"
                                                :class="is_required ? 'alert' : ''" 
                                                type="text" 
                                                data-role="input"
                                                data-clear-button="false"
                                                data-custom-buttons="customButtons"
                                                data-role-input="true"
                                                placeholder="Input room name">

                                            <div class="button-group">
                                                <button data-role="ripple" class="button primary">
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
                                            <!-- <small style="right:20px; position:absolute;" class="text-bold fg-red">{{ count_chat.count }}</small> -->
                                        </a>									
                                    </li>
                                </div>

                            </ul>
                        </nav>

                        <!-- Main Content -->
                        <div class="navview-content pl-4-md pt-1">

                            <div class="pb-1">
                                <button id="pane-toggle" class="button square d-none-md"><span class="default-icon-menu"></span></button>
                            </div>

                            <!-- Chat form -->
                            
                            <div>
                                
                                <!-- Dilaog delete room -->
                                <div class="dialog" data-role="dialog" id="demoDialog1">
                                    <div class="dialog-title">Confirmation</div>
                                    <div class="dialog-content">
                                        Are you sure to delete this room?
                                    </div>
                                    <div class="dialog-actions">
                                        <button data-role="ripple" class="button js-dialog-close">No</button>
                                        <button v-on:click="deleteRoom(room)" class="button success js-dialog-close">Yes</button>
                                    </div>
                                </div>

                                <div class="panel mx-auto">
                                    <div class="panel-title">
                                        <span class="caption">Room Name : <b>{{ room }}</b></span>
                                        <span 
                                            v-if="room_owner"
                                            onclick="Metro.dialog.open('#demoDialog1')"
                                            class="mif-cross icon fg-red"
                                            title="Delete Room"
                                            style="cursor:pointer; float: right;position: absolute;right: 0;">
                                        </span>
                                    </div>
                                </div>

                                <keep-alive>
                                    
                                    <div 
                                        class="messages panel" 
                                        ref="div_messages"
                                        data-role="panel"
                                        data-height="432"
                                        v-keep-scroll-position
                                        v-chat-scroll="{always: true, smooth: false}">

                                        <div class="message" v-for="(row, key) in messages[0]" :key="key">

                                            <div class="d-flex flex-row-r p-1" v-if="email == row.email">
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
                                    <!-- <a href="#" class="float-right" v-on:click="logout">Logout</a> -->
                                    <a href="#" class="float-right" v-on:click="logoutAnon">Logout</a>
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
                                            <button data-role="ripple" class="button large primary" style="min-height:68px;">
                                                <span class="mif-arrow-right"></span>
                                            </button>
                                        </div>
                                    </form>
                                    <small class="fg-red" v-if="is_required_msg">{{ is_required_msg }}</small>
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

	import { firebase, firestore, datetime } from '../../config/Firebase'
	import { nama_hewan, kata_sifat } from '../../config/String_helper'
	import Axios from 'axios'

	export default {
		
		name: 'Chat',

		data() {
			return {
				room_name: '',
				room_owner: false,
				room: false,

				username: '',
				email: '',
				text_msg: '',

				is_login: false,
				is_required: '',
				is_required_msg: '',

				messages: [],
				address: [],

				animal_name: '',
				data_client: []
			}
		},

		methods: {

			changeRoom(new_room) {
				this.room = new_room
				Metro.toast.create('Join to '+new_room, null, 5000)
				document.getElementById('navview').classList.remove('open');
			},

			createRoom() {

				Metro.toast.create('Under development', null, 5000)

				// if (this.room_name) {
				// 	this.room = this.room_name

				// 	// Set room
				// 	firestore.collection('chat').doc(this.room).set({ 
				// 		name: this.room, 
				// 		email: this.email, 
				// 		created_by: this.username,
				// 		created_at: datetime
				// 	});

				// 	Metro.toast.create('Room created', null, 5000)
				// 	this.is_required = ''
				// 	this.room_name = ''
				// }
				// else {
				// 	this.is_required = 'Room name is required'
				// 	this.$refs.room_name.focus()
				// }
			},

			deleteRoom(room) {

				// Delete parent document
				firestore.collection("chat").doc(room).delete().then(function() {
					// console.log("Document successfully deleted!");
				}).catch(function(error) {
					console.error("Error removing document: ", error);
				});

				// Delete subcollection
				firestore.collection("chat").doc(room).collection("messages").orderBy("created_at", "asc").get()
				.then((querySnapshot) => {

					querySnapshot.forEach((doc) => {

						firestore.collection("chat").doc(room).collection("messages").doc(doc.id).delete().then(function() {
							// console.log("Sub Document successfully deleted!");
						}).catch(function(error) {
							console.error("Error removing document: ", error);
						});
					})
				});

				this.room = false
			},

			// Auth 1 - Basic
			login() {

				if (this.username) {

					let user = this.username

					firestore.collection("users").where("username", "==", user).get()
					.then(function(querySnapshot) {

						// Update status user login
						if (querySnapshot.docs.length > 0) {
							querySnapshot.forEach(function(doc) {
								
								firestore.collection("users").doc(doc.id).update({ status: "online", last_login: datetime });
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

				this.clear()
				this.username = ''
				this.email = ''
				this.text_msg = ''
				this.is_login = ''
				this.room = false
				this.room_owner = false
				this.messages = []
				
				// this.$router.push({ name: 'Chat', path: '/chat' });

			},
			
			// Auth 2 - Anonymous
            loginAnon() {
				
                firebase.auth().signInAnonymously().then( response => {

                    const userData = {
						username: this.animal_name,
						ip_address: this.data_client.ip,
						region: this.data_client.region,
						country: this.data_client.country_name,
						created_at: datetime,
						last_login: datetime,
                    }

					console.log( 'Anonymous Login', response )
					
                    // Update user account displayName
                    response.user.updateProfile({ username: this.animal_name })

                    // Create db entry in 'users' collection for this anonymous user				
					firestore.collection('users').doc(response.user.uid).set( userData )

					this.is_login = true
					this.username = this.animal_name

					Metro.toast.create('Successfully Login as '+this.animal_name, null, 5000)

					// redirect
                    // this.$router.replace({
                    // 	name: 'Home'
					// })
					
                }).catch( error => {
					Metro.toast.create(error.message, null, 5000, 'alert')
                })
            },

			logoutAnon() {
				firebase.auth().signOut().then(response => {
					
					this.clear()
					this.username = ''
					this.email = ''
					this.text_msg = ''
					this.is_login = ''
					this.room = false
					this.room_owner = false
					this.messages = []

					Metro.toast.create('Successfully logout', null, 5000)

				}).catch(error => {
					Metro.toast.create(error.message, null, 5000, 'alert')
				})
			},

			// Auth 3 - Google
			loginGoogle() {

				var provider = new firebase.auth.GoogleAuthProvider();

				firebase.auth().signInWithPopup(provider).then( result => {
					var token = result.credential.accessToken;
					var user = result.user;
					
					// Check data users
					firestore.collection("users").doc(user.email).get().then( doc => {
						if (doc.exists) {
							
							// Update user account
							firestore.collection('users').doc(doc.data().email).update({
								last_login: datetime
							});
							
							this.email = doc.data().email
							this.username = doc.data().username
						}
						else {
							const userData = {
								email: user.email,
								username: this.animal_name,
								ip_address: this.data_client.ip,
								region: this.data_client.region,
								country: this.data_client.country_name,
								created_at: datetime,
								last_login: datetime,
							}
							
							// Create db entry in 'users' collection
							firestore.collection('users').doc(user.email).set( userData )

							this.email = user.email
							this.username = this.animal_name
						}

						this.is_login = true
						Metro.toast.create('Successfully Login as '+this.username, null, 5000)

					}).catch(function(error) {
						Metro.toast.create(error.message, null, 5000, 'alert')
						console.log("Error getting users:", error);
					});

				}).catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// The email of the user's account used.
					var email = error.email;
					// The firebase.auth.AuthCredential type that was used.
					var credential = error.credential;
					// ...

					console.log(error)
				});
			},


			clear() {
				this.is_required = ''
				this.is_required_msg = ''
			},

			sendMessage() {

				if (this.text_msg) {

					// Save chat
					firestore.collection("chat").doc(this.room).collection("messages").add({
						'email': this.email,
						'username': this.username,
						'text': this.text_msg,
						'created_at': datetime
					})
					
					this.text_msg = ''
					this.is_required_msg = ''
				}
				else {
					this.is_required_msg = 'This field is required'
				}

				this.$refs.text_msg.focus()
			},

			messageListener(room_name) {
				
				let data = []
				let self = this
				
				if (this.room) {
					
					self.messages = []

					// Load messages
					firestore.collection("chat").doc(this.room).collection("messages").orderBy("created_at", "asc")
					.onSnapshot(function(snapshot) {
						
						snapshot.docChanges().forEach(function(change) {
							if (change.type === "added") {
								data.push(change.doc.data())

								if (change.doc.data().email != self.email && self.messages.length > 0) {
									Metro.toast.create('New message from '+change.doc.data().username+' in '+room_name, null, 5000, 'secondary')
									self.playSound()
								}
							}
						});

						self.messages.push(data)
					});

					// Get room owner
					firestore.collection("chat").doc(this.room).get().then(function(doc) {
						if (doc.exists) {
							self.room_owner = (self.email == doc.data().email ? true : false);
						}
					}).catch(function(error) {
						console.log("Error getting document:", error);
					});

				}
				else {
					console.log('Room not assign');
					this.messages = []
				}
			},

			roomListener() {

				let self = this

				firestore.collection("chat")
				.onSnapshot(function(snapshot) {
					snapshot.docChanges().forEach(function(change) {
						if (change.type === "added") {
							self.address.push(change.doc.data());
						}
						if (change.type === "removed") {
							console.log("Removed room: ", change.doc.data().name);

							for (var i = 0; i < self.address.length-1; i++) {
								if (self.address[i].name === change.doc.data().name) {
									self.address.splice(i, 1); 
								}
							}
							
							self.room = false
							self.messages[0] = []
							Metro.toast.create('Room deleted by owner', null, 5000)

							// self.address.splice(self.address.indexOf(change.doc.data()), 1);
						}
					});

				});
			},

			// Get random name
			randomName() {
				let array_name = []

				for (let index = 0; index < nama_hewan.length; index++) {

					array_name.push( nama_hewan[index]+' '+ kata_sifat[Math.floor(Math.random()*kata_sifat.length)] )
				}

				this.animal_name = array_name[Math.floor(Math.random()*array_name.length)]
			},

			// Get IP
			getClient() {
				var api = 'https://json.geoiplookup.io';
				Axios.get(api)
					.then(response => {
						this.data_client = response.data
					})
			},

			// Notification
			playSound() {
				var audio = new Audio('/assets/sounds/me-too.mp3');
				audio.play();
			}

		},

		watch: {
			email(new_email) {
				localStorage.email = new_email;
			},
			
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
			if (localStorage.email) {
				this.email = localStorage.email;
			}

			if (localStorage.username) {
				this.username = localStorage.username;
			}

			if (localStorage.is_login) {
				this.is_login = localStorage.is_login;
			}


			this.randomName()
			this.getClient()
			this.roomListener()
			this.messageListener()
		},

		// updated() {
		// 	if (this.username) {
		// 		this.is_required = ''
		// 	}
		// }
	}

</script>
