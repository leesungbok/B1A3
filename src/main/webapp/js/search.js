$(function () {
	
	var param = location.href.split('?')[1].split('=')[1];

	function detailInfo() {
		$('.carbox').click(function(event) {
			
		location.href = clientRoot + "/info/info.html?itemNo=" + $(this).attr("data-itno");
		})
	}
	
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
	
	var search	
	$("#search").click(function () {
		 search = "time";
	});
	
	$("#search1").click(function () {
		 search = "first";
	});
	
	$("#search2").click(function () {
		 search = "high";
	});
	
	$("#search3").click(function () {
		 search = "low";
	});
	
	var categoryList
	var currPageNoo = 1;
    var pageSizee = 24;
	
    loadListt(currPageNoo, pageSizee);
    
    $('#nextPgBtn').click(function() {
        loadListt(++currPageNoo, 24);
    });
    
    function loadListt(pageNo, pageSize) {
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
    	
	// 타이틀로 아이템 찾기
		$.get(serverRoot + '/search/searchTitle.json?title=' + param ,
		{
			categoryList : sum ,
			categoryByAuction : categoryByAuction ,
			priceBefore : priceBefore ,
			priceAfter : priceAfter ,
			search : search ,
			pageNo: pageNo ,
	        pageSize: pageSize
        },		
		function(ajaxResult) {
			if (ajaxResult.status == "fail") {
	            alert(ajaxResult.data);
	            return;
			}

			var totalCount = ajaxResult.data.totalCount
             var maxPageNo = parseInt(totalCount / pageSize);
             if ((totalCount % (pageSize/4)) > 0) {
                 maxPageNo++;
             }
             
             if (currPageNoo >= maxPageNo) {
                 $('#nextPgBtn').css('display', 'none');
             } else {
            	 $('#nextPgBtn').css('display', 'inline-block');
             }
			
			var list = ajaxResult.data.item;
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
	    	detailInfo();
	    	
	    	$('.social-btn-dissolve.heart, .social-btn-dissolve2.heart').click(function() {
	        	var itemNo = $(this).attr('data-itno');
	        	$.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
	                var member = ajaxResult.data;

	        		if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
	        		    location.href = clientRoot + '/auth/login.html';
	        		    return;
	        		}
	    			var param = {
	    					memberNo : member.memberNo,
	    					itemNo : itemNo,
	    					type : 1
	        		}
	        		$.getJSON(serverRoot + '/mypage/check.json', param, function(ajaxResult) {
	                 var count = ajaxResult.data
	                 
	                 if (count == 1) {
	                	 $.getJSON(serverRoot + '/mypage/delete.json?likeNo=' + itemNo, function(ajaxResult) {
	         				if (ajaxResult.status != "success") { 
	         					alert(ajaxResult.data);
	         					return;
	         				}
	         				swal({
	                            title: "좋아요 삭제 완료!",
	                            text: "마이페이지에서 관심상품이 삭제되었습니다.",
	                            timer: 2250,
	                            showConfirmButton: false,
	                            type: "success"
	                        });
	         			}); // getJSON()
	                 } else if(count == 2) {
	                	 param.type = 3;
	                     
	                	 $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
	          				if (ajaxResult.status != "success") { 
	          					alert(ajaxResult.data);
	          					return;
	          				}
	          				swal({
	                            title: "좋아요 등록 완료!",
	                            text: "마이페이지에서 관심상품이 등록되었습니다.",
	                            timer: 2250,
	                            showConfirmButton: false,
	                            type: "success"
	                        });
	                	 });
	                 } 
	                 else if(count == 3) {
	                	 param.type = 2;
	                 
	                	 $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
	          				if (ajaxResult.status != "success") { 
	          					alert(ajaxResult.data);
	          					return;
	          				}
	                	 swal({
	                         title: "좋아요 삭제 완료!",
	                         text: "마이페이지에서 관심상품이 삭제되었습니다.",
	                         timer: 2250,
	                         showConfirmButton: false,
	                         type: "success"
	                     });
	                	 
	                	 });
	    	        		 
	        		}else {
	        			$.post(serverRoot + '/mypage/add.json',param ,function(ajaxResult) {
	    	        		 if (ajaxResult.status != "success") {
	    	        			 alert(ajaxResult.data);
	    	        			 return;
	    	        		 } 
	    	        		 var item=ajaxResult.data
	    	        		 swal({
	    	        			 title: "좋아요 등록 완료!",
	    	        			 text: "마이페이지에서 목록을 확인하세요.",
	    	        			 timer: 2250,
	    	        			 showConfirmButton: false,
	    	        			 type: "success"
	    	        		 });
	        			})
	        		}
	          });
	        });
	            // 이벤트 전파를 중단시킨다.
	            if (event.stopPropagation) {
	                event.stopPropagation();
	            } else {
	                event.cancelBubble = true;
	            } 
	      }); // 좋아요 click()

		}); // title() 검색
    }
	
	$('.inside').click(function() {
		
		$('.row').remove("div");
 		// 현재 경매 or 과거경매
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
		
		var categoryList
		var currPageNo = 1;
	    var pageSize = 24;
		
	    loadList(currPageNo, pageSize);
	    
	    $('#nextPgBtn').click(function() {
	        loadList(++currPageNo, 24);
	    });
	    function loadList(pageNo, pageSize) {
		// 타이틀로 아이템 찾기
			$.get(serverRoot + '/search/searchTitle.json?title=' + param ,
			{
				categoryList : sum ,
				categoryByAuction : categoryByAuction ,
				priceBefore : priceBefore ,
				priceAfter : priceAfter ,
				search : search ,
				pageNo: pageNo ,
		        pageSize: pageSize
	        },		
			function(ajaxResult) {
				if (ajaxResult.status == "fail") {
		            alert(ajaxResult.data);
		            return;
				}

				var totalCount = ajaxResult.data.totalCount
	             var maxPageNo = parseInt(totalCount / pageSize);
	             if ((totalCount % (pageSize/4)) > 0) {
	                 maxPageNo++;
	             }
	             
	             if (currPageNo >= maxPageNo) {
	                 $('#nextPgBtn').css('display', 'none');
	             } else {
	            	 $('#nextPgBtn').css('display', 'inline-block');
	             }
				
				var list = ajaxResult.data.item;
				console.log(ajaxResult.data);
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
		    	detailInfo();
		    	
		    	$('.social-btn-dissolve.heart, .social-btn-dissolve2.heart').click(function() {
		    		console.log("1");
		        	var itemNo = $(this).attr('data-itno');
		        	$.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
		                var member = ajaxResult.data;

		        		if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
		        		    location.href = clientRoot + '/auth/login.html';
		        		    return;
		        		}
		    			var param = {
		    					memberNo : member.memberNo,
		    					itemNo : itemNo,
		    					type : 1
		        		}
		        		$.getJSON(serverRoot + '/mypage/check.json', param, function(ajaxResult) {
		                 var count = ajaxResult.data
		                 
		                 console.log(count);
		                 if (count == 1) {
		                	 $.getJSON(serverRoot + '/mypage/delete.json?likeNo=' + itemNo, function(ajaxResult) {
		         				if (ajaxResult.status != "success") { 
		         					alert(ajaxResult.data);
		         					return;
		         				}
		         				swal({
		                            title: "좋아요 삭제 완료!",
		                            text: "마이페이지에서 관심상품이 삭제되었습니다.",
		                            timer: 2250,
		                            showConfirmButton: false,
		                            type: "success"
		                        });
		         			}); // getJSON()
		                 } else if(count == 2) {
		                	 param.type = 3;
		                     
		                	 $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
		          				if (ajaxResult.status != "success") { 
		          					alert(ajaxResult.data);
		          					return;
		          				}
		          				swal({
		                            title: "좋아요 등록 완료!",
		                            text: "마이페이지에서 관심상품이 등록되었습니다.",
		                            timer: 2250,
		                            showConfirmButton: false,
		                            type: "success"
		                        });
		                	 });
		                 } 
		                 else if(count == 3) {
		                	 param.type = 2;
		                 
		                	 $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
		          				if (ajaxResult.status != "success") { 
		          					alert(ajaxResult.data);
		          					return;
		          				}
		                	 swal({
		                         title: "좋아요 삭제 완료!",
		                         text: "마이페이지에서 관심상품이 삭제되었습니다.",
		                         timer: 2250,
		                         showConfirmButton: false,
		                         type: "success"
		                     });
		                	 
		                	 });
		    	        		 
		        		}else {
		        			$.post(serverRoot + '/mypage/add.json',param ,function(ajaxResult) {
		    	        		 if (ajaxResult.status != "success") {
		    	        			 alert(ajaxResult.data);
		    	        			 return;
		    	        		 } 
		    	        		 var item=ajaxResult.data
		    	        		 console.log(ajaxResult.data)
		    	        		 swal({
		    	        			 title: "좋아요 등록 완료!",
		    	        			 text: "마이페이지에서 목록을 확인하세요.",
		    	        			 timer: 2250,
		    	        			 showConfirmButton: false,
		    	        			 type: "success"
		    	        		 });
		        		})
		        	}
		          });
		        });
		            // 이벤트 전파를 중단시킨다.
		            if (event.stopPropagation) {
		                event.stopPropagation();
		            } else {
		                event.cancelBubble = true;
		            } 
		      }); // 좋아요 click()

			}); // title() 검색
	    } // 페이지 체크
	}); // 내부 상세정보 클릭시
	
	
});
