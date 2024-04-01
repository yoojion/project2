$(".dep2").hide();
$(".dep1").on({
  mouseenter: function () {
    $(".header_bottom_wrap").addClass("active");
    $(".dep1_no").removeClass("active");
    $(this).find(".dep2").stop().slideDown();
  },
  mouseleave: function () {
    $(".header_bottom_wrap").removeClass("active");
    $(".dep2").stop().slideUp();
  },
});
// $(".dep1").on({
//   mouseenter: function () {
//     $(".header_bottom_wrap").addClass("active");
//   },
//   mouseleave: function () {
//     $(".header_bottom_wrap").removeClass("active");
//   },
// });

const img1 = $(".img_wrap1 .img1");
const content_wrap1 = $(".img_wrap1 .content_wrap");
const img2 = $(".img_wrap2 .img2");
const content_wrap2 = $(".img_wrap2 .content_wrap");
const img3 = $(".img_wrap3 .img3");
const content_wrap3 = $(".img_wrap3 .content_wrap");

gsap.from(img1, {
  x: 300,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: img1,
    toggleActions: "play pause resume reset",
    strat: "0 0",
    end: "top 50%",
    scrub: 5,
  },
});
gsap.from(content_wrap1, {
  x: 800,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: content_wrap1,
    toggleActions: "play pause resume reset",
    strat: "80% 0%",
    end: "top 50%",
    scrub: 5,
  },
});

gsap.from(img2, {
  x: 300,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: img2,
    toggleActions: "play pause resume reset",
    strat: "0 0",
    end: "top 50%",
    scrub: 5,
  },
});
gsap.from(content_wrap2, {
  x: 800,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: content_wrap2,
    toggleActions: "play pause resume reset",
    strat: "80% 0%",
    end: "top 50%",
    scrub: 5,
  },
});

gsap.from(img3, {
  x: 300,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: img3,
    toggleActions: "play pause resume reset",
    strat: "0 0",
    end: "top 50%",
    scrub: 5,
  },
});
gsap.from(content_wrap3, {
  x: 800,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: content_wrap3,
    toggleActions: "play pause resume reset",
    strat: "80% 0%",
    end: "top 50%",
    scrub: 5,
  },
});
