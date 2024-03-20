//01. 이미지에 pin 애니메이션 주기
const ani1 = gsap.timeline();
ani1
  .to(".sec1 .box", { rotation: 450, scale: 0, borderRadius: 200 })
  .to(".sec1 .box", { rotation: 360 * 5, scale: 1, borderRadius: 20 });

ScrollTrigger.create({
  animation: ani1,
  trigger: ".sec1",
  start: "top top",
  end: "+=2000", //시작부분부터 2000px 스크롤 후 종료
  scrub: true,
  pin: true,
  markers: true,
  anticipatePin: 1,
});

//02. 순차표시
const ani2 = gsap.timeline(/* { repeat: -1, yoyo: true } */);
ani2
  .from(".sec2 .i1", { y: 200, autoAlpha: 0 })
  .from(".sec2 .i2", { y: 100, autoAlpha: 0 })
  .from(".sec2 .i3", { y: -100, autoAlpha: 0 });

ScrollTrigger.create({
  animation: ani2,
  trigger: ".sec2",
  start: "top top",
  end: "+=2000", //시작부분부터 2000px 스크롤 후 종료
  scrub: true,
  pin: true,
  markers: true,
  anticipatePin: 1,
});

// 03. 랜덤
const ani3 = gsap.timeline();
ani3.from(".sec3 .box", {
  y: -300,
  scale: 0.5,
  autoAlpha: 0,
  ease: "back.out(4)",
  //stagger:0.3, //0.3초 간격으로 실행
  stagger: {
    amount: 3,
    from: "random",
  },
});

ScrollTrigger.create({
  animation: ani3,
  trigger: ".sec3",
  start: "top top",
  end: "+=2000", //시작부분부터 2000px 스크롤 후 종료
  scrub: true,
  pin: true,
  markers: true,
  anticipatePin: 1,
});

//04. 줌인
const ani4 = gsap.timeline();
ani4.from(".sec4 .box", {
  autoAlpha: 0,
  scale: 5,
  width: "100vw",
  height: "100vh",
});

ScrollTrigger.create({
  animation: ani4,
  trigger: ".sec4",
  start: "top top",
  end: "+=3000", //시작부분부터 3000px 스크롤 후 종료
  scrub: true,
  pin: true,
  markers: true,
  anticipatePin: 1,
});

//05. 텍스트
const ani5 = gsap.timeline();
ani5
  .to(".sec5 .t1", { xPercent: 300 })
  .to(".sec5 .t2", { xPercent: -300 }, "-=1")
  .to(".sec5 .t3", { xPercent: 300 })
  .to(".sec5 .t4", { xPercent: -300 });
// ani5
//   .to(".sec5 .t1", { xPercent: 300 })
//   .to(".sec5 .t2", { xPercent: -300 }, "text")
//   .to(".sec5 .t3", { xPercent: 300 },"text")
//   .to(".sec5 .t4", { xPercent: -300 },"text");

ScrollTrigger.create({
  animation: ani5,
  trigger: ".sec5",
  start: "top top",
  end: "+=3000", //시작부분부터 3000px 스크롤 후 종료
  scrub: true,
  pin: true,
  markers: true,
  anticipatePin: 1,
});

//06. 줌아웃
const ani6 = gsap.timeline();
ani6
  .to(".sec6 .text", { scale: 60, duration: 2 })
  .to(".sec6 .text", { autoAlpha: 0 });

ScrollTrigger.create({
  animation: ani6,
  trigger: ".sec6",
  start: "top top",
  end: "+=4000", //시작부분부터 4000px 스크롤 후 종료
  scrub: true,
  pin: true,
  markers: true,
  anticipatePin: 1,
});

//07. 텍스트 롤링
const ani7 = gsap.timeline();
ani7
  .from(".sec7 .t1", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".sec7 .t2", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".sec7 .t3", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".sec7 .t4", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".sec7 .t5", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".sec7 .t6", { autoAlpha: 0, duration: 1, y: 50 }, "+=1")
  .from(".sec7 .t7", { autoAlpha: 0, duration: 1, y: 50 }, "+=1");

ScrollTrigger.create({
  animation: ani7,
  trigger: ".sec7",
  start: "top top",
  end: "+=6000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});

//08. 애니메이션
const ani8 = gsap.timeline();
ani8
  .from(".sec8 .t1", { x: innerWidth * 1 })
  .from(".sec8 .t2", { x: innerWidth * -1 })
  .from(".sec8 .t3", { x: innerWidth * 1 })
  .from(".sec8 .box", { x: innerWidth * 1, rotation: 360, scale: 5.5 });

ScrollTrigger.create({
  animation: ani8,
  trigger: ".sec8",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});

//09. 이미지줌아웃
const ani9 = gsap.timeline();
ani9.to(".sec9 .box", { scale: 33 }).to(".sec9 .box", { autoAlpha: 0 });

ScrollTrigger.create({
  animation: ani9,
  trigger: ".sec9",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});
