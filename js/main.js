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

const img1 = $(".img_wrap1 .img1");
const content_wrap = $(".img_wrap1 .content_wrap");
const img2 = $(".section2_img_wrap .img2");
const img3 = $(".section2_img_wrap .img3");

gsap.from(img1, {
  x: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: img1,
    toggleActions: "restart none reverse none",
    strat: "-50% 0%",
    end: "top 50%",
    markers: true,
    scrub: 5,
  },
});
gsap.from(content_wrap, {
  x: 300,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: content_wrap,
    toggleActions: "restart none reverse none",
    strat: "80% 0%",
    end: "top 50%",
    markers: true,
    scrub: 5,
  },
});

// gsap.from(img2, {
//   x: 300,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: img2,
//     toggleActions: "restart none reverse none",
//     strat: "50% 0%",
//     end: "top 50%",
//     markers: true,
//     scrub: 5,
//   },
// });

// gsap.from(img3, {
//   x: 300,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: img3,
//     toggleActions: "restart none reverse none",
//     strat: "50% 0%",
//     end: "top 50%",
//     markers: true,
//     scrub: 5,
//   },
// });
