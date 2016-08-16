var LogoSearch = {
	input: '',
	input2: '',	
	hasLogo: function(input){ //the input from teh drop down is equal to a logo, logo fades in
		console.log('hasLogo ran ');
		console.log(input);
		if( $('img').hasClass('afe') == $('#input').is(input)){
			'selected logo'.fadein("slow");
		};
	}
};


$(function(){
	$('#submitButton').on('click', function(e){
		e.preventDefault();
		var input = $('#input').val(); //how to select the value - strings are returning undefined

		var input2 = $('#input2').val();
		
		console.log(input + ' ' + input2);

		LogoSearch.hasLogo(input);
		console.log('submit button clicked');
	});

 	

	

});