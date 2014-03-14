/* EMAIL
*/
$('#email').blur(function() {
	is_valid_email();
});

function is_valid_email() {
	var email = $('#email').val();
	if (email == '') {
		$('#error-email').text("email can't be empty");
		return false;
	} else if (email.indexOf('.') == 0 || email.indexOf('@') == 0) {
		$('#error-email').text("can't start with '.' or '@'");
		return false;
	} else if (/[^a-zA-Z0-9.@_-]/.test(email)) {
		$('#error-email').text('invalid email');
		return false;
	} else if (! /.*@.*/.test(email)) {
		$('#error-email').text('missing @ symbol');
		return false;
	} else {
		$('#error-email').text('');
		return true;
	}
}

/* PASSWORD
*/
$('#pass').blur(function() {
	is_valid_pass();
});

function is_valid_pass() {
	var pass = $('#pass').val();
	if (pass == '') {
		$('#error-pass').text("password can't be empty");
		return false;
	} else if (pass.length < 6) {
		$('#error-pass').text("must be 6 characters or more");
		return false;
	} else {
		$('#error-pass').text('');
		return true;
	}
}

/* NAME
*/

function is_valid_name() {}