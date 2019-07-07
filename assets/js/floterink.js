jQuery(document).ready(function ($) {
    $(".la-anim-13").addClass("la-animate");
    var slideCount = $('.work_page_gallery figure').length;
    var counter = 1;
    
    if(slideCount > 1){
        $('.page_content_text').append('<div class="multislide-ui">1/'+slideCount+'</div>');
        $('.work_page_gallery').addClass('multislide');
    }
    

    $('.work_page_gallery figure, .multislide-ui').on('click', function(){
        moveLeft();
    });

    function moveLeft() {
        if(counter < slideCount){
            counter++;
            $('.work_page_gallery').addClass('show-'+counter);
            $('.multislide-ui').text(counter+'/'+slideCount);
        }
        else{
            counter = 1;
            $('.work_page_gallery').removeClass(function (index, className) {
                return (className.match (/(^|\s)show-\S+/g) || []).join(' ');
            });
            $('.multislide-ui').text(counter+'/'+slideCount);
            
        }
    };
});    
$(window).on('load', function(){  
    TweenLite.to(".preloader", 1, {
        autoAlpha:0,
        onComplete: function(){
            $(".la-anim-13").removeClass("la-animate");
            $(".preloader").remove();
        }
    });
    /*TweenMax.staggerFromTo(".col-4, .col-6, .col-12, .col-8", .5, {
        autoAlpha: 0,
        y: -60
    },{              
        autoAlpha: 1,
        y: 0,
        ease: Back.easeOut.config( 1.7)
    }, .05);*/
    $("body").addClass("assets_loaded");
});
