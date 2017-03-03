var itemNo = window.sessionStorage.getItem('itemNo');
var mybid = window.sessionStorage.getItem('mybid');

if (itemNo == null || mybid == null) {
        swal({
        title: "잘못된 접근!",
        text: "사이트 URL를 다시한번 확인해주세요.",
        type: "error",
        confirmButtonText: "확인",
        confirmButtonColor: "rgb(244, 46, 109)"
    }, function() {
        location.href = clientRoot + "/main/main.html"
    })
}

$(function() {
    $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
        if (ajaxResult.status != "success") {
            alert(ajaxResult.data);
            return;
        }
        var member = ajaxResult.data;
        $('#phoneNo').val(member.phoneNo);
        $('#zip-code').val(member.postNo);
        $('#address').val(member.basicAddress);
        $('#address-detail').val(member.detailAddress);
        $('#email').val(member.email);
    });
    
    $.getJSON(serverRoot + '/main/detail.json', {"itemNo":itemNo}, function(ajaxResult) {
        if (ajaxResult.status != "success") {
            alert(ajaxResult.data);
            return;
        }
        var item = ajaxResult.data;
        $('#seller').text(item.nickName);
        $('#product-img').attr('src', clientRoot + "/upload/" + item.photoList[0].filePath);
        $('#title').text(item.title);
        $('#seller').text(item.nickName);
        $('#seller-phone').text(item.phoneNo);
    });
    
    $('.winning-amount').text(mybid);
    
    $('.addr-find').click(function(event) {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
                
                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullAddr = ''; // 최종 주소 변수
                var extraAddr = ''; // 조합형 주소 변수
                
                // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    fullAddr = data.roadAddress;
                    
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    fullAddr = data.jibunAddress;
                }
                
                // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
                if(data.userSelectedType === 'R'){
                    //법정동명이 있을 경우 추가한다.
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }
                
                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zip-code').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('address').value = fullAddr;
                
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById('address-detail').focus();
            }
        }).open();
        event.preventDefault();
    })
    
    $('.payment-btn').click(function(){
        if ($('#receiver').val() == '' || $('#phoneNo').val() == '' ||
            $('#zip-code').val() == '' || $('#address-detail').val() == '') {
            swal({
                title: "경고!",
                text: "필수 항목 부분은 모두 작성해주세요.",
                type: "warning",
                confirmButtonText: "확인",
                confirmButtonColor: "rgb(244, 46, 109)"
            })
            return;
        }
        // 아임포트
        IMP.init('imp49837973'); // "가맹점 식별코드"를 사용
        IMP.request_pay({
            pg : 'html5_inicis',
            pay_method : 'card',
            merchant_uid : 'merchant_' + new Date().getTime(),
            name : $('#title').text(),
            amount : $('.winning-amount').text(),
            buyer_email : $('#email').val(),
            buyer_name : $('#receiver').val(),
            buyer_tel : $('#phoneNo').val(),
            buyer_addr : $('#address').val(),
            buyer_postcode : $('#zip-code').val()
        }, function(rsp) {
            if ( rsp.success ) {
/*                msg += '고유ID : ' + rsp.imp_uid;
                msg += '상점 거래ID : ' + rsp.merchant_uid;
                msg += '결제 금액 : ' + rsp.paid_amount;
                msg += '카드 승인번호 : ' + rsp.apply_num;*/
                $.post(serverRoot + "/bidhistory/updatestate.json",
                {
                    "itemNo": itemNo,
                    "bids": mybid,
                    "state": 1
                }, function(ajaxResult){
                    
                })
                swal({
                    title: "결제 완료!",
                    text: "결제가 완료되었습니다.",
                    type: "success",
                    confirmButtonText: "확인",
                    confirmButtonColor: "rgb(244, 46, 109)"
                }, function() {
                    location.href = clientRoot + "/main/main.html" // 나의 경매로 이동할것
                })
            } else {
                swal({
                    title: "결제 실패!",
                    text: rsp.error_msg,
                    type: "error",
                    confirmButtonText: "확인",
                    confirmButtonColor: "rgb(244, 46, 109)"
                })
            }
        });
    })
    
    // common.js 시작
    // header.html을 가져와서 붙인다.
    $.get('../header.html', function (result) {
        $('#header').html(result);
        // 
        $.getJSON('../auth/loginUser.json', function(ajaxResult) {
            /*console.log(ajaxResult)*/
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
             location.href= clientRoot +  "/mypage.html?submenu=mypage";
        }); 

        $('#mybidding').click(function (e) {
              e.preventDefault();
             location.href= clientRoot +  "/mybidding.html?submenu=mybidding";
        }); 

        $('#myoption').click(function (e) {
              e.preventDefault();
             location.href= clientRoot +  "/mysettings.html?submenu=myoption";
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
    }); // common.js 끝
})