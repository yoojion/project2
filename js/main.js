$(".dep1").on({
  mouseenter: function () {
    $(".header_bottom_wrap").addClass("active");
    $(this).find(".dep2").stop().slideDown();
  },
  mouseleave: function () {
    $(".header_bottom_wrap").removeClass("active");
    $(".dep2").stop().slideUp();
  },
});
