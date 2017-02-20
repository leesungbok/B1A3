// fileinput.js 표시언어를 한국어로 바꿉니다.
(function ($) {
    "use strict";

    $.fn.fileinputLocales['kr'] = {
        fileSingle : '파일',
        filePlural : '파일',
        browseLabel : '파일 선택',
        removeLabel : '삭제',
        removeTitle : '선택한 파일을 삭제',
        cancelLabel : '취소',
        cancelTitle : '업로드 취소',
        uploadLabel : '업로드',
        uploadTitle : '선택한 파일을 업로드',
        msgNo : '아니오',
        msgNoFilesSelected : '파일이 선택되어 있지 않습니다',
        msgCancelled : '취소',
        msgZoomModalHeading : '미리보기',
        msgSizeTooSmall : 'File "{name}"(<b>{size} KB </b>) is too small and must be larger than <b> {minSize} KB</b>',
        msgSizeTooLarge : '파일 "{name}"(<b>{size} KB </b>) 업로드 할 수있는 최대 용량 <b>{maxSize} KB</b>를 초과합니다',
        msgFilesTooLess : '최소한 <b>{n}</b>개의{files}을 선택하십시오',
        msgFilesTooMany : '선택한 파일의 수 <b> ({n} 개) </ b> 업로드 가능한 최대 개수 <b> ({m} 개) </ b>를 초과합니다',
        msgFileNotFound : '파일 "{name}"이 없습니다',
        msgFileSecured : '파일 "{name}"은 읽기 권한이 없기 때문에 가져올 수 없습니다.',
        msgFileNotReadable : '파일 "{name}"은 읽을 수 없습니다.',
        msgFilePreviewAborted : '파일 "{name}"의 미리보기를 중지했습니다',
        msgFilePreviewError : '파일 "{name}"로드하는 동안 오류가 발생했습니다',
        msgInvalidFileName : 'Invalid or unsupported characters in file name "{name}".',
        msgInvalidFileType : '"{name} "잘못된 파일 형식입니다. "{types}"형식의 파일 만 지원하고 있습니다',
        msgInvalidFileExtension : '"{name}" 은 지원하지 않는 파일 확장자입니다. 확장자가 "{extensions}"의 파일만 지원하고 있습니다',
        msgUploadAborted : '파일 업로드가 중지되었습니다',
        msgUploadThreshold : 'Processing ...',
        msgValidationError : '검증 오류',
        msgLoading : '{files} 개 중 {index} 개목 파일을로드 중 & hellip;',
        msgProgress : '{files} 개 중 {index} 개의 파일을로드 중 - {name} - {percent} % 완료',
        msgSelected : '{n} 개의 {files}을 선택',
        msgFoldersNotAllowed : '드래그 앤 드롭이 가능한 파일뿐입니다. {n} 개의 폴더 - 무시되었습니다 ',
        msgImageWidthSmall : '이미지 파일"{name}" 의 폭이 너무 작습니다. 이미지 크기의 폭은 적어도 {size} px 필요합니다 ',
        msgImageHeightSmall : '이미지 파일"{name}"의 높이가 너무 작습니다. 이미지 크기 높이 적어도 {size} px 필요합니다 ',
        msgImageWidthLarge : '이미지 파일"{name}"의 폭이 업로드 가능한 이미지 크기 ({size} px)를 초과했습니다 ',
        msgImageHeightLarge : '이미지 파일"{name}"의 높이가 업로드 가능한 이미지 크기 ({size} px)를 초과했습니다 ',
        msgImageResizeError : '크기 조정시 이미지 크기를 취득 할 수 없습니다',
        msgImageResizeException : '이미지 크기 조정시 오류가 발생했습니다. <pre> {errors} </ pre> ',
        dropZoneTitle : '경매품 사진을 여기에 드래그하세요.',
        dropZoneClickTitle : '<br> (또는 클릭하여 {files}을 선택)',
        fileActionSettings : {
            removeTitle : '파일을 삭제',
            uploadTitle : '파일 업로드',
            zoomTitle : '미리보기',
            dragTitle : '이동 / 재배치',
            indicatorNewTitle : '아직 업로드되지 않습니다',
            indicatorSuccessTitle : '업로드 된',
            indicatorErrorTitle : '업로드 실패',
            indicatorLoadingTitle : '업로드 중 ...'
        },
        previewZoomButtonTitles : {
            prev : '이전 파일보기',
            next : '다음 파일을 표시',
            toggleheader : '파일 정보 표시 / 숨기기',
            fullscreen : '전체 화면의 시작 / 종료',
            borderless : '전체 창보기 시작 / 종료',
            close : '미리보기 닫기'
        }
    };
})(window.jQuery);

//사진추가 관련 코드입니다.
$(document).on('ready', function () {
    $("#input-4").fileinput({
        showCaption : false,
        showUpload : false,
        language : "kr",
        uploadUrl : "/common/fileupload",
        allowedFileExtensions : [ "jpg", "png", "gif", "jpeg" ],
        maxFileCount : 4
    });
});