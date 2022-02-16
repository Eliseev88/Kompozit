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

/* Intro slider */
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

/* Gallery slider */
$(document).ready(function () {
    $('.gallery__slider').slick({
        appendArrows: $('.gallery__arrows'),
        prevArrow: '<button id="prev" type="button" class="gallery__arrow gallery__arrow--left"><i class="fas fa-chevron-circle-right"></i></button>',
        nextArrow: '<button id="next" type="button" class="gallery__arrow gallery__arrow--right"><i class="fas fa-chevron-circle-left"></i></button>',
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                }
            },
        ]
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


/* Scroll to section */
$("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top - 110;
    $("#nav a").removeClass("active");
    $this.addClass("active");
    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
    $("#nav-burger").removeClass("active");
    $("#nav-toggle").removeClass("active");
});


/* Calc */
// Скрываем (показываем блоки при изменении select)
$("#roof_type").change(function () {
    let roofType = $("#roof_type").val();
    $(".calc__box").removeClass('active');
    $(".calc__img").removeClass('active');
    $('.calc__inner').removeClass('active');
    $('.calc__error').text('');

    if (roofType == 'double') {
        $('#double-roof').addClass('active');
        $('#img-double').addClass('active');
    } else if (roofType === 'single') {
        $('#single-roof').addClass('active');
        $('#img-single').addClass('active');
    } else if (roofType === 'hip') {
        $('#hip-roof').addClass('active');
        $('#img-hip').addClass('active');
    } else if (roofType === 'tent') {
        $('#tent-roof').addClass('active');
        $('#img-tent').addClass('active');
    }
});

// Сам калькулятор
$("#calc_btn").on("click", function (event) {
    event.preventDefault();

    $('.calc__error').text('');
    let roofType = $('#roof_type').val();
    let arr = [];

    if (roofType === 'double') {
        let a = +$('#double_a').val();
        let b = +$('#double_b').val();
        let c = +$('#double_c').val();

        if (validateValues(a, b, c)) {
            countDoubleRoof(a, b, c).forEach(el => arr.push(el))
        } else return;

    } else if (roofType === 'single') {
        let a = +$('#single_a').val();
        let b = +$('#single_b').val();
        let h = +$('#single_h').val();
        let d1 = +$('#single_d1').val();
        let d2 = +$('#single_d2').val();

        if (validateValues(a, b, h, d1, d2)) {
            countSingleRoof(a, b, h, d1, d2).forEach(el => arr.push(el))
        } else return;

    } else if (roofType === 'tent') {
        let a = +$('#tent_a').val();
        let b = +$('#tent_b').val();
        let h = +$('#tent_h').val();
        let d1 = +$('#tent_d1').val();
        let d2 = +$('#tent_d2').val();

        if (validateValues(a, b, h, d1, d2)) {
            countTentRoof(a, b, h, d1, d2).forEach(el => arr.push(el))
        } else return;

    } else if (roofType === 'hip') {
        let a = +$('#hip_a').val();
        let b = +$('#hip_b').val();
        let c = +$('#hip_c').val();
        let h = +$('#hip_h').val();
        let d1 = +$('#hip_d1').val();
        let d2 = +$('#hip_d2').val();

        if (validateValues(a, b, c, h, d1, d2)) {
            countHipRoof(a, b, c, h, d1, d2).forEach(el => arr.push(el))
        } else return;
    }

    $('#res-square').html(arr[0] + 'м<sup>2</sup>');
    $('#res-kp').text(arr[1] + 'шт.');
    $('#res-screw').text(arr[2] + 'шт.');
    $('#res-skate').text(arr[3] + 'шт.');
    $('#res-cornice').text(arr[4] + 'шт.');
    $('#res-wind').text(arr[5] + 'шт.');

    $('.calc__inner').addClass('active');

});

// Ф-ция валидации входных данных
function validateValues(...args) {
    if (args.includes(0, 0) || args.includes(NaN, 0)) {
        $('.calc__error').text('Неправильное значение длины');
        $('.calс__inner').removeClass('active');
        return false;
    }
    return true;
}

