/* Remedy Pro 4D Product Page Script */

var baseURL = (function () {
    var host = window.location.hostname;
    if (!host || host === "localhost" || host === "127.0.0.1" || window.location.protocol === "file:") {
        return "";
    }
    return "https://RobinChoi00.github.io/Product/Remedy/";
})();

var slideData = [
    {
        chair: baseURL + "images/5.remedy_colors_all.png",
        name: "All"
    },
    {
        chair: baseURL + "images/3.remedy_color_black.png",
        name: "Black"
    },
    {
        chair: baseURL + "images/4.remedy_color_brown.png",
        name: "Brown"
    },
    {
        chair: baseURL + "images/2.remedy_color_taupe.png",
        name: "Taupe"
    }
];

var currentIndex = 0;

function updateDisplay() {
    var imgEl = document.getElementById("current-chair");
    var btnImages = document.querySelectorAll(".remedy-swatch");

    if (imgEl && slideData[currentIndex]) {
        imgEl.style.opacity = 0;

        setTimeout(function() {
            imgEl.src = slideData[currentIndex].chair;
            imgEl.style.opacity = 1;
        }, 150);
    }

    if (btnImages.length > 0) {
        btnImages.forEach(function(btn, index) {
            if (index === currentIndex) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }
}

window.moveSlide = function(direction) {
    currentIndex += direction;

    if (currentIndex >= slideData.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slideData.length - 1;
    }

    updateDisplay();
};

window.changeColor = function(index) {
    if (index >= 0 && index < slideData.length) {
        currentIndex = index;
        updateDisplay();
    }
};

document.addEventListener("DOMContentLoaded", function() {
    updateDisplay();
});
