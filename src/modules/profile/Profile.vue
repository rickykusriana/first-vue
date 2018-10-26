<template>
    
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

        <h1>Hello {{ $route.params.name }} / {{ name }} </h1>

	    <p class="text-leader">
	        Are you tired of Bootstrap? Get started with Metro 4, the popular framework for building responsive, mobile-first sites in Metro style, with the Metro CDN and a template starter page.
	    </p>

	    <hr>

	    <h3 id="_quick_start">Quick start</h3>
	    <p>
	        Looking to quickly add Metro 4 to your project? Use Metro CDN, provided for free by the folks at <a href="https://www.keycdn.com/">KeyCDN</a>.
	        Using a package manager or need to download the source files? Go to to the <a href="download.html">downloads page</a>.
	    </p>

	    <p>
	        Copy-paste the stylesheet <span class="tally">&lt;link&gt;</span> into your <span class="tally">&lt;head&gt;</span> before all other stylesheets to load our CSS.
	    </p>

	    <pre class=""><code>
	        &lt;link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-all.min.css"&gt;
	    </code></pre>

	    <pre class=""><code>
	        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
	    </code></pre>

	    <h3 id="_short_demo">Short demo</h3>
	    <div class="example bg-dark fg-white">
	        <h1 class="text-center">Metro 4</h1>
	        <h3 class="text-center">The Components Library</h3>
	        <div data-role="cube" data-flash-color="#6a00ff"></div>
	    </div>

	    <pre class=""><code>
	        &lt;!DOCTYPE html&gt;
	        &lt;html lang="en"&gt;
	          &lt;head&gt;
	            &lt;meta charset="utf-8"&gt;
	            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
	            &lt;link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-all.min.css"&gt;
	          &lt;/head&gt;
	          &lt;body&gt;
	            &lt;h1 class="text-center"&gt;Metro 4&lt;/h1&gt;
	            &lt;h3 class="text-center"&gt;The Components Library&lt;/h3&gt;
	            &lt;div data-role="cube"&gt;&lt;/div&gt;

	            &lt;script src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
	            &lt;script src="https://cdn.metroui.org.ua/v4/js/metro.min.js"&gt;&lt;/script&gt;
	          &lt;/body&gt;
	        &lt;/html&gt;
	    </code></pre>
	</main>

</template>

<script>

	export default {
		props: ['name'],

		methods : {
			fetchapplicants() {
				console.log(this.name);
			}
		},
		mounted() {
			this.fetchapplicants();
		}
	}

</script>
