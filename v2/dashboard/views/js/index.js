$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

$(window).scroll(function () {

    if ($(window).scrollTop() > 721) {
      $('.navbar').addClass('navbar-fixed-top');
      $('.navbar').removeClass('navbarextra'); 
    }

    if ($(window).scrollTop() < 720) {
      $('.navbar').removeClass('navbar-fixed-top');
      $('.navbar').addClass('navbarextra');
    }
});