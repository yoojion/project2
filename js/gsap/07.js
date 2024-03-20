const bg = document.querySelectorAll("section");
const color = { r: 255, g: 255, b: 255 };
bg.forEach((o, i) => {
  o.style.backgroundColor = `rgb(${color.r - (i + 1 * 100)},${
    color.g - i * 50
  },${color.b - i * 50})`;
});

//scrollTrigger
gsap.to(".box", {
  scrollTrigger: ".box",
  x: "90vw",
});
