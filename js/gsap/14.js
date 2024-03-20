const sections = gsap.utils.toArray("section");
console.log(sections);
const move = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "main",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: "+=7000",
  },
});
console.log(ScrollTrigger.isTouch);
if (ScrollTrigger.isTouch > 0) {
  move;
}
