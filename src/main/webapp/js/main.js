(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id =id;
  js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8&appId=2229730730585360";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(function () {
    // header.html을 가져와서 붙인다.
    $.get('add.html', function (result) {
        $('.bid-regist').html(result);
        
        var $input = $("#fileupload");
        $input.fileinput({
            uploadUrl : "../common/fileupload.json",
            showRemove : false,
            showCaption: false,
            showUpload : false,
            uploadAsync: false,
            language : "kr",
            allowedFileExtensions : [ "jpg", "png", "gif", "jpeg" ],
            minFileCount: 4,
            maxFileCount : 4
        }).on("filebatchselected", function(event, data, previewId, index) {
            $('.kv-upload-progress').css('display', 'none');
            $input.fileinput("upload");
        }).on('filebatchuploadsuccess', function(event, data, previewId, index) {
            for (var i = 0; i < 4; i++) {
                $('<input>').attr({
                    type: 'hidden',
                    class: 'file-path',
                    value: data.response.data[i]
                }).appendTo("#file-selector");
            }
        })
        
        $('#add-btn').click(function() {
            var photoPathList = $('.file-path').map(function() {
                return this.getAttribute("value");
            }).get();
            
            var item = {
                    "title": $('#titl').val(),
                    "category": $('#categ').val(),
                    "startPrice": $('#stpc').val(),
                    "buyDate": $('#buy').val(),
                    "useDay": $('#day').val(),
                    "content": $('#cont').val(),
                    "deal": $('#deal').val(),
                    "startTime": JSON.stringify(photoPathList)
            };
            
            $.post('add.json', item, function(ajaxResult) {
                if (ajaxResult.status != "success") {
                    alert(ajaxResult.data);
                    return;
                }
                swal({
                    title: "등록 완료!",
                    text: "등록하신 경매품을 확인하세요.",
                    timer: 2250,
                    showConfirmButton: false,
                    type: "success"
                });
                setTimeout(function(){location.href='../main'} , 2250);
            }, 'json'); // post();
        }); // click()
    });
    
    $.get('detail.html', function (result) {
        $('.bid-current').html(result);
    })

    var nav = $('.nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 130) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

    // 다음경매 무한 스크롤
    $('.next-bidlist').jscroll({
        // 스크롤시 4개의 줄까지만 자동으로 로딩 (그 다음은 버튼클릭시 1줄씩 로딩)
        autoTriggerUntil : 6
    });
});