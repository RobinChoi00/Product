document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 데이터 정의
    const slideData = [
        {
            // 0번: All
            chair: "images/0.ion_color_both.png", 
            btnNormal: "images/7.ion_swatch_all.png",
            btnSelected: "images/10.ion_swatch_all_selected.png"
        },
        {
            // 1번: Black
            chair: "images/3.ion_color_black.jpg", // jpg 확인!
            btnNormal: "images/8.ion_swatch_black.png",
            btnSelected: "images/11.ion_swatch_black_selected.png"
        },
        {
            // 2번: Brown
            chair: "images/2.ion_color_brown.jpg", // jpg 확인!
            btnNormal: "images/9.ion_swatch_brown.png",
            btnSelected: "images/12.ion_swatch_brown_selected.png"
        }
    ];

    let currentIndex = 0; 

    // 2. 화면 업데이트 함수
    function updateDisplay() {
        const imgEl = document.getElementById("current-chair");
        const btnImages = document.querySelectorAll(".color-btn");

        // (1) 메인 의자 이미지 변경
        if(imgEl) {
            imgEl.style.opacity = 0.5;
            setTimeout(() => {
                // [핵심 수정] .chair를 붙여서 주소만 쏙 꺼냅니다!
                imgEl.src = slideData[currentIndex].chair; 
                imgEl.style.opacity = 1;
            }, 150);
        }

        // (2) 버튼 이미지 변경
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

    // 3. 전역 함수 등록
    window.moveSlide = function(direction) {
        currentIndex += direction;
        if (currentIndex >= slideData.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slideData.length - 1;
        updateDisplay();
    };

    window.changeColor = function(index) {
        currentIndex = index;
        updateDisplay();
    };
});