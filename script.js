// create a pokemon selctor for multiple types
// make an array of pokemon through the API
// compare inputs through pokeAPI to confirm the types


var LogoSearch = {
	hasLogo: function(input1, input2){ //the input from the drop down is equal to a logo, logo fades in
		console.log(' step 2 hasLogo has run with two arguments:' + input1 + ', ' + input2);
			$('img').addClass("inActive");
			$("." + input1 + "." + input2).removeClass("inActive");
	}
};


$(function(){
	$('#submitButton').on('click', function(e){
		e.preventDefault();
		console.log(' step 1 button is clicked');
		var input1 = $('#input1').val(); // ???? how to select the value - strings are returning [object HTMLSelectElement]
		var input2 = $('#input2').val();
		console.log(' step 1.a ' + input1 + ' is be input1 and this is input2:' + input2);
		LogoSearch.hasLogo(input1, input2);
	});
});


