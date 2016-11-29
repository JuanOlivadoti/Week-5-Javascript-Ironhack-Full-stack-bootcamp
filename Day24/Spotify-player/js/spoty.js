// ------------- ACCESS SPOTIFY SEARCH DOCUMENT.ready()

$(document).ready(function() {

	$('#search-btn').click(function(event) {
		$('#results').html("");
		// $('section.information').css('display','block');

		console.log("Hi, there!");
		event.preventDefault();

		$.ajax ({
			type: "GET",
			url: "https://api.spotify.com/v1/search?q="+($('#input-search').val())+"&type=track",
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

	$('#console-btn').removeClass("disabled");
	$('#songsCovers').empty();

	var info = response.tracks.items;

	console.log(response.tracks);

	console.log(info);

	$('#author').text(info[0].artists[0].name);
	$('#modalAuthor').attr('value',info[0].artists[0].id); 
	$('#modalAuthor').text(info[0].artists[0].name);
	$('#songTitle').text(info[0].name);
	$('#trkUrl').attr('src', info[0].preview_url);
	$('#trkImg').attr('src', info[0].album.images[0].url);

	info.forEach(function(element){

		var liElement =`
			<div class="col-sm-2">
				<div class="imgBox">
					<a class="thumbnails" data-ref="${element.href}">
						<img class="imgThumbnail" src="${element.album.images["0"].url}" alt="">
					</a>
				</div>
			  <h4 class="songTitle" id="songTitle">${element.name}</h4>
			  <p data-toggle="modal" data-target="#myModal" value=""${element.artists[0].name}>${element.artists[0].name}</p>
			</div>
			`;

		$('#songsCovers').append(liElement);


	});


	// MODAL info
	var authorId = info[0].artists[0].id;
	window.localStorage.setItem("author", authorId);
	console.log(authorId);

}

$('thumbnails').click(function(event){
	event.preventDefault();
	
	$.ajax ({
		type: "GET",
		url: $('.thumbnails').val(),
		success: showAll,
		error: handleErrors
	});

});

//============== MODAL "GET" INFO

$('#author').click(function(event){
		// $('.js-modal').modal("show");
	event.preventDefault();
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
	console.log(response);

	$('#modalAuthor').text(response.name);
	$('#genres').text(response.genres.join(", "));
	$('#followers').text(response.followers.total);
	$('#popularity').attr('value', response.popularity);
	$('#author-photo').attr('src', response.images[0].url);

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
  $('#prog-bar').attr('value', current);
}


$('#trkUrl').on('timeupdate', printTime);


//======= NAVBAR ANIMATION

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

$('#nav-btn').click(function(){
	$('#mySidenav').css('width', '140px');
	$(this).css('display','block');
});

$('#close-btn').click(function(){
	$('#mySidenav').css('width', '70px');
	$(this).css('display','none');
});


}); // == DOCUMENT.ready end