/*----------------------------------------------------

----------------------------------------------------*/
$(document).ready(function(){

    $(window).scroll(function(){

        var scroll_val = $(document).scrollTop();
        console.log(scroll_val);
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
        var delta = -4000-((scroll_val-1000)*1.5*parseInt($(this).data('y')));
        if(scroll_val>=0 && scroll_val <= 1000){
            delta = -scroll_val*4;
        }
        $(this).css('top',delta*0.1);
    });
}
function showVideo(scroll_val){
    if(scroll_val > 28300 && scroll_val < 31000){
        $('video').css({
            top : scroll_val-27900
        });
    }
}
function showLogo(scroll_val){
    if(scroll_val >= 500 && $('#top_logo').data('isshow') == true){
        $('#top_logo').data('isshow',false);
        $('#top_logo').fadeOut(300);
    }else if(scroll_val < 10 && $('#top_logo').data('isshow') == false){
        $('#top_logo').data('isshow',true);
        $('#top_logo').fadeIn(300);
    }
}
function slideImage(scroll_val){
    var slide_image_value = {
        '#member_img1' : {
            "start" : 5500,
            "position" : "left"
        },
        '#member_img2' : {
            "start" : 9000,
            "position" : "right"
        },
        '#member_img3' : {
            "start" : 12500,
            "position" : "left"
        },
        '#member_img4' : {
            "start" : 16000,
            "position" : "right"
        },
        '#member_img5' : {
            "start" : 19500,
            "position" : "left"
        },
        '#member_img6' : {
            "start" : 23000,
            "position" : "right"
        },
    };

    $.each(slide_image_value,function(m){
        var rel_scroll_val = scroll_val - this['start']; //relative scroll_val
        if(this["position"] == "left"){
            if(rel_scroll_val >= 0 && rel_scroll_val <= 500){
                $(m).css({
                    left: '-'+ ( (500-rel_scroll_val)*0.2 )+'%',
                });
            }else if(rel_scroll_val >= 500 && rel_scroll_val <= 2500){
                $(m).css({
                    left: '0%',
                    opacity : ((rel_scroll_val-500)*0.001)+0.3
                });
            }else if(rel_scroll_val >= 2500 && rel_scroll_val <= 3500){
                $(m).css({
                    left: '0%',
                    opacity : ((3500-rel_scroll_val)*0.001)+0.3
                });
            }else if(rel_scroll_val >= 3500 && rel_scroll_val <= 4000){
                $(m).css({
                    left: '-'+ ( (rel_scroll_val-3500)*0.2 )+'%',
                });
            }else{
                $(m).css({
                    left: '-100%',
                });
            }
        }else{
            if(rel_scroll_val >= 0 && rel_scroll_val <= 500){
                $(m).css({
                    right: '-'+ ( (500-rel_scroll_val)*0.2 )+'%',
                });
            }else if(rel_scroll_val >= 500 && rel_scroll_val <= 2500){
                $(m).css({
                    right: '0%',
                    opacity : ((rel_scroll_val-500)*0.001)+0.3
                });
            }else if(rel_scroll_val >= 2500 && rel_scroll_val <= 3500){
                $(m).css({
                    right: '0%',
                    opacity : ((3500-rel_scroll_val)*0.001)+0.3
                });
            }else if(rel_scroll_val >= 3500 && rel_scroll_val <= 4000){
                $(m).css({
                    right: '-'+ ( (rel_scroll_val-3500)*0.2 )+'%',
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
    if(scroll_val >= 3000 && scroll_val < 27000 && $('header').data('isshow') == false){
        $('header').fadeIn(500);
        $('header').data('isshow',true);
    }else if(scroll_val < 1000 && $('header').data('isshow') == true){
        $('header').fadeOut(500);
        $('header').data('isshow',false);
    }else if(scroll_val > 27000 && $('header').data('isshow') == true){
        $('header').fadeOut(500);
        $('header').data('isshow',false);
    }
}
function headerAction(scroll_val){
    var header_down_value = {
        '#m1' : {
            "start" : 6000,
            "last" : 9100,
        },
        '#m2' : {
            "start" : 9100,
            "last" : 12600,
        },
        '#m3' : {
            "start" : 12600,
            "last" : 16100,
        },
        '#m4' : {
            "start" : 16100,
            "last" : 19600,
        },
        '#m5' : {
            "start" : 19600,
            "last" : 23100,
        },
        '#m6' : {
            "start" : 23100,
            "last" : 26700,
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
