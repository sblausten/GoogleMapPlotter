'use strict';

function addMarker(location) {
	var lat = location.getLat();
	var lng = location.getLng();
	var name = location.getName();
	var email = location.getEmail();
	var description = location.getDescription();
	
  var marker = new google.maps.Marker({
    map: map,
    position: { lat: lat, lng: lng},
    title: description
  });

  var markerInfoPopout = '<h3>' + name + '</h3>' +
    '<p>' + description + '<p>' +
    '<p>' + email + '</p>';
  
  var infowindow = new google.maps.InfoWindow({
    content: markerInfoPopout
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
    setTimeout( function() {
      infoWindow.close();
    }, '3000');
  });

  infoWindow.setPosition();
  map.setCenter({ lat: lat, lng: lng});
}

