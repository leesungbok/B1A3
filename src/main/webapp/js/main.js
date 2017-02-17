$('#add-btn').click(function() {
    	var param = {
    		"title": $('#titl').val(),
    		"category": $('#categ').val(),
    		"buyDate": $('#buy').val(),
    		"useDay": $('#day').val(),
    		"deal": $('#deal').val(),
    		"content": $('#cont').val(),
    		"startTime": $('#time').val(),
    		"startPrice": $('#stpc').val()
	    };
    	console.log(param);
	    $.post('add.json', param, function(ajaxResult) {
	        if (ajaxResult.status != "success") {
	          alert(ajaxResult.data);
	          return;
	        }
	        alert(ajaxResult.data);
	        location.href = 'main.html';
	    }, 'json'); // post();
	    
	}); // click()

