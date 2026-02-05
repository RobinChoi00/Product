/* Plantaris Product Page Script */

// 1. 기본 경로 설정
// (로컬 테스트 시 이미지가 안 보이면 baseURL을 빈 문자열 ""로 변경하세요)
var baseURL = "https://RobinChoi00.github.io/Product/HelixLE/";

// 2. 데이터 정의 (HTML 버튼 순서와 1:1 매칭)
// Index 0: All (Both)
// Index 1: Black
// Index 2: Brown
var slideData = [
    {
        chair: baseURL + "images/2.HelixLE_Allcolor.png",
        name: "All"
    },
    {
        chair: baseURL + "images/3.HelixLE_Black.png",
        name: "Black"
    },
    {
        chair: baseURL + "images/4.HelixLE_Brown.png",
        name: "Brown"
    },
    {
        chair: baseURL + "images/5.HelixLE_Taupe.png",
        name: "Taupe"
    }
];

var currentIndex = 0; // 초기값 0 (All)

// 화면 업데이트 로직
function updateDisplay() {
    var imgEl = document.getElementById("current-chair");
    var btnImages = document.querySelectorAll(".color-btn");

    // 1. 의자 이미지 변경
    if (imgEl && slideData[currentIndex]) {
        // 부드러운 전환을 위한 투명도 조절
        imgEl.style.opacity = 0; 
        
        setTimeout(function() {
            imgEl.src = slideData[currentIndex].chair; 
            imgEl.style.opacity = 1;
        }, 150);
    }

    // 2. 버튼 활성화 상태 동기화
    if (btnImages.length > 0) {
        btnImages.forEach(function(btn, index) {
            if (index === currentIndex) {
                btn.classList.add("active"); // CSS .active 클래스 적용
            } else {
                btn.classList.remove("active");
            }
        });
    }
}

// 화살표 클릭 핸들러
window.moveSlide = function(direction) {
    currentIndex += direction;
    
    // 순환 구조 (Loop)
    if (currentIndex >= slideData.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slideData.length - 1;
    }
    
    updateDisplay();
};

// 색상 버튼 클릭 핸들러
window.changeColor = function(index) {
    if (index >= 0 && index < slideData.length) {
        currentIndex = index;
        updateDisplay();
    } else {
        console.error("Invalid Index:", index);
    }
};

// 초기화
document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ Plantaris Script Loaded. Total Slides:", slideData.length);
    updateDisplay();
});