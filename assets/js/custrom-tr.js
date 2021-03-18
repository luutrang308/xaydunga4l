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
  });

  $('.slider_for_detail').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider_nav_detail',
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next3.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next4.png' alt=''></button>",
  });
  $('.slider_nav_detail').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider_for_detail',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  $('.element_faq .faq_item').click(function(event) {
    if ($('.element_faq').hasClass('element_faq_click')) {
      $('.element_faq .faq_item').not($(this)).removeClass('active');
    }
    $(this).toggleClass('active');
    event.stopPropagation();
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