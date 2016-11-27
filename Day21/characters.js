$(document).on('ready', function() {

	 $('.js-show-characters').on('click', requestCharacters);
	 $('.js-form').on('click', submitCharacter);
	    
});

function requestCharacters(){
	$.ajax({
    	type: "GET",
    	url: "https://ironhack-characters.herokuapp.com/characters",
    	success: showCharacters,
    	error: handleError 
  	});
}


function showCharacters(response) {
	console.log("Success!");

	$('input').val('');

	var charactersArray = response;
	charactersArray.forEach(function (theCharacter){

		var charac = `
		<li>
			<h2> id.${theCharacter.id} - ${theCharacter.name} </h2>
		</li>
		<li>
			<h4> ${theCharacter.occupation} </h4>
		</li>
		<li>
			<h4> ${theCharacter.weapon} </h4>
		</li>
		<li>
			<h4> ${theCharacter.debt} </h4>
		</li>
		` ;

		$('.js-character-list').append(charac);
		
		});
	}

function handleError(error) {
	console.log("Error!");
	console.log(error.responseText);
	}


function submitCharacter (event) {
  event.preventDefault();

  var newCharacter = {
    name: $('#name').val(),
    occupation: $('#occupation').val(),
    weapon: $('#weapon').val()
  	};

  $.ajax({
    type: 'POST',
    url: 'https://ironhack-characters.herokuapp.com/characters',
    data: newCharacter,
    success: requestCharacters,
    error: handleError
  	});
	}



