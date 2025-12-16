/* =========================================
   [수정됨] script.js - 즉시 실행 구조
   ========================================= */

// 1. 데이터 정의
const slideData = [
    {
        chair: "images/0.ion_color_both.png", 
        btnNormal: "images/7.ion_swatch_all.png",
        btnSelected: "images/10.ion_swatch_all_selected.png"
    },
    {
        chair: "images/3.ion_color_black.png", 
        btnNormal: "images/8.ion_swatch_black.png",
        btnSelected: "images/11.ion_swatch_black_selected.png"
    },
    {
        chair: "images/2.ion_color_brown.png", 
        btnNormal: "images/9.ion_swatch_brown.png",
        btnSelected: "images/12.ion_swatch_brown_selected.png"
    }
];

let currentIndex = 0; // 현재 선택된 인덱스

// 2. 화면 업데이트 함수
function updateDisplay() {
    const imgEl = document.getElementById("current-chair");
    const btnImages = document.querySelectorAll(".color-btn");

    // (1) 메인 의자 이미지 변경
    if(imgEl) {
        // 부드러운 전환을 위한 투명도 조절
        imgEl.style.opacity = 0.5; 
        
        setTimeout(() => {
            imgEl.src = slideData[currentIndex].chair;
            imgEl.style.opacity = 1;
        }, 150);
    }

    // (2) 버튼 활성화 상태 변경
    if(btnImages) {
        btnImages.forEach((btn, index) => {
            if (index === currentIndex) {
                btn.src = slideData[index].btnSelected;
                btn.classList.add("active");
            } else {
                btn.src = slideData[index].btnNormal;
                btn.classList.remove("active");
            }
        });
    }
}

// 3. 버튼 클릭 기능 (window 객체에 직접 등록하여 HTML onclick에서 바로 찾을 수 있게 함)
window.moveSlide = function(direction) {
    currentIndex += direction;
    
    // 순환 로직: 마지막에서 다음 누르면 처음으로, 처음에서 이전 누르면 마지막으로
    if (currentIndex >= slideData.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slideData.length - 1;
    
    updateDisplay();
};

window.changeColor = function(index) {
    currentIndex = index;
    updateDisplay();
};