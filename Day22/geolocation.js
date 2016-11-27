function onLocation (position){

	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	var myPos = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=12&size=600x600`;

	console.log(myPos);

	$('#map').attr('src', myPos);

}

function onError (error){
	console.log("Error!");
}

navigator.geolocation.getCurrentPosition(onLocation, onError);


