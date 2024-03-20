gsap.to(".box-3", {
  scrollTrigger: {
    trigger: ".box-3",
    start: "0% 20%", //요소기준, 윈도우기준
    end: "100% 80%",
    markers: true, //화면에 가이드 선 표시
  },
  x: 300,
  rotation: 360,
});

gsap.to(".box-4", {
  scrollTrigger: {
    trigger: ".box-4",
    start: "-50% 10%", //요소기준, 윈도우기준
    end: "150% 30%",
    markers: true, //화면에 가이드 선 표시
    id: "박스4",
    scrub: 3,
  },
  x: 300,
  rotation: 360,
});
