document.addEventListener('DOMContentLoaded', function() {
    
    // 깃허브 절대 주소 (이게 있어야 쇼피파이가 사진을 찾을 수 있습니다!)
    const baseURL = "https://RobinChoi00.github.io/Product/ION/";

    const slideData = [
        {
            // 0번: All
            chair: baseURL + "images/0.ion_color_both.png", 
            btnNormal: baseURL + "images/7.ion_swatch_all.png",
            btnSelected: baseURL + "images/10.ion_swatch_all_selected.png"
        },
        {
            // 1번: Black
            chair: baseURL + "images/3.ion_color_black.jpg", 
            btnNormal: baseURL + "images/8.ion_swatch_black.png",
            btnSelected: baseURL + "images/11.ion_swatch_black_selected.png"
        },
        {
            // 2번: Brown
            chair: baseURL + "images/2.ion_color_brown.jpg", 
            btnNormal: baseURL + "images/9.ion_swatch_brown.png",
            btnSelected: baseURL + "images/12.ion_swatch_brown_selected.png"
        }
    ];

    let currentIndex = 0; 

    // 화면 업데이트 함수
    function updateDisplay() {
        const imgEl = document.getElementById("current-chair");
        const btnImages = document.querySelectorAll(".color-btn");

        // 메인 의자 이미지 변경
        if(imgEl) {
            imgEl.style.opacity = 0.5;
            setTimeout(() => {
                imgEl.src = slideData[currentIndex].chair;
                imgEl.style.opacity = 1;
            }, 150);
        }

        // 버튼 이미지 변경
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

    // 전역 함수 등록
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