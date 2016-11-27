// ------------- ACCESS SPOTIFY SEARCH DOCUMENT.ready()

$(document).ready(function() {

	$('#search-btn').click(function(event) {
		$('#results').html("");
		$('section.information').css('display','block');

		
		event.preventDefault();

		$.ajax ({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=track&query="+($('#input-search').val()),
			success: showAll,
			error: handleErrors
		});

	});
// ====== ERROR handler

function handleErrors(errors){
	conosle.log(errors);
}

//======================== SHOW RESULT function()

function showAll(response) {

	var info = response.tracks.items[0];

	console.log(info);

	$('#author').text(info.artists[0].name);
	$('#modalAuthor').attr('value',info.artists[0].id); 
	$('#modalAuthor').text(info.artists[0].name);
	$('#songTitle').text(info.name);
	$('#trkUrl').attr('src', info.preview_url);
	$('#trkImg').attr('src', info.album.images[0].url);
	$('#console-btn').toggleClass("disabled");

	var authorId = info.artists[0].id;
	
	// console.log(info.artists[0].external_urls.spotify);
	window.localStorage.setItem("author", authorId);

}

//============== MODAL "GET" INFO

$('#author').click(function(event){
		// $('.js-modal').modal("show");
	var authorId = window.localStorage.author;
	console.log(authorId);

		$.ajax({
			type: 'GET',
			url: "https://api.spotify.com/v1/artists/"+authorId,
			success: showModal,
		});
});

//============== MODAL INFO print

function showModal(response){
	// console.log(response);

	$('#modalAuthor').text(response.name);
	$('#genres').text(response.genres.join(", ").capitalized);
	$('#followers').text(response.followers.total);
	$('#popularity').attr('value', response.popularity);
	$('#author-photo').attr('src', response.images[0].url);

	console.log(response);
}

//============== PLAY BUTTON trigger

$('#console-btn').click(function(){
	
	$(this).toggleClass("playing");

    
	if ( $(this).hasClass("playing") ) {
    $('#trkUrl').trigger('play');
    printTime();
  
  } else { 
  	$('#trkUrl').trigger('pause');
    }

});

//=============== SEEKER

function printTime () {
  var current = $('#trkUrl').prop('currentTime');
  console.debug('Current time: ' + current);
  $('prog-bar').attr('value', current);
}


$('#trkUrl').on('timeupdate', printTime);



}); // == DOCUMENT.ready end