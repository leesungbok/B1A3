(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8&appId=1794128977577774";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(function () {
    // header.html을 가져와서 붙인다.
    $.get('../header.html', function (result) {
    	$('#header').html(result);
    	
    	$('#contbox').draggable();
    	
    	// 닉네임 찾기
	    $('.search-btn').click(function() {
	    	var searchMember = $('#searchMember').val();
	    	console.log(searchMember);
	    	var param = {
	    			nickName : searchMember
	    	}
	    	console.log(param);
	    	$.get(serverRoot + '/member/searchMember.json', param , function(ajaxResult) {
	    		if (ajaxResult.status == "fail") {
	    			alert(ajaxResult.data);
	    			return;
	    		}
	    		$('#clean').remove("div");
	    		
	    		var list = ajaxResult.data;
	    		var parent = $('#nicklist');
	    		console.log(list);
	    		parent.children().remove();
	    		var template = Handlebars.compile($('#templatelist').html());
		    	for(var i = 0; i <list.length; i++){
		    		parent.append(template(list[i]));
		    		parent.children().last().attr('data-mno',list[i].memberNo)
		    	}
			    $('.member').click(function() {
			    	parent.children().remove();
			    	var template = Handlebars.compile($('#text-box').html());
			    	parent.append(template());
			    });
			    	
        });
	    
//	    $('#searchMember').keypress(function(event){
//            if(event.keyCode == 13){
//                location.href= clientRoot + '/member/searchMember.html?nickName=' + $('#searchMember').val();
//            }
//        });
	});
	    
    	$('#main-title').click(function(){
    	    location.href = clientRoot + '/main/main.html';
    	})
    	
        $.getJSON('../auth/loginUser.json', function(ajaxResult) {
            var member = ajaxResult.data;

    		if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
                $('.navbar-menu, #addbid-btn, .bidding-btn, #detail-bid').click(function() {
                    console.log(3120)
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
        	location.href= clientRoot + '/search/search.html?title=' + $('#searchTitle').val();
        });
        
        $('#searchTitle').keypress(function(event){
            if(event.keyCode == 13){
                location.href= clientRoot + '/search/search.html?title=' + $('#searchTitle').val();
            }
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
 
    	var submenu = location.search.split("?")[1].split("=")[1];
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
	    
	    $("#"+submenu).parent().addClass('active');
	     
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
                    "content": $('#cont').val().replace(/\n/g, "<br>"),
                    "deal": $('#deal').val(),
                    "photoList": filePath
                    }
                , function(ajaxResult) {
                    if (ajaxResult.status != "success") {
                        alert(ajaxResult.data);
                        return;
                    }
                    var detailNo = ajaxResult.data;
                    swal({
                        title: "등록 완료!",
                        text: "등록하신 경매품을 확인하세요.",
                        timer: 2250,
                        showConfirmButton: false,
                        type: "success"
                    });
                    setTimeout(function(){location.href= clientRoot +  '/info/info.html?itemNo=' + detailNo} , 2250);
                }, 'json'); // post();
            }); // click()
        }
        
        $('.add-input > input, .glyphicon > input').popover({
            container: 'body'
        });
    });

    // 전 경매의 입찰기록 가져오기
    (function getBeforeBidHistory() {
        $.getJSON(serverRoot + '/bidhistory/beforebidhistory.json', function(ajaxResult){
            if (ajaxResult.status != 'success') {
                return;
            }
            
            var bdhs = ajaxResult.data.bdhs;
            var endTime = new Date(bdhs[0].startTime);
            endTime.setMinutes(endTime.getMinutes() + 30);
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
            
            if (count < bdhs.length && $('.sweet-overlay').css('display') != 'block') {
                // 새로고침이나 페이지 이동하려고 할 때 Alert 띄우기
                window.onbeforeunload = function(e) {
                    var dialogText = 'Dialog text here';
                    e.returnValue = dialogText;
                    return dialogText;
                };
                notiWinning(bdhs, mybid, endTime, index);
            }
        })
        setTimeout(getBeforeBidHistory, 1000);
    })();

    function notiWinning(bdhs, mybid, endTime, index) {
        swal({
            title: "낙찰을 축하드립니다!",
            text: "<주의사항>\n" + endTime.getHours() + "시" + endTime.getMinutes() + "분" 
            + " 전까지 미결제시 자동으로 주문취소가 되고\n패널티가 부여됩니다.",
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
                saveSession(bdhs, mybid, endTime);
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
                        saveSession(bdhs, mybid, endTime);
                    } else {
                        if (index < bdhs.length-1) {
                            endTime.setMinutes(endTime.getMinutes() + 5);
                            notiWinningSMS(bdhs[index+1], endTime)
                        }
                        bdhsUpdate(bdhs[0].itemNo, mybid, 2)
                        swal({
                            title: "취소 완료!",
                            text: "주문 취소가 정상적으로 처리됬습니다.",
                            timer: 2250,
                            showConfirmButton: false,
                            type: "success"
                        });
                        window.onbeforeunload = function(){};
                    }
                })
            }
        })
    }

    function saveSession(bdhs, mybid, endTime) {
        window.onbeforeunload = function(){};
        sessionStorage.setItem('itemNo', bdhs[0].itemNo);
        sessionStorage.setItem('mybid', mybid);
        sessionStorage.setItem('endTime', endTime);
        location.href = clientRoot + "/order/order.html";
    }

    function notiWinningSMS(bdhs, endTime) {
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
})

