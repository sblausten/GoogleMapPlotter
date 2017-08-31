'use strict';

function addRow(location) {
	var data = [location.getDescription(), 
		location.getName(), 
		location.getEmail(), 
		location.getLat(), 
		location.getLng()];

	$('tbody').append( "<tr></tr>" );
	for(var i = 0; i < data.length; i++) {
		$('tbody > tr:last-child').append( "<td>" + data[i] + "</td>" );
	}

	$('tbody > tr:last-child').hover(function() {
		centerMap(getPos($(this)));
	});
}

function getPos(tr) {
	var lat = tr.find('td:eq(3)').text();
	var lng = tr.find('td:eq(4)').text();
	return {lat: parseFloat(lat), lng: parseFloat(lng)};
}
