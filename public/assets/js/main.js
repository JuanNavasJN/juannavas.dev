$(document).ready(function(){

	var acercaDe = $('#acerca-de').offset().top,
		trabajos = $('#trabajos').offset().top,
		contacto = $('#contacto').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: acercaDe // nos desplaza a la posicion indicada
		}, 500);
	});

	$('#btn-trabajos').on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: trabajos // nos desplaza a la posicion indicada
		}, 500);
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: contacto // nos desplaza a la posicion indicada
		}, 500);
	});


});