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
			$.getJSON('../auth/loginUser.json', function(ajaxResult) {
			var me = ajaxResult.data;
	    	var searchMember = $('#searchMember').val();
	    	var param = {
	    			nickName : searchMember
	    	}
	    	$.get(serverRoot + '/member/searchMember.json', param , function(ajaxResult) {
	    		if (ajaxResult.status == "fail") {
	    			alert(ajaxResult.data);
	    			return;
	    		}
	    		$('#clean').remove("div");
	    		
	    		// 대화내용 지우기
	    		$('.chat').children().remove(); 
	    		
	    		var list = ajaxResult.data;
	    		var parent = $('#nicklist');
	    		parent.children().remove();
	    		var template = Handlebars.compile($('#templatelist').html());
		    	for(var i = 0; i <list.length; i++){
		    		if (list[i].memberNo != me.memberNo) {
		    			parent.append(template(list[i]));
		    			parent.children().last().attr('data-mno',list[i].memberNo)
		    		}
		    	}
			    $('.member').click(function() {
			    	parent.children().remove();
			    	var template = Handlebars.compile($('#text-box').html());
			    	parent.append(template());
			    	
		    	    "use strict";
		    	    //채팅방
		    	    var find_friends = $('.chat');
		    	    //데이터 입력
		    	    var input = $('#textarea');
		    	    
		    	    // 유저 이름
		    	    myName = me.nickName;
		    	    
		    	    var myName;
		    	    window.WebSocket = window.WebSocket || window.MozWebSocket;
		    	    if (!window.WebSocket) {
		    	        find_friends.html($('<p>', { text: 'Sorry, but your browser doesn\'t '
		    	                                    + 'support WebSockets.'} ));
		    	        input.hide();
		    	        $('span').hide();
		    	        return;
		    	    }
		    	    
		    	    // 연결할 주소와 포트
		    	    var connection = new WebSocket('ws://127.0.0.1:1337');
		    	    connection.onopen = function () {
		    	    	
		    	    };
		    	    connection.onerror = function (error) {
		    	        find_friends.html($('<p>', { text: 'Sorry, but there\'s some problem with your '
		    	                                    + 'connection or the server is down.' } ));
		    	    };
		    	    // 메세지 입력
		    	    connection.onmessage = function (message) {
		    	        try {
		    	            var json = JSON.parse(message.data);
		    	        } catch (e) {
		    	            console.log('This doesn\'t look like a valid JSON: ', message.data);
		    	            return;
		    	        }  
		    	        if (json.type === 'history') { 
		    	            for (var i=0; i < json.data.length; i++) {
		    	                addMessage(json.data[i].author, json.data[i].text,
		    	                          new Date(json.data[i].time));
		    	            }
		    	        } else if (json.type === 'message') { 
		    	            addMessage(json.data.author, json.data.text,
		    	                       new Date(json.data.time));
		    	        } else {
		    	            console.log('Hmm..., I\'ve never seen JSON like this: ', json);
		    	        }
		    	    };
		    	    
		    	    // 입력 된 값 보내기
		    	    input.keydown(function(e) {
		    	        if (e.keyCode === 13) {
		    	            var msg = $(this).val();
		    	            if (!msg) {
		    	                return;
		    	            }
		    	            var obj = {
		    	            		myName : myName,
		    	            		msg : msg
		    	            }
		    	            connection.send(JSON.stringify(obj));
		    	            //메세지 초기화
		    	            $(this).val('');
		    	        }
		    	    });
		    	    
		    	    setInterval(function() {
		    	        if (connection.readyState !== 1) {
		    	            status.text('Error');
		    	            input.attr('disabled', 'disabled').val('Unable to comminucate '
		    	                                                 + 'with the WebSocket server.');
		    	        }
		    	    }, 3000);
		    	    
		    	    //메세지 가 있을시 채팅방에 추가
		    	    function addMessage(author, message, dt) {
		    	    	if (author == myName) {
		    	    		find_friends.append('<p class="chatByme"><span>' + author + '</span> @ ' +
				    	             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
				    	             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
				    	             + ': ' + message + '</p>');
		    	    	} else {
		    	    		find_friends.append('<p><span>' + author + '</span> @ ' +
				    	             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
				    	             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
				    	             + ': ' + message + '</p>');
		    	    	}
		    	    	$('.chat').scrollTop($('.chat').prop('scrollHeight'));
		    	    }
		    	    // 소켓 연결 및 메세지 보내기
			    
			    }); 
			    
	    	}); 	
        });
	    	
	});
	    $('#searchMember').keypress(function(event){
	    	if(event.keyCode == 13){
	    		$('.search-btn').click();
	    		}
	    	
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
            $('.navbar-toggler').click()
            	event.preventDefault();
        });
        
        $('.communicate-close-btn').click(function(event) {
            $('.communicate').css('display', 'none');
        });
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
                $('.file-input>.btn-file').remove();
                errorCheck();
            })/*.on('filesuccessremove', function(event, id, data, previewId, index) {
        });*/
            
            // 경매등록 버튼클릭시
            $('#add-btn').click(function() {
                var type
                $.getJSON(serverRoot + "/main/nowbid.json", function(ajaxResult) {
                    // 현재경매가 없을시
                    if (ajaxResult.status != 'success') {
                        type = 0;
                    } else {
                        type = 1;
                    }
                    
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
                        "photoList": filePath,
                        "type": type
                    }, function(ajaxResult) {
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
                });
            }); // click()
        }
        
        // 경매등록 널체크 및 유효성 검사
        var addValue, $this, span
        $('.add-input>input').keyup(function() {
            addValue = $(this).val();
            $span = $('#'+this.id+'+span');
            $span.css('color', '#f32e6d');
            if (addValue == '') {
                $span.text('필수 입력 항목입니다.');
                errorCheck();
                return;
            }
            switch(this.id) {
            case 'titl':
                if (6 > addValue.length || addValue.length > 15) {
                    $span.text('최소 6자, 최대 15자 까지 가능합니다.');
                } else {
                    $span.text('');
                }
                break;
            case 'stpc':
                if (1000 > addValue || addValue > 1000000) {
                    $span.text('1000원 이상 100만원 이하 가능합니다.');
                } else {
                    $span.text('');
                }
                break;
            case 'day':
                if (addValue > 1000) {
                    $span.text('최대 1000일까지 가능합니다.');
                } else {
                    $span.text('');
                }
                break;
            }
            errorCheck();
        })
        
        // 구입시기
        $('#buy').datepicker({
            language: "kr",
            autoclose: true,
            format: "yyyy-mm-dd",
            endDate: '+0d',
            todayHighlight: true,
            orientation: "bottom auto"
        }).on('hide', function() {
            if ($(this).val() == '') {
                $('#'+this.id+'+span').css('color', '#f32e6d');
                $('#'+this.id+'+span').text('필수 입력 항목입니다.');
            } else {
                $('#'+this.id+'+span').text('');
                errorCheck();
            }
        });
        
        // 상세설명
        $('#cont').keyup(function() {
            var content = $(this).val();
            /*$(this).height(((content.split('\n').length + 1) * 1.5) + 'em');*/
            $('#counter').html(content.length + '/500');
        })
        $('#cont').keyup();
        
        // 등록버튼 클릭가능 여부설정
        function errorCheck() {
            $('.add-error-text').each(function () {
                if ($(this).text() != '' || $('.file-path').val() == undefined) {
                    $('#add-btn').css('pointer-events', 'none');
                    $('#add-btn').css('opacity', '.65');
                    return false;
                } else {
                    $('#add-btn').css('pointer-events', 'auto');
                    $('#add-btn').css('opacity', '1');
                }
            })
        }
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

