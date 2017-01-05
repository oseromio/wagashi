$(function(){
  $('.carousel').carousel({
    interval: 2500
  });

  // $('.fa-heart-o').click(function(){
  //   $(this).parent('.heart').html('<i class="fa fa-heart" aria-hidden="true"></i>');
  // });
  //
  //   $('.fa-heart').click(function(){
  //     $(this).fadeOut()
  //   });

    // $('.heart').click(function(){
    //     var $answer = $(this).find('.fa-heart');
    //    if($answer.hasClass('open')){
    //      $answer.removeClass('open');
    //      $(this).find("span").html("<i class="fa fa-heart" aria-hidden="true" class="favorite"></i>");
    //    } else{
    //      $answer.addClass('open');
    //      $answer.slideDown('open');
    //      $(this).find("span").html("<i class="fa fa-heart-o" aria-hidden="true" class="favorite"></i>");
    //    }
    //      });

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
   $("header").css("background-color" , "rgba(60,100,51, 0.5)");
 } else {
   $("header").css("background-color","rgba(255, 255, 255, 0)")
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
    }, 500)
});

$('disappear a').click(function(){
  var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500)
});

});
