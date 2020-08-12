/**
 * Общие скрипты
 **/

$(window).load(function(){
    var msnry = new Masonry( '.integrate__list-grid', {
        percentPosition: true,
        resize: true,
        gutter: $(window).width() > 1024 ? 40 : 32
    });
});

$(document).scroll(function() {
  var top = $(document).scrollTop();

  if ($(window).width() > 768) {
    if(top > 132) {
      $(".header").addClass('fix');
      $("body").addClass('fix');
    } else {
      $(".header").removeClass('fix');
      $("body").removeClass('fix');
    }
  }
});

$(window).resize(function() {
  var top = $(document).scrollTop();

  if ($(window).width() > 768) {
    if(top > 132) {
      $(".header").addClass('fix');
      $("body").addClass('fix');
    } else {
      $(".header").removeClass('fix');
      $("body").removeClass('fix');
    }
  } else {
    if($(".header").hasClass("fix")) $(".header").removeClass('fix');
    if($("body").hasClass("fix")) $("body").removeClass('fix');
  }
});
