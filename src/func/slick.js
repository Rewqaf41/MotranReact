import $ from 'jquery'

$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
    });
});

$(document).ready(function(){
    $('.slidercard').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 1900,
    });
});