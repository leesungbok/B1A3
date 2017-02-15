$(function() {
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
    
    $('.image-upload').fileupload({
        url: '../common/fileupload.json', // 서버에 요청할 URL
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
            $('#photo-path').val(data.result.data[0]);
        },
        processalways: function(e, data) {
            var canvas = data.files[0].preview;
            var dataURL = canvas.toDataURL();
            $('#photo-img').attr('src', dataURL);
        }
    });
})