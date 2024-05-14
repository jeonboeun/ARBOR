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

  $(function () {
    $(".q_a li").click(function () {
      $(this).children("div").slideToggle()
      $(this).siblings().children("div").slideUp();
      $(this).toggleClass("on").siblings().removeClass("on")
    });
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

  AOS.init({
          duration: 1200 //aos 나타나는 속도
      });

  $(function () {
    $('.news_in a').click(function () {
      alert('구독하기 신청되었습니다.');
      $('.news_in input').val("");
    });
  });