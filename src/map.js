'use strict';

var map, infoWindow;

function initMap() {
  // Create a map object and specify the DOM element for display.
  var initialCenter = {lat: 51.514024, lng: -0.100681};
  map = new google.maps.Map(document.getElementById('map'), {
    center: initialCenter,
    zoom: 10
  });

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
  setTimeout( function() {
    infoWindow.close();
  }, '2000');
}

function centerMap(pos) {
  map.setCenter(pos);
}


