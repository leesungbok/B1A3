$(function() {
	$.getJSON(serverRoot + '/mypage/mybidlist.json', function(ajaxResult) {
		var status = ajaxResult.status;
		if (status != "success")
			return;
		
		var list = ajaxResult.data;
		console.log(list);
		var parent = $('#nextlist');
		var template = Handlebars.compile($('#trTemplate').html());
		var div
		for(var i = 0; i < list.length; i++){
			if(i % 2 == 0) {
				div = $("<div>").addClass('row')
				parent.append(div);
			}
			div.append(template(list[i]));
		}
	});
	
	$.get('../submenu.html', function (result) {
    	$('#submenu').html(result);
 
    	var submenu = location.search.split("?")[1].split("=")[1];
	    $('#mypage').click(function (e) {
	    	  e.preventDefault();
	    	 location.href= clientRoot +  "/mypage/mypage.html?submenu=mypage";
	    }); 

	    $('#mybidding').click(function (e) {
	    	  e.preventDefault();
	    	 location.href= clientRoot +  "/mypage/mybid.html?submenu=mybid";
	    }); 

	    $('#myoption').click(function (e) {
	    	  e.preventDefault();
	    	 location.href= clientRoot +  "/mypage/mysettings.html?submenu=myoption";
	    }); 
	    
	    $("#"+submenu).parent().addClass('active');
	     
    })
	
});
