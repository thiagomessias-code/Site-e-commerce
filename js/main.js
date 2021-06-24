(function ($) {

  "use strict";

  /* 
     CounterUp
     ========================================================================== */
  $('.counter').counterUp({
    time: 500
  });

  /* 
     MixitUp
     ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
     Clients Sponsor 
     ========================================================================== */
  var owl = $("#clients-scroller");
  owl.owlCarousel({
    items: 5,
    itemsTablet: 3,
    margin: 90,
    stagePadding: 90,
    smartSpeed: 450,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 3],
    itemsTablet: [767, 2],
    itemsTabletSmall: [480, 2],
    itemsMobile: [479, 1],
  });

  /* Testimonials Carousel 
  ========================================================*/
  var owl = $("#testimonials");
  owl.owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    stopOnHover: true,
    autoPlay: true,
    items: 2,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 1],
    itemsTablet: [767, 1],
    itemsTabletSmall: [480, 1],
    itemsMobile: [479, 1],
  });

  /* 
     Touch Owl Carousel
     ========================================================================== */
  var owl = $(".touch-slider");
  owl.owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    stopOnHover: true,
    autoPlay: true,
    items: 1,
    itemsDesktopSmall: [1024, 1],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1]
  });

  $('.touch-slider').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
  $('.touch-slider').find('.owl-next').html('<i class="lni-chevron-right"></i>');

  /* 
     Sticky Nav
     ========================================================================== */
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
      $('.header-top-area').addClass('menu-bg');
    } else {
      $('.header-top-area').removeClass('menu-bg');
    }
  });

  /* 
     Back Top Link
     ========================================================================== */
  var offset = 200;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });

  $('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  })

  /* 
     One Page Navigation & wow js
     ========================================================================== */
  //Initiat WOW JS
  new WOW().init();

  // one page navigation 
  $('.main-navigation').onePageNav({
    currentClass: 'active'
  });

  $(window).on('load', function () {

    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 195
    });

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.fixed-top').addClass('menu-bg');
      } else {
        $('.fixed-top').removeClass('menu-bg');
      }
    });

  });
  /* Nivo Lightbox
    ========================================================*/
  $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


  /* stellar js
    ========================================================*/
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 30,
    responsive: false
  });

  /* 
     Page Loader
     ========================================================================== */
  $(window).on('load', function () {
    "use strict";
    $('#loader').delay(2000).fadeOut("slow");
  });

}(jQuery));

/*slide about
  ========================================================*/


$(document).ready(function () {

  var slids = $(".div-slider [type=radio]"); // busca os radios na div
  var slids_len = slids.length; // conta o número de radios
  var intervalo = 5; // intervalo em segundos

  function rodar() {
    var slids_ativo = $(".div-slider [type=radio]:checked")
      .attr("id")
      .match(/\d+/)[0]; // pega o valor numérico do id do radio checado

    if (slids_ativo == slids_len) slids_ativo = 0; // se estiver no último slide, volta pro primeiro

    slids.eq(slids_ativo).prop("checked", true); // checa o radio da vez
  }

  var tempo = setInterval(rodar, intervalo * 1000); // inicia o temporizador

  $(".div-slider").hover(
    function () { // função quando entra o mouse
      clearInterval(tempo); // cancela o temporizador
    },
    function () { // função quando retira o mouse
      tempo = setInterval(rodar, intervalo * 1000); // reinicia o temporizador
    }
  );

});