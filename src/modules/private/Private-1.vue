<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		
		<div 
			style="
			overflow: auto;
			max-width: 100%;
			height: calc(90vh - 10px);
			text-align: center;
			justify-content: center;
			align-items: center;
			"

			class="bg-dark fg-white p-5"
			v-keep-scroll-position
			v-chat-scroll="{always: true, smooth: false}">

			<div style="
				margin: 0;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-right: -50%;
				transform: translate(-50%, -50%)
				">

				<h1 id="typewriter" style="font-size: 67px;"></h1>

				<vue-countdown-timer
					v-if="countdown" 
					style="padding-top:10px;"
					:start-time="'2020-08-08 09:00:00'"
					:end-time="'2020-12-06 00:00:00'"
					:interval="1000"
					:start-label="'Until start:'"
					:end-label="''"
					label-position="begin"
					:end-text="'Event ended!'"
					:day-txt="'days,'"
					:hour-txt="'hours,'"
					:minutes-txt="'minutes,'"
					:seconds-txt="'seconds'">
				</vue-countdown-timer>
			</div>
		</div>
				
	</main>
</template>

<script>

	import Axios from 'axios'
	import Typewriter from 'typewriter-effect/dist/core'

    export default {
		name: 'Private',
		
		data() {
			return {
				countdown: false,
			}
		},

		mounted() {
			this.initialize()
		},

		methods: {

			initialize() {

				const typewriter = new Typewriter('#typewriter', {
					autoStart: true,
					cursor: ' ',
				});

				typewriter
					.changeCursor('|')
					.pauseFor(3000)
					
					.changeDelay(70)
					.typeString('Hi there')
					.pauseFor(1200)

					.changeDeleteSpeed(22)
					.deleteChars(9)
					.pauseFor(500)
					.typeString('How are you today?')
					.pauseFor(1000)

					.changeDeleteSpeed(22)
					.deleteChars(18)
					.pauseFor(1000)
					.typeString('when you feel like giving up')

					.pauseFor(1000)
					.typeString('<br><span class="fg-red">remember</span>')

					.pauseFor(2000)
					.typeString('<br>why you held on for so long ')
					
					.pauseFor(100)
					.typeString('<br>in the first place')
					.pauseFor(2000)
					
					.callFunction(() => {
						this.secret()
					})

					.stop()
					.start();
			},

			secret() {

				document.getElementById('typewriter').innerHTML = '';

				const typewriter = new Typewriter('#typewriter', {
					autoStart: true,
					cursor: '|',
				});

				typewriter
					.pauseFor(2000)
					.changeCursor(' ')
					.changeDelay(400)
					.pasteString('coming soon')
					.pauseFor(1200)
					.callFunction(() => {
						this.countdown = true
					})
					.pauseFor(1200)
					.stop()
					.start();
			},
		}
    }
</script>
