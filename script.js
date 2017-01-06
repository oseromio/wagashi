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
   $(".header").css("background-color" , "rgba(255, 255, 255, 0.9");
 } else {
   $(".header").css("background-color","rgba(255, 255, 255, 0)");
 }
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 430) {
 $("#ham-menu").css("background-color" , "rgba(255,255,255,0.9)");
} else {
 $("#ham-menu").css("background-color","rgba(255, 255, 255, 0.9)");
}
});

// トップへ戻るボタン
  $('#top-btn').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    }, 500);
  });

// ページ内リンク
$('.cadegory-btn a').click(function(){
  var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 700)
});

$('.disappear a').click(function(){
  var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 700)
});

$('#ham-menu a').click(function(){
  var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 700)
});

// $('.bars').click(function(){
//    $('#ham-menu').fadeIn();
//  });



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
});
