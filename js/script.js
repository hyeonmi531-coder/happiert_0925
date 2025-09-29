function productListSwiperInit() {
  const swiper = new Swiper(".product-list-wrap .swiper", {
    loop: true /* 슬라이드 반복 여부 */,
    slidesPerView: 3 /* 한 화면당 보여질 슬라이드 개수 */,
    spaceBetween: 35 /* 슬라이드간의 간격 */,
    slidesPerGroup: 3 /* 한 화면당 슬라이드시 넘어갈 슬라이드 개수 */,
    speed: 1000 /* 슬라이드 넘어가는 속도 */,
  });
}

productListSwiperInit();
