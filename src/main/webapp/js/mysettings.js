$(function() {
    $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
        if (ajaxResult.status != "success") {
            alert(ajaxResult.data);
            return;
        }

        var member = ajaxResult.data;
        
        $('#photo-img').attr('src', clientRoot + '/upload/' + member.photoPath);
        $('#email').val(member.email);
        $('#nickName').val(member.nickName);
        
        if (member.facebook != null) {
            $('#facebook-cbx').prop("checked", true);
            $('#facebook-off').css('display', 'inline');
        } else {
            $('#facebook-on').css('display', 'inline');
        }
        
        if (member.kakaoTalk != null) {
            $('#kakao-cbx').prop("checked", true);
            $('#kakao-off').css('display', 'inline');
        } else {
            $('#kakao-on').css('display', 'inline');
        }
        
        if (member.naver != null) {
            $('#naver-cbx').prop("checked", true);
            $('#naver-off').css('display', 'inline');
        } else {
            $('#naver-on').css('display', 'inline');
        }
        
        $('#zip-code').val(member.postNo);
        $('#address').val(member.basicAddress);
        $('#address-detail').val(member.detailAddress);
        $('#phoneNo').val(member.phoneNo);
        $('#home-telephone').val(member.telphone);
        
        /* 이메일 유효성검사 */
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var email
        
        $("#email").keyup(function() {
            email = $(this).val();
        	if (email == '') {
                $('#erroremail').text('필수 입력란입니다.');
                $('#email-check').css('display', 'inline-block');
            } else if (!re.test(email)) {
                $('#erroremail').text('올바른 이메일 형식이 아닙니다.');
                $('#email-check').css('display', 'inline-block');
            } else if (email == member.email) {
                $('#erroremail').text('');
                $('#email-check').css('display', 'none');
            } else {
                $.getJSON(nodeRoot + '/emailcheck?email=' + email, function (ajaxResult) {
                    if (ajaxResult.count == 0) {
                        $('#erroremail').text('');
                        $('#email-check').css('display', 'none');
                    } else {
                        $('#erroremail').text('이미 가입된 이메일입니다.');
                        $('#email-check').css('display', 'inline-block');
                    }
                })
            }
        })
        
        var nickName
        $("#nickName").keyup(function() {
            nickName = $(this).val();
            if (nickName.length == 0) {
                $('#errornickName').text('필수 입력란입니다.');
                $('#nickName-check').css('display', 'inline-block');
            } else if (nickName.length < 2 || nickName.length > 6) {
                $('#errornickName').text('한글,영문,숫자 포함 최소2자, 최대6자까지 가능합니다.');
                $('#nickName-check').css('display', 'inline-block');
            } else if (nickName == member.nickName) {
                $('#errornickName').text('');
                $('#nickName-check').css('display', 'none');
            } else {
                $.getJSON(nodeRoot + '/nknmcheck?nknm=' + nickName, function (ajaxResult) {
                    if (ajaxResult.count == 0){
                        $('#errornickName').text('');
                        $('#nickName-check').css('display', 'none');
                    } else {
                        $('#errornickName').text('이미 사용중인 닉네임입니다.');
                        $('#nickName-check').css('display', 'inline-block');
                    }
                })
            }
        })
        
        var password
        var passwordSha1
    
        $("#password").keyup(function() {
            password = $("#password").val();
            if (password == '') {
                $('#errorpassword-conf, #password-check').css('display', 'none');
                return;
            }
            
            passwordSha1 = ("*"+CryptoJS.SHA1(CryptoJS.SHA1(password))).toUpperCase();
            if (member.password != passwordSha1) {
                $('#errorpassword-conf, #password-check').css('display', 'inline-block');
            } else {
                $('#errorpassword-conf, #password-check').css('display', 'none');
            }
        })
        
        /* 휴대폰 유효성 검사 */
        var re2 = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
        var phoneNo
        
        $("#phoneNo").keyup(function() {
            phoneNo = $(this).val();
            if (phoneNo == '') {
                $('#errorphoneNo').text('필수 입력란입니다.');
                $('#phoneNo-check').css('display', 'inline-block');
            } else if (!re2.test(phoneNo)) {
                $('#errorphoneNo').text('올바른 휴대전화 형식이 아닙니다.');
                $('#phoneNo-check').css('display', 'inline-block');
            } else if (phoneNo == member.phoneNo) {
                $('#errorphoneNo').text('');
                $('#phoneNo-check').css('display', 'none');
            } else {
                $.getJSON(nodeRoot + '/phonecheck?phon=' + phoneNo, function (ajaxResult) {
                    if (ajaxResult.count == 0){
                        $('#errorphoneNo').text('');
                        $('#phoneNo-check').css('display', 'none');
                    } else {
                        $('#errorphoneNo').text('이미 사용중인 휴대전화입니다.');
                        $('#phoneNo-check').css('display', 'inline-block');
                    }
                })
            }
        })
    });
    
    var newPassword
    
    $("#new-password").keyup(function() {
        newPassword = $("#new-password").val();
        if (newPassword.length == 0) {
            $('#errorpassword-conf2, #password-check').css('display', 'none');
        } else if (newPassword.length < 6 || newPassword.length > 20) {
            $('#errorpassword-conf2, #password-check').css('display', 'inline-block');
        } else {
            $('#errorpassword-conf2, #password-check').css('display', 'none');
        }
    })
    
    var newPasswordConf
    
    $("#new-password-conf").keyup(function() {
        newPasswordConf = $("#new-password-conf").val();
        if (newPasswordConf != newPassword){
            $('#errorpassword-conf3, #password-check').css('display', 'inline-block');
        } else {
            $('#errorpassword-conf3, #password-check').css('display', 'none');
        }
    })
    
    // 일반 전화번호 유효성 검사
    var re3 = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    var homeTelephone
    $("#home-telephone").keyup(function() {
        homeTelephone = $("#home-telephone").val();
        if (homeTelephone == '') {
            $('#errortelNo, #tel-check').css('display', 'none');
        } else if (!re3.test(homeTelephone)) {
            $('#errortelNo, #tel-check').css('display', 'inline-block');
        } else {
            $('#errortelNo, #tel-check').css('display', 'none');
        }
    })
    
    
    $('.addr-find').click(function(event) {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
                
                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullAddr = ''; // 최종 주소 변수
                var extraAddr = ''; // 조합형 주소 변수
                
                // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    fullAddr = data.roadAddress;
                    
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    fullAddr = data.jibunAddress;
                }
                
                // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
                if(data.userSelectedType === 'R'){
                    //법정동명이 있을 경우 추가한다.
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }
                
                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zip-code').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('address').value = fullAddr;
                
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById('address-detail').focus();
            }
        }).open();
        event.preventDefault();
    })
    
    $('.account-delete').click(function(event) {
        event.preventDefault();
        swal({
            title: "다시 한번 생각해보세요!",
            text: "탈퇴 후 회원정보 및 서비스 이용기록은 모두 삭제됩니다.\n정말로 탈퇴하시겠습니까?",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "탈퇴하기",
            closeOnConfirm: false
          },
          function(){
              $.post(serverRoot + '/mypage/delete1.json', function(ajaxResult) {
                  if (ajaxResult.status != 'success') {
                      alert(ajaxResult.data);
                      return;
                  }
                  swal({
                      title: "탈퇴 처리가 완료되었습니다!",
                      text: "부족한 서비스에 관심을 기울여 주신 점, 진심으로 감사드립니다.\n더 열심히 해서, 진정으로 유용한 서비스를 만들도록 하겠습니다.",
                      type: "success",
                      confirmButtonText: "확인",
                      confirmButtonColor: "rgb(244, 46, 109)"
                  },
                  function(){
                      location.href = clientRoot + '/main/main.html'
                  });
              })
          });
    })
    
    $('.image-upload').fileupload({
        url: serverRoot + '/common/fileupload.json', // 서버에 요청할 URL
        dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
        sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
        singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기. 기본은 true.
        autoUpload: true,        // 파일을 추가할 때 자동 업로딩 여부 설정. 기본은 true.
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
        previewMaxWidth: 150,   // 미리보기 이미지 너비
        previewMaxHeight: 150,  // 미리보기 이미지 높이 
        previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
        done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
            $.post(serverRoot + '/mypage/updatePhoto.json', {"photoPath": data.result.data[0]}, function(ajaxResult) {
                if (ajaxResult.status == 'fail') {
                    alret(ajaxResult.data);
                }
            }, 'json')
        },
        processalways: function(e, data) {
            var canvas = data.files[0].preview;
            var dataURL = canvas.toDataURL();
            $('#photo-img').attr('src', dataURL);
        }
    });
    
    $('.edit-btn').click(function(event) {
        var editMember = {
            "email": $('#email').val(),
            "nickName": $('#nickName').val(),
            "phoneNo": $('#phoneNo').val(),
            "password": $('#new-password').val(),
            "postNo": $('#zip-code').val(),
            "basicAddress": $('#address').val(),
            "detailAddress": $('#address-detail').val(),
            "telphone": $('#home-telephone').val()
        }
        
        $.post(serverRoot + '/mypage/update.json', editMember, function (ajaxResult) {
            if (ajaxResult.status != "success") {
                alert(ajaxResult.data);
                return;
            }
            swal({
                title: "수정 완료!",
                text: "회원님 정보가 올바르게 수정됬습니다.",
                timer: 2250,
                showConfirmButton: false,
                type: "success"
            });
            setTimeout(function(){location.reload();} , 2000);
        }, 'json')
        event.preventDefault();
    })
    
    setInterval(function() {
        $('.edit-btn').css('pointer-events', 'none');
        $('.edit-btn').css('opacity', '.65');
        
        if ($('#email-check').css('display') != 'none') {
            return;
        } else if ($('#nickName-check').css('display') != 'none') {
            return;
        } else if ($('#password-check').css('display') != 'none') {
            return;
        } else if ($('#phoneNo-check').css('display') != 'none') {
            return;
        } else if ($('#tel-check').css('display') != 'none') {
            return;
        } else {
            $('.edit-btn').css('pointer-events', 'auto');
            $('.edit-btn').css('opacity', '1');
        }
    }, 100);
})