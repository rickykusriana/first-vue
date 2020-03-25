<template>
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

		<!-- <div class="example bg-dark fg-white" style="margin-top: 50px; height:400px;"> -->
			
			<!-- infinite loop -->
			<vue-terminal 
				
				title="" 
				greeting="Hello"
				prompt="Password : "
				:showHeader="false"
				:showInitialCd="false"
				:showHelpMessage="false"
				:unknownCommandMessage="{ type: 'error', label: 'Error', message: 'Invalid password' }"
				
				:task-list="taskList" 
				:command-list="commandList" 
				style="margin:0 auto">
			</vue-terminal>

			<!-- <div class="row mb-2">
				<label class="cell-sm-2">
					<font color="green" style="font-weight:bold;">Input password: </font> 
				</label>
				<div class="cell-sm-9" style="margin-top:2px;">
					<input class="dark bg-dark fg-white" type="email" style="height:20px; border:none; box-shadow:none; border-color:transparent;" >
				</div>
			</div> -->
			
		<!-- </div> -->

	</main>
</template>

<script>
	import VueTerminal from 'vue-terminal'

	function generateTime() {
		const timeNow = new Date();
		const hours = timeNow.getHours();
		const minutes = timeNow.getMinutes();
		const seconds = timeNow.getSeconds();
		let timeString = '0' + hours;
		timeString += (minutes < 10 ? ':0' : ':') + minutes;
		timeString += (seconds < 10 ? ':0' : ':') + seconds;
		return timeString
	}

	const mockData = [
		{  
			type: 'info', 
			label: 'Info',
			message: 'Initializing'
		},
		{ 
			type: 'error', 
			label: 'Error', 
			message: 'Failed to render component. Re-attempting(1)'
		},
		{ 
			type: 'error', 
			label: 'Error', 
			message: 'Re-attempting(2)'
		},
		{ 
			type: 'info', 
			label: 'Info', 
			message: 'Connection estabilished'
		},
		{ 
			type: 'success', 
			label: 'Success', 
			message: generateTime()+' Rendered successfully in 3 seconds'
		}
	]

    export default {
		name: 'Private',
		components: { 
			VueTerminal
		},
		
		data() {
			return {

				taskList: {

					defaultTask: {
						description: 'this is default task.',
						defaultTask(pushToList) {
							let i = 0;
							const p = new Promise(resolve => {
								const interval = setInterval(() => {
									// mockData[i].time = generateTime()
									pushToList(mockData[i]);
									i++
									if (!mockData[i]) {
										clearInterval(interval)
										// resolve({ type: 'success', label: 'Success', message: 'Example Over!' })
										resolve({ message: 'Hi, nice to meet you' })
									}
								}, 3000);
							})
							return p
						}
					}

				},
				commandList: {
					
					clear: {
						description: 'haha',
						messages: [
							{ time: '10:53', type: 'error', label: 'Error', message: 'That command is not recognized!' },
						]
					}
				}
			}
		},

		mounted() {
			
		},
		methods: {
			
		}
    }
</script>
