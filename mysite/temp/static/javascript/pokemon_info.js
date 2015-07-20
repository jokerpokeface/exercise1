$(document).ready(function() { 
    $('.ui.labeled.icon.button.info').click(function() {
        var email = $('#email').val()
        var gender = $('#gender').val()
        var like = $('#like').val()
        var oldpsw = $('#oldpsw').val()
        var psw = $('#psw').val()
        var pswagain = $('#pswagain').val()
        if (psw && psw != pswagain) {
        	alert('两次输入的密码不一样')
        	return
        }
        $.ajax({
        	url: '/userInfo/',
        	type: 'post',
        	data: {email: email, gender: gender, like: like, oldpsw: oldpsw, psw: psw, pswagain: pswagain},
        	success: function(data) {
                if (data == 'ok') {
                	alert('修改成功')
                	window.location = '/userInfo'
                }
                else {
                	alert('修改失败\n' + data)
                }
        	}
        })
    })
})