$(function () {
    var nav = $('.nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 158) {
            nav.addClass("f-nav");
            $('#header_sub').css('margin-bottom', '100px');
        } else {
            nav.removeClass("f-nav");
            $('#header_sub').css('margin-bottom', '0');
        }
    });
    
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
                $('.container, .next-bidlist, .bid-current').remove();
                return;
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
            $('.start-time').text(nowbid.startTime);
            
            // 남은 시간을 표시한다.
            timeRemaining();
           
            $('div[data-target="#detail"]').click(function() {
        		$.getJSON('../auth/loginUser.json', function(ajaxResult) {
        	        var member = ajaxResult.data;
        	
        			if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
        				return;
        			}
        			var param = {
        					memberNo : member.memberNo,
        					itemNo : nowbid.itemNo,
        					type : 2
        			}
        			$.getJSON('../mypage/check.json', param, function(ajaxResult) {
        	         var count = ajaxResult.data
        	         
        	         if(count == null) {
        	        	 $.post('../mypage/add.json',param ,function(ajaxResult) {
           	        		 if (ajaxResult.status != "success") {
           	        			 alert(ajaxResult.data);
           	        			 return;
           	        		 } 
        	        	 });
        	         } else if(count == 1) {
	        	        	 param.type=3;
	        	        	 $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
                   				if (ajaxResult.status != "success") { 
                   					alert(ajaxResult.data);
                   					return;
                   				}
	        	        	 })
	        	         }
        	         
        			});
        		});
            });
            
//            $('meta[property="og:title"]').attr('content', nowbid.title);
            
            // 현재 경매정보에 대한 입찰기록
            (function getBidHistory() {
                $.getJSON(serverRoot + '/bidhistory/nowbidhistory.json', {"itemNo" : nowbid.itemNo}, function(ajaxResult) {
                    var nickName = ajaxResult.data.nickName
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
                        if (nowbid.nickName == nickName) {
                            $('.bidding-btn, #detail-bid').css('pointer-events', 'none');
                            $('.bidding-btn, #detail-bid').css('opacity', '.65');
                        }
                        return;
                    }
                    
                    var bdhs = ajaxResult.data.bdhs;
                    if ($('.successful-bidder').text() == bdhs[0].nickName) {
                        return;
                    }
                    
                    
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
                    
                    if (bdhs[1] != null && $('.successful-bidder').text() == nickName) {
                        swal({
                            title: "새로운 입찰!",
                            type: "warning",
                            text: "입찰 순위가 밀려났습니다.",
                            confirmButtonText: "확인",
                            confirmButtonColor: "#f32e6d"
                        });
                    }
                    
                    $('.desc-non-record').css('display', 'none');
                    if (bdhs[0].nickName == nickName || atLeastBids == 10000000 || nowbid.nickName == nickName) {
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
                        $('div[data-itno="' + list[i].itemNo + '"] .item:first-child').addClass('active');
                    }
                    nextBidGrantEvent();
                    
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
                     			}); // getJSON()
                             } else if(count == 2) {
                            	 param.type = 3;
                            	 console.log(parma.type);
                                 
                            	 $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
                      				if (ajaxResult.status != "success") { 
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
                  }); // click()
                });
            }
            // 현재경매 정보를 표시한다.
            $('.container, .bid-current').css('display', 'block');
            
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
            
            // 현재경매 이미지 크게보기
            for (var i = 1; i < 5; i++) {
                $('.nb-img' + i + '>img').attr('src', clientRoot + '/upload/' + nowbid.photoList[i-1].filePath);
            }
            
            var modal = $('#image-popup');
            var modalImg = $('#img01');
            var className
            $('#detail-photo img').click(function() {
                className = $(this).attr("class");
                $('#detail2-imgs .' + className +
                ', #detail2-photo li[data-slide-to="' + className.charAt(className.length-1) + '"]').addClass('active');
                modal.css('display', 'block');
            })
            
            $('.close').click(function() {
                modal.css('display', 'none');
                $('#detail2-imgs div, li[data-target="#mycarousel"]').removeClass('active');
            })
            
            var $item = $('#detail2-photo .item');
            $item.height($(window).height());
            $item.addClass('full-screen');
            
            $('#detail2-imgs img').each(function() {
                var $src = $(this).attr('src');
                $(this).parent().css({
                    'background-image' : 'url(' + $src + ')',
                });
                $(this).remove();
            });
            
            $(window).on('resize', function (){
                $item.height($(window).height());
            });
            
            $('.carousel-control').click(function() {
                event.preventDefault();
            })
        })
    }) // 현재경매 정보 끝
    
    // 처음에는 1페이지 6개를 로딩한다.(객체 하나당 사진4개 이기 때문에 24개로 설정)
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
            if (ajaxResult.status != "success") {
                return;
            }
            
            $('.next-bidlist').css('display', 'block');
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
                $('div[data-itno="' + list[i].itemNo + '"] .item:first-child').addClass('active');
            }
            
            // 다음 경매 클릭시 관심상품에 추가한다.
            nextBidGrantEvent();
            
            // 남은 시간을 표시한다.
            timeRemaining();
            
            var totalCount = ajaxResult.data.totalCount
            var maxPageNo = parseInt(totalCount / (pageSize/4));
            
            if ((totalCount % (pageSize/4)) > 0) {
                maxPageNo++;
            }
            
            if (currPageNo >= maxPageNo) {
                $('#nextPgBtn').css('display', 'none');
            }
            
            $('.social-btn-dissolve.heart, .social-btn-dissolve2.heart').click(function() {
                var itemNo = $(this).attr('data-itno');
                $.getJSON('../auth/loginUser.json', function(ajaxResult) {
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
          }); // click()
        });
    } // 다음경매 끝
    
    // 남은 시간을 표시한다.
    function timeRemaining() {
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
    }
    
    // 다음 경매 클릭시 관심상품에 추가한다.
    function nextBidGrantEvent() {
        $('.carbox').click(function(event) {
            var detailNo = $(this).attr('data-itno');
            $.getJSON('../auth/loginUser.json', function(ajaxResult) {
                if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
                    location.href = clientRoot + "/info/info.html?itemNo=" + detailNo;
                    return;
                }
                
                var member = ajaxResult.data;
                
                var param = {
                    memberNo : member.memberNo,
                    itemNo : detailNo,
                    type : 2
                }
                
                $.getJSON('../mypage/check.json', param, function(ajaxResult) {
                     var count = ajaxResult.data
                     
                     if (count == null) {
                         $.post('../mypage/add.json',param ,function(ajaxResult) {
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
        })
    }
    
    // 입찰하기 유효성 검사
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