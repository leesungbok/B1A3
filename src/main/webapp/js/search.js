$(function () {
	var param = location.href.split('?')[1].split('=')[1];
    var member
    
	  window.fbAsyncInit = function() {
		console.log(12);
	    FB.init({
	      appId      : '2229730730585360',
	      xfbml      : true,
	      version    : 'v2.8'
	    });
	    
	  };

    
    $.ajax({
        type: "GET",
        url: serverRoot + '/auth/loginUser.json',
        success: function (data) {
            member = data.data;
        },
        contentType : "application/json", // 요청 컨텐트 타입
        dataType  : "json", // 응답 데이터 형식 명시하지 않을 경우 자동으로 추측
        async: false // 동기방식
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
        $('#nextPgBtn').hide(); // 다음경매 더보기 버튼을 감춘다.
        $('.spinner').show(); // 로딩 애니메이션을 보여준다.
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
            
			// decodeURIComponent: 이스케이핑 된 문자열을 정상적인 문자열로 되돌려주는 역활을 한다.
			var searchWord = decodeURIComponent(param);
			$('#searchTitle').val(searchWord);
			$('.content2 em').text("'" + searchWord + "'");
			
			var totalCount = ajaxResult.data.totalCount
			
			// 검색 결과가 없다면,
			if (totalCount == 0) {
			    $('.content2').show(); // 검색결과가 없다는 문구를 보여준다.
			    return;
			}
			
			var maxPageNoo = parseInt(totalCount/pageSizee);
	       
	        if ((totalCount % (pageSizee/4)) > 0) {
	            maxPageNoo++;
	        }
	        
	        if (currPageNoo >= maxPageNoo) { // 마지막 페이지인 경우 다음경매 더보기 버튼을 숨긴다.
	            $('#nextPgBtn').hide();
	        } else {
	            $('#nextPgBtn').show(); // 다음경매 더보기 버튼을 보여준다.
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
	    	$('.content1').show(); // 다음경매 더보기 버튼을 보여준다.
	    	$('.spinner').hide(); // 로딩 애니메이션을 감춘다.
		}); // title() 검색
    }
	
	$('.inside').click(function() {
		
	    $('.content1, .content2').hide(); // 다음경매 더보기 버튼을 숨긴다.
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
				
	            // 검색 결과가 없다면,
	            if (totalCount == 0) {
	                $('.content2').show(); // 검색결과가 없다는 문구를 보여준다.
	                return;
	            }
				
				 $('.content1').show(); // 다음경매 더보기 버튼을 보여준다.
				 
				 var maxPageNo = parseInt(totalCount/pageSize);
		           
		         if ((totalCount % (pageSize/4)) > 0) {
		             maxPageNo++;
		         }
		         
		         if (currPageNo >= maxPageNo) { // 마지막 페이지인 경우 다음경매 더보기 버튼을 숨긴다.
		             $('#nextPgBtn').hide();
		         } else {
		             $('#nextPgBtn').show(); // 다음경매 더보기 버튼을 보여준다.
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
			}); // title() 검색
	    } // 페이지 체크
	}); // 내부 상세정보 클릭시
	
	bidLikeEvent(); // 좋아요 클릭 이벤트
	
	bidGrantEvent(); // 경매품 클릭시 최근본 상품에 추가한다.
	
	b1();
	
	function b1() {
		$(document.body).on('click', '.social-btn-dissolve2.facebook', function(event) {
			console.log(11123);
			
			(function(d, s, id) {
			    var js, fjs = d.getElementsByTagName(s)[0];
			    if (d.getElementById(id)) return;
			    js = d.createElement(s); js.id = id;
			    js.src = "//connect.facebook.net/ko_KR/sdk.js";
			    fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
			FB.ui({
		        method: 'share',
		        display:'popup',
		        href: 'http://bbakdu.com/B1A3/main/main.html'
		    }, function(response) {});
			
			// 이벤트 전파를 중단시킨다.
	        if (event.stopPropagation) {
	            event.stopPropagation();
	        } else {
	            event.cancelBubble = true;
	        }
		});
		return;
		console.log(123)
	}
	
	// 좋아요 클릭 이벤트
	function bidLikeEvent() {
        $(document.body).on('click', '.social-btn-dissolve2.heart', function(event) {
            console.log(1);
            var heartBtn = $(this).addClass('clicked');
            heartBtn.children('.fa.fa-heart').attr('class','glyphicon glyphicon-heart');
            var itemNo = $(this).attr('data-itno');
            
            if (member.memberNo != undefined) {
                var param = {
                    'memberNo': member.memberNo,
                    'itemNo': itemNo,
                    'type': 1
                };
                
                $.getJSON(serverRoot + '/mypage/check.json', param, function(ajaxResult) {
                    var count = ajaxResult.data
                    if (count == 1) {
                        $.getJSON(serverRoot + '/mypage/delete.json?likeNo=' + itemNo + '&' + 'memberNo='+ member.memberNo, function(ajaxResult) {
                            if (ajaxResult.status != "success") { 
                                alert(ajaxResult.data);
                                return;
                            }
                            heartBtn.removeClass('clicked');
                            heartBtn.children('.glyphicon.glyphicon-heart').attr('class','fa fa-heart');
                            swal({
                                title: "좋아요 삭제 완료!",
                                text: "마이페이지에서 관심상품이 삭제되었습니다.",
                                timer: 2250,
                                showConfirmButton: false,
                                type: "success"
                            });
                        });
                    } else if(count == 2) {
                        param.type = 3;
                        $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
                            if (ajaxResult.status != "success") { 
                                alert(ajaxResult.data);
                                return;
                            }
                            heartBtn.addClass('clicked');
                            swal({
                                title: "좋아요 등록 완료!",
                                text: "마이페이지에서 관심상품이 등록되었습니다.",
                                timer: 2250,
                                showConfirmButton: false,
                                type: "success"
                            });
                        });
                    } else if(count == 3) {
                        param.type = 2;
                        heartBtn.removeClass('clicked');
                        heartBtn.children('.glyphicon.glyphicon-heart').attr('class','fa fa-heart');
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
                    } else {
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
            } else { /*member.memberNo == undefined*/
                // 로그인 되어있지 않으면 로그인 페이지로 이동한다.
                location.href = clientRoot + '/auth/login.html';
            }
            // 이벤트 전파를 중단시킨다.
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        });
    }
	
	// 경매품 클릭시 최근본 상품에 추가한다.
    function bidGrantEvent() {
        // 현재 뿐 만 아니라 앞으로 존재할 태그에 대해서도 핸들로 등록
        $(document.body).on('click', '.carbox', function(event) {
            var detailNo = $(this).attr('data-itno');
            if (member.memberNo == undefined) {
                location.href = clientRoot + "/info/info.html?itemNo=" + detailNo;
                return;
            }
            
            var param = {
                    memberNo : member.memberNo,
                    itemNo : detailNo,
                    type : 2
            }
            
            $.getJSON(serverRoot + '/mypage/check.json', param, function(ajaxResult) {
                var count = ajaxResult.data
                
                if (count == null) {
                    $.post(serverRoot + '/mypage/add.json',param ,function(ajaxResult) {
                        if (ajaxResult.status != "success") {
                            alert(ajaxResult.data);
                            return;
                        } 
                    });
                } else if(count == 1) {
                    param.type = 3;
                    $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
                        if (ajaxResult.status != "success") { 
                            alert(ajaxResult.data);
                            return;
                        }
                    })
                }
                location.href = clientRoot + "/info/info.html?itemNo=" + detailNo;
            });
        });
    }
});