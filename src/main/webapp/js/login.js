
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
    console.log('statusChangeCallback'); 
    console.log(response);
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
	  /*location.href='../main/main.html';*/
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }