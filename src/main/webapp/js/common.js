$(function () {
    // header.html을 가져와서 붙인다.
    $.get('../header.html', function (result) {
        $('#header').html(result);
        
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
	    	 location.href= "myoption.html?submenu=myoption";
	    }); 
	    
	    $("#"+submenu).parent().addClass('active');
	     
    })
    
    
})