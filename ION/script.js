/* [수정됨] DOMContentLoaded 껍데기를 제거했습니다.
   이제 불러오자마자 즉시 실행되어 Shopify에서도 작동합니다.
*/

// 1. 데이터 정의 (전역 변수 충돌 방지를 위해 즉시 실행 함수 사용 추천하지만, 일단 심플하게 갑니다)
var slideData = [
    {
        chair: "images/0.ion_color_both.png", 
        btnNormal: "images/7.ion_swatch_all.png",
        btnSelected: "images/10.ion_swatch_all_selected.png"
    },
    {
        chair: "images/3.ion_color_black.jpg", 
        btnNormal: "images/8.ion_swatch_black.png",
        btnSelected: "images/11.ion_swatch_black_selected.png"
    },
    {
        chair: "images/2.ion_color_brown.jpg", 
        btnNormal: "images/9.ion_swatch_brown.png",
        btnSelected: "images/12.ion_swatch_brown_selected.png"
    }
];

var currentIndex = 0; 

// 2. 화면 업데이트 함수
function updateDisplay() {
    var imgEl = document.getElementById("current-chair");
    var btnImages = document.querySelectorAll(".color-btn");

    if(imgEl) {
        imgEl.style.opacity = 0.5;
        setTimeout(function() {
            imgEl.src = slideData[currentIndex].chair; 
            imgEl.style.opacity = 1;
        }, 150);
    }

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

// 3. [핵심] 전역 함수로 등록 (window.함수이름)
// 이렇게 해야 HTML의 onclick="moveSlide()"가 이 함수를 찾을 수 있습니다.
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

// 4. 로드 되자마자 한 번 실행 (초기화)
updateDisplay();