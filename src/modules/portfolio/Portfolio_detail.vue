<template>
	<main class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4> {{ name }} </h4>
		<hr>
		<div class="row">
			<div class="cell-md-12">
				<div class="card-content">
					<p class="fg-gray">
						<span class="mif-alarm"></span> asasa | 
						<span class="mif-user"></span> Ricky Kusriana Subagja
					</p>
					

					<br>
					<p align="right">Original Post : <a target="_blank">ac</a></p>
				</div>
			</div>

			<div class="cell-lg-12 cell-sm-12 pr-1 mr-1">
				<hr>
				<router-link class="button secondary mt-2 float-right" :to="'/portfolio'">
					<span class="mif-arrow-left"></span> Back to List
				</router-link>
			</div>
			

		</div>
	</main>
</template>

<script>

	export default {

		props: ['name']
		

		
	}

</script>
