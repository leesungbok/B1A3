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
		
    	var sum
		
		$('.btn-group').click(function() {
			sum='';
			for (var i = 1; i < 10; i++) {
				if ($("#test" + i).is(":checked")) {
					sum += $("#test" + i).val() + ",";
				}
			}
			
			var categoryList = {
					categoryList : sum
			}
			
			console.log(categoryList.categoryList);
			
			//카테고리 선택 해제 시 기본 데이터 가져오기
			if (categoryList.categoryList == "") {
				$('.row').remove("div");
	    		$.get(serverRoot + '/item/searchTitle.json?title=' + param , function(ajaxResult) {
	    			console.log("1");
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
	    		});
	    	} else {
			
				$.get(serverRoot + '/item/category.json' , categoryList, function(ajaxResult) {
					if (ajaxResult.status == "fail") {
			            alert(ajaxResult.data);
			            return;
					}
					
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
			}
		});
			
	
		$(".category1").click(function () {
			if ($("#test1").is(":checked")) {
				$("#test1").prop("checked", false); 
				$(".category1").removeClass("active");
			} else {
				$("#test1").prop("checked", true); 
				$(".category1").addClass('active');
			}
		});
		
		$(".category2").click(function () {
			if ($("#test2").is(":checked")) {
				$("#test2").prop("checked", false); 
				$(".category2").removeClass("active");
			} else {
				$("#test2").prop("checked", true); 
				$(".category2").addClass('active');
			}
		});
		
		$(".category3").click(function () {
			if ($("#test3").is(":checked")) {
				$("#test3").prop("checked", false); 
				$(".category3").removeClass("active");
			} else {
				$("#test3").prop("checked", true); 
				$(".category3").addClass('active');
			}
		});
		
		$(".category4").click(function () {
			if ($("#test4").is(":checked")) {
				$("#test4").prop("checked", false); 
				$(".category4").removeClass("active");
			} else {
				$("#test4").prop("checked", true); 
				$(".category4").addClass('active');
			}
		});
		
		$(".category5").click(function () {
			if ($("#test5").is(":checked")) {
				$("#test5").prop("checked", false); 
				$(".category5").removeClass("active");
			} else {
				$("#test5").prop("checked", true); 
				$(".category5").addClass('active');
			}
		});
		
		$(".category6").click(function () {
			if ($("#test6").is(":checked")) {
				$("#test6").prop("checked", false); 
				$(".category6").removeClass("active");
			} else {
				$("#test6").prop("checked", true); 
				$(".category6").addClass('active');
			}
		});
		
		$(".category7").click(function () {
			if ($("#test7").is(":checked")) {
				$("#test7").prop("checked", false); 
				$(".category7").removeClass("active");
			} else {
				$("#test7").prop("checked", true); 
				$(".category7").addClass('active');
			}
		});
		
		$(".category8").click(function () {
			if ($("#test8").is(":checked")) {
				$("#test8").prop("checked", false); 
				$(".category8").removeClass("active");
			} else {
				$("#test8").prop("checked", true); 
				$(".category8").addClass('active');
			}
		});
		
		$(".category9").click(function () {
			if ($("#test9").is(":checked")) {
				$("#test9").prop("checked", false); 
				$(".category9").removeClass("active");
			} else {
				$("#test9").prop("checked", true); 
				$(".category9").addClass('active');
			}
		});
	
	
	});
});