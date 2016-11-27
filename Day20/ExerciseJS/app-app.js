var phrases = [
	'I like pie.',
	'Hi, there!!',
	'Ai, ai, captain!!'
];

$(document).on('ready', function () {
	
	$('p').html Math.floor((Math.random() * 10) + 1);

	$('#send').on('click', function(){
  var info = $('#info').val();
  var title = "<h1>" + info + "</h1>";
  $('#reference').before(title);

});

});