$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        infinite:true,
        autoplay:true,
        autoplaySpeed:1000,
        draggable:false,
        swipe:true,
        touchThreshold:10,
        touchMove:true,
        waitForAnimate:false,
        responsive:[
            {
                breakpoint:1280,
                settings:{
                    slidesToShow:2
                }
            },{
                breakpoint:800,
                settings:{
                    slidesToShow:1
                }
            }
        ],
        mobileFirst:false,
    });
});