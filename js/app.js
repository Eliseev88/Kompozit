/* Menu nav toggle */
$("#nav-toggle").on("click", function (event) {
    $("#nav-burger").toggleClass("active");
    $("#nav-toggle").toggleClass("active");
    $("body").toggleClass("no-scroll");
});

$("#nav-burger__close").on("click", function (event) {
    $("#nav-burger").removeClass("active");
    $("#nav-toggle").removeClass("active");
    $("body").removeClass("no-scroll");
});

/* Slider */
$(document).ready(function () {
    $('.slider').slick({
        appendArrows: $('.slick__arrows'),
        prevArrow: '<button id="prev" type="button" class="slick-arrow slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button id="next" type="button" class="slick-arrow slick-next"><i class="fas fa-arrow-right"></i></button>',
        appendDots: $('.slick__dots'),
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});

/* Change blocks in about section */
// 1
$("#appearance_btn").on("click", function (event) {
    $("#appearance_block").addClass("show");
    $("#hold_block").removeClass("show");
    $("#cage_block").removeClass("show");
    $("#mount_block").removeClass("show");
    $("#sum_block").removeClass("show");
    
    $("#appearance_btn").addClass("active");
    $("#hold_btn").removeClass("active");
    $("#cage_btn").removeClass("active");
    $("#mount_btn").removeClass("active");
    $("#sum_btn").removeClass("active");
});
// 2
$("#hold_btn").on("click", function (event) {
    $("#hold_block").addClass("show");
    $("#appearance_block").removeClass("show");
    $("#cage_block").removeClass("show");
    $("#mount_block").removeClass("show");
    $("#sum_block").removeClass("show");
    
    $("#hold_btn").addClass("active");
    $("#appearance_btn").removeClass("active");
    $("#cage_btn").removeClass("active");
    $("#mount_btn").removeClass("active");
    $("#sum_btn").removeClass("active");
});
// 3
$("#cage_btn").on("click", function (event) {
    $("#cage_block").addClass("show");
    $("#appearance_block").removeClass("show");
    $("#hold_block").removeClass("show");
    $("#mount_block").removeClass("show");
    $("#sum_block").removeClass("show");

    $("#cage_btn").addClass("active");
    $("#appearance_btn").removeClass("active");
    $("#hold_btn").removeClass("active");
    $("#mount_btn").removeClass("active");
    $("#sum_btn").removeClass("active");
});
// 4
$("#mount_btn").on("click", function (event) {
    $("#mount_block").addClass("show");
    $("#appearance_block").removeClass("show");
    $("#hold_block").removeClass("show");
    $("#cage_block").removeClass("show");
    $("#sum_block").removeClass("show");
    
    $("#mount_btn").addClass("active");
    $("#appearance_btn").removeClass("active");
    $("#hold_btn").removeClass("active");
    $("#cage_btn").removeClass("active");
    $("#sum_btn").removeClass("active");
});
// 5
$("#sum_btn").on("click", function (event) {
    $("#sum_block").addClass("show");
    $("#appearance_block").removeClass("show");
    $("#hold_block").removeClass("show");
    $("#cage_block").removeClass("show");
    $("#mount_block").removeClass("show");
    
    $("#sum_btn").addClass("active");
    $("#appearance_btn").removeClass("active");
    $("#hold_btn").removeClass("active");
    $("#mount_btn").removeClass("active");
    $("#cage_btn").removeClass("active");
});
