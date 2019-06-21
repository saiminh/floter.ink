jQuery(document).ready(function ($) {

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
