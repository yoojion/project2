const fix = document.querySelector(".fix");
const sections = gsap.utils.toArray(".fix>section");
const scrollAni = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: fix,
    start: "top top",
    //end: () => `+= ${fix.offsetWidth - innerWidth}`,
    end: () => "+=" + (fix.offsetWidth - innerWidth),
    pin: true,
    anticipatePin: 1,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: true,
  },
});

gsap.to(".sec4 .img", {
  y: -200,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".sec4 .img",
    containerAnimation: scrollAni,
    start: "left center",
    markers: true,
    id: "box4",
    toggleActions: "play none reverse none",
  },
});
gsap.to(".sec5 .img", {
  rotation: 720,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".sec5 .img",
    containerAnimation: scrollAni,
    start: "left center",
    markers: true,
    id: "box5",
    toggleActions: "play none reverse none",
  },
});
