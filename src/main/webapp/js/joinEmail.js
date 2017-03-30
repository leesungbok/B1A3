$(function() {
    setTimeout(function() { $('#email').focus() }, 200);
    
    /* 이메일 유효성검사 */
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    /*var kakaoName = sessionStorage.getItem('kakao-name')*/
    var kakaoName = '신짱구';
    var kakaoId = sessionStorage.getItem('kakao-id')
    var fcbkName = sessionStorage.getItem('fcbk-name');
    var fcbkId = sessionStorage.getItem('fcbk-id');
    var email = sessionStorage.getItem('email');
    
    if (email != null) {
    $("#email").val(email);
    if (!re.test(email)) {
        $('#erroremail').text('올바른 이메일 형식이 아닙니다.');
    } else {
        $.getJSON(nodeRoot + '/emailcheck?email=' + email, function (ajaxResult) {
            if (ajaxResult.count == 0) {
                $('#email-ok').css('display', 'block');
                setTimeout(function() { $('#password').focus() }, 201);
            } else {
                $('#erroremail').text('이미 가입된 이메일입니다.');
            }
        })
    }
    }
    
    if (kakaoName != null) {
        $("#nickName").val(kakaoName);
        nicknameCheck(kakaoName);
    }  else if (fcbkName != null) {
        $("#nickName").val(fcbkName);
        nicknameCheck(fcbkName);
    }
    
    // 닉네임 검사
    function nicknameCheck(nickName) {
        if (nickName.length == 0) {
            $('#errornickName').text('필수 입력란입니다.');
        } else if (nickName.length < 2 || nickName.length > 6) {
            $('#errornickName').text('한글,영문,숫자 포함 최소2자, 최대6자까지 가능합니다.');
        } else {
            $.getJSON(nodeRoot + '/nknmcheck?nknm=' + nickName, function (ajaxResult) {
                if (ajaxResult.count == 0){
                    $('#nickName-ok').css('display', 'block');
                    $('#nickName').css('border', '1px solid #e62a4a');
                } else {
                    $('#errornickName').text('이미 사용중인 닉네임입니다.');
                }
            })
        }
    }
    
    if (kakaoId != null) {
        $('<input>').attr({
            type: 'hidden',
            id: 'kakao-id',
            value: sessionStorage.getItem('kakao-id')
        }).appendTo(".form-horizontal");
    }
    
    if (fcbkId != null) {
        $('<input>').attr({
            type: 'hidden',
            id: 'fcbk-id',
            value: sessionStorage.getItem('fcbk-id')
        }).appendTo(".form-horizontal");
    }
            
    
    var email
    $("#email").keyup(function() {
        email = $(this).val();
        if (email == '') {
            $('#erroremail').text('필수 입력란입니다.');
            $('#email-ok').css('display', 'none');
        } else if (!re.test(email)) {
            $('#erroremail').text('올바른 이메일 형식이 아닙니다.');
            $('#email-ok').css('display', 'none');
        } else {
            $.getJSON(nodeRoot + '/emailcheck?email=' + email, function (ajaxResult) {
                if (ajaxResult.count == 0) {
                    $('#erroremail').text('');
                    $('#email-ok').css('display', 'block');
                } else {
                    $('#erroremail').text('이미 가입된 이메일입니다.');
                    $('#email-ok').css('display', 'none');
                }
            })
        }
    })
    
    var password
    $("#password").keyup(function() {
        password = $(this).val();
        if (password.length == 0) {
            $('#errorpassword').text('필수 입력란입니다.');
            $('#password-ok').css('display', 'none');
        } else if (password.length < 6 || password.length > 20) {
            $('#errorpassword').text('영문,숫자 포함 최소6자, 최대 20자까지 가능합니다.');
            $('#password-ok').css('display', 'none');
        } else {
            $('#errorpassword').text('');
            $('#password-ok').css('display', 'block');
        }
    })
    
    var passwordConf
    $("#password-conf").keyup(function() {
        passwordConf = $(this).val();
        if (passwordConf.length == 0) {
            $('#errorpassword-conf').text('필수 입력란입니다.');
            $('#password-conf-ok').css('display', 'none');
        } else if ($("#password").val() != passwordConf){
            $('#errorpassword-conf').text('입력하신 비밀번호와 일치하지 않습니다.');
            $('#password-conf-ok').css('display', 'none');
        } else {
            $('#errorpassword-conf').css('display', 'none')
            $('#password-conf-ok').css('display', 'block');
        }
    })
    
    var nickName
    $("#nickName").keyup(function() {
        nickName = $(this).val();
        if (nickName.length == 0) {
            $('#errornickName').text('필수 입력란입니다.');
            $('#nickName-ok').css('display', 'none');
        } else if (nickName.length < 2 || nickName.length > 6) {
            $('#errornickName').text('한글,영문,숫자 포함 최소2자, 최대6자까지 가능합니다.');
            $('#nickName-ok').css('display', 'none');
        } else {
            $.getJSON(nodeRoot + '/nknmcheck?nknm=' + nickName, function (ajaxResult) {
                if (ajaxResult.count == 0){
                    $('#errornickName').text('');
                    $('#nickName-ok').css('display', 'block');
                } else {
                    $('#errornickName').text('이미 사용중인 닉네임입니다.');
                    $('#nickName-ok').css('display', 'none');
                }
            })
        }
    })
    
    /* 휴대폰 유효성 검사 */
    var re2 = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    var phoneNo
    $("#phoneNo").keyup(function() {
        phoneNo = $(this).val();
        if (phoneNo == '') {
            $('#errorphoneNo').text('필수 입력란입니다.');
            $('#phoneNo-ok').css('display', 'none');
        } else if (!re2.test(phoneNo)) {
            $('#errorphoneNo').text('올바른 휴대전화 형식이 아닙니다.');
            $('#phoneNo-ok').css('display', 'none');
        } else {
            $.getJSON(nodeRoot + '/phonecheck?phon=' + phoneNo, function (ajaxResult) {
                if (ajaxResult.count == 0){
                    $('#errorphoneNo').text('');
                    $('#phoneNo-ok').css('display', 'block');
                } else {
                    $('#errorphoneNo').text('이미 사용중인 휴대전화입니다.');
                    $('#phoneNo-ok').css('display', 'none');
                }
            })
        }
    })
    
    $('.has-feedback input').focusout(function() {
        if ($(this).next().css('display') == 'block') {
          $(this).css('border', '1px solid #e62a4a');
        } else {
          $(this).css('border', '1px solid #ccc');
        }
    })
    
    /* 가입완료 버튼클릭 */
    $('#add-btn').click(function (event) {
        var param = {
            "email" : $('#email').val(),
            "password" : $('#password').val(),
            "nickName" : $('#nickName').val(),
            "phoneNo" : $('#phoneNo').val(),
            "photoPath" : 'user.png'
        };
        
        if ($('#kakao-id').val() != null) {
            param.kakaoTalk = $('#kakao-id').val();
        }
        
        if ($('#fcbk-id').val() != null) {
            param.facebook = $('#fcbk-id').val();
        }
        
        $.post(serverRoot + '/auth/add.json', param, function (ajaxResult) {
            if (ajaxResult.status != "success") {
                alert(ajaxResult.data);
                return;
            }
            swal({
                title: "환영합니다!",
                text: "가입하신 이메일로 로그인 하세요.",
                timer: 2250,
                showConfirmButton: false,
                type: "success"
            });
            setTimeout(function(){location.href = clientRoot + '/auth/login.html'} , 2250);
        }, 'json')
        
        event.preventDefault();
    })
    
    setInterval(function() {
        $('#add-btn').css('pointer-events', 'none');
        $('#add-btn').css('opacity', '.65');
        
        if ($('#email-ok').css('display') != 'block') {
            return;
        } else if ($('#password-ok').css('display') != 'block') {
            return;
        } else if ($('#password-conf-ok').css('display') != 'block') {
            return;
        } else if ($('#nickName-ok').css('display') != 'block') {
            return;
        } else if ($('#phoneNo-ok').css('display') != 'block') {
            return;
        } else {
            $('#add-btn').css('pointer-events', 'auto');
            $('#add-btn').css('opacity', '1');
        }
    }, 100);
    
    setInterval(function() {
        if (window.innerHeight <= 707) {
            $('.container').css('margin-top', '0');
        } else {
            $('.container').css('margin-top', (window.innerHeight-706)/2 + 'px');
        }
        
        if ($('.container').css('display') != 'block') {
            $('.container').css('display', 'block');
        }
    }, 100);
    
    sessionStorage.clear();
})