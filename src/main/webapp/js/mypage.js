
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
		// 삭제, 변경 버튼을 클릭 했을 때 호출될 함수(클릭 이벤트 핸들러) 등록
		$('.tasha').click(function() {
			var itemNo = $(this).attr('data-itemno');
			$.getJSON(serverRoot + '/mypage/delete.json?likeNo=' + itemNo, function(ajaxResult) {
				if (ajaxResult.status != "success") { 
					alert(ajaxResult.data);
					return;
				}
				location.href = 'mypage.html';
			}); // getJSON()
		}); // click()
	});
});
//});