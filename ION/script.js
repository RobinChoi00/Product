/* [최종 수정] HTML onclick 없이 JS에서 직접 클릭 이벤트를 연결하는 방식 */

// 1. 깃허브 주소 설정
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

// 3. 슬라이드 이동 함수
function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= slideData.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slideData.length - 1;
    updateDisplay();
}

// 4. 색상 변경 함수
function changeColor(index) {
    currentIndex = index;
    updateDisplay();
}

// 5. [핵심] 버튼에 클릭 이벤트 강제 연결 (이 부분이 onclick 문제를 해결함)
// 페이지에 있는 버튼들을 직접 찾아서 연결합니다.
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var colorBtns = document.querySelectorAll('.color-btn');

// 화살표 버튼 연결
if(prevBtn) {
    prevBtn.onclick = function() { moveSlide(-1); };
}
if(nextBtn) {
    nextBtn.onclick = function() { moveSlide(1); };
}

// 색상 버튼 연결
if(colorBtns) {
    colorBtns.forEach(function(btn, index) {
        btn.onclick = function() { changeColor(index); };
    });
}

// 6. 초기화 실행
updateDisplay();
console.log("✅ ION Script Loaded & Events Attached");