
describe('Form', function() {

	beforeAll(function(){
		jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
	});

	it('calls addMarker function when submitted with valid attributes', function() {
		spyOnEvent('#addLocationButton', 'click');
		spyOn(window, 'addMarker');

		$('#name').val('Tester');
		$('#email').val('test@test.com');
		$('#description').val('Test description');
		$('#lat').val('51.514024');
		$('#lng').val('-0.100681');
    $('#addLocationButton').trigger("click");

    expect(addMarker).toHaveBeenCalled();
	});

	it('requires Name', function() {
		spyOnEvent('#addLocationButton', 'click');
		spyOn(window, 'addMarker');

		$('#email').val('test@test.com');
		$('#description').val('Test description');
		$('#lat').val('51.514024');
		$('#lng').val('-0.100681');
    $('#addLocationButton').trigger("click");

    expect(addMarker).not.toHaveBeenCalled();
	});

	it('requires Description', function() {
		spyOnEvent('#addLocationButton', 'click');
		spyOn(window, 'addMarker');

		$('#name').val('Tester');
		$('#email').val('test@test.com');
		$('#lat').val('51.514024');
		$('#lng').val('-0.100681');
    $('#addLocationButton').trigger("click");

    expect(addMarker).not.toHaveBeenCalled();
	});

	it('requires Latitude', function() {
		spyOnEvent('#addLocationButton', 'click');
		spyOn(window, 'addMarker');

		$('#name').val('Tester');
		$('#email').val('test@test.com');
		$('#description').val('Test description');
		$('#lng').val('-0.100681');
    $('#addLocationButton').trigger("click");

    expect(addMarker).not.toHaveBeenCalled();
	});

	it('requires Longitude', function() {
		spyOnEvent('#addLocationButton', 'click');
		spyOn(window, 'addMarker');

		$('#name').val('Tester');
		$('#email').val('test@test.com');
		$('#description').val('Test description');
		$('#lat').val('51.514024');
    $('#addLocationButton').trigger("click");

    expect(addMarker).not.toHaveBeenCalled();
	});
});