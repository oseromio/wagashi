$(function(){
  $('.carousel').carousel({
    interval: 2500
  });
  $('.fa-heart-o').click(function(){
     if($(this).hasClass('fa-heart-o')){
       $(this).removeClass('fa-heart-o');
       $(this).addClass('fa-heart');
     } else{
       $(this).addClass('fa-heart-o')
     }
   });
  //headerのスクロール色表示
  $(window).scroll(function() {
      if ($(window).scrollTop() >= 430) {
          $("header").css("background-color" , "rgba(231, 228, 211, 0.9)");
      } else {
          $("header").css("background-color","rgba(255, 255, 255, 0)");
      }
  });

// ページ内リンク
  $('.cadegory-btn a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top -50;
      $('html, body').animate({
        'scrollTop': position
    }, 700)
  });

  $('#ham-menu a').click(function(){
    var id = $(this).attr('href')
    var position = $(id).offset().top -50;
      $('html, body').animate({
        'scrollTop': position
    }, 700)
  });

  $('.fa-bars').click(function(){
    if($(this).hasClass('fa-bars')){
      $(this).removeClass('fa-bars');
      $(this).addClass('fa-times');
      $('#ham-menu').fadeIn();
    } else{
      $(this).addClass('fa-bars')
      $('#ham-menu').fadeOut();
   }
    });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top -50;

    $('html, body').animate({
      scrollTop: position
    }, 500);
  });
  });
