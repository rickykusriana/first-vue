<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">		
		<div 
			style="
			overflow: auto;
			max-width: 100%;
			height: calc(90vh - 10px);"	

			class="bg-dark fg-white p-5"
			v-keep-scroll-position
			v-chat-scroll="{always: true, smooth: false}">

			<span id="typewriter"></span>
			<span id="typewriter2" class="pb-5"></span>

			<a v-if="!canLogin" href="#" @click="login()">Try again</a>

		</div>
	</main>
</template>

<script>

	import Axios from 'axios'
	import Typewriter from 'typewriter-effect/dist/core'
	import { datetime } from '../../config/Date_helper'

    export default {
		name: 'Private',
		
		data() {
			return {
				loginAttempt: 3,
				canLogin: true,
				
				pasteText: [
					'<b class="fg-green pr-2">mydekstop@localhost'+
						'<span class="fg-white">:</span>'+
						'<span class="fg-cyan">~</span>'+
						'<span class="fg-white">$</span>'+
					'</b>',
						
					'<br>The authenticity of host \'kodokode.com (131.103.20.167)\' can\'t be established.'+
					'<br>ECDSA key fingerprint is 97:8c:1b:f2:6f:14:6b:5c:3b:ec:aa:46:46:74:7c:40.'+
					'<br><span class="pr-2">Are you sure you want to continue connecting (yes/no)?</span>',

					'<span class="pr-2">rickykusriana@kodokode.com\'s password:</span>',

					'<b class="fg-green pr-2">rickykusriana@kodokode.com'+
						'<span class="fg-white">:</span>'+
						'<span class="fg-cyan">~</span>'+
						'<span class="fg-white">$</span>'+
					'</b>',

					// '<pre><font color="#EF2929"><b>            .-/+oossssoo+/-.</b></font>               <font color="#EF2929"><b>rickykusriana</b></font>@<font color="#EF2929"><b>kodokode.com</b></font>  <br>'+
					// '<font color="#EF2929"><b>        `:+ssssssssssssssssss+:`</b></font>           ----------------------  <br>'+
					// '<font color="#EF2929"><b>      -+ssssssssssssssssssyyssss+-</b></font>         <font color="#EF2929"><b>OS</b></font>: Ubuntu 19.10 x86_64  <br>'+
					// '<font color="#EF2929"><b>    .ossssssssssssssssss</b></font><b>dMMMNy</b><font color="#EF2929"><b>sssso.</b></font>       <font color="#EF2929"><b>Host</b></font>: Latitude 3470  <br>'+
					// '<font color="#EF2929"><b>   /sssssssssss</b></font><b>hdmmNNmmyNMMMMh</b><font color="#EF2929"><b>ssssss/</b></font>      <font color="#EF2929"><b>Kernel</b></font>: 5.3.0-42-generic  <br>'+
					// '<font color="#EF2929"><b>  +sssssssss</b></font><b>hm</b><font color="#EF2929"><b>yd</b></font><b>MMMMMMMNddddy</b><font color="#EF2929"><b>ssssssss+</b></font>     <font color="#EF2929"><b>Uptime</b></font>: 2 days, 2 hours, 23 mins  <br>'+
					// '<font color="#EF2929"><b> /ssssssss</b></font><b>hNMMM</b><font color="#EF2929"><b>yh</b></font><b>hyyyyhmNMMMNh</b><font color="#EF2929"><b>ssssssss/</b></font>    <font color="#EF2929"><b>Packages</b></font>: 2907 (dpkg), 13 (snap)  <br>'+
					// '<font color="#EF2929"><b>.ssssssss</b></font><b>dMMMNh</b><font color="#EF2929"><b>ssssssssss</b></font><b>hNMMMd</b><font color="#EF2929"><b>ssssssss.</b></font>   <font color="#EF2929"><b>Shell</b></font>: bash 5.0.3  <br>'+
					// '<font color="#EF2929"><b>+ssss</b></font><b>hhhyNMMNy</b><font color="#EF2929"><b>ssssssssssss</b></font><b>yNMMMy</b><font color="#EF2929"><b>sssssss+</b></font>   <font color="#EF2929"><b>Resolution</b></font>: 1920x1080, 1366x768  <br>'+
					// '<font color="#EF2929"><b>oss</b></font><b>yNMMMNyMMh</b><font color="#EF2929"><b>ssssssssssssss</b></font><b>hmmmh</b><font color="#EF2929"><b>ssssssso</b></font>   <font color="#EF2929"><b>DE</b></font>: GNOME 3.34.3  <br>'+
					// '<font color="#EF2929"><b>oss</b></font><b>yNMMMNyMMh</b><font color="#EF2929"><b>sssssssssssssshmmmhssssssso</b></font>   <font color="#EF2929"><b>WM</b></font>: GNOME Shell  <br>'+
					// '<font color="#EF2929"><b>+ssss</b></font><b>hhhyNMMNy</b><font color="#EF2929"><b>ssssssssssss</b></font><b>yNMMMy</b><font color="#EF2929"><b>sssssss+</b></font>   <font color="#EF2929"><b>WM Theme</b></font>: Adwaita  <br>'+
					// '<font color="#EF2929"><b>.ssssssss</b></font><b>dMMMNh</b><font color="#EF2929"><b>ssssssssss</b></font><b>hNMMMd</b><font color="#EF2929"><b>ssssssss.</b></font>   <font color="#EF2929"><b>Theme</b></font>: Yaru-dark [GTK2/3]  <br>'+
					// '<font color="#EF2929"><b> /ssssssss</b></font><b>hNMMM</b><font color="#EF2929"><b>yh</b></font><b>hyyyyhdNMMMNh</b><font color="#EF2929"><b>ssssssss/</b></font>    <font color="#EF2929"><b>Icons</b></font>: Yaru [GTK2/3]  <br>'+
					// '<font color="#EF2929"><b>  +sssssssss</b></font><b>dm</b><font color="#EF2929"><b>yd</b></font><b>MMMMMMMMddddy</b><font color="#EF2929"><b>ssssssss+</b></font>     <font color="#EF2929"><b>Terminal</b></font>: gnome-terminal  <br>'+
					// '<font color="#EF2929"><b>   /sssssssssss</b></font><b>hdmNNNNmyNMMMMh</b><font color="#EF2929"><b>ssssss/</b></font>      <font color="#EF2929"><b>CPU</b></font>: Intel i5-6200U (4) @ 2.800GHz  <br>'+
					// '<font color="#EF2929"><b>    .ossssssssssssssssss</b></font><b>dMMMNy</b><font color="#EF2929"><b>sssso.</b></font>       <font color="#EF2929"><b>GPU</b></font>: Intel Skylake GT2 [HD Graphics 520]  <br>'+
					// '<font color="#EF2929"><b>      -+sssssssssssssssss</b></font><b>yyy</b><font color="#EF2929"><b>ssss+-</b></font>         <font color="#EF2929"><b>GPU</b></font>: NVIDIA GeForce 920M  <br>'+
					// '<font color="#EF2929"><b>        `:+ssssssssssssssssss+:`</b></font>           <font color="#EF2929"><b>Memory</b></font>: 8301MiB / 11876MiB  <br>'+
					// '<font color="#EF2929"><b>            .-/+oossssoo+/-.</b></font> <br>'+
					// '                                           <span style="background-color:#2E3436"><font color="#2E3436">   </font></span><span style="background-color:#CC0000"><font color="#CC0000">   </font></span><span style="background-color:#4E9A06"><font color="#4E9A06">   </font></span><span style="background-color:#C4A000"><font color="#C4A000">   </font></span><span style="background-color:#3465A4"><font color="#3465A4">   </font></span><span style="background-color:#75507B"><font color="#75507B">   </font></span><span style="background-color:#06989A"><font color="#06989A">   </font></span><span style="background-color:#D3D7CF"><font color="#D3D7CF">   </font></span> <br>'+
					// '</pre>',

					'<br><pre>Welcome to Ubuntu 18.04.3 LTS (GNU/Linux 4.15.0-70-generic x86_64)<br>'+
					' * Documentation:  <a target="_blank" href="https://help.ubuntu.com">https://help.ubuntu.com</a><br>'+
					' * Management:     <a target="_blank" href="https://landscape.canonical.com">https://landscape.canonical.com</a><br>'+
					' * Support:        <a target="_blank" href="https://ubuntu.com/advantage">https://ubuntu.com/advantage</a><br><br>'+
					'95 packages can be updated.<br>'+
					'0 updates are security updates.</pre>',
				],
			}
		},

		mounted() {
			this.initialize()
			// this.success()
			// this.secret()
		},

		methods: {

			initialize() {

				Metro.activity.open({
					type: 'ring',
					text: '<div class=\'mt-2 text-small fg-white\'>Connecting...</div>',
					autoHide: 7000,
					overlayAlpha: 1
				});

				const typewriter = new Typewriter('#typewriter', {
					autoStart: true,
					cursor: ' ',
				});

				typewriter
					.pauseFor(6000)
					.changeCursor('█')
					.pauseFor(1000)
					.changeDelay(1)
					.pasteString(this.pasteText[0])
					.pauseFor(2500)
					.changeDelay(30)
					.typeString('ssh rickykusriana@kodokode.com')
					.pauseFor(1200)
					.changeCursor(' ')
					.pauseFor(1000)

					.changeDelay(1)
					.pasteString(this.pasteText[1])
					.changeCursor('█')
					.pauseFor(1000)
					
					.changeDelay(100)
					.typeString('yes')
					.pauseFor(500)

					.changeDelay(1)
					.pasteString('<br>Warning: Permanently added \'131.103.20.167\' (ECDSA) to the list of known hosts.')
					.pasteString('<br>'+this.pasteText[2])
					
					.pauseFor(500)
					.callFunction(() => {
						this.login()
					})
					.changeCursor(' ')
					.stop()
					.start();
			},

			failed() {
				
				this.loginAttempt = 3
				this.canLogin = false

				const typewriter = new Typewriter('#typewriter2', {
					autoStart: true,
					delay: 1,
					cursor: ' ',
				});

				typewriter
					.pasteString('<br>Failed: Couldn\'t authentication. <br><br>')
					.stop()
					.start()
			},
			
			success() {
				
				this.canLogin = true
				
				var client = 'test'
				// this.getClient().then(client => {
					
					const typewriter = new Typewriter('#typewriter2', {
						autoStart: true,
						cursor: ' ',
					});

					typewriter
						.changeDelay(1)
						.pasteString(this.pasteText[4])						
						.pasteString('Last login: '+datetime+'<br>From: '+client.ip+' '+client.city+', '+client.country_name+' <br><br>')
						.pasteString(this.pasteText[3])
						.changeCursor('█')
						.pauseFor(2000)
						
						.changeDelay(85)
						.typeString('yeeay udah masuk ke server')
						.pauseFor(1500)
						.typeString(', tinggal run scriptnya')
						.pauseFor(500)
						.changeDeleteSpeed(1)
						.deleteChars(49)
						.pauseFor(2000)
						
						.typeString('cd /home/rick')
						.pauseFor(50)
						.pasteString('ykusriana/')
						.pauseFor(1500)
						.typeString('Doc')
						.pauseFor(100)
						.pasteString('uments/')
						.pauseFor(200)
						.typeString('Private')
						.pauseFor(200)
						
						.changeDelay(1)
						.pasteString('<br><b class="fg-green pr-2">rickykusriana@kodokode.com'+
										'<span class="fg-white">:</span>'+
										'<span class="fg-cyan">~Documents/Private</span>'+
										'<span class="fg-white">$</span>'+
									'</b>')

						.pauseFor(2500)
						.changeDelay(70)
						.typeString('./secret-letter.sh')
						.pauseFor(1000)
						
						.changeDelay(1)
						.pasteString('<br>bash: ./secret-letter.sh: command not found.')
						.pasteString('<br><b class="fg-green pr-2">rickykusriana@kodokode.com'+
										'<span class="fg-white">:</span>'+
										'<span class="fg-cyan">~Documents/Private</span>'+
										'<span class="fg-white">$</span>'+
									'</b>')

						.pauseFor(2000)

						.changeDelay(60)
						.typeString('yah')
						.typeString(' kok gaada? ')
						.pauseFor(2000)

						.changeDeleteSpeed(1)
						.deleteChars(15)
						
						.changeDelay(75)
						.typeString('ls')
						.pauseFor(1000)
						.changeDelay(1)
						.pasteString('<br><b class="fg-green pr-2">rickykusriana@kodokode.com'+
										'<span class="fg-white">:</span>'+
										'<span class="fg-cyan">~Documents/Private</span>'+
										'<span class="fg-white">$</span>'+
									'</b>')
						
						.pauseFor(3000)
						.changeDelay(75)
						.typeString('huhuuu beneran gaada')
						.pauseFor(2000)
						.changeDeleteSpeed(1)
						.deleteChars(20)
						.pauseFor(1500)

						.typeString('ngetik lagi dong ')
						.pauseFor(1500)
						.typeString(':(')
						.pauseFor(1000)

						.changeDeleteSpeed(1)
						.deleteChars(19)						
						.pauseFor(4000)

						.changeDelay(70)
						.typeString('sudo nano secret')
						.pauseFor(1500)
						.changeDeleteSpeed(1)
						.deleteChars(6)
						.typeString('kikikukeko.txt')
						.pauseFor(1500)

						.changeDelay(1)
						.pasteString('<br>[sudo] password for rickykusriana: ')
						.pauseFor(1500)
						.changeCursor(' ')
						.pauseFor(4000)

						.callFunction(() => {
							this.secret()
						})

						.stop()
						.start()
				

				// })
			},

			secret() {

				document.getElementById('typewriter2').innerHTML = '';

				const typewriter = new Typewriter('#typewriter', {
					autoStart: true,
					cursor: '|',
				});

				typewriter
					.pauseFor(2507)
					.changeDelay(70)
					
					.typeString('Hari itu')
					.pauseFor(1000)
					.typeString(' kita bertemu atau lebih tepatnya dipertemukan')
					
					.pauseFor(1200)

					.stop()
					.start();
			},

			login() {

				let self = this

				Metro.dialog.create({
					title: '<small>Enter password</small>',
					content: '<input autofocus id="password" type="password" data-role="input">',
					actions: [
						{
							caption: "Submit",
							cls: "primary",
							onclick: function(el){
								var password = document.getElementById('password').value

								if (password == 'bismillah') {
									self.success()
									$(el).data('dialog').close()
								}
								else {
									self.failed()
								}
							}
						},
						{
							caption: "Cancel",
							cls: "js-dialog-close",
							onclick: function(){
								self.failed()
							}
						}
					]
				});

			},

			getClient() {
				return Axios.get('https://json.geoiplookup.io')
					.then(response => {
			    		return response.data
					})
			}
		}
    }
</script>
