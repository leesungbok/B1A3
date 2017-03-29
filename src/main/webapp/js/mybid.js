$(function() {
	// 나의 경매 리스트 가져와서 카드형식으로 출력하기
	$.getJSON(serverRoot + '/item/mybidlist.json', function(ajaxResult) {
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
		
		
		// 나의 경매 리스트 지우기
		$('.tasha').click(function() {
			var itemNo = $(this).attr('data-itno');
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
		
		
		
		// 나의 경매 상세보기
		$('.searcha').click(function() {
			var itemNo = $(this).attr('data-itno');
			console.log(itemNo);
			location.href = clientRoot + '/info/info.html?itemNo=' + itemNo;
		}); // click()
		
		
		
		
		
		// 현재경매 상세정보 팝업창에서 입찰버튼 클릭시 상세정보 팝업창 닫기
        $('#detail-bid').click(function() {
            $('#mybidupdate').modal('hide')
        })
		
		// 나의 경매 수정하기
		$.get(serverRoot + '/mypage/mybidupdate.html', function (result) {
			$('.mybidupdate').html(result);
		$.getJSON(serverRoot + '/main/nowbid.json', function(ajaxResult) {
			var nowbid = ajaxResult.data;
            $('#nb-countdown').attr('data-countdown', nowbid.startTime);
            $('.nb-img1').attr('src', clientRoot + '/upload/' + nowbid.photoList[0].filePath);
            $('.nb-img2').attr('src', clientRoot + '/upload/' + nowbid.photoList[1].filePath);
            $('.nb-img3').attr('src', clientRoot + '/upload/' + nowbid.photoList[2].filePath);
            $('.nb-img4').attr('src', clientRoot + '/upload/' + nowbid.photoList[3].filePath);
            $('.nb-title').text(nowbid.title);
            $('.start_num').text(nowbid.startPrice);
            $('.when-to-buy').text(nowbid.buyDate);
            $('.day-of-use').text(nowbid.useDay);
            $('.deal-method').text(nowbid.deal);
            $('.seller').text(nowbid.nickName);
            $('.sellrcontents').text(nowbid.content);
            $('.social-btn-dissolve.heart').attr('data-itno',nowbid.itemNo);
            $('.start-time').text(nowbid.startTime);
		});
		$('.fa-pencil').click(function() {
//				$.getJSON(serverRoot + '/item/mybidlist.json', function(ajaxResult) {
//					var status = ajaxResult.status;
//					if (status != "success")
//						return;
//					var itemNo = $(this).attr('data-itno');
//					console.log(itemNo);
//					location.href = clientRoot + '/mypage/mybidupdate.html?itemNo=' + itemNo;
//				}); // click()
	});
});
});

});
