/*----------------------------------------------------

----------------------------------------------------*/
$(document).ready(function(){
    init();
    function init(){
        $('#member1').css({
            left: '-100%'
        });
    }

    $(window).scroll(function(){

        var scroll_val = $(document).scrollTop();
        //if(scroll_val % 2 == 1)return false;
        //console.log(scroll_val);

        // top
        if(scroll_val > -100 && scroll_val < 1000){
            $('.logo li').each(function(){
                var delta = -scroll_val*parseInt($(this).data('y'));
                $(this).css('top',delta*0.3);
            });
        }

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
        }else if(scroll_val < 1000 && $('header').data('isshow') == true){
            $('header').fadeOut(500);
            $('header').data('isshow',false);
        }

        //member
        headerAction();

        if(scroll_val >=1000 && scroll_val <=2000){
            $('#member1').css({
                left: '-'+((2000-scroll_val)*0.1)+'%',
             });
        }else if(scroll_val>2000 && scroll_val<=4000){
            $('#member1').css({
                left: '0%',
                top : scroll_val-30,
                opacity : (scroll_val-1500)*0.001
            });
        }

        function headerAction(){
            if(scroll_val >= 1500 && $('#m1').data('isdown')==false){
                $('#m1').animate({
                    top : '52px'
                },{
                    duration : 300,
                    complete : function(){
                        $('#m1').data('isdown',true);
                    }
                });
            }else if(scroll_val < 1300 && $('#m1').data('isdown')==true){
                $('#m1').animate({
                    top : '0px'
                },{
                    duration : 300,
                    complete : function(){
                        $('#m1').data('isdown',false);
                    }
                });
            }
        }
    });

});