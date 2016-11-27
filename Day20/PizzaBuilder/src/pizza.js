// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').on('click', function () {

	$('.pep').fadeToggle();
	$('.btn-pepperonni').toggleClass('active');

	var pep_string = $('.price li:nth-child(1)').text();
	var pep_price = pep_string.charAt(1);
	var total_string = $('.price strong').text();
	var total_price = total_string.slice(1, 3);
	var total = parseInt(total_price) - parseInt(pep_price);
	$('.price strong').text("$" + total);

	

});

$('.btn-mushrooms').on('click', function () {

	$('.mushroom').fadeToggle();
	$('.btn-mushrooms').toggleClass('active');

});

$('.btn-green-peppers').on('click', function () {

	$('.green-pepper').fadeToggle();
	$('.btn-green-peppers').toggleClass('active');

});

$('.btn-sauce').on('click', function () {

	$('.sauce').toggleClass('sauce-white');
	$('.btn-sauce').toggleClass('active');

});

$('.btn-crust').on('click', function () {

	$('.crust').toggleClass('crust-gluten-free');
	$('.btn-crust').toggleClass('active');

});

