const colorButtons = document.querySelectorAll(".Kairos_colorButton");
const mainVisual = document.querySelector(".Kairos_mainVisual");
const slides = document.querySelectorAll(".Kairos_slide");
const arrows = document.querySelectorAll(".Kairos_arrow");
const sliderTrack = document.querySelector(".Kairos_sliderTrack");
const productNameEl = document.querySelector(".Kairos_productName");
let currentSlide = 0;

// 슬라이드 보여주는 함수
function showSlide(index) {
  const isWrappingForward = currentSlide === slides.length - 1 && index === 0;
  const isWrappingBackward = currentSlide === 0 && index === slides.length - 1;

  if (isWrappingForward) {
    // Taupe(3) → Everything(0) : 오른쪽에서 왼쪽으로 등장
    sliderTrack.style.transition = "none";
    sliderTrack.style.transform = `translateX(${100}%)`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sliderTrack.style.transition = "transform 0.5s ease";
        sliderTrack.style.transform = `translateX(${0}%)`;
      });
    });
  } else if (isWrappingBackward) {
    // Everything(0) → Taupe(3) : 왼쪽에서 오른쪽으로 등장
    sliderTrack.style.transition = "none";
    sliderTrack.style.transform = `translateX(${-400}%)`; // 4개 슬라이드 기준
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sliderTrack.style.transition = "transform 0.5s ease";
        sliderTrack.style.transform = `translateX(${-index * 100}%)`;
      });
    });
  } else {
    // 일반 이동
    const offset = -index * 100;
    sliderTrack.style.transition = "transform 0.5s ease";
    sliderTrack.style.transform = `translateX(${offset}%)`;
  }

  // 활성화 슬라이드 표시
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  colorButtons.forEach((btn) => btn.classList.remove("active"));
  colorButtons[index].classList.add("active");

  // 배경 이미지와 제품명 변경
  const newImgPath = colorButtons[index].getAttribute("data-img");
  if (newImgPath) {
    mainVisual.style.backgroundImage = `url('${newImgPath}')`;
  }

  const names = [
    "Osaki 5D+4D Kairos Duo",
    "Osaki 5D+4D Kairos Duo Black",
    "Osaki 5D+4D Kairos Duo Brown",
    "Osaki 5D+4D Kairos Duo Taupe",
  ];
  productNameEl.textContent = names[index];

  currentSlide = index;
}

// 초기 설정
window.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
});

// 화살표 클릭 이벤트
arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const isLeft = arrow.classList.contains("left");
    const newIndex = isLeft
      ? currentSlide === 0
        ? slides.length - 1
        : currentSlide - 1
      : currentSlide === slides.length - 1
      ? 0
      : currentSlide + 1;
    showSlide(newIndex);
  });
});

// 버튼 클릭 이벤트
colorButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showSlide(index);
  });
});
