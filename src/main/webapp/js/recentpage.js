
$(function() {
		$.getJSON(serverRoot + '/mypage/recentList.json', function(ajaxResult) {
			var status = ajaxResult.status;
			if (status != "success")
				return;
			
			var recentList = ajaxResult.data;
			var parent = $('#recentList');
			var template = Handlebars.compile($('#trTemplate').html());
			var div
			for(var i = 0; i < recentList.length; i++){
				if(i % 3 == 0) {
					div = $("<div>").addClass('row')
					parent.append(div);
				}
				div.append(template(recentList[i]));
			}
			
		$('.tasha').click(function() {
    		var itemNo = $(this).attr('data-itemno');
			  $.getJSON(serverRoot + '/mypage/recentDelete.json?likeNo=' + itemNo, function(ajaxResult) {
			    if (ajaxResult.status != "success") { 
  				  alert(ajaxResult.data);
					return;
				}
				location.href = 'recentpage.html';
			}); // getJSON()
		}); // click()
		$('.searcha').click(function() {
			var itemNo = $(this).attr('data-itemNo');
			location.href = clientRoot + '/info/info.html?itemNo=' + itemNo;
		}); // click()
	});
});
//});