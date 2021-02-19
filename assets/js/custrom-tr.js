$(document).ready(function() {
	new WOW().init();

  $('.element_slider').slick({
    dots: false,
    slidesToShow: 1,
    autoplay: false,
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