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
        var template = Handlebars.compile($('#info-Template').html());
        $('.container').prepend(template(item));
        $('#detail-photo .item:first-child').addClass('active');
        
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
        
        $.getJSON(serverRoot + "/item/category.json",
        {
            "categoryList" : item.category,
            "categoryByAuction" : true
        }, function(ajaxResult) {
            if (ajaxResult.status != 'success') {
                return;
            }
            
            var relItems = ajaxResult.data;
            var relTemplate = Handlebars.compile($('#relation-Template').html());
            for (var i = 0; i < relItems.length; i++) {
                if (i == 3) break;
                $('.relation').append(relTemplate(relItems[i]));
            }
            $('#next-bid-photos .item:first-child').addClass('active');
            
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
        });
    });
});