/*----------------------------------------------------

----------------------------------------------------*/
$(document).ready(function(){

    $(window).scroll(function(){

        var scroll_val = $(document).scrollTop();
        moveTitle(scroll_val);
        showLogo(scroll_val);
        showVideo(scroll_val);
        showHeader(scroll_val);
        headerAction(scroll_val);
        slideImage(scroll_val);
    });
});
function moveTitle(scroll_val){
    $('.logo li').each(function(){
        var delta = -scroll_val*parseInt($(this).data('y'));
        $(this).css('top',delta*0.3);
    });
}
function showVideo(scroll_val){
    if(scroll_val > 27500 && scroll_val < 33000){
        $('video').css({
            top : scroll_val-26940
        });
    }
}
function showLogo(scroll_val){
    if(scroll_val >= 500 && $('#top_logo').data('isshow') == true){
        $('#top_logo').fadeOut(300);
        $('#top_logo').data('isshow',false);
    }else if(scroll_val < 10 && $('#top_logo').data('isshow') == false){
        $('#top_logo').fadeIn(300);
        $('#top_logo').data('isshow',true);
    }
}
function slideImage(scroll_val){
    var slide_image_value = {
        '#member_img1' : {
            "start" : 1000,
            "position" : "left"
        },
        '#member_img2' : {
            "start" : 5000,
            "position" : "right"
        },
        '#member_img3' : {
            "start" : 9000,
            "position" : "left"
        },
        '#member_img4' : {
            "start" : 13000,
            "position" : "right"
        },
        '#member_img5' : {
            "start" : 17000,
            "position" : "left"
        },
        '#member_img6' : {
            "start" : 21000,
            "position" : "right"
        },
    };

    $.each(slide_image_value,function(m){
        var rel_scroll_val = scroll_val - this['start']; //relative scroll_val
        if(this["position"] == "left"){
            if(rel_scroll_val >= 0 && rel_scroll_val <= 1000){
                $(m).css({
                    left: '-'+ ( (1000-rel_scroll_val)*0.1 )+'%',
                });
            }else if(rel_scroll_val >= 1000 && rel_scroll_val <= 3000){
                $(m).css({
                    left: '0%',
                    opacity : ((rel_scroll_val-1000)*0.001)+0.3
                });
            }else if(rel_scroll_val >= 3000 && rel_scroll_val <= 4000){
                $(m).css({
                    left: '0%',
                    opacity : ((4000-rel_scroll_val)*0.001)+0.3
                });
            }else if(rel_scroll_val >= 4000 && rel_scroll_val <= 5000){
                $(m).css({
                    left: '-'+ ( (rel_scroll_val-4000)*0.1 )+'%',
                });
            }else{
                $(m).css({
                    left: '-100%',
                });
            }
        }else{
            if(rel_scroll_val >= 0 && rel_scroll_val <= 1000){
                $(m).css({
                    right: '-'+ ( (1000-rel_scroll_val)*0.1 )+'%',
                });
            }else if(rel_scroll_val >= 1000 && rel_scroll_val <= 3000){
                $(m).css({
                    right: '0%',
                    opacity : ((rel_scroll_val-1000)*0.001)+0.3
                });
            }else if(rel_scroll_val >= 3000 && rel_scroll_val <= 4000){
                $(m).css({
                    right: '0%',
                    opacity : ((4000-rel_scroll_val)*0.001)+0.3
                });
            }else if(rel_scroll_val >= 4000 && rel_scroll_val <= 5000){
                $(m).css({
                    right: '-'+ ( (rel_scroll_val-4000)*0.1 )+'%',
                });
            }else{
                $(m).css({
                    right: '-100%',
                });
            }
        }
    });
}

function showHeader(scroll_val){
    if(scroll_val >= 1000 && scroll_val < 26000 && $('header').data('isshow') == false){
        $('header').fadeIn(500);
        $('header').data('isshow',true);
    }else if(scroll_val < 1000 && $('header').data('isshow') == true){
        $('header').fadeOut(500);
        $('header').data('isshow',false);
    }else if(scroll_val > 26000 && $('header').data('isshow') == true){
        $('header').fadeOut(500);
        $('header').data('isshow',false);
    }
}
function headerAction(scroll_val){
    var header_down_value = {
        '#m1' : {
            "start" : 1200,
            "last" : 5200,
        },
        '#m2' : {
            "start" : 5200,
            "last" : 9200,
        },
        '#m3' : {
            "start" : 9200,
            "last" : 13200,
        },
        '#m4' : {
            "start" : 13200,
            "last" : 17200,
        },
        '#m5' : {
            "start" : 17200,
            "last" : 21200,
        },
        '#m6' : {
            "start" : 21200,
            "last" : 25200,
        },
    };

    $.each(header_down_value,function(member){
        if( (scroll_val > this['start'] && scroll_val < this['last'] ) &&
            $(member).attr('class')=="up" ){

            $(member).attr('class','down');
        $(member).animate({top : '52px'},300);
    }else if( (scroll_val < this['start'] && $(member).attr('class')=="down") ||
      (scroll_val > this['last'] && $(member).attr('class')=="down")  ){
        $(member).attr('class','up');
        $(member).animate({top : '0px'},300);
    }
});
}
