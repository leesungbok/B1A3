//(function(d, s, id) {
//  var js, fjs = d.getElementsByTagName(s)[0];
//  if (d.getElementById(id)) return;
//  js = d.createElement(s); js.id =id;
//  js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8&appId=2229730730585360";
//  fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));

$(function () {
    var nav = $('.nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 158) {
            nav.addClass("f-nav");
            $('#header_sub').css('margin-bottom', '122px');
        } else {
            nav.removeClass("f-nav");
            $('#header_sub').css('margin-bottom', '0');
        }
    });
    
    

    // 다음경매 무한 스크롤
    /*$('.next-bidlist').jscroll({
        // 스크롤시 4개의 줄까지만 자동으로 로딩 (그 다음은 버튼클릭시 1줄씩 로딩)
        autoTriggerUntil : 6
    });*/
    
    $(".hover").mouseleave(
    	    function () {
    	      $(this).removeClass("hover");
    	    }
    	  );
    
    $.get(clientRoot + '/main/detail.html', function (result) {
        $('.bid-current').html(result);
        
        // 현재경매 상세정보 팝업창에서 입찰버튼 클릭시 상세정보 팝업창 닫기
        $('#detail-bid').click(function() {
            $('#detail').modal('hide')
        })
        
        // 현재경매 정보
        $.getJSON(serverRoot + '/main/nowbid.json', function(ajaxResult) {
            if (ajaxResult.status != "success") {
                console.log(ajaxResult.data);
            }
            
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
            
            // 현재 경매정보에 대한 입찰기록
            (function getBidHistory() {
                $.getJSON(serverRoot + '/bidhistory/nowbidhistory.json', {"itemNo" : nowbid.itemNo}, function(ajaxResult) {
                    if (ajaxResult.status != "success") {
                        if ($('.desc-non-record').css('display') == 'block') {
                            return;
                        }
                        var startPrice
                        $('.desc-non-record').css('display', 'block');
                        startPrice = nowbid.startPrice
                        $('.present_num').text(startPrice);
                        $('#l').val(startPrice);
                        $('#l').attr('data-atLeastBids', startPrice)
                        $('.atLeastBids').text(startPrice);
                        return;
                    }
                    
                    var bdhs = ajaxResult.data.bdhs;
                    if ($('.successful-bidder').text() == bdhs[0].nickName) {
                        return;
                    }
                    
                    var nickName = ajaxResult.data.nickName
                    
                    // 현재가
                    var bids = bdhs[0].bids;
                    var atLeastBids
                    
                    if (bids < 3000) {          // ~ 3000원미만: 100원
                        atLeastBids = bids + 100;
                    } else if (bids < 5000){    // 3000원이상 ~ 5천원미만: 300원
                        atLeastBids = bids + 300;
                    } else if (bids < 10000) {  // 5천원이상 ~ 1만원미만: 500원
                        atLeastBids = bids + 500;
                    } else if (bids < 100000) { // 1만원이상 ~ 10만원미만: 1천원
                        atLeastBids = bids + 1000;
                    } else if (bids < 500000){  // 10만원이상 ~ 50만원미만: 2천원
                        atLeastBids = bids + 2000;
                    } else {                    // 50만원이상: 5천원
                        atLeastBids = bids + 5000;
                    }
                    
                    if (atLeastBids > 10000000) {
                        atLeastBids = 10000000;
                    }
                    
                    $('#l').attr('data-atLeastBids', atLeastBids)
                    $('.atLeastBids').text(atLeastBids);
                    
                    // 입찰등록 팝업창을 띄울시 입찰가격 변경금지
                    if (!$('#tender').hasClass('in')) {
                        $('#l').val(atLeastBids);
                    }
                    
                    if (bdhs[1] != null && bdhs[1].nickName == nickName) {
                        swal({
                            title: "새로운 입찰!",
                            type: "warning",
                            text: "입찰 순위가 밀려났습니다.",
                            confirmButtonText: "확인",
                            confirmButtonColor: "#f32e6d"
                        });
                    }
                    
                    $('.desc-non-record').css('display', 'none');
                    if (bdhs[0].nickName == nickName || atLeastBids == 10000000) {
                        $('.bidding-btn, #detail-bid').css('pointer-events', 'none');
                        $('.bidding-btn, #detail-bid').css('opacity', '.65');
                    } else {
                        $('.bidding-btn, #detail-bid').css('pointer-events', 'auto');
                        $('.bidding-btn, #detail-bid').css('opacity', '1');
                    }
                    
                    $('.successful-bidder-img').attr('src', clientRoot + '/upload/' + bdhs[0].photoPath);
                    $('.successful-bidder').text(bdhs[0].nickName);
                    $('.present_num').text(bdhs[0].bids);
                    $('.desc-line1').css('display', 'block');
                    
                    for (var i = 1; i < bdhs.length; i++) {
                        $('#dl'+i+'-img').attr('src', clientRoot + '/upload/' + bdhs[i].photoPath);
                        $('#dl'+i+'-bidder').text(bdhs[i].nickName);
                        $('#dl'+i+'-time').text(bdhs[i].bidTime)
                        $('#dl'+i+'-bid').text(bdhs[i].bids);
                        $('#dl'+i+'').css('display', 'block');
                    }
                    
/*                    // 입찰하락자 SMS 전송
                    var nickName = $('#dl1-bidder').text();
                    if (nickName != '' && nowbid.title != '') {
                        $.post(serverRoot + '/bidhistory/sms.json',
                        {
                            "nickName": nickName,
                            "text": "[" + nowbid.title + "] " + "입찰순위가 하락했습니다."
                        },
                        function(ajaxResult){
                            if (ajaxResult.status != "success") {
                                alert(ajaxResult.data);
                                return;
                            }
                        })
                    }*/
                })
                setTimeout(getBidHistory, 100);
            })();
            
            // 처음에는 1페이지 6개를 로딩한다.
            var currPageNo = 1;
            var pageSize = 24;
            
            loadList(currPageNo, pageSize);
            
            $('#nextPgBtn').click(function() {
                loadList(++currPageNo, 24);
            })
            
            // 다음경매
            function loadList(pageNo, pageSize) {
                $.getJSON(serverRoot + '/main/list.json',
                {
                "pageNo": pageNo,
                "pageSize": pageSize
                },
                function(ajaxResult) {
                    var status = ajaxResult.status;
                    
                    if (status != "success")
                        return;
                    
                    var list = ajaxResult.data.list;
                    var parent = $('#nextlist');
                    var template = Handlebars.compile($('#trTemplate').html());
                    var div
                    for(var i = 0; i < list.length; i++) {
                        if (i % 3 == 0) {
                            div = $("<div>").addClass('row');
                            parent.append(div);
                        }
                        div.append(template(list[i]));
                    }
                    
                    
                    var totalCount = ajaxResult.data.totalCount
                    var maxPageNo = parseInt(totalCount / (pageSize/4));
                    if ((totalCount % (pageSize/4)) > 0) {
                        maxPageNo++;
                    }
                    
                    if (currPageNo >= maxPageNo) {
                        $('#nextPgBtn').css('display', 'none');
                    }
                    
                    $('[data-countdown]').each(function() {
                        var $this = $(this), finalDate = $(this).data('countdown');
                        $this.countdown(finalDate, function(event) {
                            if (event.offset.days == 0) {
                                $this.html(event.strftime('%H:%M:%S'));
                            } else {
                                $this.html(event.strftime('%d일 %H:%M:%S'));
                            }
                        }).on('finish.countdown', function() {
                            setTimeout(function(){location.reload();} , 500);
                        });
                    });
                    
                    $('.social-btn-dissolve.heart, .social-btn-dissolve2.heart').click(function() {
                    	var itemNo = $(this).attr('data-itno');
                    	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
                        	/*console.log(ajaxResult)*/
                            var member = ajaxResult.data;

                    		if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
                    		}
                			var param = {
                					memberNo : member.memberNo,
                					itemNo : itemNo
                    		}
                    		$.getJSON('../mypage/check.json', param, function(ajaxResult) {
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
                                    setTimeout(function(){location.href= clientRoot +  '/main/main.html'} , 2250);
                     			}); // getJSON()
                             } else {
                	        	 $.post('../mypage/add.json',param ,function(ajaxResult) {
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
                	        		 setTimeout(function(){location.href= clientRoot +  '/main/main.html'} , 2250);
                	        	 }, 'json'); // post();
                    		}
                    	});
                    	});
                		
                	}); // click()
                });
            }
            
            // 입찰하기
            $('.btn-primary1').click(function() {
                $.post(serverRoot + '/bidhistory/add.json',
                {
                "bids": $('#l').val(),
                "itemNo": nowbid.itemNo
                }, function(ajaxResult) {
                    if (ajaxResult.status != "success") {
                        alert(ajaxResult.data);
                        return;
                    }
                    $('#tender').modal('hide')
                    swal({
                        title: "입찰 완료!",
                        timer: 2250,
                        showConfirmButton: false,
                        type: "success"
                    });
                }, 'json'); // post();
            })
        })
    })
    
    var bidPrice
    var minimumbid
    setInterval(function() {
        if ($('#tender').hasClass('in')) {
            bidPrice = Number($('#l').val());
            minimumbid = Number($('.atLeastBids').text());
            if (bidPrice > 10000000) {
                $('.atbids2, .atbids4').css('display', 'inline-block');
                $('.atbids1, .atbids3').css('display', 'none');
            } else if (bidPrice < minimumbid) {
                $('.atbids1, .atbids4').css('display', 'inline-block');
                $('.atbids2, .atbids3').css('display', 'none');
            } else if (bidPrice % 100 != 0) {
                $('.atbids3, .atbids4').css('display', 'inline-block');
                $('.atbids1, .atbids2').css('display', 'none');
            } else {
                $('.atbids1, .atbids2, .atbids3, .atbids4').css('display', 'none');
            }
        }
        
        if ($('.atbids4').css('display') == 'none') {
            $('#bid2-btn').css('pointer-events', 'auto');
            $('#bid2-btn').css('opacity', '1');
        } else {
            $('#bid2-btn').css('pointer-events', 'none');
            $('#bid2-btn').css('opacity', '.65');
        }
    }, 100);
});