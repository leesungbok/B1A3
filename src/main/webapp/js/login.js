$(function() {
    setTimeout(function() { $('#email').focus() }, 200);
    
    // 카카오톡 로그인
    $('.btn_kakao').click(function() {
        Kakao.Auth.login({
            success: function(authObj) {
                Kakao.API.request({
                    url: '/v1/user/me',
                    success: function(res) {
                        $.getJSON(serverRoot + '/auth/loginsns.json', {type: "kakao", snsId: res.id}, function (ajaxResult) {
                            if (ajaxResult.status == "success") {
                                location.href = clientRoot + "/main/main.html";
                            } else {
                                window.sessionStorage.setItem('kakao-id', res.id);
                                window.sessionStorage.setItem('kakao-name', res.properties.nickname);
                                window.sessionStorage.setItem('email', res.kaccount_email);
                                location.href = clientRoot + "/auth/joinEmail.html";
                            }
                        })
                    },
                    fail: function(error) {
                        alert(JSON.stringify(error));
                    }
                });
            },
            fail: function(err) {
              alert(JSON.stringify(err));
            }
        });
    })
    
    // 페이스북 로그인
    $('.btn_facebook').click(function() {
        FB.login(function(response) {
            if (response.authResponse) {
                //console.log(response); // dump complete info
                access_token = response.authResponse.accessToken; //get access token
                user_id = response.authResponse.userID; //get FB UID
                
                FB.api('/me', function(res) {
                    $.getJSON(serverRoot + '/auth/loginsns.json', {type: "fcbk", snsId: res.id}, function (ajaxResult) {
                        if (ajaxResult.status == "success") {
                            location.href = clientRoot +  "/main/main.html";
                        } else {
                            window.sessionStorage.setItem('fcbk-id', res.id);
                            window.sessionStorage.setItem('fcbk-name', res.name);
                            window.sessionStorage.setItem('email', res.email);
                            location.href= clientRoot + '/auth/joinEmail.html';
                        }
                    })
                });
            }
        }, {
        	scope: 'public_profile,email',
            return_scopes: true
        });
    })
    
    $('#login-btn').click(function(event) {
        login();
    });

    $('#password').keypress(function(event){
        if(event.keyCode == 13){
            login();
        }
    });

    $('#email').val(getCookie('email').replace(/"/g, ''));
    
    setInterval(function() {
        if (window.innerHeight <= 759) {
            $('.container').css('margin-top', '0');
        } else {
        	$('.container').css('margin-top', (window.innerHeight-759)/2 + 'px');
        }
        
        if ($('.container').css('display') != 'block') {
            $('.container').css('display', 'block');
        }
    }, 100);

    function login() {
        if ($('#save-email').is(':checked')) {
            setCookie('email', $('#email').val(), 30);
        } else {
            setCookie('email', '', 0);
        }
        
        var param = {
            email: $('#email').val(),
            password: $('#password').val()
        };
        
        $.post('login.json', param, function(ajaxResult) {
            if (ajaxResult.status == "success") {
                location.href = clientRoot + "/main/main.html";
                return;
            }
            alert(ajaxResult.data);
        }, 'json');
    }
})