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
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
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
    $('#login-btn').click(function() {
        
        if ($('#save-email').is(':checked')) {
            setCookie('email', $('#email').val(), 30);
        } else {
            setCookie('email', '', 0);
        }
        
        var param = {
                email: $('#email').val(),
                password: $('#password').val(),
        };
        
        $.post('login.json', param, function(ajaxResult) {
            if (ajaxResult.status == "success") {
                location.href = clientRoot + "/main/main.html";    
                return;
            }
            alert(ajaxResult.data);   
        }, 'json');
    });
    
    $('#email').val(getCookie('email').replace(/"/g, ''));
})