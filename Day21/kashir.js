$(document).on('ready', function() {

  $('.js-display').on('click', requestCharacters);
  $('.js-form').on('submit', submitCharacter);

});

function requestCharacters () {
  $.ajax({
    type: 'GET', //API's HTTP verb (default is GET)
    url: 'https://ironhack-characters.herokuapp.com/characters', //API's url
    success: showCharacters, //success callback if HTTP status 200
    error: handleError //error callback if HTTP status 400 or 500 (500 = our fault as dev)
  });
}

function showCharacters (response) { //the response argument contains the response from the API
  console.log('Success!');
  $('.js-characters li').remove();
  $('input').val('')
  var charactersArray = response; //response is an array
  response.forEach(function (theCharacter) {
    var char = '<li><strong>' + theCharacter.name + '</strong></li>';
    $('.js-characters').append(char);
  });
}

function handleError (error) { //the error argument contains the error message sent by the API
  console.log('Error!');
  console.log(error.responseText);
}

function submitCharacter (event) {
  event.preventDefault();

  var newCharacter = {
    name: $('#name').val(),
    occupation: $('#occupation').val(),
    weapon: $('#weapon').val()
  }

  $.ajax({
    type: 'POST',
    url: 'https://ironhack-characters.herokuapp.com/characters',
    data: newCharacter,
    success: requestCharacters,
    error: handleError
  });
}