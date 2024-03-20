//1. 섹션 한개만 고정하기
function fn1() {
  const panel = document.querySelector(".sec3");
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
}
//2. 섹션 여러개 고정하기
function fn2() {
  gsap.utils.toArray(".box").forEach((panel) => {
    console.log(panel);
    ScrollTrigger.create({
      trigger: panel, //순환하는 .box
      start: "top top",
      pin: true,
    });
  });
}

//3. 스냅 고정하기
function fn3() {
  let panels = gsap.utils.toArray(".box");

  let tops = panels.map(function (panel, i) {
    return ScrollTrigger.create({
      trigger: panel,
      start: "top top",
    });
  });
  panels.forEach((panel) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: true,
    });
  });
  ScrollTrigger.create({
    snap: {
      snapTo: (progress, self) => {
        let panelStart = tops.map((st) => {
          return st.start;
        });
        let snapScroll = gsap.utils.snap(panelStart, self.scroll());
        console.log(panelStart);
        return gsap.utils.normalize(
          0,
          ScrollTrigger.maxScroll(window),
          snapScroll
        );
      },
    },
    duration: 0.5,
  });
}
fn3();
