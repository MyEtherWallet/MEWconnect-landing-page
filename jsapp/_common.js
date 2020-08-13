/**
 * Общие скрипты
 **/

var msnry

$(window).load(function(){
    msnry = new Masonry( '.integrate__list-grid', {
        percentPosition: true,
        initLayout: true,
        resize: true,
        gutter: $(window).width() > 928 ? 40 : 32
    });

    $('.js-toggle').on('click', function(){
      $(this).toggleClass('close');
      $('.js-menu').toggleClass('open');
      $(".header").toggleClass('open');
    });
});

$(document).scroll(function() {
  var top = $(document).scrollTop();

  if(top > 132) {
    $(".header").addClass('fix');
    $("body").addClass('fix');
  } else {
    $(".header").removeClass('fix');
    $("body").removeClass('fix');
  }
});

$(window).resize(function() {
  var top = $(document).scrollTop();

  /*msnry.masonry({
    gutter: $(window).width() > 927 ? 40 : 32
  })*/

  if(top > 132) {
    $(".header").addClass('fix');
    $("body").addClass('fix');
  } else {
    $(".header").removeClass('fix');
    $("body").removeClass('fix');
  }

  if($('.js-menu').hasClass('open')) $('.js-menu').toggleClass('open');
  if($('.header').hasClass('open')) $('.js-menu').toggleClass('open');
});
