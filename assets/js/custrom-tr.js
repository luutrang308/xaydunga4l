$(document).ready(function() {
	new WOW().init();

  $('.element_slider').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: false,
  });

  $('.slider_project').slick({
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next3.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next4.png' alt=''></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider_for_detail').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider_nav_detail',
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next3l.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next4l.png' alt=''></button>",
  });
  $('.slider_nav_detail').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider_for_detail',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next3l.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next4l.png' alt=''></button>",
  });

  $('.element_faq .faq_item').click(function(event) {
    if ($('.element_faq').hasClass('element_faq_click')) {
      $('.element_faq .faq_item').not($(this)).removeClass('active');
    }
    $(this).toggleClass('active');
    event.stopPropagation();
  });

  $('.slider_hp').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    lazyLoad: 'ondemand',
  });


    
});

/*counter number*/
$.Tween.propHooks.number = {
  get: function(tween) {
    var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
    return parseFloat(num) || 0;
  },

  set: function(tween) {
    var opts = tween.options;
    tween.elem.innerHTML =
      (opts.prefix || "") +
      tween.now.toFixed(opts.fixed || 0) +
      (opts.postfix || "");
  }
};

$("#num-1").animate(
  { number: 20 },
  {
    duration: 2000,
    postfix: ""
  }
);

$("#num-2")
.delay(0)
.animate(
  { number: 100 },
  {
    duration: 1500,
    postfix: "+"
  }
);

$("#num-3")
.delay(0)
  .animate(
  { number: 100 },
  {
      duration: 2000,
      postfix: "+"
  }
);

var mobi = $( window ).width();
if(mobi < 992) {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.site33_head_col12_menu.site33_head_col12_menu_fixed_hp').addClass('fixmobi');
    } else {
      $('.site33_head_col12_menu.site33_head_col12_menu_fixed_hp').removeClass('fixmobi');
    }
  });
}