// Двухскатная
function countDoubleRoof(a, b, c) {
    let roofSquare = ((a + b) * c).toFixed(2);
    let kpAmount = Math.ceil(roofSquare / 2);
    let screwAmount = kpAmount * 34;
    let skatePlank = Math.ceil(Math.round(c) / 2);
    let cornicePlank = skatePlank * 2;
    let windPlank = Math.ceil((a + b) / 2) * 2;

    if (roofSquare <= 1) {
        kpAmount = 1;
        screwAmount = 34;
        skatePlank = 1;
        cornicePlank = 2;
        windPlank = 2;
    }
    return [roofSquare, kpAmount, screwAmount, skatePlank, cornicePlank, windPlank];
}
// Односкатная
function countSingleRoof(a, b, h, d1, d2) {
    let width = Math.sqrt(Math.pow(a, 2) + Math.pow(h, 2)).toFixed(2);
    width = +width + +d2 + +d2;
    let long = b + d1 + d1;

    let roofSquare = (width * long).toFixed(2);
    let kpAmount = Math.ceil(roofSquare / 2) + 1;
    let screwAmount = kpAmount * 34;
    let skatePlank = 0;
    let cornicePlank = Math.ceil(long * 2);
    let windPlank = Math.ceil(width * 2);

    return [roofSquare, kpAmount, screwAmount, skatePlank, cornicePlank, windPlank];

}
// Шатерная
function countTentRoof(a, b, h, d1, d2) {
    let height1 = d1 + Math.sqrt(Math.pow(h, 2) + Math.pow((a / 2), 2));
    let height2 = d2 + Math.sqrt(Math.pow(h, 2) + Math.pow((b / 2), 2));

    let a1 = b * height1 / (height1 - d1);
    let a2 = a * height2 / (height2 - d2);

    let roofSquare = (height1 * a1 + height2 * a2).toFixed(2);
    let kpAmount = Math.ceil(roofSquare / 2);
    let screwAmount = kpAmount * 34;
    let skatePlank = Math.ceil((height1 + height1 + height2 + height2) / 2);
    let cornicePlank = Math.ceil((a + a + b + b + d1 + d1 + d2 + d2 + d1 + d1 + d2 + d2) / 2);
    let windPlank = 0;

    return [roofSquare, kpAmount, screwAmount, skatePlank, cornicePlank, windPlank];
}
// Вальмовая
function countHipRoof(a, b, c, h, d1, d2) {
    let heightTrap = Math.sqrt(Math.pow(h, 2) + Math.pow((a / 2), 2)) + d2;
    let heightTri = Math.sqrt(Math.pow(h, 2) + Math.pow(c, 2)) + d1;

    let cSmall = a * ((Math.sqrt(Math.pow(h, 2) + Math.pow(c, 2)) + d1) / Math.sqrt(Math.pow(h, 2) + Math.pow(c, 2)))

    let triSquare = 0.5 * heightTri * cSmall;
    let triSide = Math.sqrt(Math.pow(heightTri, 2) + (Math.pow(cSmall, 2) / 4));

    let trapSquare = (Math.sqrt(Math.pow(h, 2) + Math.pow((a / 2), 2)) + d2) * ((b - 2 * c) + Math.sqrt(Math.pow(triSide, 2) - Math.pow(heightTrap, 2)));

    let roofSquare = (2 * (triSquare + trapSquare)).toFixed(2);
    let kpAmount = Math.ceil(roofSquare / 2);
    let screwAmount = kpAmount * 34;
    let skatePlank = Math.ceil((b - c - c) / 2);
    let cornicePlank = Math.ceil((a + a + b + b + d1 + d1 + d2 + d2 + d1 + d1 + d2 + d2) / 2);
    let windPlank = 0;

    return [roofSquare, kpAmount, screwAmount, skatePlank, cornicePlank, windPlank];
    //    let baseTrap = b + d1 + d1;
    //    let skat = b - c - c;
    //    let baseTri = a + d2 + d2;
    //    
    //    let triSide = Math.sqrt(Math.pow(baseTri, 2) + Math.pow(h, 2))
    //    
    //    if (skat > 0) {
    //        let heightTrap = Math.sqrt(Math.pow(triSide, 2) - (Math.pow((baseTrap - skat), 2) / 4 ));
    //        let heightTri = Math.sqrt(Math.pow(triSide, 2) - (Math.pow(baseTri, 2) / 4));
    //        
    //        let squareTri = 0.5 * baseTri * heightTri;
    //        
    //        let squareTrap = ((skat + baseTrap) / 2) * heightTrap;
    //        
    //        let roofSquare = 2 * (squareTri + squareTrap);
    //            console.log(roofSquare.toFixed(2))
    //    }

}


/* Slider open BIG image */
$('.gallery__image').on('click', function (event) {
    event.preventDefault();
    let $this = $(this);

    if ($this.hasClass('slick-center')) {
        let $img = $this.attr('src');
        $("#gallery-modal").toggleClass("modal-visible");
        $('body').css('overflow', 'hidden');
        $('#gallery-modal-content').html('<img src="' + $img + '" alt="photo" width="100%" />')
        
    }
});
