<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

		<h4>Chat</h4>
		<hr>
		
		<div class="row">
			<div class="cell-md-12">
				<div class="mt-2 p-0 m-0">

					<div class="messages" data-role="panel" data-height="400" ref="div_messages">
						
						<span class="message" v-for="row in messages" :key="row.key">

							<span v-if="username == row.username">
								<div class="float-right p-1 bg-lightCyan">
									<strong>{{ row.username }}</strong> : {{ row.text }}
								</div>
								<br><br>
							</span>

							<span v-else>
								<div class="float-left p-1 bg-lightGray">
									<strong>{{ row.username }}</strong> : {{ row.text }}
								</div>
								<br><br>
							</span>

						</span>
						
					</div>
				
				</div>
			</div>
		</div>

		
		<div class="row" style="padding-top:20px;">

			<span v-if="!username">
				<div class="cell-md-12">
					<div class="input">
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
				</div>
			</span>

			<span class="cell-md-12" v-else>
				Hello, <b>{{username}}</b> 
				<button class="float-right button link mini" v-on:click="deleteUsername">Logout</button><br />

				<div class="textarea autosize">
					<textarea 
						autofocus 
						id="text_msg" 
						ref="text_msg"
						v-model="text_msg"
						placeholder="Input message here" 
						data-role="textarea"
						data-append="<span class='mif-leanpub'></span>"
						class="" 
						data-role-textarea="true"
						style="height: 47px;">
					</textarea>
					<button 
						class="button input-clear-button" 
						tabindex="-1" 
						type="button" 
						style="right: 33.5px; height: 47px; padding-top: 5px;">
						<span class="mif-cross"></span>
					</button>
					<button v-on:click="sendMessage" class="button input-search-button append" tabindex="-1" type="button" style="height: 47px; padding-top: 10px">
						<span class="mif-arrow-right mif-2x"></span>
					</button>
				</div>

			</span>

			<!-- For get height of div | DONT REMOVE -->
			<span style="color:#FFF;">{{ div_height }}</span>
			
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
				div_height: 0,
				username: '',
				text_name: '',
				text_msg: '',
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
				
				//Push message to firebase reference
				if (e.target.value != '' || this.text_msg != '') {
					database.ref('messages').push(message);
				}
				e.target.value = ''
				this.text_msg = ''
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

		mounted() {
			this.getData()
			this.$refs.div_messages.scrollTop = this.div_height
		},

		updated() {
			this.div_height = this.$refs.div_messages.scrollHeight
			this.$refs.div_messages.scrollTop = this.div_height
		},
		
	}

</script>
