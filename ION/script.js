/* [최종 수정] 깃허브 절대 주소를 사용하여 쇼피파이에서도 이미지를 찾게 함 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ▼ 깃허브 주소 변수 (이게 있어야 쇼피파이가 사진 위치를 알아요!)
    var baseURL = "https://RobinChoi00.github.io/Product/ION/";

    var slideData = [
        {
            // 0번: All (파일명/확장자 확인 필수: png)
            chair: baseURL + "images/0.ion_color_both.png", 
            btnNormal: baseURL + "images/7.ion_swatch_all.png",
            btnSelected: baseURL + "images/10.ion_swatch_all_selected.png"
        },
        {
            // 1번: Black (파일명/확장자 확인 필수: jpg)
            chair: baseURL + "images/3.ion_color_black.jpg", 
            btnNormal: baseURL + "images/8.ion_swatch_black.png",
            btnSelected: baseURL + "images/11.ion_swatch_black_selected.png"
        },
        {
            // 2번: Brown (파일명/확장자 확인 필수: jpg)
            chair: baseURL + "images/2.ion_color_brown.jpg", 
            btnNormal: baseURL + "images/9.ion_swatch_brown.png",
            btnSelected: baseURL + "images/12.ion_swatch_brown_selected.png"
        }
    ];

    var currentIndex = 0; 

    // 화면 업데이트 함수
    function updateDisplay() {
        var imgEl = document.getElementById("current-chair");
        var btnImages = document.querySelectorAll(".color-btn");

        // 메인 의자 이미지 변경
        if(imgEl) {
            imgEl.style.opacity = 0.5;
            setTimeout(function() {
                // baseURL이 포함된 전체 주소가 들어갑니다
                imgEl.src = slideData[currentIndex].chair; 
                imgEl.style.opacity = 1;
            }, 150);
        }

        // 버튼 이미지 변경
        if(btnImages) {
            btnImages.forEach(function(btn, index) {
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
    
    // 초기화 실행
    updateDisplay();
});