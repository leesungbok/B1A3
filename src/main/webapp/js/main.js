(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id =id;
  js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8&appId=2229730730585360";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(function () {
    // add.html을 가져와서 붙인다.
    $.get(clientRoot + '/main/add.html', function (result) {
        $('.bid-regist').html(result);
        
        // 경매등록 사진첨부
        var $input = $("#fileupload");
        $input.fileinput({
            uploadUrl : serverRoot + "/common/fileupload.json",
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
        })/*.on('filesuccessremove', function(event, id, data, previewId, index) {
        });*/
        
        // 경매등록 버튼클릭시
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
            
            $.post(serverRoot + '/main/add.json', item, function(ajaxResult) {
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
                setTimeout(function(){location.href= clientRoot +  '/main/main.html'} , 2250);
            }, 'json'); // post();
        }); // click()
    });
    
    var nav = $('.nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 158) {
            nav.addClass("f-nav");
            $('#header_sub').css('margin-bottom', '122px');
        } else {
            nav.removeClass("f-nav");
            $('#header_sub').css('margin-bottom', '0');
        }
    });

    // 다음경매 무한 스크롤
    /*$('.next-bidlist').jscroll({
        // 스크롤시 4개의 줄까지만 자동으로 로딩 (그 다음은 버튼클릭시 1줄씩 로딩)
        autoTriggerUntil : 6
    });*/
    
    $(".hover").mouseleave(
    	    function () {
    	      $(this).removeClass("hover");
    	    }
    	  );
    
    $.get(clientRoot + '/main/detail.html', function (result) {
        $('.bid-current').html(result);
        
        // 현재경매 상세정보 팝업창에서 입찰버튼 클릭시 상세정보 팝업창 닫기
        $('#detail-bid').click(function() {
            $('#detail').modal('hide')
        })
        
        // 현재경매 정보
        $.getJSON(serverRoot + '/main/nowbid.json', function(ajaxResult) {
            if (ajaxResult.status != "success") {
                console.log(ajaxResult.data);
            }
            
            var nowbid = ajaxResult.data;
            $('#nb-countdown').attr('data-countdown', nowbid.startTime);
            $('.nb-img1').attr('src', clientRoot + '/upload/' + nowbid.photoList[0].filePath);
            $('.nb-img2').attr('src', clientRoot + '/upload/' + nowbid.photoList[1].filePath);
            $('.nb-img3').attr('src', clientRoot + '/upload/' + nowbid.photoList[2].filePath);
            $('.nb-img4').attr('src', clientRoot + '/upload/' + nowbid.photoList[3].filePath);
            $('.nb-title').text(nowbid.title);
            $('.start_num').text(nowbid.startPrice);
            $('.when-to-buy').text(nowbid.buyDate);
            $('.day-of-use').text(nowbid.useDay);
            $('.deal-method').text(nowbid.deal);
            $('.seller').text(nowbid.nickName);
            $('.sellrcontents').text(nowbid.content);
            
            // 현재 경매정보에 대한 입찰기록
            (function getBidHistory() {
                $.getJSON(serverRoot + '/bidhistory/nowbidhistory.json', {"itemNo" : nowbid.itemNo}, function(ajaxResult) {
                    if (ajaxResult.status != "success") {
                        if ($('.desc-non-record').css('display') == 'block') {
                            return;
                        }
                        var startPrice
                        $('.desc-non-record').css('display', 'block');
                        startPrice = nowbid.startPrice
                        $('.present_num').text(startPrice);
                        $('#l').val(startPrice);
                        $('#l').attr('data-atLeastBids', startPrice)
                        $('.atLeastBids').text(startPrice);
                        return;
                    }
                    
                    var bdhs = ajaxResult.data.bdhs;
                    var nickName = ajaxResult.data.nickName
                    if ($('.successful-bidder').text() == bdhs[0].nickName) {
                        return;
                    }
                    
                    if (bdhs[1] != null && bdhs[1].nickName == nickName) {
                        swal({
                            title: "새로운 입찰!",
                            type: "warning",
                            text: "입찰 순위가 밀려났습니다.",
                            confirmButtonText: "확인",
                            confirmButtonColor: "#f32e6d"
                        });
                    }
                    
                    $('.desc-non-record').css('display', 'none');
                    if (bdhs[0].nickName == nickName) {
                        $('.bidding-btn, #detail-bid').css('pointer-events', 'none');
                        $('.bidding-btn, #detail-bid').css('opacity', '.65');
                    } else {
                        $('.bidding-btn, #detail-bid').css('pointer-events', 'auto');
                        $('.bidding-btn, #detail-bid').css('opacity', '1');
                    }
                    
                    $('.successful-bidder-img').attr('src', clientRoot + '/upload/' + bdhs[0].photoPath);
                    $('.successful-bidder').text(bdhs[0].nickName);
                    $('.present_num').text(bdhs[0].bids);
                    $('.desc-line1').css('display', 'block');
                    
                    // 현재가
                    var bids = bdhs[0].bids;
                    var atLeastBids
                    
                    if (bids < 3000) {          // ~ 3000원미만: 100원
                        atLeastBids = bids + 100;
                    } else if (bids < 5000){    // 3000원이상 ~ 5천원미만: 300원
                        atLeastBids = bids + 300;
                    } else if (bids < 10000) {  // 5천원이상 ~ 1만원미만: 500원
                        atLeastBids = bids + 500;
                    } else if (bids < 100000) { // 1만원이상 ~ 10만원미만: 1천원
                        atLeastBids = bids + 1000;
                    } else if (bids < 500000){  // 10만원이상 ~ 50만원미만: 2천원
                        atLeastBids = bids + 2000;
                    } else {                    // 50만원이상: 5천원
                        atLeastBids = bids + 5000;
                    }
                    
                    $('#l').val(atLeastBids);
                    $('.atLeastBids').text(atLeastBids);
                    $('#l').attr('data-atLeastBids', atLeastBids)
                    
                    for (var i = 1; i < bdhs.length; i++) {
                        $('#dl'+i+'-img').attr('src', clientRoot + '/upload/' + bdhs[i].photoPath);
                        $('#dl'+i+'-bidder').text(bdhs[i].nickName);
                        $('#dl'+i+'-time').text(bdhs[i].bidTime)
                        $('#dl'+i+'-bid').text(bdhs[i].bids);
                        $('#dl'+i+'').css('display', 'block');
                    }
                    
                })
                setTimeout(getBidHistory, 1000);
            })();
            
            // 처음에는 1페이지 6개를 로딩한다.
            var currPageNo = 1;
            var pageSize = 24;
            
            loadList(currPageNo, pageSize);
            
            $('#nextPgBtn').click(function() {
                loadList(++currPageNo, 24);
            })
            
            // 다음경매
            function loadList(pageNo, pageSize) {
                $.getJSON(serverRoot + '/main/list.json',
                {
                "pageNo": pageNo,
                "pageSize": pageSize
                },
                function(ajaxResult) {
                    var status = ajaxResult.status;
                    
                    if (status != "success")
                        return;
                    
                    var list = ajaxResult.data.list;
                    var parent = $('#nextlist');
                    var template = Handlebars.compile($('#trTemplate').html());
                    var div
                    for(var i = 0; i < list.length; i++) {
                        if (i % 3 == 0) {
                            div = $("<div>").addClass('row');
                            parent.append(div);
                        }
                        div.append(template(list[i]));
                    }
                    
                    var totalCount = ajaxResult.data.totalCount
                    var maxPageNo = parseInt(totalCount / (pageSize/4));
                    if ((totalCount % (pageSize/4)) > 0) {
                        maxPageNo++;
                    }
                    
                    if (currPageNo >= maxPageNo) {
                        $('#nextPgBtn').css('display', 'none');
                    }
                    
                    $('[data-countdown]').each(function() {
                        var $this = $(this), finalDate = $(this).data('countdown');
                        $this.countdown(finalDate, function(event) {
                            if (event.offset.days == 0) {
                                $this.html(event.strftime('%H:%M:%S'));
                            } else {
                                $this.html(event.strftime('%d일 %H:%M:%S'));
                            }
                        }).on('finish.countdown', function() {
                            setTimeout(function(){location.reload();} , 500);
                        });
                    });
                });
            }
            
            // 입찰하기
            $('.btn-primary1').click(function() {
                if ($('#l').val() < $('#l').attr('data-atLeastBids')) {
                    swal({
                        title: "입찰 실패!",
                        type: "error",
                        text: "최저 입찰 가능가보다 낮은 가격으로 입찰하실 수 없습니다.",
                        confirmButtonText: "확인",
                        confirmButtonColor: "#f32e6d"
                    });
                    return;
                }
                
                if ($('#l').val() % 100 != 0) {
                    swal({
                        title: "입찰 실패!",
                        type: "error",
                        text: "입찰금액은 100원 단위로 입력해주세요.",
                        confirmButtonText: "확인",
                        confirmButtonColor: "#f32e6d"
                    });
                    return;
                }
                
                $.post(serverRoot + '/bidhistory/add.json',
                {
                "bids": $('#l').val(),
                "itemNo": nowbid.itemNo
                }, function(ajaxResult) {
                    if (ajaxResult.status != "success") {
                        alert(ajaxResult.data);
                        return;
                    }
                    $('#tender').modal('hide')
                    swal({
                        title: "입찰 완료!",
                        timer: 2250,
                        showConfirmButton: false,
                        type: "success"
                    });
                }, 'json'); // post();
            })
        })
    })
});