document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    function updateSlider() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slides[currentIndex].classList.add("active");

        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = 0;
        } else if (index >= slides.length) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        updateSlider();
    }

    prevBtn.addEventListener("click", function () {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", function () {
        goToSlide(currentIndex + 1);
    });

    window.addEventListener("resize", updateSlider);

    updateSlider();
});