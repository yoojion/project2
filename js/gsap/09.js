// const box1 = document.querySelector(".sec1 .box");
// const box2 = document.querySelector(".sec2 .box");
// const box3 = document.querySelector(".sec3 .box");
// const box4 = document.querySelector(".sec4 .box");
// const box5 = document.querySelector(".sec5 .box");
// const box6 = document.querySelector(".sec6 .box");
// const box7 = document.querySelector(".sec7 .box");
// const box8 = document.querySelector(".sec8 .box");

const box1 = $(".section1 .box");
const box2 = $(".section2 .box");
const box3 = $(".section3 .box");
const box4 = $(".section4 .box");
const box5 = $(".section5 .box");
const box6 = $(".section6 .box");
const box7 = $(".section7 .box");
const box8 = $(".section8 .box");

//1
gsap.to(box1, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
});

//2
gsap.to(box2, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
  backgroundColor: "yellow",
  scrollTrigger: {
    trigger: box2,
  },
});

//3
gsap.to(box3, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
  backgroundColor: "yellow",
  scrollTrigger: {
    trigger: box3,
    //onEnter:진입시,onLeave:떠날때,onEnterBack:재진입,onLeaveBack:다시나갈때
    toggleActions: "play none reverse none",
  },
});

//4 start,end
gsap.to(box4, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
  backgroundColor: "yellow",
  scrollTrigger: {
    trigger: box4,
    toggleActions: "play none reverse none",
    strat: "top 50%",
    end: "bottom 20%",
    markers: true,
  },
});

//5
gsap.to(box5, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
  backgroundColor: "yellow",
  scrollTrigger: {
    trigger: box5,
    toggleActions: "play none reverse none",
    strat: "top 50%",
    end: "bottom 20%",
    markers: true,
    scrub: 1,
  },
});

//6
gsap.to(box6, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
  backgroundColor: "yellow",
  scrollTrigger: {
    trigger: box6,
    toggleActions: "play none reverse none",
    strat: "top 50%",
    end: "bottom 20%",
    markers: true,
    scrub: 1,
    pin: true,
  },
});

//7 toggleClass
gsap.to(box7, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
  backgroundColor: "yellow",
  scrollTrigger: {
    trigger: box7,
    toggleActions: "play none reverse none",
    strat: "top 50%",
    end: "bottom 20%",
    markers: false,
    scrub: 1,
    id: "박스7",
    toggleClass: "active",
  },
});

//8 callback
gsap.to(box8, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
  backgroundColor: "yellow",
  scrollTrigger: {
    trigger: box8,
    strat: "top center",
    end: "bottom 20%",
    markers: true,
    scrub: 1,
    id: "박스8",
    onEnter: () => {
      console.log("enter");
    },
    onLeave: () => {
      console.log("leave");
    },
    onEnterBack: () => {
      //$(".section8").css("background","pink")
      document.querySelector(".section8").style.background = "pink";
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
    },
    onUpdate: () => {
      console.log("onUpdate");
    },
    onToggle: (self) => {
      console.log("onToggle", self.isActive);
      myAni(self.isActive)
    },
  },
});

function myAni(x) {
  if (x) {
    const txt = "<span>1</span>";
    box8.parent().append(txt);
  }
}
