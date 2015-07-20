$(document).ready(function() { 
    $('.icon.like.small.link.red').popup({
    	on:'hover',
    	content: 'I like it！',
    })

    $('.icon.like.small.link.red').click(function() {
    	if ($($('.change a')[0]).hasClass('login')) {
          alert('请先登录')
          return
        }
    	Tid = $('.threadTitle').attr('id').substring(3, $('.threadTitle').attr('id').length)
    	$.ajax({
    		url: '/like/',
    		type: 'post',
    		data: {Tid: Tid, what: 'thread'},
    		success: function(data) {
                if(data == 'ok') {
                	alert('点赞成功')
                	count = parseInt($('.likeNum').text()) + 1
                	$('.likeNum').text(count)
                }
                else {
                	alert(data + '\n点赞失败')
                }
    		}
    	})
    })

    $('.ui.button.teal.submit.labeled.icon').click(function() {
    	if ($($('.change a')[0]).hasClass('login')) {
          alert('请先登录')
          return
        }
        $('.ui.inverted.dimmer').addClass('active')
        content = $('.commentContent').val()
        Tid = $('.threadTitle').attr('id').substring(3, $('.threadTitle').attr('id').length)
        $.ajax({
        	url: '/submitComment/',
        	type: 'post',
        	data: {content: content, Tid: Tid},
        	success: function(data){
        		if (data == 'ok') {
        			alert('评论成功')
        			$.ajax({
        				url: '/threadDetail/',
        				type: 'post',
        				data: {Tid: Tid},
        				success: function(data) {
        					$('.threadList').html(data)
                            $('.ui.inverted.dimmer').removeClass('active')
        				}
        			})
        		}
        		else {
        			alert(data + '\n评论失败')
                    $('.ui.inverted.dimmer').removeClass('active')
        		}
        	}
        })
    })
})

