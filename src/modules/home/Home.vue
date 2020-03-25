<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<div style="text-align: center; padding-top: 180px;">
			<h2>Hi, nice to meet you</h2>
			<hr>
			<p class="text-leader">
				Some of the things I learned<br>
				<span id="typewriter"></span>
				<br>and this is just a little thing that I've made.<br>
				Let's make a changing
			</p>
		</div>
	</main>
</template>

<script>

	import Typewriter from 'typewriter-effect/dist/core'

    export default {
		name: 'Home',
		
		mounted() {
			
			const typewriter = new Typewriter('#typewriter', {
				autoStart: true,
				delay:20,
				loop: true,
				cursor: '|'
			});

			typewriter
				.changeDelay(80)
				.changeDeleteSpeed(10)
				
				.typeString('Web Development')
				.pauseFor(200)
				.deleteChars(15)
				
				.typeString('HTML5')
				.pauseFor(200)
				.deleteChars(6)
				
				.typeString('CSS3')
				.pauseFor(200)
				.deleteChars(4)

				.typeString('CodeIgniter')
				.pauseFor(200)
				.deleteChars(11)
				
				.typeString('JavaScript')
				.pauseFor(200)
				.deleteChars(10)
				
				.typeString('jQuery')
				.pauseFor(200)
				.deleteChars(6)
				
				.typeString('Ajax')
				.pauseFor(200)
				.deleteChars(4)
				
				.typeString('Bootstrap')
				.pauseFor(200)
				.deleteChars(9)
				
				.typeString('VueJS')
				.pauseFor(200)
				.deleteChars(5)
				
				.typeString('RESTful API')
				.pauseFor(200)
				.deleteChars(11)
				
				.typeString('JSON')
				.pauseFor(200)
				.deleteChars(4)
				
				.typeString('Analyst System')
				.pauseFor(200)
				.deleteChars(14)
				.typeString('UI/UX')
				.pauseFor(200)
				.deleteChars(5)
				.typeString('SQL Server')
				.pauseFor(5)
				.deleteChars(10)
				.typeString('MySQL')
				.pauseFor(5)
				.deleteChars(11)
				
				.typeString('Linux')
				.pauseFor(5)
				.deleteChars(5)
				.typeString('Nginx')
				.pauseFor(5)
				.deleteChars(5)
				.typeString('Git')
				.pauseFor(5)
				.deleteChars(3)
				.typeString('Documentation')
				.pauseFor(200)
				.deleteChars(13)

				.start();

			

			
		}
    }
</script>
