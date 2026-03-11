const colorButtons = document.querySelectorAll(".ReEpic_colorButton");
const mainVisual = document.querySelector(".ReEpic_mainVisual");
const slides = document.querySelectorAll(".ReEpic_slide");
const arrows = document.querySelectorAll(".ReEpic_arrow");
const sliderTrack = document.querySelector(".ReEpic_sliderTrack");
const productNameEl = document.querySelector(".ReEpic_productName");
let currentSlide = 0;

function showSlide(index) {
  const isWrappingForward = currentSlide === slides.length - 1 && index === 0;
  const isWrappingBackward = currentSlide === 0 && index === slides.length - 1;

  if (isWrappingForward) {
    // Taupe(3) → Everything(0)
    sliderTrack.style.transition = "none";
    sliderTrack.style.transform = `translateX(${100}%)`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sliderTrack.style.transition = "transform 0.5s ease";
        sliderTrack.style.transform = `translateX(${0}%)`;
      });
    });
  } else if (isWrappingBackward) {
    // Everything(0) → Taupe(3)
    sliderTrack.style.transition = "none";
    sliderTrack.style.transform = `translateX(${-400}%)`; // 4 Slides
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sliderTrack.style.transition = "transform 0.5s ease";
        sliderTrack.style.transform = `translateX(${-index * 100}%)`;
      });
    });
  } else {

    const offset = -index * 100;
    sliderTrack.style.transition = "transform 0.5s ease";
    sliderTrack.style.transform = `translateX(${offset}%)`;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  colorButtons.forEach((btn) => btn.classList.remove("active"));
  colorButtons[index].classList.add("active");

  const newImgPath = colorButtons[index].getAttribute("data-img");
  if (newImgPath) {
    mainVisual.style.backgroundImage = `url('${newImgPath}')`;
  }

  const names = [
    "Titan TP-Epic 4D",
    "Titan TP-Epic 4D Black",
    "Titan TP-Epic 4D Brown",
    "Titan TP-Epic 4D Taupe",
  ];
  productNameEl.textContent = names[index];

  currentSlide = index;
}

window.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
});

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

colorButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showSlide(index);
  });
});
