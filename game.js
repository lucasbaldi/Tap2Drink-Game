//import Math;
$( document ).ready(function() {

	var rules = [];
	var numRules = 0;

	var spin = 0;

	function deal(input){

		if (input<40){
			$("#card").text("DRINK!");

			$("#rules").text(rules);
		}
		else if(input<50){
			$("#card").text("Give Drink");

			$("#rules").text(rules);
		}
		else if(input<60){
			$("#card").text("Waterfall");

			$("#rules").text(rules);
		}
		else if(input<70){
			$("#card").text("Pair");

			$("#rules").text(rules);
		}
		else if(input<80){
			$("#card").text("Give Two");

			$("#rules").text(rules);
		}
		else if(input<90){
			$("#card").text("Take Three");

			$("#rules").text(rules);
		}
		else if(input<95){
			$("#card").text("Finish");

			$("#rules").text(rules);
		}
		else if(input<99){
			$("#card").text("FINISH HIM");

			$("#rules").text(rules);
		}
		else{
			$("#card").text("Everyone Finish ayy lmao");

			$("#rules").text("LOLOLOLOLOLOLOL");
		}
	}
	

	
	$("#card").click(function( event ) {
		
		//$("#card").effect("highlight", {}, 100);
		//$("#card").sp
		if (spin == 0){
			$("#card").addClass("rotate");
			spin = 1;

		}
		else if (spin == 1){
			$("#card").removeClass("rotate");
			spin = 0;

		}
		//$("#card").removeClass("rotate");
		deal(Math.floor(Math.random() * (100 - 1) + 1) );
		

		
	});





});