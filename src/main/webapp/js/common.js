$(function () {
    // header.html을 가져와서 붙인다.
    $.get('../header.html', function (result) {
    	$('#header').html(result);
        // 
        $.getJSON('../auth/loginUser.json', function(ajaxResult) {
        	
        	$('[data-target]').click(function(){ 
        	
	        	if (ajaxResult.status == "fail") {
	        		location.href='../auth/login.html';
	        	}
	        	
        	});
    		if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
    			// 로그온 상태 출력 창을 감춘다.
    			$('#logon-state').css('display', 'none');
    			
    			// 로그인 버튼의 클릭 이벤트 핸들러 등록하기
    			$('#login-btn').click(function(event) {
    				event.preventDefault()
    				location.href = '../auth/login.html'
    			});
    			return;
    		}
    		
    		// 로그인 되었으면, 로그오프 상태 출력 창을 감춘다. 
    		$('#logout-state').css('display', 'none');
    		$('#logon-state span').text(ajaxResult.data.nickName);
    		
    		// 로그아웃 버튼의 클릭 이벤트 핸들러 등록하기
    		$('#logout-btn').click(function(event) {
    			event.preventDefault()
    			$.getJSON('../auth/logout.json', function(ajaxResult) {
    				location.href = '../auth/login.html'
    			});
    		});
    
    	  });

		//경매등록 입력시 팝업창 표시
		$('.form-control').popover();

        // 로그인시 로그인 페이지로 이동
        $('#login-btn').click(function(event) {
            location.href = "../auth/login.html";
            event.preventDefault();
        });
        
        // 회원가입시 회원가입 페이지로 이동
        $('#join-btn').click(function(event) {
            location.href = "../auth/joinEmail.html";
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
        	event.preventDefault();
        	location.href='../search/search.html';
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
	    	 location.href= "mypage.html?submenu=mypage";
	    }); 

	    $('#mybidding').click(function (e) {
	    	  e.preventDefault();
	    	 location.href= "mybidding.html?submenu=mybidding";
	    }); 

	    $('#myoption').click(function (e) {
	    	  e.preventDefault();
	    	 location.href= "mysettings.html?submenu=myoption";
	    }); 
	    
	    $("#"+submenu).parent().addClass('active');
	     
    })
})