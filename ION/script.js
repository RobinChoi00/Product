document.addEventListener('DOMContentLoaded', function() {
    
    // [최종 수정] 실제 파일 확장자에 맞춰서 정확하게 입력했습니다.
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

    let currentIndex = 0; // 시작은 0번 (All)

    // 1. 화면 업데이트 함수
    function updateDisplay() {
        const imgEl = document.getElementById("current-chair");
        const btnImages = document.querySelectorAll(".color-btn");

        // 메인 의자 이미지 변경
        if(imgEl) {
            imgEl.style.opacity = 0.5; // 깜빡임 효과
            setTimeout(() => {
                // 여기서 .chair를 가져와서 주소를 넣습니다
                imgEl.src = slideData[currentIndex].chair;
                imgEl.style.opacity = 1;
            }, 150);
        }

        // 버튼 이미지 변경 (선택된 것 / 안 된 것 교체)
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

    // 2. 전역 함수 등록 (HTML onclick에서 실행할 수 있도록 window에 붙임)
    window.moveSlide = function(direction) {
        currentIndex += direction;
        
        // 순환 로직 (끝에 가면 처음으로)
        if (currentIndex >= slideData.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slideData.length - 1;
        
        updateDisplay();
    };

    window.changeColor = function(index) {
        currentIndex = index;
        updateDisplay();
    };
});