$(document).on('ready', function (){

	// $(".js-fetch-characters").on('click', function() {
		
		$.ajax({

			type: "GET",
			url: "http://ironhack-characters.herokuapp.com/characters",
			success: showCharacters,
			errors: handleErrors
		
		});
	});

		function showCharacters (response) {
			var charactersArray = response;

			charactersArray.forEach(function (theCharacter) {
				var html = "<li>" + theCharacter.name + "</li>";
				$('js-character-list').append(html);
			});
		
		}

		function handleErrors (response) {
			console.log("Error!");
			console.log(error.responseText);
		
		}

// });