//Registration Link
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

	// Create input element for testing
	var inputs = document.createElement('input');

	// Create the supports object
	var supports = {};

	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	// Fallback for autofocus attribute
	if(!supports.autofocus) {}
	// Fallback for required attribute
	if(!supports.required) {}
	// Fallback for placeholder attribute
	if(!supports.placeholder) {}
	// Change text inside send button on submit
	var send = document.getElementById('contact-submit');
	if(send) { send.onclick = function () { this.innerHTML = '...Sending';} }

