/* [최종 수정] HTML onclick이 찾을 수 있도록 window 객체에 함수 등록 */

// 1. 깃허브 주소 (슬래시 확인)
var baseURL = "https://RobinChoi00.github.io/Product/ION/";

var slideData = [
    {
        // 0번: All (png)
        chair: baseURL + "images/0.ion_color_both.png", 
        btnNormal: baseURL + "images/7.ion_swatch_all.png",
        btnSelected: baseURL + "images/10.ion_swatch_all_selected.png"
    },
    {
        // 1번: Black (⚠️중요: 실제 파일이 jpg라면 .jpg로 고치세요!)
        chair: baseURL + "images/3.ion_color_black.png", 
        btnNormal: baseURL + "images/8.ion_swatch_black.png",
        btnSelected: baseURL + "images/11.ion_swatch_black_selected.png"
    },
    {
        // 2번: Brown (⚠️중요: 실제 파일이 jpg라면 .jpg로 고치세요!)
        chair: baseURL + "images/2.ion_color_brown.png", 
        btnNormal: baseURL + "images/9.ion_swatch_brown.png",
        btnSelected: baseURL + "images/12.ion_swatch_brown_selected.png"
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

// 3. [핵심] HTML onclick이 찾을 수 있게 window에 등록!
// (이 부분이 없으면 ReferenceError가 뜹니다)
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

// 4. 초기화 실행
updateDisplay();

console.log("✅ Script Loaded: moveSlide & changeColor are now Global!");