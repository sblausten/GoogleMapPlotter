
function Locations() {
	this.locations = [];
}

Locations.prototype = {
	getLocations: function() {
		return this.locations;
	},

	addLocation: function(reportedLocation) {
		this.locations.push(reportedLocation);
	}
};