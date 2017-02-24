//$('#like-btn').click(function() {
//	
//	var likeitem = $('#nextlist').map(function() {
//		console.log(likeitem);
//		return this.getAttribute("value");
//	});
//	$.getJSON(clientRoot + '/main/main.html', function(ajaxResult) {
//		if (ajaxResult.status != "success") {
//			alert(ajaxResult.data);
//			return;
//		}
//		console.log(ajaxResult.data);
//	});
//});


//$(function () {
//	$.getJSON('#like-btn').click(function() {
//
//	var likeitem = $('#likeList').map(function() {
//		return this.getAttribute("value");
//	});
//	$.post('mypage.json', likeitem, function(ajaxResult) {
//		if (ajaxResult.status != "success") {
//			alert(ajaxResult.data);
//			return;
//	}
//		console.log(ajaxResult.data);
//	});
//	});
$(function() {
	$.getJSON(serverRoot + '/mypage/list.json', function(ajaxResult) {
		var status = ajaxResult.status;
		if (status != "success")
			return;
		
		var list = ajaxResult.data;
		console.log(list);
		var parent = $('#nextlist');
		var template = Handlebars.compile($('#trTemplate').html());
		var div
		for(var i = 0; i < list.length; i++){
			if(i % 3 == 0) {
				div = $("<div>").addClass('row')
				parent.append(div);
			}
			div.append(template(list[i]));
		}
	});
	
});
//});