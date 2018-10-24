<template>
    
	<main class="cell-md-10 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">

        <h1>Hello {{ name }} </h1>

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

	    <p>
	        If you need only general part of styles, use this links:
	    </p>

	    <pre class=""><code>
	        &lt;link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro.min.css"&gt;
	        &lt;link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-colors.min.css"&gt;
	        &lt;link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-rtl.min.css"&gt;
	        &lt;link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-icons.min.css"&gt;
	    </code></pre>

	    <p>
	        Add our optional JavaScript plugins and jQuery near the end of your pages, right before the closing <span class="tally">&lt;/body&gt;</span> tag.
	        Be sure to place jQuery first, as our JavaScript plugins depend on them.
	    </p>

	    <pre class=""><code>
	        &lt;script src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
	        &lt;script src="https://cdn.metroui.org.ua/v4/js/metro.min.js"&gt;&lt;/script&gt;
	    </code></pre>

	    <p>
	        And that’s it - you’re on your way to a fully Metro 4 site. If you’re at all unsure about the general page structure, keep reading for an example page template.
	    </p>

	    <h3 id="_starter_template">Starter template</h3>
	    <p>
	        Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:
	    </p>

	    <pre class=""><code>
	        &lt;!DOCTYPE html&gt;
	        &lt;html lang="en"&gt;
	          &lt;head&gt;
	            &lt;!-- Required meta tags --&gt;
	            &lt;meta charset="utf-8"&gt;
	            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;

	            &lt;!-- Metro 4 --&gt;
	            &lt;link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-all.min.css"&gt;
	          &lt;/head&gt;
	          &lt;body&gt;
	            &lt;h1&gt;Hello, world!&lt;/h1&gt;

	            &lt;!-- jQuery first, then Metro UI JS --&gt;
	            &lt;script src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
	            &lt;script src="https://cdn.metroui.org.ua/v4/js/metro.min.js"&gt;&lt;/script&gt;
	          &lt;/body&gt;
	        &lt;/html&gt;
	    </code></pre>

	    <p>That’s all you need for overall page requirements.</p>

	    <h3 id="_html_5">HTML5 doctype</h3>
	    <p>
	        Metro 4 requires the use of the HTML5 <span class="tally">doctype</span>.
	    </p>

	    <pre class=""><code>
	        &lt;!DOCTYPE html&gt;
	        &lt;html lang="en"&gt;
	          ...
	        &lt;/html&gt;
	    </code></pre>

	    <h3 id="_responsive_meta">Responsive meta tag</h3>
	    <p>
	        Metro 4 is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries.
	        To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <span class="tally">&lt;head&gt;</span>
	    </p>

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
		props: {
			name: {
				type: String,
				default: 'Vue!'
			}
		}
	}

</script>
