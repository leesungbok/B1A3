$(document).ready(function() {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  $("#email").keyup(function(){
    var email = $("#email").val();
    if (!re.test(email)) {
        console.log('제대로입력하세요')
    } else {
        console.log('됫음')
    }
  })
})

$('#add-btn').click(function (event) {
    var param = {
        "email" : $('#email').val(),
        "password" : $('#password').val(),
        "nickName" : $('#nickName').val(),
        "phoneNo" : $('#phoneNo').val()
    };

    $.post('add.json', param, function (ajaxResult) {
        if (ajaxResult.status != "success") {
            alert(ajaxResult.data);
            return;
        }
        location.href = 'login.html';
    }, 'json')

    event.preventDefault();
})