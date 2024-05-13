$(function () {
    var swiper = new Swiper('.gallery .gallery_inner ', {
      slidesPerView: 4,//보여지는 갤러리 수
      spaceBetween: 10,//갤러리 사이 간격
      speed: 1800,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 2000,//자동으로 넘어가기 전 머무르는 시간
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

    $(function () {
      $('.tabcontent > div').hide();
      $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
      }).filter(':eq(0)').click();
    });

    // 액티비티별

    $(function () {
      var swiper = new Swiper('.gallery-center_inner ', {
        slidesPerView: 4,//보여지는 갤러리 수
        spaceBetween: 30,//갤러리 사이 간격
        centeredSlides: true,//센터모드
        speed: 2000,//버튼을 슬라이드가 넘어가는 시간
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

    //마지막 광고 배너
    $(function () {
          var swiper = new Swiper('.slide ', {
              speed: 3000,//버튼을 슬라이드가 넘어가는 시간
              autoplay: {
                  delay: 2500,//자동으로 넘어가기 전 머무르는 시간
                  disableOnInteraction: false,
              },
              loop: true,//슬라이드 무한반복
              navigation: {//화살표 버튼
                  nextEl: '.slide .swiper-button-next',
                  prevEl: '.slide .swiper-button-prev',
              },
              pagination: {//블릿 버튼
                  el: '.slide .swiper-pagination',
        type: "fraction",
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



  });