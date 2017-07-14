$(document).ready(function() {
	/*Chargement de la page*/
	$(window).on('load', function() {
		var charge = $('.chargement').animate({opacity: "0"}, 500);
		setTimeout(function(){
			charge.css({display: "none"})
			charge.closest("body").css({overflow: 'visible'})
		}, 500);
	});
	
	/*Affichage texte performance*/
	function togglePerfor() {$(this).find('span').slideToggle()};
	$('.performance').on('mouseenter', 'article', togglePerfor);
	$('.performance').on('mouseleave', 'article', togglePerfor);
	
	/*Calcul prix total*/
	function calc_child(){
		var total_child = +$(this).val() * $(this).closest('.tarif').find('.rate_child').text();
		var total_adult = +$(this).closest('.buy').find('.buy_adult').val() * $(this).closest('.tarif').find('.rate_adult').text();
		var total_senior = +$(this).closest('.buy').find('.buy_senior').val() * $(this).closest('.tarif').find('.rate_senior').text();
		var total = +total_child + total_adult + total_senior;
		$(this).closest('.buy').find('.buy_price').text(total);
	}
	function calc_adult(){
		var total_adult = +$(this).val() * $(this).closest('.tarif').find('.rate_adult').text();
		var total_child = +$(this).closest('.buy').find('.buy_child').val() * $(this).closest('.tarif').find('.rate_child').text();
		var total_senior = +$(this).closest('.buy').find('.buy_senior').val() * $(this).closest('.tarif').find('.rate_senior').text();
		var total = +total_child + total_adult + total_senior;
		$(this).closest('.buy').find('.buy_price').text(total);
	}
	function calc_senior(){
		var total_senior = +$(this).val() * $(this).closest('.tarif').find('.rate_senior').text();
		var total_child = +$(this).closest('.buy').find('.buy_child').val() * $(this).closest('.tarif').find('.rate_child').text();
		var total_adult = +$(this).closest('.buy').find('.buy_adult').val() * $(this).closest('.tarif').find('.rate_adult').text();
		var total = +total_child + total_adult + total_senior;
		$(this).closest('.buy').find('.buy_price').text(total);
	}
	
	$('.buy_child').on('click', calc_child);
	$('.buy_adult').on('click', calc_adult);
	$('.buy_senior').on('click', calc_senior);
	$('.buy_child').on('keyup', calc_child);
	$('.buy_adult').on('keyup', calc_adult);
	$('.buy_senior').on('keyup', calc_senior);
});