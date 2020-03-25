<template>
	<main class="cell-md-11 cell-xl-10 order-1 pr-1-sx pl-1-sx pr-5-md pl-5-md">
		<h4>About Me</h4>
		<hr>
		<div class="row">
			<div class="cell-md-12">
				<p>Ricky Kusriana Subagja</p>
				<span class="fg-gray">
					#jalanterus
				</span>
				<br>
				<p class="type-js">
					<span style="opacity: 0;" class="text-js">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum quidem iste porro rem asperiores aperiam. Ut, eveniet temporibus doloremque sint iure repellendus nemo quod natus praesentium quo, quia aut?
					</span>
				</p>

			</div>
		</div>
	</main>
</template>

<script>
    export default {
        name: 'Test',

        mounted() {			
			this.autoType(".type-js", 200);
		},

        methods: {


			autoType(elementClass, typingSpeed) {
				var thhis = $(elementClass);
				thhis.css({
					"position": "relative",
					"display": "inline-block"
				});
				
				thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
				thhis = thhis.find(".text-js");
				var text = thhis.text().trim().split('');
				var amntOfChars = text.length;
				var newString = "";
				thhis.text("|");
				setTimeout(function(){
					thhis.css("opacity",1);
					thhis.prev().removeAttr("style");
					thhis.text("");
					for(var i = 0; i < amntOfChars; i++){
					(function(i,char){
						setTimeout(function() {        
						newString += char;
						thhis.text(newString);
						},i*typingSpeed);
					})(i+1,text[i]);
					}
				},1500);
			},

        }
    }
</script>

