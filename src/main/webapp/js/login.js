window.fbAsyncInit = function() {
	FB.init({
		appId      : '1794128977577774',
		cookie     : false,  
		xfbml      : false,
		version    : 'v2.8' 
	});
	
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
	
};

function statusChangeCallback(response) {
    /*console.log('statusChangeCallback'); 
    console.log(response);*/
    // response 객체는 현재 로그인 상태를 나타내는 정보를 보여준다. 
    // 앱에서 현재의 로그인 상태에 따라 동작하면 된다. 
    // FB.getLoginStatus().의 레퍼런스에서 더 자세한 내용이 참조 가능하다.
    if (response.status === 'connected') {
      testAPI();
    }
}

//이 함수는 누군가가 로그인 버튼에 대한 처리가 끝났을 때 호출된다. 
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

// 로그인 성공시 호출
function testAPI() {
  /*console.log('Welcome!  Fetching your information.... ');*/
  FB.api('/me', function(res) {
      $.getJSON(serverRoot + '/auth/loginsns.json', {type: "fcbk", snsId: res.id}, function (ajaxResult) {
          if (ajaxResult.status == "success") {
              location.href = clientRoot +  "/main/main.html";
          } else {
        	  window.sessionStorage.setItem('fcbk-id', res.id);
              window.sessionStorage.setItem('fcbk-name', res.name);
          	location.href= clientRoot + '/auth/joinEmail.html';
          }
      })
      
  });
}

function fb_login(){
    FB.login(function(response) {
        if (response.authResponse) {
            //console.log(response); // dump complete info
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID
            testAPI();
        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'email'
    });
}

// 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('0a61605788e65e255f0aa83ab716c2a2');
  function loginWithKakao() {
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
};

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
        	console.log(response);
            if (response.authResponse) {
                //console.log(response); // dump complete info
                access_token = response.authResponse.accessToken; //get access token
                user_id = response.authResponse.userID; //get FB UID
                
                FB.api('/me',
                		 {
                		fields: "id,email,name"
                		 },
                		 function(res) {
                	console.log(res);
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