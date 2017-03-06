$(function () {
    // header.html을 가져와서 붙인다.
    $.get('../header.html', function (result) {
    	$('#header').html(result);
        // 
        $.getJSON('../auth/loginUser.json', function(ajaxResult) {
            var member = ajaxResult.data;

    		if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
                $('.navbar-menu, #addbid-btn, .bidding-btn, #detail-bid').click(function() {
                    location.href = clientRoot + '/auth/login.html';
                    event.preventDefault();
                    
                    // 이벤트 전파를 중단시킨다.
                    if (event.stopPropagation) {
                        event.stopPropagation();
                    } else {
                        event.cancelBubble = true;
                    }
                });
                
    			// 로그온 상태 출력 창을 감춘다.
    			$('#logout-state').css('display', 'inline-block');
    			
    			// 로그인 버튼의 클릭 이벤트 핸들러 등록하기
    			$('#login-btn').click(function(event) {
    				event.preventDefault()
    				location.href = clientRoot +  '/auth/login.html'
    			});
    			return;
    		}
    		
    		// 로그인 되었으면, 로그오프 상태 출력 창을 감춘다. 
    		$('#logon-state').css('display', 'inline-block');
    		
    		$('#logon-img').attr('src', '../upload/' + member.photoPath);
    		
    		$('#logon-nick-name').text(member.nickName);
    		
    		// 로그인 시 회원가입 화면 없애기
    		$('#logout-state').css('display', 'none');
    		
    		// 로그아웃 버튼의 클릭 이벤트 핸들러 등록하기
    		$('#logout-btn').click(function(event) {
    		    Kakao.init('0a61605788e65e255f0aa83ab716c2a2');
    		    
    			FB.init({
    				appId      : '1794128977577774',
    				cookie     : false,  
    				xfbml      : false,
    				version    : 'v2.8' 
    			});
    			$.getJSON(serverRoot + '/auth/logout.json', function(ajaxResult) {
    				console.log(ajaxResult);
				    FB.getLoginStatus(function(response) {
				        if (response && response.status === 'connected') {
				            FB.logout(function(response) {
				            location.href = clientRoot +  "/auth/login.html";
				            });
				        } else {
				        	Kakao.Auth.logout(function() {
					            location.href = clientRoot +  "/auth/login.html";
					        })
				        }
				    });
    			});
    			event.preventDefault();
    		});
    		
    		$('#logon-img').click(function() {
    		    location.href = clientRoot + '/mypage/mysettings.html?submenu=myoption'
    		})
            
    		$('#logon-nick-name').click(function() {
                location.href = clientRoot + '/mypage/mysettings.html?submenu=myoption'
            })
    	});

        // 로그인시 로그인 페이지로 이동
        $('#login-btn').click(function(event) {
            location.href = clientRoot + "/auth/login.html";
            event.preventDefault();
        });
        
        // 회원가입시 회원가입 페이지로 이동
        $('#join-btn').click(function(event) {
            location.href = clientRoot + "/auth/joinEmail.html";
            event.preventDefault();
        });
        
        if (window.location == window.parent.location) {
            $('#fullscreen').html('<span class="glyphicon glyphicon-resize-small"></span>');
            $('#fullscreen').attr('href', 'http://bootsnipp.com/mouse0270/snippets/PbDb5');
            $('#fullscreen').attr('title', 'Back To Bootsnipp');
        }    
        $('#fullscreen').on('click', function(event) {
            event.preventDefault();
            window.parent.location =  $('#fullscreen').attr('href');
        });
        $('#fullscreen').tooltip();
        
        $('.navbar-toggler').on('click', function(event) {
            event.preventDefault();
            $(this).closest('.navbar-minimal').toggleClass('open');
        })
        
        $('#search-btn').on('click', function(event) {
        	
        	var param =  {
        			"title" : $('#searchTitle').val()
        	}
        	location.href= clientRoot + '/search/search.html?title=' + param.title; 
        	
        });
        
        $('#communicate-btn').click(function(event) {
            $('.communicate').css('display', 'block');
            event.preventDefault();
        });
        
        $('.communicate-close-btn').click(function(event) {
            $('.communicate').css('display', 'none');
        });
    })
    
    $.get('../submenu.html', function (result) {
    	$('#submenu').html(result);
 
    	/*var submenu = location.search.split("?")[1].split("=")[1];*/
	    $('#mypage').click(function (e) {
	    	  e.preventDefault();
	    	 location.href= clientRoot +  "/mypage/mypage.html?submenu=mypage";
	    }); 

	    $('#mybidding').click(function (e) {
	    	  e.preventDefault();
	    	 location.href= clientRoot +  "/mypage/mybid.html?submenu=mybid";
	    }); 

	    $('#myoption').click(function (e) {
	    	  e.preventDefault();
	    	 location.href= clientRoot +  "/mypage/mysettings.html?submenu=myoption";
	    }); 
	    
	    /*$("#"+submenu).parent().addClass('active');*/
	     
    })
    
    // add.html을 가져와서 붙인다.
    $.get(clientRoot + '/add.html', function (result) {
        $('.bid-regist').html(result);
        
        // 경매등록 사진첨부
        var $input = $("#fileupload");
        if ($input.fileinput != null) {
            $input.fileinput({
                uploadUrl : serverRoot + "/common/fileupload.json",
                showRemove : false,
                showCaption: false,
                showUpload : false,
                uploadAsync: false,
                language : "kr",
                allowedFileExtensions : [ "jpg", "png", "gif", "jpeg" ],
                minFileCount: 4,
                maxFileCount : 4
            }).on("filebatchselected", function(event, data, previewId, index) {
                $('.kv-upload-progress').css('display', 'none');
                $input.fileinput("upload");
            }).on('filebatchuploadsuccess', function(event, data, previewId, index) {
                for (var i = 0; i < 4; i++) {
                    $('<input>').attr({
                        type: 'hidden',
                        class: 'file-path',
                        value: data.response.data[i]
                    }).appendTo("#file-selector");
                }
            })/*.on('filesuccessremove', function(event, id, data, previewId, index) {
        });*/
            
            // 경매등록 버튼클릭시
            $('#add-btn').click(function() {
                var getFilePath = $(".file-path");
                var filePath = [];
                
                for(var i = 0; i < getFilePath.length; i++){
                    filePath.push($(getFilePath[i]).val());
                }
                
                // jQuery 로 ajax 처리시 data 형식 중 배열(array)값을 넘기려면
                // 다음과 같이 세팅값을 바꿔 주어야 한다.
                jQuery.ajaxSettings.traditional = true;
                
                $.post(serverRoot + '/main/add.json',
                    {
                    "title": $('#titl').val(),
                    "category": $('#categ').val(),
                    "startPrice": $('#stpc').val(),
                    "buyDate": $('#buy').val(),
                    "useDay": $('#day').val(),
                    "content": $('#cont').val(),
                    "deal": $('#deal').val(),
                    "photoList": filePath
                    }
                , function(ajaxResult) {
                    if (ajaxResult.status != "success") {
                        alert(ajaxResult.data);
                        return;
                    }
                    
                    console.log(ajaxResult.data)
                    swal({
                        title: "등록 완료!",
                        text: "등록하신 경매품을 확인하세요.",
                        timer: 2250,
                        showConfirmButton: false,
                        type: "success"
                    });
                    setTimeout(function(){location.href= clientRoot +  '/main/main.html'} , 2250);
                }, 'json'); // post();
            }); // click()
        }
    });

    function notiWinning(bdhs, endTime) {
        console.log(bdhs.nickName)
        console.log("[" + bdhs.title + "] " + "낙찰을 축하드립니다. " + 
        endTime.getHours() + "시" + endTime.getMinutes() + "분" + " 전까지 결제하세요.")
/*    	$.post(serverRoot + '/bidhistory/sms.json',
		{
    		"nickName": bdhs.nickName,
    		"text": "[" + bdhs.title + "] " + "낙찰을 축하드립니다. " + 
    		endTime.getHours() + "시" + endTime.getMinutes() + "분" + " 전 까지 결제하세요."
		}, function(ajaxResult) {
			if (ajaxResult.status != 'success') {
				alert(ajaxResult.data);
				return;
			}
		})*/
    }

    function bdhsUpdate(itemNo, mybid, state) {
        $.post(serverRoot + "/bidhistory/updatestate.json",
        {
            "itemNo": itemNo,
            "bids": mybid,
            "state": state
        }, function(ajaxResult) {
            if (ajaxResult.status != "success") {
                alert(ajaxResult.data)
                return;
            }
        })
    }

    // 바로 전 경매의 입찰기록을 요청
    (function getBeforeBidHistory() {
        $.getJSON(serverRoot + '/bidhistory/beforebidhistory.json', function(ajaxResult){
            if (ajaxResult.status != 'success') {
                console.log(ajaxResult.data)
                return;
            }
            
            var bdhs = ajaxResult.data.bdhs;
            var endTime = new Date(bdhs[0].startTime);
            endTime.setMinutes(endTime.getMinutes() + 35);
            var memberNo = ajaxResult.data.memberNo;
            var count = 0;
            var mybid
            var index
            
            for (var i = 0; i < bdhs.length; i++) {
                if ((bdhs[i].state == 1) || (bdhs[i].memberNo != memberNo && bdhs[i].state == 0)) {
                    count = 5;
                    break;
                } else if (bdhs[i].memberNo == memberNo && bdhs[i].state == 0) {
                    mybid = bdhs[i].bids;
                    index = i;
                    endTime.setMinutes(endTime.getMinutes() + (i+1)*5);
                    break;
                } else {
                    count++;
                }
            }
            
            if (count < 5 && $('.sweet-overlay').css('display') != 'block') {
        		swal({
        			title: "낙찰을 축하드립니다!",
        			text: endTime.getHours() + "시" + endTime.getMinutes() + "분" + " 전까지 미결제시 자동으로 주문취소가 되고 패널티가 부여됩니다.",
        			type: "success",
        			cancelButtonText: "주문취소",
        			cancelButtonColor: "#e5e5e5",
        			confirmButtonText: "결제하기",
        			confirmButtonColor: "rgb(244, 46, 109)",
        			showCancelButton: true,
        			closeOnConfirm: false,
        			closeOnCancel: false
        		}, function(isConfirm) {
        			if (isConfirm) {
        				sessionStorage.setItem('itemNo', bdhs[0].itemNo);
        				sessionStorage.setItem('mybid', mybid);
        				location.href = clientRoot + "/order/order.html"
        			} else {
        				swal({
        					title: "경고!",
        					text: "주문 취소하시면 구매거부가 되어 경매 패널티가 1점 부여됩니다.",
        					type: "warning",
        					confirmButtonText: "결제하기",
        					confirmButtonColor: "rgb(244, 46, 109)",
        					cancelButtonText: "주문취소",
        					cancelButtonColor: "#e5e5e5",
        					showCancelButton: true,
        					closeOnConfirm: false,
                			closeOnCancel: false
        				}, function(isConfirm) {
        					if (isConfirm) {
        						sessionStorage.setItem('itemNo', bdhs[0].itemNo);
        						sessionStorage.setItem('mybid', mybid);
        						location.href = clientRoot + "/order/order.html"
        					} else {
        					    if (i < 4) {
        					        notiWinning(bdhs[i+1], endTime)
        					    }
        						bdhsUpdate(bdhs[0].itemNo, mybid, 2)
        			            swal({
        			                title: "취소 완료!",
        			                text: "주문 취소가 정상적으로 처리됬습니다.",
        			                timer: 2250,
        			                showConfirmButton: false,
        			                type: "success"
        			            });
        					}
        				})
        			}
        		})
        		
        	    // 브라우저가 새로고침이나 페이지 이동하려고 할 때 발생
        	    window.onbeforeunload = function(e) {
        	        var dialogText = 'Dialog text here';
        	        e.returnValue = dialogText;
        	        return dialogText;
        	    };
        	}
        })
        setTimeout(getBeforeBidHistory, 1000);
    })();
})