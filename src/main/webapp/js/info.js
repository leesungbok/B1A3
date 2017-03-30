$(function() {
    var itemNo = location.href.split('?')[1].split('=')[1];
    var member, editValue, answerValue, editDiv, seller
    var currPageNo = 1;
    var pageSize = 5;
    var regex = /<br\s*[\/]?>/gi;
    
    $.ajax({
        type: "GET",
        url: serverRoot + '/auth/loginUser.json',
        success: function (data) {
            member = data.data;
        },
        contentType : "application/json", // 요청 컨텐트 타입
        dataType  : "json", // 응답 데이터 형식 명시하지 않을 경우 자동으로 추측
        async: false
    });
    
    // 핸들바스 함수만들기
    Handlebars.registerHelper("inc", function(value, options) {
        return parseInt(value) + 1;
    });
    
    Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        if (v1 === v2) {
            return options.fn(this);
        }
    });
    
    // 상세보기 경매가 현재 진행중인 경매일 경우 메인으로 이동시킨다.
    $.getJSON(serverRoot + "/main/nowbid.json", function(ajaxResult) {
        if (ajaxResult.status != 'success') {
            getItemInfo();
            return;
        }
        
        var nowItemNo = ajaxResult.data.itemNo;
        if (nowItemNo == itemNo) {
            location.href = clientRoot + '/main/main.html';
        }
        
        // 현재 경매하는 상품이 아닐시 실행
        getItemInfo();
    });
    
    // 현재 경매하는 상품이 아닐시 실행
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
            seller = item.nickName;
            
            // 로그인한 유저가 판매자인 경우 문의하기 버튼을 없앤다.
            if (member.nickName == seller) {
                $('#addQuestionBtn').remove();
                $('.question-exist').css('display', 'inline-block');
            } else {
                $('.answer-exist').css('display', 'inline-block');
            }
            
            var template = Handlebars.compile($('#info-Template').html());
            $('.container').prepend(template(item));
            $('#detail-photo .item:first-child').addClass('active');
            
            // 남은 시간을 초단위로 보여준다.
            timeRemaining('nb-countdown', item);
            
            // 현재 시간을 구한다.
            var timeInMs = new Date();
            timeInMs.setMonth(timeInMs.getMonth()+1);
            var now = timeInMs.getFullYear() + '-' + timeInMs.getMonth() + '-' + timeInMs.getDate() + ' '
            + timeInMs.getHours() + ':' + timeInMs.getMinutes();
            
            // 해당 경매가 종료 된 경우 입찰기록을 요청한다.
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
            getRelatedItems(item);
            
            $('.container').css('visibility', 'visible');
            
            // 상품 문의 정보를 가져온다.
            loadList(currPageNo, 5);
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
        $(document.body).on('click', '.carbox', function(event) {
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
    
    /* 상품 문의 */
    $('#prevPgBtn').click(function() {
        if (currPageNo > 1) {
            loadList(--currPageNo, 5);
        }
    })

    $('#nextPgBtn').click(function() {
        loadList(++currPageNo, 5);
    })

    function preparePagingButton(totalCount) {
        if (currPageNo <= 1) {
            $('#prevPgBtn').hide();
        } else {
            $('#prevPgBtn').show();
        }
        
        var maxPageNo = parseInt(totalCount / pageSize);
        if ((totalCount % pageSize) > 0) {
            maxPageNo++;
        }
        
        if (maxPageNo <= 1) {
            $('.page').hide();
        } else {
            $('.page').show();
        }
        
        if (currPageNo >= maxPageNo) {
            $('#nextPgBtn').hide();
        } else {
            $('#nextPgBtn').show();
        }
        
        // 현재 페이지 번호를 출력한다.
        $('#pageNo').text(currPageNo);
    }

    function loadList(pageNo, pageSize) {
        $.getJSON(serverRoot + '/qna/list.json',
        {
            "pageNo": pageNo,
            "pageSize": pageSize,
            "answerCheck": $('#answer-check').is(":checked"),
            "questionCheck": $('#question-check').is(":checked"),
            "question": $('#qna-search-text').val(),
            "itemNo": itemNo
        }, function(ajaxResult) {
            if (ajaxResult.status != 'success') { // 상품 문의가 없을 경우
                $('.page').hide();
                $('.question>section').empty().append(
                    '<div class="no-qna">' +
                      '<span class="icon-exclamation"></span>' +
                      '<span>상품 문의가 없습니다.</span>' +
                    '<div>');
                return;
            }
            
            var list = ajaxResult.data.list;
            var totalCount = ajaxResult.data.totalCount;
            
            for (var i = 0; i < list.length; i++) {
                list[i].loginUser = member.nickName;
                list[i].seller = seller;
            }
            
            var questionTemplate = Handlebars.compile($('#question-Template').html());
            $('.question>section').empty().prepend(questionTemplate(list));
            
            preparePagingButton(ajaxResult.data.totalCount);
        })
    }
    
    setHeight();
    
    // 상품 문의별 높이 정하기
    function setHeight() {
       $(".response").each(function(index,element) {
           var target = $(element);
           target.removeClass("fixed-height");
           var height = target.innerHeight();
           target.attr("data-height", height)
                 .addClass("fixed-height");
       });
    };
    
    // 상품 문의를 클릭한 경우 질문내용을 보여준다.
    $("input[name=question]").on("change", function() {
        $("p.response").removeAttr("style");
        var target = $(this).next().find('.response');
        target.height(target.attr("data-height"));
    })
    
    // 문의하기 버튼 클릭시
    $('#addQuestionBtn').click(function() {
        // 비로그인시 로그인 페이지로 이동
        if (member.memberNo == undefined) {
            location.href = clientRoot + '/auth/login.html';
            return;
        }
        
        // '상품 문의가 없습니다.' 문장을 숨긴다.
        $('.no-qna').hide();
        
        // 문의하기 태그가 없으면 생성한다.
        if ($('.add-question').length == 0) {
            $(this).after(
                '<div class="add-question">' +
                  '<input type="text" class="form-control">' +
                  '<button type="button" class="btn btn-secondary" id="cancel-q">취소</button>' +
                  '<button type="button" class="btn btn-secondary question-submit" id="add-question-btn" disabled>등록</button>' +
                  '<span id="errorQuestion"></span>' +
                '</div>');
            $('.add-question>input').focus();
        } else {
            // 있으면 문의하기 input으로 포커스이동
            $('.add-question>input').focus();
        }
    });
    
    // 상품 문의 검색 및 답변여부 체크박스 클릭시
    $('.qna-search>span, #answer-check, #question-check').click(function() {
        loadList(1, 5);
        currPageNo = 1;
    })
    
    // 상품 문의 검색 엔터키 활성
    $('#qna-search-text').keypress(function(event) {
        if (event.keyCode == 13) {
            $('.qna-search>span').click();
        }
    })
    
    // 문의하기 취소시 태그를 삭제한다.
    $(document.body).on('click', '#cancel-q', function() {
        $('.add-question').remove();
        // '상품 문의가 없습니다.' 문장을 보여준다.
        $('.no-qna').show();
        
    }).on('click', '#add-question-btn', function() { // 문의하기 등록
        $.post(serverRoot + '/qna/addQuestion.json', 
        {
            'memberNo':member.memberNo,
            'itemNo':itemNo,
            'question':$(this).parent().find('input').val()
        }, function(ajaxResult) {
            if (ajaxResult.status != 'success') {
                console.log(ajaxResult.data);
                return;
            }
            
            swal({
                title: "등록 완료!",
                text: ajaxResult.data,
                timer: 2250,
                showConfirmButton: false,
                type: "success"
            });
            
            $('.add-question').remove(); // 문의하기를 삭제한다.
            loadList(1, 5); // 상품문의 리스트를 새로 불러들인다.
            currPageNo = 1; // 현재 페이지를 1로 바꾼다.
        });
        
    }).on('keypress', '.add-question>input', function(event) { // 문의하기 등록 엔터
        editDiv = $('#add-question-btn');
        if (!editDiv.prop('disabled') && event.keyCode == 13) {
            editDiv.click();
            editDiv.prop('disabled', true);
        }
        
    }).on('click', '.icon-trash-empty', function() { // 문의하기 삭제
        var questionNo = $(this).attr('data-qno');
        
        swal({
            title: "경고!",
            text: "아직 판매자의 답변을 받지 않았습니다. 그래도 삭제하시겠습니까?",
            type: "warning",
            confirmButtonText: "예",
            confirmButtonColor: "rgb(244, 46, 109)",
            cancelButtonText: "아니요",
            cancelButtonColor: "#e5e5e5",
            showCancelButton: true,
            closeOnConfirm: false
        },
        function(isConfirm) {
            if (isConfirm) {
                $.post(serverRoot + '/qna/deleteQuestion.json', 
                {
                    'questionNo':questionNo
                }, function(ajaxResult) {
                    if (ajaxResult.status != 'success') {
                        console.log(ajaxResult.data);
                        return;
                    }
                    
                    loadList(currPageNo, 5); // 상품문의 리스트를 새로 불러들인다.
                    
                    swal({
                        title: "삭제 완료!",
                        text: "등록하신 상품 문의가 삭제되었습니다",
                        timer: 2250,
                        showConfirmButton: false,
                        type: "success"
                    });
                });
            }
        });
        
    }).on('click', '.icon-edit', function() { // 문의하기 수정
        $(this).parent().parent().hide(); // 해당 문의항목을 숨긴다 
        var editQuestionNo = $(this).attr('data-qno');
        editValue = $.trim($(this).parent().text());
        
        $(this).parent().parent().after(
        '<div class="edit-question">' +
          '<input type="text" class="form-control">' +
          '<button type="button" class="btn btn-secondary" id="edit-cancel">취소</button>' +
          '<button type="button" class="btn btn-secondary question-submit" id="edit-question-btn" data-qno="'+editQuestionNo+'">변경</button>' +
          '<span id="errorQuestion"></span>' +
        '</div>');
        $('.edit-question>input').val(editValue).focus();
        
    }).on('keyup', '.add-question>input, .edit-question>input', function(event) { // 문의하기 유효성 검사
        if (event.keyCode != 13) {
            if ($(this).val().length < 5) {
                $('.question-submit').prop('disabled', true);
                $('#errorQuestion').text('최소 5자부터 등록 가능합니다.');
            } else if ($(this).val().length > 30) {
                $('.question-submit').prop('disabled', true);
                $('#errorQuestion').text('최대 30자까지 등록 가능합니다.');
            } else {
                $('.question-submit').prop('disabled', false);
                $('#errorQuestion').text('');
            }
        }
        
    }).on('click', '#edit-question-btn', function() { // 문의하기 수정등록
        $.post(serverRoot + '/qna/updateQuestion.json', 
        {
            'question': $(this).parent().find('input').val(),
            'questionNo': $(this).attr('data-qno')
        }, function(ajaxResult) {
            if (ajaxResult.status != 'success') {
                console.log(ajaxResult.data);
                return;
            }
            
            swal({
                title: "수정 완료!",
                text: "등록하신 상품 문의가 변경되었습니다",
                timer: 2250,
                showConfirmButton: false,
                type: "success"
            });
            
            loadList(currPageNo, 5); // 상품문의 리스트를 새로 불러들인다.
        });
    }).on('keypress', '.edit-question>input', function(event) { // 문의하기 수정등록 엔터
        editDiv = $('#edit-question-btn');
        if (!editDiv.prop('disabled') && event.keyCode == 13) {
            editDiv.click();
            editDiv.prop('disabled', true);
        }
        
    }).on('click', '#edit-cancel', function() { // 문의하기 수정취소
        editDiv = $(this).parent();
        
        if (editDiv.find('input').val() != editValue) {
            swal({
                title: "경고!",
                text: "변경 사항이 저장되지 않았습니다. 변경을 취소하시겠습니까?",
                type: "warning",
                confirmButtonText: "예",
                confirmButtonColor: "rgb(244, 46, 109)",
                cancelButtonText: "아니요",
                cancelButtonColor: "#e5e5e5",
                showCancelButton: true
            }, function(isConfirm) {
                if (isConfirm) {
                    editDiv.prev().show();
                    editDiv.remove();
                }
            });
            return;
        }
        
        editDiv.prev().show();
        editDiv.remove();
        
    }).on('click', '.icon-reply', function() { // 문의하기 답변
        // 문의하기 답변이 없으면 생성한다.
        if ($('.add-answer').length == 0) {
            $(this).parent().parent().after(
            '<div class="add-answer">' +
              '<textarea id="answer-area" class="form-control" rows="5" maxlength="100"></textarea>' +
              '<span></span>' +
              '<div class="answer-buttons">' +
                '<button type="button" class="btn btn-secondary" id="answer-add" data-qno="'+$(this).attr('data-qno')+'">등록</button>' +
                '<button type="button" class="btn btn-secondary" id="answer-cancel">취소</button>' +
              '</div>' +
              '<span id="errorQuestion"></span>' +
            '</div>');
        }
        $('#answer-area').keyup().focus();
        
    }).on('keyup', '#answer-area, #edit-answer-area', function() { // 문의하기 답변 글자수 표시
        var content = $(this).val();
        /*$(this).height(((content.split('\n').length + 1) * 1.5) + 'em');*/
        $(this).next().html(content.length + '/100');
        
    }).on('click', '#answer-cancel', function() { // 문의하기 답변 취소
        $(this).parent().parent().remove();
        
    }).on('click', '#answer-add', function() { // 문의하기 답변 등록
        $.post(serverRoot + '/qna/addAnswer.json', 
        {
            'answer': $.trim($('#answer-area').val()).replace(/\n/g, "<br>"),
            'questionNo': $(this).attr('data-qno')
        }, function(ajaxResult) {
            if (ajaxResult.status != 'success') {
                console.log(ajaxResult.data);
                return;
            }
            
            swal({
                title: "등록 완료!",
                text: "상품 문의 답변등록 완료했습니다.",
                timer: 2250,
                showConfirmButton: false,
                type: "success"
            });
            
            loadList(currPageNo, 5); // 상품문의 리스트를 새로 불러들인다.
        });
    }).on('click', '.answer-edit-btn', function() { // 문의하기 답변 수정
        answerValue = $(this).parent().html().replace(regex, "\n");
        answerValue = $.trim(answerValue.substring(0, answerValue.lastIndexOf('<span')));
        $(this).parent().parent().hide(); // 해당 답변항목을 숨긴다.
        
        $(this).parent().parent().after(
        '<div class="edit-answer">' +
          '<textarea id="edit-answer-area" class="form-control" rows="5" maxlength="100">'+answerValue+'</textarea>' +
          '<span></span>' +
          '<div class="answer-buttons">' +
            '<button type="button" class="btn btn-secondary" id="answer-edit" data-qno="'+$(this).attr('data-qno')+'">변경</button>' +
            '<button type="button" class="btn btn-secondary" id="edit-answer-cancel">취소</button>' +
          '</div>' +
          '<span id="errorQuestion"></span>' +
        '</div>');
        $('#edit-answer-area').focus().keyup();
    }).on('click', '#answer-edit', function() { // 문의하기 답변 수정 변경클릭
        $.post(serverRoot + '/qna/addAnswer.json', 
        {
            'answer': $.trim($('#edit-answer-area').val()).replace(/\n/g, "<br>"),
            'questionNo': $(this).attr('data-qno')
        }, function(ajaxResult) {
            if (ajaxResult.status != 'success') {
                console.log(ajaxResult.data);
                return;
            }
            
            swal({
                title: "변경 완료!",
                text: "상품 문의 답변변경 완료했습니다.",
                timer: 2250,
                showConfirmButton: false,
                type: "success"
            });
            
            loadList(currPageNo, 5); // 상품문의 리스트를 새로 불러들인다.
        });
        
    }).on('click', '#edit-answer-cancel', function() { // 문의하기 답변 수정시 취소
        editDiv = $(this).parent().parent();
        
        if (answerValue != $('#edit-answer-area').val()) {
            swal({
                title: "경고!",
                text: "변경 사항이 저장되지 않았습니다. 변경을 취소하시겠습니까?",
                type: "warning",
                confirmButtonText: "예",
                confirmButtonColor: "rgb(244, 46, 109)",
                cancelButtonText: "아니요",
                cancelButtonColor: "#e5e5e5",
                showCancelButton: true
            }, function(isConfirm) {
                if (isConfirm) {
                    editDiv.prev().show();
                    editDiv.remove();
                }
            });
            return;
        }
        
        editDiv.prev().show();
        editDiv.remove();
        
    }).on('click', '.social-btn-dissolve2', function(event) {
        var heartBtn = $(this).addClass('clicked');
        heartBtn.children('.fa.fa-heart').attr('class','glyphicon glyphicon-heart');
        var itemNo = $(this).attr('data-itno');
        
        if (member.memberNo != undefined) {
            var param = {
                'memberNo': member.memberNo,
                'itemNo': itemNo,
                'type': 1
            };
            
            $.getJSON(serverRoot + '/mypage/check.json', param, function(ajaxResult) {
                var count = ajaxResult.data
                if (count == 1) {
                    $.getJSON(serverRoot + '/mypage/delete.json?likeNo=' + itemNo + '&' + 'memberNo='+ member.memberNo, function(ajaxResult) {
                        if (ajaxResult.status != "success") { 
                            alert(ajaxResult.data);
                            return;
                        }
                        heartBtn.removeClass('clicked');
                        heartBtn.children('.glyphicon.glyphicon-heart').attr('class','fa fa-heart');
                        swal({
                            title: "좋아요 삭제 완료!",
                            text: "마이페이지에서 관심상품이 삭제되었습니다.",
                            timer: 2250,
                            showConfirmButton: false,
                            type: "success"
                        });
                    });
                } else if(count == 2) {
                    param.type = 3;
                    $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
                        if (ajaxResult.status != "success") { 
                            alert(ajaxResult.data);
                            return;
                        }
                        heartBtn.addClass('clicked');
                        swal({
                            title: "좋아요 등록 완료!",
                            text: "마이페이지에서 관심상품이 등록되었습니다.",
                            timer: 2250,
                            showConfirmButton: false,
                            type: "success"
                        });
                    });
                } else if(count == 3) {
                    param.type = 2;
                    heartBtn.removeClass('clicked');
                    heartBtn.children('.glyphicon.glyphicon-heart').attr('class','fa fa-heart');
                    $.getJSON(serverRoot + '/mypage/recentUpdate.json',param, function(ajaxResult) {
                        if (ajaxResult.status != "success") { 
                            alert(ajaxResult.data);
                            return;
                        }
                        swal({
                            title: "좋아요 삭제 완료!",
                            text: "마이페이지에서 관심상품이 삭제되었습니다.",
                            timer: 2250,
                            showConfirmButton: false,
                            type: "success"
                        });
                    });
                } else {
                    $.post(serverRoot + '/mypage/add.json',param ,function(ajaxResult) {
                        if (ajaxResult.status != "success") {
                            alert(ajaxResult.data);
                            return;
                        } 
                        var item=ajaxResult.data
                        swal({
                            title: "좋아요 등록 완료!",
                            text: "마이페이지에서 목록을 확인하세요.",
                            timer: 2250,
                            showConfirmButton: false,
                            type: "success"
                        });
                    })
                }
            });
        } else { member.memberNo == undefined
            // 로그인 되어있지 않으면 로그인 페이지로 이동한다.
            location.href = clientRoot + '/auth/login.html';
        }
        // 이벤트 전파를 중단시킨다.
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    });
});