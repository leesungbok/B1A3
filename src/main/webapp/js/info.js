$(function() {
    var itemNo = location.href.split('?')[1].split('=')[1]
    
    // 상세보기 하려는 경매가 현재 진행중인 경매일 경우 메인으로 이동시킨다.
    $.getJSON(serverRoot + "/main/nowbid.json", function(ajaxResult) {
        if (ajaxResult.status != 'success') {
            return;
        }
        
        var nowItemNo = ajaxResult.data.itemNo;
        if (nowItemNo == itemNo) {
            location.href = clientRoot + '/main/main.html';
            return;
        }
        
        // 현재 경매하는 상품이 아닐시 실행
        getItemInfo();
    });
    
    function getItemInfo() {
        // 경매에 대한 상세한 정보를 가져온다.
        $.getJSON(serverRoot + "/main/detail.json", {"itemNo":itemNo}, function(ajaxResult) {
            if (ajaxResult.status != 'success') {
                // 해당 itemNo로 경매 정보를 못찾았을 경우 에러창을 띄운다.
                swal({
                    title: "오류!",
                    type: "warning",
                    text: ajaxResult.data,
                    confirmButtonText: "확인",
                    confirmButtonColor: "#f32e6d"
                }, function() {
                    history.back();
                })
                return;
            }
            
            var item = ajaxResult.data;
            var template = Handlebars.compile($('#info-Template').html());
            $('.container').prepend(template(item));
            $('#detail-photo .item:first-child').addClass('active');
            
            // 남은 시간을 초단위로 보여준다.
            timeRemaining('nb-countdown', item);
            
            // 현재 시간을 구한다.
            var timeInMs = new Date();
            
            // getMonth()가 1월이면 0, 2월이면 1을 리턴하기 때문에 원래달에 1을 더한다.
            timeInMs.setMonth(timeInMs.getMonth()+1);
            
            // 예를 들어 '2017-02-21 13:47' 형식처럼 시간을 저장한다.
            var now = timeInMs.getFullYear() + '-' + timeInMs.getMonth() + '-' + timeInMs.getDate() + ' '
            + timeInMs.getHours() + ':' + timeInMs.getMinutes();
            
            // 해당 경매가 종료 된 경우 입찰기록을 요청한다.
            if (item.startTime < now) {
                $.getJSON(serverRoot + '/bidhistory/nowbidhistory.json', {"itemNo" : item.itemNo}, function(ajaxResult) {
                    if (ajaxResult.status != "success") {
                        return;
                    }
                    
                    var bdhs = ajaxResult.data.bdhs;
                    
                    // 입찰기록 리스트를 반복해서
                    for (var i = 0; i < bdhs.length; i++) {
                        // 낙찰된 사람이 있으면 시작가를 낙찰가로 바꾼다.
                        if (bdhs[i].state == 1) {
                            $('#startTime-dt').text('낙찰가');
                            $('.present_num').text(bdhs[i].bids);
                            break;
                        }
                    }
                    
                    $('.bid_num').text(bdhs.length);            // 입찰수를 표시한다.
                    $('.auction-ends').css('display', 'block'); // 입찰기록을 표시한다.
                    
                    var templateBdhs = Handlebars.compile($('#bdhs-Template').html());
                    
                    // value에 1을 더해 리턴한다.
                    Handlebars.registerHelper("inc", function(value) {
                        return parseInt(value) + 1;
                    });
                    
                    // v1과 v2가 같으면 true를 리턴한다.
                    Handlebars.registerHelper('ifCond', function(v1, v2, options) {
                        if (v1 === v2) {
                            return options.fn(this);
                        }
                    });
                    
                    // 입찰기록 정보를 tbody밑에 붙인다.
                    $('#bidHistory tbody').append(templateBdhs(bdhs));
                })
            }
            
            // 사진 확대보기 기능 시작
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
            // 사진 확대보기 기능 끝
            
            $('.carousel-control').click(function() {
                event.preventDefault();
            })
            
            // 관련 상품 정보를 가져온다.
            getRelatedItems(item)
            
            $('.container').css('display', 'block');
        });
        
    }
    
    // 관련 상품 정보를 가져온다.
    function getRelatedItems(item) {
        $.getJSON(serverRoot + "/item/relation.json",
        {
            "categ" : item.category,
            "itemNo" : item.itemNo
        }, function(ajaxResult) {
            // 관련 상품 정보가 없을경우
            if (ajaxResult.status != 'success') {
                $('.relation').remove();
                return;
            }
            
            var relItems = ajaxResult.data;
            var relTemplate = Handlebars.compile($('#relation-Template').html());
            for (var i = 0; i < relItems.length; i++) {
                if (i == 3) break;
                $('.relation').append(relTemplate(relItems[i]));
            }
            
            $('#next-bid-photos .item:first-child').addClass('active');
            // 남은 시간을 초단위로 보여준다.
            timeRemaining('carbox-read-more', item);
            
            // 관련 상품을 클릭할 시 최근 본 상품에 등록시킨다.
            relatedItemClickEvent();
        });
    }
    
    // 남은 시간을 초단위로 보여준다.
    function timeRemaining(where, item) {
        $('[data-countdown]').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            if ($this[0].id == where) {
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
                    $this.text('');
                    setTimeout(function(){location.href = clientRoot + '/main/main.html'});
                });
            } else if ($this[0].className == where) {
                $this.countdown(finalDate, function(event) {
                    if (event.offset.days == 0) {
                        $this.html(event.strftime('%H:%M:%S'));
                    } else {
                        $this.html(event.strftime('%d일 %H:%M:%S'));
                    }
                }).on('finish.countdown', function() {
                    $('.relation>div').remove();
                    getRelatedItems(item)
                });
            }
        });
    }
    
    // 관련 상품을 클릭할 시 최근 본 상품에 등록시킨다.
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