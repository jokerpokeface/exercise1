$(document).ready(function() { 

 $('.tabular a').click(function (e) {
     $('.tabular a').removeClass('active');
     $(e.target).addClass('active');
     classify = $(e.target).attr('id');
     $('.ui.inverted.dimmer').addClass('active')
     $.ajax({
     	url: '/forum/',
     	type: 'post',
     	data: {classify: classify},
     	success: function(data) {
     		$('.threadList').html(data);
        $('.ui.inverted.dimmer').removeClass('active')
     	},
     });
 });
  
  $('.add.red.icon').click(function() {
     if ($($('.change a')[0]).hasClass('login')) {
          alert('请先登录');
          return;
     }
     var tab = $('.tabular a');
     var active = '';
     for (i = 0; i < tab.length; i++) {
          if ($(tab[i]).hasClass('active')) {
               active = $(tab[i]).html();
               break;
          }
     }
     $('.activeTab').text(active);     
     $('.ui.modal').modal('show');
  });

  $('.ui.button.submit').click(function() {
     $('.ui.inverted.dimmer').addClass('active')
     title = $('.title').val()
     if(title.length > 100) {
        alert('标题字数太长了,亲~');
        return;
     }
     content = $('.contentSubmit').val()
     var tab = $('.tabular a')
     var active = ''
     for (i = 0; i < tab.length; i++) {
          if ($(tab[i]).hasClass('active')) {
               active = $(tab[i]).attr('id')
               break;
          }
     }
     classify = active
     $.ajax({
          url: '/submitThread/',
          type: 'post',
          data: {title: title, content: content, classify: classify},
          success: function(data) {
               if (data == 'ok') {
                    alert('发表成功')
                    $.ajax({
                        url: '/forum/',
                        type: 'post',
                        data: {classify: classify},
                        success: function(data) {
                            $('.threadList').html(data)
                            $('.ui.inverted.dimmer').removeClass('active')
                            $('.title').val('')
                            $('.contentSubmit').val('')
                        },
                    })
               }
               else {
                    alert(data + '\n发表失败')
                    $('.ui.inverted.dimmer').removeClass('active')
                    $('.title').val('')
                    $('.contentSubmit').val('')
               }
          }
     })
  })

  $('.addButton i').mouseover(function() {
    $('.addButton i.icon').animate({fontSize: '1.3em'})
  })

  $('.addButton i').mouseleave(function() {
    $('.addButton i.icon').animate({fontSize: '1em'})
  })

  $('.search.link.icon.thread').click(function() {
    key = $('.key.thread').val()
    if(key == '') {
      return
    }
    $('.ui.inverted.dimmer').addClass('active')
    var tab = $('.tabular a')
     var active = ''
     for (i = 0; i < tab.length; i++) {
          if ($(tab[i]).hasClass('active')) {
               active = $(tab[i]).attr('id')
               break;
          }
     }
     classify = active
    $.ajax({
      url: '/threadSearch/',
      type: 'post',
      data: {key: key, classify: classify},
      success: function(data){
        $('.threadList').html(data)
        $('.ui.inverted.dimmer').removeClass('active')
        $('.key.thread').val('')
      },
    })
  })
})