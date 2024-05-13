$(function () {
    var swiper = new Swiper('.gallery .gallery_inner ', {
      slidesPerView: 4,//보여지는 갤러리 수
      spaceBetween: 10,//갤러리 사이 간격
      speed: 3000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
      },
      pagination: {//블릿 버튼
        el: '.gallery .swiper-pagination',
        clickable: true,
        type: "progressbar",
      },
    });

    //캠프필드 슬라이드 배너
    var swiper = new Swiper('.flowslide_inner ', {
      slidesPerView: 4,//보여지는 갤러리 수
      spaceBetween: 20,//갤러리 사이 간격
      speed: 3000,//버튼을 슬라이드가 넘어가는 시간
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

    //인스타그램 슬라이드 배너
    var swiper = new Swiper('.flowslide_inner2', {
      slidesPerView: 6,//보여지는 갤러리 수
      spaceBetween: 0,//갤러리 사이 간격
      speed: 4000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
    });

    //캠페인 배너
    var swiper = new Swiper('.slide ', {
      speed: 5000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 3000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
      },
      pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
      },
    });

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





    $('.flowslide .swiper-slide').on('mouseover', function () {
      swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
      swiper.autoplay.start();
    });

    // 이벤트 꾸미기
    $('.list1').click(function () {
      $('.popup1').addClass('show');
      $('.popup2').removeClass('show');
      $('.popup3').removeClass('show');
    });

    $('.list2').click(function () {
      $('.popup1').removeClass('show');
      $('.popup2').addClass('show');
      $('.popup3').removeClass('show');
    });

    $('.list3').click(function () {
      $('.popup1').removeClass('show');
      $('.popup2').removeClass('show');
      $('.popup3').addClass('show');
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

  });