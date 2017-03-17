$(function() {
	$.getJSON(serverRoot + '/mypage/mybidlist.json', function(ajaxResult) {
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
	
	$('.tasha').click(function() {
		var itemNo = $(this).attr('data-itemno');
		$.post(serverRoot + '/item/delete.json',
		{
			"itemNo":itemNo
		}, function(ajaxResult) {
			if (ajaxResult.status != "success") { 
				alert(ajaxResult.data);
				return;
			}
			location.href = clientRoot + '/mypage/mybid.html?submenu=mybid';
		}, 'json');
	}); // click()
});
});


