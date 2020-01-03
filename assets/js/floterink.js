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
    //$(".la-anim-13").addClass("la-animate");
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
   /* TweenLite.from(".work_page_figure, .page_content_text", 1.5,  {
        opacity:0, 
        delay: .5
    });*/
};

jQuery(document).ready(function ($) {
    
    const options = [
      {
        from: '/', to: '/work/:id',
        in: function(next) {
            TweenLite.set("#swup", {
              autoAlpha: 0,
              y: "100vh"
            })
            TweenLite.to("#swup", .75, {
              autoAlpha: 1,
              y: 0,
              onComplete: next,
              ease:  Expo.easeInOut
            })
        },
        out: (next) => {
            TweenLite.set(".work_list", {
                autoAlpha: 1,
                y: 0
            })
            TweenLite.to(".work_list", .75, {
                autoAlpha: 0,
                y: "100vh",
                onComplete: next,
                ease:  Expo.easeInOut
            })
            
        }
      },
      {
        from: '/work/:id', to: '/',
        in: function(next) {
            TweenLite.set(".work_list", {
                autoAlpha: 0,
                y: "100vh"
            })
            TweenLite.to(".work_list", 1, {
                autoAlpha: 1,
                y: "0",
                onComplete: next,
                ease:  Expo.easeInOut
            })
        },
        out: (next) => {            
            TweenLite.set("#swup", {
              y: 0,
              autoAlpha: 1
            })
            TweenLite.to("#swup", .75, {
              y: "100vh",
              autoAlpha: 0,
              onComplete: next,
              ease:  Expo.easeInOut
            })  
        }
      },
      {
        from: '/work/:id', to: '/work/:id',
        in: function(next) {
            TweenLite.set("#swup .work_page_figure", {
                autoAlpha: 0
            })
            TweenLite.to("#swup .work_page_figure", .75, {
                autoAlpha: 1,
                ease:  Expo.easeInOut
            })
            TweenLite.set(".page_content_text", {
                x: 200,
                autoAlpha: 0
            })
            TweenLite.to(".page_content_text", .75, {
                delay: .5,
                x: 0,
                autoAlpha: 1,
                ease:  Expo.easeInOut,
                onComplete: next
            })
        },
        out: (next) => {
            TweenLite.set("#swup .work_page_figure", {
                autoAlpha: 1
            })
            TweenLite.to("#swup .work_page_figure", .75, {
                autoAlpha: 0,
                ease:  Expo.easeInOut
            })
            TweenLite.set(".page_content_text", {
                x: 0,
                autoAlpha: 1
            })
            TweenLite.to(".page_content_text", .75, {
                delay: .5,
                x: -200,
                autoAlpha: 0,
                ease:  Expo.easeInOut,
                onComplete: next
            })
        }
      },
      {
        from: '/work/:id', to: 'back-transition',
        in: function(next) {
            TweenLite.set("#swup .work_page_figure", {
                autoAlpha: 0
            })
            TweenLite.to("#swup .work_page_figure", .75, {
                autoAlpha: 1
            })
            TweenLite.set(".page_content_text", {
                x: -200,
                autoAlpha: 0
            })
            TweenLite.to(".page_content_text", .75, {
                delay: .5,
                x: 0,
                autoAlpha: 1,
                ease:  Expo.easeInOut,
                onComplete: next
            })
            
        },
        out: (next) => {
            TweenLite.set("#swup .work_page_figure", {
                autoAlpha: 1
            })
            TweenLite.to("#swup .work_page_figure", .75, {
                autoAlpha: 0,
            })
             TweenLite.set(".page_content_text", {
                x: 0
            })
            TweenLite.to(".page_content_text", .75, {
                delay: .5,
                x: 200,
                autoAlpha: 0,
                ease:  Expo.easeInOut,
                onComplete: next
            })
        }
      }
    ];

    const swup = new Swup({
      plugins: [
        new SwupBodyClassPlugin(),
        new SwupJsPlugin(options)
      ]
    });
    init();
    swup.on('contentReplaced', init);
    swup.on('animationSkipped', function(){
        TweenLite.set(".work_list", {
            autoAlpha: 0,
            y: "100vh"
        })
        TweenLite.to(".work_list", 1, {
            autoAlpha: 1,
            y: "0",  
            ease:  Expo.easeInOut
        })
        TweenLite.set("#swup", {
            y: 0,
            autoAlpha: 1
          })
          TweenLite.to("#swup", .75, {
            y: "100vh",
            autoAlpha: 0,
            ease:  Expo.easeInOut
          })
    });


});    
$(window).on('load', function(){      
});
