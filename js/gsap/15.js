const horizontal = document.querySelector('.horizontal');
const sections = gsap.utils.toArray('.horizontal>section');
console.log(horizontal.offsetWidth, innerWidth);
gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: horizontal,
		start: 'top top',
		end: () => '+=' + (horizontal.offsetWidth - innerWidth),
		pin: true,
		snap: {
			snapTo: 1 / (sections.length - 1),
			inertia: false, //스크롤 중단시 즉시 스냅으로 이동
			duration: { min: 0.1, max: 0.1 }, //0.1
		},
		invalidateOnRefresh: true,
		anticipatePin: 1,
		scrub: 1,
	},
});
