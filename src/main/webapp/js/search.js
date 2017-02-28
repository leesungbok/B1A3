$('#search').click(function() {
	location.href = clientRoot + '/search/search.html';
});

$('#search1').click(function() {
	location.href = clientRoot + '/search/search1.html';
});

$('#search2').click(function() {
	location.href = clientRoot + '/search/search2.html';
});

$('#search3').click(function() {
	location.href = clientRoot + '/search/search3.html';
});


$(function () {
  var param = location.href.split('?')[1].split('=')[1];
	$.get(serverRoot + '/item/searchTitle.json?title=' + param , function(ajaxResult) {
		if (ajaxResult.status == "fail") {
            alert(ajaxResult.data);
            return;
		}
    	var list = ajaxResult.data;
    	var parent = $('#search-bid');
    	var template = Handlebars.compile($('#trTemplate1').html());
    	var div;
    	
    	for(var i = 0; i < list.length; i++) {
    	  if (i % 3 == 0) {
    		  div = $("<div>").addClass('row')
    		  parent.append(div);
    	  }
    	  div.append(template(list[i]));
    	}
	});
});