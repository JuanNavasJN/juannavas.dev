$(document).ready(function(){

	// efectos del menu

	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 800 + (index * 500));
	});

	// efecto header

	if( $(window).width() > 800){ // para medir la pantalla
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1000);
	}

// scroll elementos menu

	var acercaDe = $('#acerca-de').offset().top; // calculamos la posicion de pantalla del acerca de
	var menu = $('#platos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: acercaDe // nos desplaza a la posicion indicada
		}, 500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: menu // nos desplaza a la posicion indicada
		}, 500);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: galeria // nos desplaza a la posicion indicada
		}, 500);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: ubicacion // nos desplaza a la posicion indicada
		}, 500);
	});


});