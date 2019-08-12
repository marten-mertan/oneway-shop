function initSliderMain(){
    $('.js-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<img class="arrows prev-arrow" src="assets/img/arr-left.svg" alt="arrow-left"></img>',
        nextArrow: '<img class="arrows next-arrow" src="assets/img/arr-right.svg" alt="arrow-right"></img>',
    });
}

function initSliderItem(){
    $('.js-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-slider-nav'
    });
    $('.js-slider-nav').slick({
        slidesToShow: 4,
        asNavFor: '.js-slider-for',
        focusOnSelect: true,
        arrows: false
    });
}

function initSliderRecomend(){
    $('.js-slider-recomend').slick({
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<img class="arrows prev-arrow" src="assets/img/arr-left.svg" alt="arrow-left"></img>',
        nextArrow: '<img class="arrows next-arrow" src="assets/img/arr-right.svg" alt="arrow-right"></img>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1
              }
            },
          ]
    });
}


export default function initSliders() {
    initSliderMain();
    initSliderItem();
    initSliderRecomend();
}