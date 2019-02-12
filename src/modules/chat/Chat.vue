<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

		<h4>Chat</h4>
		<hr>
		
		<div class="row">
			<div class="cell-md-12">
				<div class="mt-2 p-0 m-0">

					<div class="messages" data-role="panel" data-height="400" ref="div_messages" id="div_messages">
						
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
					<input 
						autofocus
						type="text" 
						id="text_name"
						v-on:keyup.enter="updateUsername" 
						data-role="input" 
						data-search-button="true" 
						data-search-button-icon="<span class='mif-rocket mif-2x'></span>" 
						placeholder="Input your name here"> 
				</div>
			</span>
			<span class="cell-md-12" v-else>
				
				Hello, <b>{{username}}</b><br />
				<textarea autofocus id="text_msg" data-role="textarea" placeholder="Input message here" v-on:keyup.enter="sendMessage"></textarea>
				
			</span>
			
		</div>
		
	</main>
</template>

<script>

	import * as Firebase from 'firebase'
	// import Geohash from 'latlon-geohash'

	let config = {
		apiKey: "AIzaSyAf6CpheRBvdE3ou2nQplp-CivMkQQUPPk",
		authDomain: "first-158002.firebaseapp.com",
		databaseURL: "https://first-158002.firebaseio.com",
		projectId: "first-158002",
		storageBucket: "first-158002.appspot.com",
		messagingSenderId: "541585712871"
	}

	let fire = Firebase.initializeApp(config);

	$(function(params) {
		
	})

	export default {
		name: 'Chat',

		data() {
			return {
				div_height: 0,
				username: '',
				messages: []
			}
		},
		methods: {
			updateUsername(e) {
				e.preventDefault();
				if (e.target.value) {
					this.username = e.target.value;

					document.getElementById("text_msg").focus();
				}
			},

			sendMessage(e) {
				e.preventDefault();
				if (e.target.value) {
					const message = {
						username: this.username,
						text: e.target.value
					}
					
					//Push message to firebase reference
					fire.database().ref('messages').push(message);
					e.target.value = ''
				}
			},

			getData() {
				const itemsRef = fire.database().ref('messages');
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

			scrollToEnd(value) {
				this.$refs.div_messages.scrollTop = value
			},
			
		},

		mounted() {
			this.getData()
			this.scrollToEnd(this.messages.length)
		},

		updated() {

			this.div_height = this.$refs.div_messages.scrollHeight

			this.scrollToEnd(this.div_height)

			// alert(this.messages.length);
			
		},
		
	}

</script>
