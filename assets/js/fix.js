$(function () {
    // responsive
    if ($(window).width() < 991) {
        $("#icon-click").click(function () {
            $("#mobile-sidebar-view").css("display", "block");
        });
    }
    $(".close-popup").click(function () {
        $("#popup-enroll").css("display", "none");
    });
    // close sidebar
    $(".close-sidebar").click(function () {
        $("#mobile-sidebar-view").css("display", "none");
    });
    $(".shadow-bg").click(function () {
        $("#popup-enroll").css("display", "none");
        $("#mobile-sidebar-view").css("display", "none");
    });

    // accordion
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        // Variables privadas
        var links = this.el.find(".link");
        // Evento
        links.on("click", {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown);
    };
    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        ($this = $(this)), ($next = $this.next());
        $next.slideToggle();
        $this.parent().toggleClass("open");
        if (!e.data.multiple) {
            $el
                .find(".submenu")
                .not($next)
                .slideUp()
                .parent()
                .removeClass("open");
        }
    };
    var accordion = new Accordion($("#accordion"), false);
});
$(".close-popup").click(function () {
    $(".popup-enroll").removeClass("active");
    //$(".popup-enroll").css("display", "none");return false;
});$(document).ready(function () {
    $(".site33_bann_col0_slide .list-item").owlCarousel({
        items: 1,
        slideSpeed: 300,
        autoPlay: 6000,
        pagination: true,
        // navigation: true,
        lazyLoad: true,
        itemsDesktop: [900, 1],
        itemsDesktopSmall: [600, 1],
        itemsTablet: [560, 1]
    });
})

