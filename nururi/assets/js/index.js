/*----------------------------------------------------

----------------------------------------------------*/
$(function(){
    $(window).scroll(function(){
        var scroll_val = $(document).scrollTop();
        console.log(scroll_val);

        // top
        $('.logo li').each(function(){
            var delta = -scroll_val*parseInt($(this).data('y'));
            $(this).css('top',delta*0.3);
        });
        // top_logo
        if(scroll_val >= 500 && $('#top_logo').data('isshow') == true){
            $('#top_logo').fadeOut(300);
            $('#top_logo').data('isshow',false);
        }else if(scroll_val < 10 && $('#top_logo').data('isshow') == false){
            $('#top_logo').fadeIn(300);
            $('#top_logo').data('isshow',true);
        }

        // header
        if(scroll_val >= 1000 && $('header').data('isshow') == false){
            $('header').fadeIn(500);
            $('header').data('isshow',true);
            console.log($('header').data('isshow'));
        }else if(scroll_val < 1000 && $('header').data('isshow') == true){
            $('header').fadeOut(500);
            $('header').data('isshow',false);
        }

        //member1
        if(scroll_val >= 1100){
            $('#m1').animate({
                top : '52px'
            },1000);
        }

    });

});