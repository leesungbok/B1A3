$('#login-btn').click(function() {
	
	if ($('#save-email').is(':checked')) {
		setCookie('email', $('#email').val(), 30);
	} else {
		setCookie('email', '', 0);
	}
	
	var param = {
		email: $('#email').val(),
		password: $('#password').val(),
	};
	
	$.post('login.json', param, function(ajaxResult) {
		if (ajaxResult.status == "success") {
			location.href = "../main/main.html";	
			return;
		}
		alert(ajaxResult.data);   
	}, 'json');
});

$('#email').val(getCookie('email').replace(/"/g, ''));
