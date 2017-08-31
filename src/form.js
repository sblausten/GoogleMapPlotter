(function($) {
	'use strict';

	$("#locationForm").submit(function(e) {
		e.preventDefault();
		var location = new Location(locations);
		addRow(location);
		addMarker(location);
	});

})(jQuery);