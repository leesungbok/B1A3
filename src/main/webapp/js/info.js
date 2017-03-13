$(function() {
    var itemNo = location.href.split('?')[1].split('=')[1]
    
    $.getJSON(serverRoot + "/main/detail.json", {"itemNo":itemNo}, function(ajaxResult) {
        if (ajaxResult.status != 'success') {
            swal({
                title: "오류!",
                type: "warning",
                text: ajaxResult.data,
                confirmButtonText: "확인",
                confirmButtonColor: "#f32e6d"
            }, function(){
                history.back();
            })
            return;
        }
        
        var item = ajaxResult.data;
        
        var timeInMs = new Date();
        timeInMs.setMonth(timeInMs.getMonth()+1);
        var now = timeInMs.getFullYear() + '-' + timeInMs.getMonth() + '-' + timeInMs.getDate() + ' '
                  + timeInMs.getHours() + ':' + timeInMs.getMinutes();
        
        var template = Handlebars.compile($('#info-Template').html());
        $('.container').prepend(template(item));
        $('#detail-photo .item:first-child').addClass('active');
        
        // 경매가 종료 된 경우
        if (item.startTime < now) {
            $.getJSON(serverRoot + '/bidhistory/nowbidhistory.json', {"itemNo" : item.itemNo}, function(ajaxResult) {
                if (ajaxResult.status != "success") {
                    return;
                }
                var bdhs = ajaxResult.data.bdhs;
                var index
                for (var i = 0; i < bdhs.length; i++) {
                    if (bdhs[i].state == 1) {
                        index = i;
                        break;
                    }
                }
                $('#startTime-dt').text('낙찰가');
                $('.present_num').text(bdhs[index].bids);
                $('.bid_num').text(bdhs.length);
                $('.auction-ends').css('display', 'block');
                
                var templateBdhs = Handlebars.compile($('#bdhs-Template').html());
                
                Handlebars.registerHelper("inc", function(value, options)
                {
                    return parseInt(value) + 1;
                });
                
                Handlebars.registerHelper('ifCond', function(v1, v2, options) {
                    if (v1 === v2) {
                        return options.fn(this);
                    }
                });
                
                $('#bidHistory tbody').append(templateBdhs(bdhs));
            })
        }
        
        var modal = $('#image-popup');
        var modalImg = $('#img01');
        var className
        $('#detail-imgs img').click(function() {
            className = $(this).attr("class");
            $('#detail2-imgs .' + className +
            ', #detail2-photo li[data-slide-to="' + className.charAt(className.length-1) + '"]').addClass('active');
            $('body').css('overflow', 'hidden');
            modal.css('display', 'block');
        })
        
        $('.close').click(function() {
            modal.css('display', 'none');
            $('body').css('overflow', 'auto');
            $('#detail2-imgs div, li[data-target="#mycarousel"]').removeClass('active');
        })
        
        var $item = $('#detail2-photo .item'); 
        $item.height($(window).height());
        $item.addClass('full-screen');

        $('#detail2-imgs img').each(function() {
            var $src = $(this).attr('src');
            $(this).parent().css({
                'background-image' : 'url(' + $src + ')',
            });
            $(this).remove();
        });
          
        $(window).on('resize', function (){
            $item.height($(window).height());
        });
        
        $('.carousel-control').click(function() {
            event.preventDefault();
        })
        
        $.getJSON(serverRoot + "/item/relation.json",
        {
            "categ" : item.category,
            "itemNo" : item.itemNo
        }, function(ajaxResult) {
            if (ajaxResult.status != 'success') {
                countDown();
                return;
            }
            
            var relItems = ajaxResult.data;
            var relTemplate = Handlebars.compile($('#relation-Template').html());
            for (var i = 0; i < relItems.length; i++) {
                if (i == 3) break;
                $('.relation').append(relTemplate(relItems[i]));
            }
            $('#next-bid-photos .item:first-child').addClass('active');
            countDown();
            relatedItemClickEvent();
        });
    });
    
    function countDown() {
        $('[data-countdown]').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                if (event.type == "stoped" || event.type == "finish") {
                    $this.text('이미 경매가 종료된 상품입니다.');
                    $this.css('font-size', '3em');
                    $('#remains').remove('span');
                } else if (event.offset.days == 0) {
                    $this.html(event.strftime('%H:%M:%S'));
                } else {
                    $this.html(event.strftime('%d일 %H:%M:%S'));
                }
            }).on('finish.countdown', function() {
                setTimeout(function(){location.href = clientRoot + '/main/main.html'});
            });
        });
    }
    
    function relatedItemClickEvent() {
        $('.carbox').click(function(event) {
            var detailNo = $(this).attr('data-itno');
            $.getJSON('../auth/loginUser.json', function(ajaxResult) {
                if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
                    location.href = clientRoot + "/info/info.html?itemNo=" + detailNo;
                    return;
                }
                
                var member = ajaxResult.data;
                
                var param = {
                    memberNo : member.memberNo,
                    itemNo : detailNo,
                    type : 2
                }
                
                $.getJSON('../mypage/check.json', param, function(ajaxResult) {
                     var count = ajaxResult.data
                     
                     if (count == null) {
                         $.post('../mypage/add.json',param ,function(ajaxResult) {
                             if (ajaxResult.status != "success") {
                                 alert(ajaxResult.data);
                                 return;
                             } 
                         });
                     } else if(count == 1) {
                         param.type = 3;
                         $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
                             if (ajaxResult.status != "success") { 
                                 alert(ajaxResult.data);
                                 return;
                             }
                         })
                     }
                     location.href = clientRoot + "/info/info.html?itemNo=" + detailNo;
                 });
            });
        })
    }
});