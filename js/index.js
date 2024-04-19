gsap.registerPlugin(ScrollTrigger);

gsap.from ('.card', {
    y: 400,
    opacity: 0,
    duration: 5,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".container-flex",
        start: "top 80%",
    }
});

gsap.from ('#image', {
    xPercent: -150,
    duration: 5,
    ease: "power4.out",
    opacity: 0,
    scrollTrigger: {
        trigger: ".box3",
        start: "top 80%",
    }
})

gsap.from ('#text', {
    xPercent: 150,
    duration: 5,
    ease: "power4.out",
    opacity: 0,
    scrollTrigger: {
        trigger: ".box3",
        start: "top 80%",
        scrub: true,
    } 
})

gsap.from ('.scale--anim', {
    scale: 100,
    duration: 2,
})