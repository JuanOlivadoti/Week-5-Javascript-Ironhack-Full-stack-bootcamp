var map;
var mapPins = [];
var i = 0;


if ("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(onLocation, onError);
}

function onError(err){
  console.log("What are you using, IE 7??", err);
}

function onLocation(position){ // ================== RENDER MAP ON ACTUAL POSITION
  // We can't just directly feed the position into our google map
  // The objects are formatted differently, google maps is looking for
  // an object with "lat" and "lng" keys.
  var myPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  createMap(myPosition);
  setupAutocomplete();
  console.log(position.coords);
}

function createMap(position){ // ============= CREATE MAP - CALLS ON CREATE MARKER
  
  var mapOptions = {
    center: position,
    zoom: 16
  };

  map = new google.maps.Map($('#map')[0], mapOptions);
  createMarker(position);

}

function createMarker(position){ // ====================== CREATE MARKER

  var marker = new google.maps.Marker({
    position: position,
    map: map,
  });
  
  // var infowindow = new google.maps.InfoWindow({
  //     content: 'Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude
  // });
  // infowindow.open(map, marker);

  // //place marker info
  // map.data.add(new google.maps.Data.Feature({properties:{},geometry:new google.maps.Data.Point(position)})); 

  // console.log(marker[i]);
  // console.log(position.coords);
  // console.log(marker);
  // console.log(map);

  i++;

  var Pins = {
    pinID: i,

  };

  window.localStorage.setItem("Pins", Pins);

}

// function addMarkerToMapPins(marker){
//   mapPins.push(marker);
//   console.log(marker);
//   var mapPin = {id: i};
//   window.localStorage.setItem("Pins", (JSON.parse(mapPin)));
// }

function setupAutocomplete(){
  var input = $('#get-places')[0];
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    if (place.geometry.location){
      map.setCenter(place.geometry.location);
      map.setZoom(14);
      createMarker(place.geometry.location);

    } else {
      alert("The place has no location...?");
    }
    console.log(place.geometry.location);

  });
}
