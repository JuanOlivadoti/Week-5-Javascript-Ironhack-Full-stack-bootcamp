$(document).on('ready', function() {

	$('.js-fetch-characters').on('click', function () {
	    
	    $.ajax({
	    	type: "GET",
	    	url: "https://ironhack-characters.herokuapp.com/characters",
	    	success: showCharacters,
	    	error: handleError 
    	});

    	function showCharacters(response) {
	    		console.log("Success!");
	    		var charactersArray = response;

	    		charactersArray.forEach(function (char){
	    			var html = "<li>" + theCharacter.name + "</li>";
						$('js-character-list').append(html);
					});
				}

	    function handleError(error) {
	    		console.log("Error!");
	    		console.log(error.responseText);
	    	}
			});
});
