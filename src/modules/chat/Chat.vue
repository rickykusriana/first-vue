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
	                                <span class="icon"><span class="mif-user-check fg-green"></span></span>
	                                <span class="caption">User Online</span>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#">
	                                <span class="icon"><span class="mif-apps"></span></span>
	                                <span class="caption">Apps</span>
	                            </a>
	                        </li>
	                        <li class="active">
	                            <a href="#">
	                                <span class="icon"><span class="mif-gamepad"></span></span>
	                                <span class="caption">Games</span>
	                            </a>
	                        </li>
	                        <li>
	                            <a href="#" class="dropdown-toggle">
	                                <span class="icon"><span class="mif-music"></span></span>
	                                <span class="caption">Music</span>
	                            </a>
	                            <ul class="navview-menu" data-role="dropdown">
	                                <li>
	                                    <a href="#">
	                                        <span class="icon"><span class="mif-gamepad"></span></span>
	                                        <span class="caption">Games</span>
	                                    </a>
	                                </li>
	                                <li>
	                                    <a href="#">
	                                        <span class="icon"><span class="mif-film"></span></span>
	                                        <span class="caption">Movies</span>
	                                    </a>
	                                </li>
	                            </ul>
	                        </li>
	                        <li class="disabled">
	                            <a href="#">
	                                <span class="icon"><span class="mif-images"></span></span>
	                                <span class="caption">Images</span>
	                            </a>
	                        </li>

	                        <li class="item-separator"></li>

	                        <li>
	                            <a href="#">
	                                <span class="icon"><span class="mif-folder"></span></span>
	                                <span class="caption">Documents</span>
	                            </a>
	                        </li>
	                    </ul>
	                </nav>

	                <div class="navview-content pl-4-md pt-1">

	                    <div class="pb-1">
	                        <button id="pane-toggle" class="button square d-none-md"><span class="default-icon-menu"></span></button>
	                    </div>
	                    
	                    <span v-if="username">
							<keep-alive>
								<div 
									class="messages" 
									ref="div_messages"
									data-role="panel" 
									data-height="432"
									v-keep-scroll-position
									v-chat-scroll="{always: true, smooth: true}">
									
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
						</span>

						<span v-if="!username">
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
									data-search-button="true"
									data-search-button-icon="<span class='mif-arrow-right'></span>"
									class=""
									placeholder="Input your name here"
									data-role-input="true">

								<div class="button-group">
									<button v-on:click="deleteUsername" class="button input-clear-button" tabindex="-1" type="button">
										<span class="mif-cross"></span>
									</button>
									<button v-on:click="updateUsername" class="button input-search-button" tabindex="-1" type="button" style="background-color:#f8f8f8;">
										<span class="mif-arrow-right"></span>
									</button>
								</div>
							</div>
						</span>
						<span v-else>
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
						</span>
						
	                </div>
	            </div>

            </div>
		</div>
	</main>
</template>

<script>

	
	import firebase from 'firebase/app'
	import 'firebase/database'
	// import Geohash from 'latlon-geohash'

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
				messages: []
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
				
				// Push message to firebase reference
				if (e.target.value != '' || this.text_msg != null) {
					database.ref('messages').push(message);
				}

				e.target.value = ''
				this.text_msg = null
				this.$refs.text_msg.focus()
			},

			getData() {
				const itemsRef = database.ref('messages');
				itemsRef.on('value', snapshot => {
					let data = snapshot.val();
					let messages = [];
					Object.keys(data).forEach(key => {
						messages.push({
							id: key,
							username: data[key].username,
							text: data[key].text
						});
					});
					this.messages = messages;
				});
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

			this.getData()
		},

		updated() {
			if (this.username) {
				this.$refs.text_msg.focus()
			}
		}
	}

</script>
