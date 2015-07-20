$(document).ready(function() { 

 $('.ui.menu.forhead a').click(function (e) {
     $('.ui.menu.forhead a').removeClass('active');
     $(e.target).addClass('active');
 })

  $('.ui.secondary.left.menu a').click(function (e) {
  	var str = $(e.target).text().trim();
    $('.sides').css('display', 'block');
  	 if (str == "按种类搜索") {
  	 	$('.shape').shape('set next side', '.search_via_class.ui').shape('flip right');
      $('.search_via_type.ui').addClass('active');
  	 }
  	 if (str == "按属性搜索") {
  	 	$('.shape').shape('set next side', '.search_via_property.ui').shape('flip right');
      $('.search_via_property.ui').addClass('active');
  	 }
     if (str == "按编号搜索") {
      $('.shape').shape('set next side', '.search_via_id.ui').shape('flip right');
      $('.search_via_id.ui').addClass('active');
     }
  	 
     $('.ui.secondary.left.menu a').removeClass('active');
     $(e.target).addClass('active');
 })

 $('.ui.forhead .login').click(function () {
 	$('.ui.sidebar.login').sidebar('toggle');
  var t = document.getElementById("userLogin");
  t.focus(); 
 }) 

  $('.ui.forhead .register').click(function () {
 	$('.ui.sidebar.register').sidebar('toggle');
  var t = document.getElementById("userRegister");
  t.focus(); 
  })

  $('.detail .pokemon_ball').click(function () {
  	var pokemon_name = $('.en_name').text().toLowerCase();
    var new_name = "/static/images/pokemon/" + pokemon_name + ".png";
  	$('.detail .pokemon_ball')
      .transition('tada')
      .transition({
        animation: 'scale',
        complete: function() {
          $('.detail img').removeClass().addClass('pokemon_pic').attr('src', new_name);
        }
      })

  })

  function trigger() {
    $('.pokemon_ball').trigger('click');
  }
  setTimeout(trigger, 2500);

  $('.double.angle.mail.icon.exit').click(function() {
    $('.sidebar').sidebar('hide');
   
  })

  
  $('.indetail .icon.search.link, .form.ui.indetail button').click(function(e) {
    var name = $('.form.ui.right input').val().trim();
    if (name == '') {
      return;
    }
        $.ajax({
            url: '/detail',
            dataType: 'json',
            type: 'GET',
            data: {input_name: name, ajax: "true"},
            success: function(data) {
              if (!data[0]) {
                alert(name + ' Not Found');

              }
              else {
              //替换数据
              $('.ch_name').text(data[0]['fields']['ch_name']);
              $('.jp_name').text(data[0]['fields']['jp_name']);
              $('.en_name').text(data[0]['fields']['en_name']);
              $('.height').text(data[0]['fields']['height']);
              $('.weight').text(data[0]['fields']['weight']);
              $('.poke_property').text(data[0]['fields']['poke_property']);
              $('.poke_class').text(data[0]['fields']['poke_class']);
              $('.poke_type').text(data[0]['fields']['poke_type']);
              $('.poke_appearance').text(data[0]['fields']['poke_appearance']);
              $('.poke_activity').text(data[0]['fields']['poke_activity']);
              var poke_id = data[0]['pk'];
              var hp = data[0]['fields']['hp'];
              var attack = data[0]['fields']['attack'];
              var defence = data[0]['fields']['defence'];
              var super_attack = data[0]['fields']['super_attack'];
              var super_defence = data[0]['fields']['super_defence'];
              var speed = data[0]['fields']['speed'];
              var male = data[0]['fields']['male'];
              var female = data[0]['fields']['female'];
              var catch_poke = data[0]['fields']['catch'];
              $('.catch').text(catch_poke + '%');
              $('.hp span').text(hp);
              $('.attack span').text(attack);
              $('.defence span').text(defence);
              $('.super_attack span').text(super_attack);
              $('.super_defence span').text(super_defence);
              $('.speed span').text(speed);
              $('.male').text(male + '%');
              $('.female').text(female + '%');
              $('.poke_id').text(poke_id);
              $('.hp div').animate({ width: hp*2 + 'px',});
              $('.attack div').animate({ width: attack*2 + 'px',});
              $('.defence div').animate({ width: defence*2 + 'px',});
              $('.super_defence div').animate({ width: super_defence*2 + 'px',});
              $('.super_attack div').animate({ width: super_attack*2 + 'px',});
              $('.speed div').animate({ width: speed*2 + 'px',});
              $('.ration div').animate({ width: male  + '%',});

              $('.more a').attr('href', 'http://wiki.52poke.com/wiki/' + data[0]['fields']['ch_name']);



              //更换图片
              $('.detail img').removeClass().addClass('pokemon_ball').attr('src', '/static/images/jinglingqiu1.jpg');
              setTimeout(trigger, 2500);
              }
            },
            failure: function(data) {
              alert("something error");
            },
    })
  })
  
  //查找
  $('.ui.text.shape a').click(function(e) {
    var catalogue = {'zhongzi': "种子",
                     'du': '毒'};             
    var via = $(e.target).attr('class').split('_')[0];     //根据什么查找
    var what = $(e.target).attr('class').split('_')[1];    //查找目标
    window.location = '/list?via=' + via + '&what=' + what;
  })


  //登录
  $('.login .button').click(function() {
    var user_name = $('.login .user_name').val().trim();
    var psw = $('.login .password').val().trim();

    if(!psw || ! user_name) {
      alert('请正确输入用户名和密码');
      return;
    }
    $('.login .button').addClass('disabled')
    $('.login .button').text('登录ing...')
    $.ajax({
      url: '/mylogin/',
      type: 'post',
      data: {name: user_name, password: psw},
      success: function(data) {
        if (data == 'login ok') {
          alert('Welcome! 登录成功');
          $('.login .button').removeClass('disabled');
          $('.login .button').text('登录');
          window.location.reload();
        }
        else {
          alert(data);
          $('.login .button').removeClass('disabled');
          $('.login .button').text('登录');
        }
      },
      failure: function() {
        alert("login error!");
        $('.login .button').removeClass('disabled')
        $('.login .button').text('登录')
      },
    })
  })

  //注册
  $('.register .button').click(function() {
    var user_name = $('.register .user_name').val().trim();
    var psw = $('.register .password').val().trim();
    var psw_again = $('.register .password_again').val().trim();
    var email = $('.register .email').val().trim();

    //验证......
    if(!psw || !user_name || !psw_again || !email || psw != psw_again) {
      alert('请正确输入');
      return;
    }
    $('.register .button').addClass('disabled')
    $('.register .button').text('注册ing...')
    $.ajax({
      url: '/register/',
      type: 'post',
      data: {name: user_name, password: psw, mail: email},
      success: function(data) {
        if (data == 'register ok') {
          alert('注册成功！请登录');
          $('.register .button').removeClass('disabled')
          $('.register .button').text('注册')
          $('.register .user_name').val('');
          $('.register .password').val('');
          $('.register .password_again').val('');
          $('.register .email').val('');
          $('.right.item.login').trigger('click');
        }
        else {
          alert(data);
          $('.register .button').removeClass('disabled')
          $('.register .button').text('注册')
        }
      },
      failure: function(data) {
        alert('register error');
        $('.login .button').removeClass('disabled')
        $('.login .button').text('注册')
      },
    })
  })

  //退出
  $('.right.item.logout').click(function() {
    $.ajax({
      url: '/mylogout',
      type: 'get',
      success: function(data) {
        window.location.reload()
        alert('退出成功');
      },
      failure: function(data) {
        alert('logout error');
      },
    })
  })



  var hp = parseInt($('.hp span').text());
  var attack = parseInt($('.attack span').text());
  var super_attack = parseInt($('.super_attack span').text());
  var defence = parseInt($('.defence span').text());
  var super_defence = parseInt($('.super_defence span').text());
  var speed = parseInt($('.speed span').text());

  var male = parseInt($('.ration .male').text());

  $('.speed div').css('width', speed*2 + "px");
  $('.attack div').css('width', attack*2 + 'px');
  $('.super_attack div').css('width', super_attack*2 + "px");
  $('.super_defence div').css('width', super_defence*2 + "px");
  $('.hp div').css('width', hp*2 + "px");
  $('.defence div').css('width', defence*2 + "px");
 
  $('.ration div').animate({
    width: male + '%',
  })
  

  //输入框自动匹配功能，有待完善。。。
  
  var temp;
  $('.form input').keyup(function() {
    $('.append').html('');
    if (!$('.form input').val().trim()) {
      return;   //输入框为空的时候什么也不做
    }
    var word = $('.form input').val().trim();
    if (temp == word) {
      return;
    }
    temp = word;
    $.ajax({
      url: '/test',
      type: 'get',
      data: {'word': word},
      success: function(data) {
          pokemon = data.split(' ');
          if (pokemon[0]) {
            var i = 0;
            while(pokemon[i]) {
               
               $('.append').append('<li>' + pokemon[i] + '</li>');
               i++;
            }
          }
      },
    })
  })
   

    

})