window.addEventListener('scroll', function () {
    // 현재 스크롤 위치 가져오기
    var scrollY = window.scrollY

    // b3.png 이미지 초기 위치 설정
    var bImage = document.querySelector('.c-hero__letter-b')
    var initialPositionX_B = -100 // 초기 위치를 -100%로 설정

    // k3.png 이미지 초기 위치 설정
    var kImage = document.querySelector('.c-hero__letter-k')
    var initialPositionX_K = 0

    // b3.png 이미지 왼쪽으로 이동
    var moveX_B = initialPositionX_B - scrollY / 5
    bImage.style.transform = 'translateX(' + moveX_B + '%) translateY(-50%)'

    // k3.png 이미지 오른쪽으로 이동
    var moveX_K = initialPositionX_K + scrollY / 5
    kImage.style.transform = 'translateX(' + moveX_K + '%) translateY(-50%)'
})

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

AOS.init({
    //key : value
    offset: 120,
    delay: 0,
    duration: 600,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
})

document.addEventListener('DOMContentLoaded', () => {
    const careerContainer = document.getElementById('career')
    const nextSection = document.getElementById('next-section')

    careerContainer.addEventListener('scroll', () => {
        if (careerContainer.scrollTop + careerContainer.clientHeight >= careerContainer.scrollHeight) {
            // 스크롤이 끝에 도달했을 때 다음 섹션으로 이동
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    })
})
