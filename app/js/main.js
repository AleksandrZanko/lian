// slider
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        565:{
            items:1,
            nav:true
        }
    }
})

// mobile-menu

$(document).ready(function(){
    // menu click event
    $('.menuBtn').click(function() {
        $(this).toggleClass('act');
            if($(this).hasClass('act')) {
                $('.mainMenu').addClass('act');
            }
            else {
                $('.mainMenu').removeClass('act');
            }
    });
});

// contact page, map-info 

let mapClose = document.querySelector('.map__info-close-button');
let mapInfo = document.querySelector('.map__info');

mapClose.addEventListener("click", function(e) {
    e.preventDefault();   
    mapInfo.classList.add('map__info-close');
});