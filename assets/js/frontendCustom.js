$(document).ready(function () {
    // manageing manubar ----------------------->
    const $slidebar = $("#slidebar");
    const $manu_btn = $("#manu_btn");
    const $content_area = $("#content_area");
    let isOpen = !window.matchMedia("(max-width:767.98px)").matches;
    function toggle() {
        if (isOpen) {
            $slidebar.css("transform", "translateX(-100%)");
            $content_area.removeClass().addClass("col");
        } else {
            $slidebar.css("transform", "translateX(0)");
            $content_area
                .removeClass()
                .addClass(
                    "col-md-9 col-lg-10 offset-md-3 offset-lg-2 content_area"
                );
        }
        isOpen = !isOpen;
    }
    $manu_btn.on("click", toggle);
    window.matchMedia("(max-width:767.98px)").matches
        ? $slidebar.on("click", toggle)
        : null;
    // reload when language change------------------------>
    Livewire.on("changeLanguage", (event) => {
        window.location.href = window.location.href;
    });
});
// sweper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        "@1.50": {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
});
