// JavaScript 코드
window.addEventListener('scroll', function () {
    // 현재 스크롤 위치 가져오기
    var scrollY = window.scrollY

    // b3.png 이미지 초기 위치 설정
    var bImage = document.querySelector('.c-hero__letter-b')
    var initialPositionX_B = -100 // 초기 위치를 -100%로 설정

    // k3.png 이미지 초기 위치 설정
    var kImage = document.querySelector('.c-hero__letter-k')
    var initialPositionX_K = 0 // 초기 위치를 0%로 설정

    // b3.png 이미지 왼쪽으로 이동
    var moveX_B = initialPositionX_B - scrollY / 5 // 움직일 거리 계산
    bImage.style.transform = 'translateX(' + moveX_B + '%) translateY(-50%)'

    // k3.png 이미지 오른쪽으로 이동
    var moveX_K = initialPositionX_K + scrollY / 5 // 움직일 거리 계산
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
