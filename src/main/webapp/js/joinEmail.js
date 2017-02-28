$(function() {
    var kakaoName = sessionStorage.getItem('kakao-name')
    var kakaoId = sessionStorage.getItem('kakao-id')
    var fcbkName = sessionStorage.getItem('fcbk-name');
    var fcbkId = sessionStorage.getItem('fcbk-id');
    
    if (kakaoName != null) {
        $("#nickName").val(kakaoName);
    }  else if (fcbkName != null) {
        $("#nickName").val(fcbkName);
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
            
    /* 이메일 유효성검사 */
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    $("#email").keyup(function() {
        var email = $("#email").val();
        if (email == '') {
            $('#necessary').css('display', 'block');
            $('#erroremail').css('display', 'none');
            $('#erroremail2').css('display', 'none');
            $('#email-ok').css('display', 'none');
        } else if (!re.test(email)) {
            $('#necessary').css('display', 'none');
            $('#erroremail').css('display', 'block');
            $('#erroremail2').css('display', 'none');
            $('#email-ok').css('display', 'none');
        } else {
            $.getJSON(serverRoot + '/auth/count.json', {type: "email", data: email}, function (ajaxResult) {
                if (ajaxResult.status != "success") {
                    return;
                } else if (ajaxResult.data == 0){
                    $('#necessary').css('display', 'none');
                    $('#erroremail').css('display', 'none');
                    $('#erroremail2').css('display', 'none');
                    $('#email-ok').css('display', 'block');
                } else {
                    $('#necessary').css('display', 'none');
                    $('#erroremail').css('display', 'none');
                    $('#erroremail2').css('display', 'block');
                    $('#email-ok').css('display', 'none');
                }
            })
        }
    })
    
    $("#password").keyup(function() {
        var password = $("#password").val();
        if (password.length == 0) {
            $('#necessary2').css('display', 'block');
            $('#errorpassword').css('display', 'none');
            $('#password-ok').css('display', 'none');
        } else if (password.length < 6 || password.length > 20) {
            $('#necessary2').css('display', 'none');
            $('#errorpassword').css('display', 'block');
            $('#password-ok').css('display', 'none');
        } else {
            $('#necessary2').css('display', 'none');
            $('#errorpassword').css('display', 'none');
            $('#password-ok').css('display', 'block');
        }
    })
    
    $("#password-conf").keyup(function() {
        var passwordConf = $("#password-conf").val();
        if (passwordConf.length == 0) {
            $('#necessary3').css('display', 'block');
            $('#errorpassword-conf').css('display', 'none');
            $('#password-conf-ok').css('display', 'none');
        } else if ($("#password").val() != passwordConf){
            $('#necessary3').css('display', 'none');
            $('#errorpassword-conf').css('display', 'block');
            $('#password-conf-ok').css('display', 'none');
        } else {
            $('#necessary3').css('display', 'none');
            $('#errorpassword-conf').css('display', 'none')
            $('#password-conf-ok').css('display', 'block');
        }
    })
    
    $("#nickName").keyup(function() {
        var nickName = $("#nickName").val();
        if (nickName.length == 0) {
            $('#necessary4').css('display', 'block');
            $('#errornickName').css('display', 'none');
            $('#errornickName2').css('display', 'none');
            $('#nickName-ok').css('display', 'none');
        } else if (nickName.length < 2 || nickName.length > 6) {
            $('#necessary4').css('display', 'none');
            $('#errornickName').css('display', 'block');
            $('#errornickName2').css('display', 'none');
            $('#nickName-ok').css('display', 'none');
        } else {
            $.getJSON(serverRoot + '/auth/count.json', {type: "nickName", data: nickName}, function (ajaxResult) {
                if (ajaxResult.status != "success") {
                    return;
                } else if (ajaxResult.data == 0){
                    $('#necessary4').css('display', 'none');
                    $('#errornickName').css('display', 'none');
                    $('#errornickName2').css('display', 'none');
                    $('#nickName-ok').css('display', 'block');
                } else {
                    $('#necessary4').css('display', 'none');
                    $('#errornickName').css('display', 'none');
                    $('#errornickName2').css('display', 'block');
                    $('#nickName-ok').css('display', 'none');
                }
            })
        }
    })
    
    /* 휴대폰 유효성 검사 */
    var re2 = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    
    $("#phoneNo").keyup(function() {
        var phoneNo = $("#phoneNo").val();
        if (phoneNo == '') {
            $('#necessary5').css('display', 'block');
            $('#errorphoneNo').css('display', 'none');
            $('#errorphoneNo2').css('display', 'none');
            $('#phoneNo-ok').css('display', 'none');
        } else if (!re2.test(phoneNo)) {
            $('#necessary5').css('display', 'none');
            $('#errorphoneNo').css('display', 'block');
            $('#errorphoneNo2').css('display', 'none');
            $('#phoneNo-ok').css('display', 'none');
        } else {
            $.getJSON(serverRoot + '/auth/count.json', {type: "phoneNo", data: phoneNo}, function (ajaxResult) {
                if (ajaxResult.status != "success") {
                    return;
                } else if (ajaxResult.data == 0){
                    $('#necessary5').css('display', 'none');
                    $('#errorphoneNo').css('display', 'none');
                    $('#errorphoneNo2').css('display', 'none');
                    $('#phoneNo-ok').css('display', 'block');
                } else {
                    $('#necessary5').css('display', 'none');
                    $('#errorphoneNo').css('display', 'none');
                    $('#errorphoneNo2').css('display', 'block');
                    $('#phoneNo-ok').css('display', 'none');
                }
            })
        }
    })
    
    $("#email").focusout(function() {
        if ($('#email-ok').css('display') == 'block') {
          $(this).css('border', '1px solid #e62a4a');
        } else {
          $(this).css('border', '1px solid #ccc');
        }
    })

    $("#password").focusout(function() {
        if ($('#password-ok').css('display') == 'block') {
          $(this).css('border', '1px solid #e62a4a');
        } else {
          $(this).css('border', '1px solid #ccc');
        }
    })

    $("#password-conf").focusout(function() {
        if ($('#password-conf-ok').css('display') == 'block') {
          $(this).css('border', '1px solid #e62a4a');
        } else {
          $(this).css('border', '1px solid #ccc');
        }
    })

    $("#nickName").focusout(function() {
        if ($('#nickName-ok').css('display') == 'block') {
          $(this).css('border', '1px solid #e62a4a');
        } else {
          $(this).css('border', '1px solid #ccc');
        }
    })
    
    $("#phoneNo").focusout(function() {
        if ($('#phoneNo-ok').css('display') == 'block') {
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
                title: "가입 완료!",
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
    
    sessionStorage.clear();
})