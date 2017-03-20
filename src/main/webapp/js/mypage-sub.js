$.get('../submenu.html', function (result) {
	$('#submenu').html(result);

	var submenu = location.search.split("?")[1].split("=")[1];
    $('#mypage').click(function (e) {
    	  e.preventDefault();
    	 location.href= clientRoot +  "/mypage/mypage.html?submenu=mypage";
    }); 

    $('#mybid').click(function (e) {
    	  e.preventDefault();
    	 location.href= clientRoot +  "/mypage/mybid.html?submenu=mybid";
    }); 

    $('#myoption').click(function (e) {
    	  e.preventDefault();
    	 location.href= clientRoot +  "/mypage/mysettings.html?submenu=myoption";
    }); 
    
    $("#"+submenu).parent().addClass('active');
})