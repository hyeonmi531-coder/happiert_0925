function productListSwiperInit() {
  const swiper = new Swiper(".product-list-wrap .swiper", {
    loop: true /* 슬라이드 반복 여부 */,
    speed: 1000 /* 슬라이드 넘어가는 속도 */,
    // spaceBetween: 20,
    slidesPerView: "auto",
    slidesPerGroup: 1,
    breakpoints: {
      // when window width is >= 1024px 화면의 너비가 1024px 이상일 때
      1024: {
        slidesPerView: 3 /* 한 화면당 보여질 슬라이드 개수 */,
        spaceBetween: 35 /* 슬라이드간의 간격 */,
        slidesPerGroup: 3 /* 한 화면당 슬라이드시 넘어갈 슬라이드 개수 */,
      },
    },
  });
}

productListSwiperInit();

// 1. 필요한 요소들 찾기
const marquee = document.querySelector(".marquee");
const wrapper = document.querySelector(".marquees_wrapper");

// 2. 기본 설정
let position = 0; // 현재 위치
let speed = 1; // 현재 속도 (1 = 보통, 0.3 = 느림)
let targetSpeed = 1; // 목표 속도

// 3. 마우스 올렸을 때 / 뗐을 때
wrapper.addEventListener("mouseenter", function () {
  targetSpeed = 0.3; // 느리게
});

wrapper.addEventListener("mouseleave", function () {
  targetSpeed = 1; // 원래 속도
});

// 4. 애니메이션 함수
function moveMarquee() {
  // 속도를 부드럽게 변경(속도 보간)
  speed = speed + (targetSpeed - speed) * 0.1;

  // 위치 이동
  position = position - speed;

  // 너무 많이 이동하면 처음으로 되돌리기
  if (position < -marquee.scrollWidth / 2) {
    position = 0;
  }

  // 실제로 움직이기
  marquee.style.transform = "translateX(" + position + "px)";

  // 계속 반복
  requestAnimationFrame(moveMarquee);
}
// 5. 시작!
moveMarquee();
