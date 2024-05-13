$(function () {
    // 스크롤 고정 되는
    var scrollOffset = $('.scroll-menu').offset();

    $(window).scroll(function () {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('.scroll-menu').addClass('scroll-fixed');
      }
      else {
        $('.scroll-menu').removeClass('scroll-fixed');
      }
    });

    // 트래블 슬라이드
    var swiper = new Swiper('.gallery-center_inner ', {
      slidesPerView: 4,//보여지는 갤러리 수
      spaceBetween: 30,//갤러리 사이 간격
      centeredSlides: true,//센터모드
      speed: 1500,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery-center .swiper-button-next',
        prevEl: '.gallery-center .swiper-button-prev',
      },
      pagination: {//블릿 버튼
        el: '.gallery-center .swiper-pagination',
        clickable: true,
      },
    });
  });

  // 탑으로 올라가는 버튼
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('.top').fadeIn();
    } else {
      $('.top').fadeOut();
    }
  });

  $('.top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });

  AOS.init({
    duration: 1200 //aos 나타나는 속도
  });


  // 리뷰 슬라이드
  $(function () {
    var swiper = new Swiper('.flowslide_inner ', {
      slidesPerView: 4,//보여지는 갤러리 수
      spaceBetween: 60,//갤러리 사이 간격
      speed: 4000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
      swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
      swiper.autoplay.start();
    });
  });