$(document).ready(function(){
   
    $('header .swiper').slick({
        speed : 2000,
        lazyload : 'progressive',
        arrows : true,
        dots : false,
        prevArrow : '<div class="slick-nav prev-arrow"><i class="fa fa-chevron-right"></i></div>',
        nextArrow : '<div class="slick-nav next-arrow"><i class="fa fa-chevron-left"></i></div>',
        responsive : [
            {
                breakpoint : 450,
                settings : {
                    dots : true,
                    arrows : false,
                    autoplay : true,
                }
            }
        ]
      }).slickAnimation();
      $(".slick-nav").on("click touch", function (e){
        e.preventDefault();
      
        var arrow = $(this);
      
        if(!arrow.hasClass('animate')){
            arrow.addClass('animate');
            setTimeout(() => {
                arrow.removeClass('animate');
            }, 1600);
        }
      });
})