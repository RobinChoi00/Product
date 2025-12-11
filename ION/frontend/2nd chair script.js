document.addEventListener('DOMContentLoaded', function() {
    
    // [수정됨] 순서: 0(All) -> 1(Black) -> 2(Brown)
    const chairImages = [
        "images/0.ion_color_both.png",   // 0번: All (두 의자 사진)
        "images/3.ion_color_black.png", // 1번: Black
        "images/2.ion_color_brown.png"  // 2번: Brown
    ];

    let currentIndex = 0; // 시작은 0번(All)

    // 화면 업데이트 함수
    function updateDisplay() {
        const imgEl = document.getElementById("current-chair");
        const btns = document.querySelectorAll(".color-btn");

        if(imgEl) {
            imgEl.style.opacity = 0.5;
            setTimeout(() => {
                imgEl.src = chairImages[currentIndex];
                imgEl.style.opacity = 1;
            }, 150);
        }

        if(btns) {
            btns.forEach((btn, index) => {
                if (index === currentIndex) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            });
        }
    }

    // 전역 함수 등록
    window.moveSlide = function(direction) {
        currentIndex += direction;
        if (currentIndex >= chairImages.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = chairImages.length - 1;
        updateDisplay();
    };

    window.changeColor = function(index) {
        currentIndex = index;
        updateDisplay();
    };
});