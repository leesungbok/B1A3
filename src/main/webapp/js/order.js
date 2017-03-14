var itemNo = window.sessionStorage.getItem('itemNo');
var mybid = window.sessionStorage.getItem('mybid');
var endTime = new Date(window.sessionStorage.getItem('endTime'));

$(function() {
    if (itemNo == null || mybid == null || endTime == null) {
        swal({
            title: "잘못된 접근!",
            text: "웹브라우저 주소창을 다시한번 확인해주세요.",
            type: "error",
            confirmButtonText: "확인",
            confirmButtonColor: "rgb(244, 46, 109)"
        }, function() {
            location.href = clientRoot + "/main/main.html"
        })
        return;
    }

    getOrderStatus(function(check) {
        if (check != 0) {
            swal({
                title: "시간 초과!",
                text: "제한된 결제 시간이 지났습니다.",
                type: "error",
                confirmButtonText: "확인",
                confirmButtonColor: "rgb(244, 46, 109)"
            }, function() {
                location.href = clientRoot + "/main/main.html"
            })
        } else {
            orderPayment()
        }
    })
})

function getOrderStatus(cb) {
    $.getJSON(serverRoot + '/bidhistory/orderstatus.json',
    {
        "itemNo":itemNo,
        "bids":mybid
    }, function(ajaxResult) {
        cb(ajaxResult.data);
    })
};

function orderPayment() {
    // common.js 시작
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8&appId=1794128977577774";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
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
            
    });
        $('#searchMember').keypress(function(event){
            if(event.keyCode == 13){
                console.log('gkgjk');
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
            todayHighlight: true
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
    });// common.js 끝

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
        
        if (member.postNo == null) {
            $('#necessary3, #address-conf').css('display', 'inline-block');
        }
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
    endTime.setMonth(endTime.getMonth() + 1)
    $('#nb-countdown').attr('data-countdown',
            endTime.getFullYear() + "-" + endTime.getMonth() + "-" + endTime.getDate() + " " + 
            endTime.getHours() + ":" + endTime.getMinutes() + ":" + endTime.getSeconds());
    
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('%H:%M:%S'));
        }).on('finish.countdown', function() {
            swal({
                title: "시간 초과!",
                text: "제한된 결제 시간이 지났습니다.",
                type: "error",
                confirmButtonText: "확인",
                confirmButtonColor: "rgb(244, 46, 109)"
            }, function() {
                window.onbeforeunload = function(){};
                location.href = clientRoot + "/main/main.html"
            })
        });
    });
    
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
                $('#necessary3, #address-conf').css('display', 'none');
            }
        }).open();
        event.preventDefault();
    })

    $('.payment-btn').click(function() {
        // 아임포트
        IMP.init('imp49837973');
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
                $.post(serverRoot + "/bidhistory/updatestate.json",
                {
                    "itemNo": itemNo,
                    "bids": mybid,
                    "state": 1
                }, function(ajaxResult) {
                    if (ajaxResult.status != "success") {
                        console.log(ajaxResult.status)
                        alert(ajaxResult.data)
                        return;
                    }
                    swal({
                        title: "결제 완료!",
                        text: "결제가 완료되었습니다.",
                        type: "success",
                        confirmButtonText: "확인",
                        confirmButtonColor: "rgb(244, 46, 109)"
                    }, function() {
                        window.onbeforeunload = function(){};
                        location.href = clientRoot + "/mypage/mybid.html?submenu=mybid"
                    })
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

    var receiver
    var re1 = /^[가-힣]{2,}$/; //이름 유효성 검사 2자 이상
    
    $("#receiver").keyup(function() {
        receiver = $('#receiver').val();
        if (receiver == '') {
            $('#necessary1, #receiver-conf').css('display', 'inline-block');
            $('#errorReceiver').css('display', 'none');
        } else if (!re1.test(receiver)) {
            $('#errorReceiver, #receiver-conf').css('display', 'inline-block');
            $('#necessary1').css('display', 'none');
        } else {
            $('#necessary1, #errorReceiver, #receiver-conf').css('display', 'none');
        }
    })
    
    /* 휴대폰 유효성 검사 */
    var re2 = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    var phoneNo
    
    $("#phoneNo").keyup(function() {
        phoneNo = $("#phoneNo").val();
        if (phoneNo == '') {
            $('#necessary2, #phoneNo-conf').css('display', 'inline-block');
            $('#errorphoneNo').css('display', 'none');
        } else if (!re2.test(phoneNo)) {
            $('#errorphoneNo, #phoneNo-conf').css('display', 'inline-block');
            $('#necessary2').css('display', 'none');
        } else {
            $('#necessary2, #errorphoneNo, #phoneNo-conf').css('display', 'none');
        }
    })
    
    setInterval(function() {
        if (window.innerHeight <= 757) {
            $('.container').css('margin-top', '0');
        } else {
            $('.container').css('margin-top', (window.innerHeight-757)/2 + 'px');
        }
        
        if ($('.container').css('display') != 'block') {
            $('.container').css('display', 'block');
        }
        
        if ($('#receiver-conf').css('display') == 'none' && $('#phoneNo-conf').css('display') == 'none'
            && $('#address-conf').css('display') == 'none') {
            $('.payment-btn').css('pointer-events', 'auto');
            $('.payment-btn').css('opacity', '1');
        } else {
            $('.payment-btn').css('pointer-events', 'none');
            $('.payment-btn').css('opacity', '.65');
        }
    }, 100);
    
    // 브라우저가 새로고침이나 페이지 이동하려고 할 때 발생
    window.onbeforeunload = function(e) {
        var dialogText = 'Dialog text here';
        e.returnValue = dialogText;
        return dialogText;
    };
    
    sessionStorage.clear();
}