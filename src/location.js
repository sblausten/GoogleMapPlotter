'use strict';

function Location(locations) {
	this.name;
	this.email;
	this.description;
	this.lat;
	this.lon;

	this.setLocation()
	locations.addLocation(this);
}

Location.prototype = {
	setLocation: function() {
		this.setName($('#name').val());
		this.setEmail($('#email').val());
		this.setDescription($('#description').val());
		this.setLat($('#lat').val());
		this.setLng($('#lng').val());
	},
	getName: function() {
		return this.name;
	},
	setName: function(name) {
		this.name = name;
	},
	getEmail: function() {
		return this.email;
	},
	setEmail: function(email) {
		this.email = email;
	},
	getDescription: function() {
		return this.description;
	},
	setDescription: function(desc) {
		this.description = desc;
	},
	getLat: function() {
		return this.lat;
	},
	setLat: function(coords) {
		this.lat = typeof coords === 'number' ? coords : parseFloat(coords);
	},
	getLng: function() {
		return this.lng;
	},
	setLng: function(coords) {
		this.lng = typeof coords === 'number' ? coords : parseFloat(coords);
	}
}