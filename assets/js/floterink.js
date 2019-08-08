var counter = 1;
var slideCount = $('.work_page_gallery figure').length;

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

function init() {
    $(window).scrollTop(0);
    $(".la-anim-13").addClass("la-animate");
    slideCount = $('.work_page_gallery figure').length;
    counter = 1;
    
    if(slideCount > 1){
        $('.page_content_text').append('<div class="multislide-ui">1/'+slideCount+'</div>');
        $('.work_page_gallery').addClass('multislide');
    }

    $('.work_page_gallery figure, .multislide-ui').on('click', function(){
        moveLeft();
    });
    TweenLite.set(".preloader", {
        autoAlpha: 1
    });
    TweenLite.to(".preloader", 1, {
        autoAlpha:0,
        onComplete: function(){
            $(".la-anim-13").removeClass("la-animate");
            //$(".preloader").remove();
            $("body").addClass("assets_loaded");
        }
    });    
    TweenLite.from(".work_page_figure, .page_content_text", 1.5,  {
        opacity:0, 
        delay: .5
    });
};

jQuery(document).ready(function ($) {
    const swup = new Swup({
      plugins: [
        new SwupBodyClassPlugin()
      ]
    });
    init();
    swup.on('contentReplaced', init);

});    
$(window).on('load', function(){      
});
