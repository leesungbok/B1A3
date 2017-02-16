$('#login-btn').click(function() {

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