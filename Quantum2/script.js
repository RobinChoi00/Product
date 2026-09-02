/* Quantum 2.0 3D Product Page Script */

var baseURL = (function () {
    var host = window.location.hostname;
    if (!host || host === "localhost" || host === "127.0.0.1" || window.location.protocol === "file:") {
        return "";
    }
    return "https://RobinChoi00.github.io/Product/Quantum2/";
})();

var slideData = [
    {
        chair: baseURL + "images/5.quantum2_color_brown.png",
        btnNormal: baseURL + "images/9.quantum2_swatch_all.png",
        btnSelected: baseURL + "images/13.quantum2_swatch_all_selected.png",
        name: "All"
    },
    {
        chair: baseURL + "images/3.quantum2_color_black.png",
        btnNormal: baseURL + "images/10.quantum2_swatch_black.png",
        btnSelected: baseURL + "images/14.quantum2_swatch_black_selected.png",
        name: "Black"
    },
    {
        chair: baseURL + "images/4.quantum2_color_brown.png",
        btnNormal: baseURL + "images/11.quantum2_swatch_brown.png",
        btnSelected: baseURL + "images/15.quantum2_swatch_brown_selected.png",
        name: "Brown"
    },
    {
        chair: baseURL + "images/2.quantum2_color_taupe.png",
        btnNormal: baseURL + "images/12.quantum2_swatch_taupe.png",
        btnSelected: baseURL + "images/16.quantum2_swatch_taupe_selected.png",
        name: "Taupe"
    }
];

var currentIndex = 0;

function updateDisplay() {
    var imgEl = document.getElementById("current-chair");
    var btnImages = document.querySelectorAll(".q2-swatch");

    if (imgEl && slideData[currentIndex]) {
        imgEl.style.opacity = 0;
        setTimeout(function () {
            imgEl.src = slideData[currentIndex].chair;
            imgEl.style.opacity = 1;
        }, 150);
    }

    if (btnImages.length > 0) {
        btnImages.forEach(function (btn, index) {
            if (!slideData[index]) return;
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

window.moveSlide = function (direction) {
    currentIndex += direction;
    if (currentIndex >= slideData.length) currentIndex = 0;
    else if (currentIndex < 0) currentIndex = slideData.length - 1;
    updateDisplay();
};

window.changeColor = function (index) {
    if (index >= 0 && index < slideData.length) {
        currentIndex = index;
        updateDisplay();
    }
};

document.addEventListener("DOMContentLoaded", function () {
    updateDisplay();
    document.querySelectorAll(".q2-gif-item video").forEach(function (el) {
        el.muted = true;
        el.play().catch(function () {});
    });
});
