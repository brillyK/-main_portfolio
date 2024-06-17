// Section 3 : left descirption / tokenpost-num
gsap.to('.sec-left-icon', {
    rotation: 360,
    duration: 2,
    repeat: -1,
    repeatDelay: 3,
    ease: 'none',
})

gsap.fromTo(
    '.shakingeyes',
    {
        x: 30,
        rotation: 0,
    },
    {
        x: 80,
        duration: 1,
        yoyo: true,
        repeat: -1,
    },
)

// Section : left descirption / sec-left-arrows
gsap.to('.sec-left-arrows-txt', {
    duration: 0.3,
    y: 10,
    ease: 'circ.in',
    repeat: -1,
    yoyo: true,
})

Sticker.init('.sticker')
