$('#search').click(function() {
	location.href = clientRoot + '/search/search.html';
});

$('#search1').click(function() {
	location.href = clientRoot + '/search/search1.html';
});

$('#search2').click(function() {
	location.href = clientRoot + '/search/search2.html';
});

$('#search3').click(function() {
	location.href = clientRoot + '/search/search3.html';
});


$(function () {
	// 타이틀로 아이템 찾기
  var param = location.href.split('?')[1].split('=')[1];
	$.get(serverRoot + '/item/searchTitle.json?title=' + param , function(ajaxResult) {
		if (ajaxResult.status == "fail") {
            alert(ajaxResult.data);
            return;
		}
		
		var list = ajaxResult.data;
    	var parent = $('#search-bid');
    	var template = Handlebars.compile($('#trTemplate1').html());
    	var div;
    	
    	for(var i = 0; i < list.length; i++) {
    	  if (i % 3 == 0) {
    		  div = $("<div>").addClass('row')
    		  parent.append(div);
    	  }
    	  div.append(template(list[i]));
    	}
		
    	$('.inside').click(function() {
    	
    	var sum
    	var categoryByAuction
    	
    	// 카테고리 영역 클릭 했을 경우
    	if ($("#current").is(":checked")) {
			$("#current").prop("checked", true);
			categoryByAuction = $("#current").val();
    	} else {
    		$("#last").prop("checked", true);
			categoryByAuction = $("#last").val();
    	}
    	
    	// 가격 입력
    	if ($("#priceBefore").val()) {
    	var priceBefore = $("#priceBefore").val();
    	}
    	
    	// 가격 입력
    	if ($("#priceAfter").val()) {
        	var priceAfter = $("#priceAfter").val();
        }
    	
			sum='';
			for (var i = 1; i < 10; i++) {
				if ($("#test" + i).is(":checked")) {
					sum +=  $("#test" + i).val() + ",";
				} 
			}
    		
			// 카테고리, 경매, 가격 데이터 넘기기
    		var  categoryList = {
 					categoryList : sum ,
 					categoryByAuction : categoryByAuction ,
 					priceBefore : priceBefore ,
 					priceAfter : priceAfter
 			}
				$.get(serverRoot + '/item/category.json' , categoryList, function(ajaxResult) {
					if (ajaxResult.status == "fail") {
			            alert(ajaxResult.data);
			            return;
					}
					console.log(ajaxResult);
					
					$('.row').remove("div");
					
					var list = ajaxResult.data;
			    	var parent = $('#search-bid');
			    	var template = Handlebars.compile($('#trTemplate1').html());
			    	var div;
			    	
			    	for(var i = 0; i < list.length; i++) {
			    	  if (i % 3 == 0) {
			    		  div = $("<div>").addClass('row')
			    		  parent.append(div);
			    	  }
			    	  div.append(template(list[i]));
			    	}
			    	
				});
		});
			
    	// 패션 카테고리 선택 시 
		$(".category1").click(function () {
			if ($("#test1").is(":checked")) {
				$("#test1").prop("checked", false); 
				$(".category1").removeClass("active");
			} else {
				$("#test1").prop("checked", true); 
				$(".category1").addClass('active');
			}
		});

    	// 가방 카테고리 선택 시 
		$(".category2").click(function () {
			if ($("#test2").is(":checked")) {
				$("#test2").prop("checked", false); 
				$(".category2").removeClass("active");
			} else {
				$("#test2").prop("checked", true); 
				$(".category2").addClass('active');
			}
		});
		
    	// 취미 카테고리 선택 시 
		$(".category3").click(function () {
			if ($("#test3").is(":checked")) {
				$("#test3").prop("checked", false); 
				$(".category3").removeClass("active");
			} else {
				$("#test3").prop("checked", true); 
				$(".category3").addClass('active');
			}
		});
		
    	// 디지털 카테고리 선택 시 
		$(".category4").click(function () {
			if ($("#test4").is(":checked")) {
				$("#test4").prop("checked", false); 
				$(".category4").removeClass("active");
			} else {
				$("#test4").prop("checked", true); 
				$(".category4").addClass('active');
			}
		});
		
    	// 컴퓨터 카테고리 선택 시 
		$(".category5").click(function () {
			if ($("#test5").is(":checked")) {
				$("#test5").prop("checked", false); 
				$(".category5").removeClass("active");
			} else {
				$("#test5").prop("checked", true); 
				$(".category5").addClass('active');
			}
		});
		
    	// 레져 카테고리 선택 시 
		$(".category6").click(function () {
			if ($("#test6").is(":checked")) {
				$("#test6").prop("checked", false); 
				$(".category6").removeClass("active");
			} else {
				$("#test6").prop("checked", true); 
				$(".category6").addClass('active');
			}
		});
		
    	// 생활품 카테고리 선택 시 
		$(".category7").click(function () {
			if ($("#test7").is(":checked")) {
				$("#test7").prop("checked", false); 
				$(".category7").removeClass("active");
			} else {
				$("#test7").prop("checked", true); 
				$(".category7").addClass('active');
			}
		});
		
    	// 가구 카테고리 선택 시 
		$(".category8").click(function () {
			if ($("#test8").is(":checked")) {
				$("#test8").prop("checked", false); 
				$(".category8").removeClass("active");
			} else {
				$("#test8").prop("checked", true); 
				$(".category8").addClass('active');
			}
		});
		
    	// 도서 카테고리 선택 시 
		$(".category9").click(function () {
			if ($("#test9").is(":checked ")) {
				$("#test9").prop("checked", false); 
				$(".category9").removeClass("active");
			} else {
				$("#test9").prop("checked", true); 
				$(".category9").addClass('active');
			}
		});

	});
});