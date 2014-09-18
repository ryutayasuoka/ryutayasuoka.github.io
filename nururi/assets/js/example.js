var mid;
$(function(){
  d = {
    d:'pc',
    t:{h:0,st:-2000},
    h:{h:0,st:0},
    a:{h:700,st:1250},
    m:{h:1000,st:1890},
    p:{h:670,st:3276},
    s:{h:0,st:4020},
    n:{h:0,st:4980},
    c:{h:0,st:6000},
    f:{h:84,st:5500}
  };
//IE
  if(navigator.userAgent.indexOf("msie") != -1){
    m = {
      mmu:5,
      mmd:57,
      mbg:-78
    };
  }else{
    m = {
      mmu:0,
      mmd:52,
      mbg:-83
    };
  }

//add padding for #wrapper
  $("#wrapper").css({
    padding:'0 10px'
  });
  
// contents_loading
  $(window).load(function(){
    $('html,body').animate({ scrollTop:$("body").offset().top }, 100);
    var wh = $(window).height();
    if(wh>=880){
      $(".totop").css({
        top: 1200-880+wh+'px'
      });
      $("#footer").css({
        top: 5150-880+wh+'px'
      });
    }
    $(".contents_loading").fadeOut(500,function(){
      $("#contents").fadeIn(1000,function(){
        $("#header,#contents").animate({
          filter:'alpha(opacity=100)',
          opacity:1
        },{
          duration: 1000,
          complete: function(){
            $("#main_contents,.block,#menu").animate({
              filter:'alpha(opacity=100)',
              opacity:1
            },1);
          }
        });
      });
      $('.scroll_area').jScrollPane();
    });
    if (d.d == 'tab') {
      $(".block").css({
        top:'',
        position:'relative',
      });
      $("#header").css({
        position:'relative',
        minHeight: d.h+'px',
        borderBottom: '1px solid #CCCCCC'
      });
      $("#main_contents").css({
        position:'relative',
        minHeight: d.h+'px'
      });
      $("#menu").css({
        position:'fixed',
        width:'100%',
        left:0,
        top:0
      });
      $(".left_bg, .right_bg").css({
        height: d.h+'px'
      });
      $(".strategy_title > *").each(function(){
        $(this).css({
          top: parseInt($(this).css('top'),10) - 392+'px'
        });
      });
      $(".strategy_title").css({
        backgroundPosition: '125px 150px'
      });
      $(".strategy_footer").css({
        bottom: ' ',
        top: '280px'
      });
      $("#contact").css({
        height: '600px'
      });
      $("#contact>.width>div").css({
        top: '200px'
      });
      $("#footer").css({
        top: 'auto',
        bottom: '0'
      });
      $("#contact .totop").css({
        top: 'auto',
        bottom: '-20px'
      });
      return;
    }else{
    //top
      $("#about").css({
        top:'0'
      });
      $("#member").css({
        top:'1700px'
      });
      $("#portfolio").css({
        top:'2100px'
      });
      $("#strategy").css({
        top:'2380px'
      });
      $("#news").css({
        top:'3750px'
      });
      $("#contact").css({
        top:'4200px'
      });
   //PC版初期表示
      init();
      resize();
    }
  });
  
// popup
  $('.popup_link a[href^="#"]').click(function(){
    var id = $(this).attr("href");
    if($(".popup").css('display') != 'block'){
      $("body").css('overflow','hidden');
      $(id).fadeIn(1000);
      $(id).jScrollPane({
        mouseWheelSpeed:20
      });
      return false;
    }else{
      $(".popup").fadeOut(1000,function(){
        setTimeout(function(){
          $("body").css('overflow','hidden');
          $(id).fadeIn(1000);
          return false;
        },1200);
      });
    }
  });

// popup close
  $(".popup_close").click(function(){
    $("body").css('overflow','auto');
    $(".popup").fadeOut("slow");
  });

  $(window).keydown(function (e) {
    if (e.keyCode == 27) {
      $("body").css('overflow','auto');
      $(".popup").fadeOut("slow");
    }
  });

// menu link
  $('a.ms').click(function() {
    if(d.d == 'pc'){
      $('html,body').animate({scrollTop: (d[$(this).attr("href")].st)-(600-$(window).height())*2},1000 );
    }else{
      $('html,body').animate({scrollTop: $("#"+d[$(this).attr("href")].r).offset().top},1000);
    }
    return false;
  });
  
  $(window).scroll(function(){
    if(d.d == 'pc'){
      parallax();
    }else if(d.d == 'tab'){
      
    }
  });

  $(window).resize(function(){
    if(d.d == 'pc'){
      if($(window).width()>1280 && $(window).width()<1300){
        $("#wrapper").css({
          margin:'0 '+($(window).width()-1300)/2+'px'
        });
      }else{
        $("#wrapper").css({
          margin:'0 auto'
        });
      }
      resize();
      parallax();
    }
  });

/*----------------------------------------------------
* message
----------------------------------------------------*/
//Click #message .left .arrow
  $("#message .left_bg .arrow").click(function(){
    $(this).fadeOut(100,function(){
      $("#message .right_bg").animate({
        right:'-440px'
      },{
        queue:false,
        duration:500
      });
      $("#message .left_bg").animate({
        width:'1080px'
      },{
        queue:false,
        duration:500
      });
    });
    $("#message .right").fadeOut(1000,function(){
      $("#message .left").animate({
        left:'480px'
      },{
        complete:function(){
          setTimeout(function(){
            $("#message .left .message_detail").fadeIn(1000);
          },300);
          $(".left_bg .back").fadeIn(100);
        },
        duration:100
      });
    });
  });

//#message .right .arrow
  $("#message .right_bg .arrow").click(function(){
    $(this).fadeOut(100,function(){
      $("#message .left_bg").animate({
        left:'-640px'
      },{
        queue:false,
        duration:500
      });
      $("#message .right_bg").animate({
        width:'1080px'
      },{
        queue:false,
        duration:500
      });
    });
    $("#message .left").fadeOut(1000,function(){
      $("#message .right").animate({
        left:0
      },{
        complete:function(){
          setTimeout(function(){
            $("#message .right .message_detail").fadeIn(1000);
          },300);
          $(".right_bg .back").fadeIn(100);
        },
        duration:100
      });
    });
  });

//#message .left .back
  $("#message .left_bg .back").click(function(){
    setTimeout(function(){
      $("#message .left .message_detail").fadeOut(100);
      $("#message .left_bg .back").fadeOut(100,function(){
        $("#message .right_bg").animate({
          right:'0px'
        },{
          queue:false,
          duration:500
        })
        $("#message .left_bg").animate({
          width:'640px'
        },500);
        $("#message .left").animate({
          left:'0px'
        },{
          complete:function(){
            $(".right").fadeIn(400);
            $("#message .arrow").fadeIn(400,function(){
                $('html,body').animate({scrollTop: 1850-(580-$(window).height())*2},1000 );
                return false;
            });
          },
          queue:false,
          duration:500
        });
      });
    },500);
  });

//#message .right .back
  $("#message .right_bg .back").click(function(){
    setTimeout(function(){
      $("#message .right .message_detail").fadeOut(100);
      $("#message .right_bg .back").fadeOut(100,function(){
        $("#message .left_bg").animate({
          left:'0px'
        },{
          queue:false,
          duration:500
        })
        $("#message .right_bg").animate({
          width:'640px'
        },500);
        $("#message .right").animate({
          left:'480px'
        },{
          complete:function(){
            $(".left").fadeIn(400);
            $("#message .arrow").fadeIn(400,function(){
                $('html,body').animate({scrollTop: 1850-(580-$(window).height())*2},1000 );
                return false;
            });
          },
          queue:false,
          duration:500
        });
      });
    },500);
  });

/*----------------------------------------------------
* member
----------------------------------------------------*/
$(".member_detail").click(function(){
  mid = $(this).attr("mid");
  $(".hover_img").addClass("transparent");
  $(".member_detail").not("[mid="+mid+"]").stop().fadeOut(500,function(){
    $("[mid="+mid+"]").animate({
      left: '60px'
    },500,function(){
      $(".member_back,.member_message"+mid).stop().fadeIn(500);
    });
  });
});

$(".member_back").click(function(){
  $(".member_back,.member_message"+mid).stop().fadeOut(500,function(){
    $("[mid="+mid+"]").animate({
      left: 320*(mid-1)+'px'
    },500,function(){
      $(".member_detail").fadeIn(500);
      $(".hover_img").removeClass("transparent");
    });
  });
});

/*----------------------------------------------------
* portfolio
----------------------------------------------------*/
//portfolio
   $(".portfolio_title ul").css({
    width:$(".portfolio_title ul li").size()*250+'px'
  });


//social buttons
  setTimeout(function(){
    $("li.facebook").append('<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fyj-capital.co.jp&amp;width=100&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=21&amp;appId=1432852466935717" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe>');
    $("li.twitter").append("<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>");
  },1000);
});


/*----------------------------------------------------
* init()
----------------------------------------------------*/
function init(){

}

/*----------------------------------------------------
* parallax()
----------------------------------------------------*/
// parallax_block
function parallax(){
  var c = {
    wh:$(window).height(),
    y:$(this).scrollTop(),
    fh:$("#footer").offset()
  };

// body
  $("#wrapper").css('height', c.fh.top+84);

//logo animation
  var st = $(window).scrollTop();
  if(d.d !='tab'){
    $(".logo>li").each(function(){
      $(this).css({
        top:-st*$(this).attr("x")*0.4+'px'
      });
    });
  }

// header
  if(c.y > c.wh){
    $("#header").css('top', c.wh-c.y);
  }else{
    $("#header").css('top', 0);
  }

// main_contents
  $("#main_contents").css('top', c.wh*2);

// menu animation
  menuAnimation(c.y,c.wh);

// menu
//#message
  if(c.y > c.wh*2){
    $(".menu_para").addClass('menu_fixed');
    $("#message").css('top', 290+(c.y-c.wh*2)/3);
    if($(window).width()>=1280){
      $(".menu_fixed").css({
        left:10+$("#wrapper").offset().left+'px'
      });
    }else{
      $(".menu_fixed").css({
        left:0
      });
    }
  }else{
    $(".menu_para").removeClass('menu_fixed');
    $("#message").css('top', 290);
    if($(window).width()>=1280){
      $(".menu_para").css({
        left:0
      });
    }
  }

//#message .left,#message .right
    if(c.y-c.wh*2>=400 && c.y-c.wh*2<620){
      if($("#message .left_bg .back").css('display') != 'block' && $("#message .right_bg .back").css('display') != 'block'){
        $("#message .left_bg").css({
          left:-660+((c.y-c.wh*2)-400)*3+'px'
        });
        $("#message .right_bg").css({
          right:-660+((c.y-c.wh*2)-400)*3+'px'
        });
        $("#message .left").css({
          left:-660+((c.y-c.wh*2)-400)*3+'px'
        });
        $("#message .right").css({
          left:1140-((c.y-c.wh*2)-400)*3+'px'
        });
      }
    }else if(c.y-c.wh*2>=600){
      if($("#message .left_bg .back").css('display') != 'block' && $("#message .right_bg .back").css('display') != 'block'){
        $("#message .left_bg").css({
          left:'0px'
        });
        $("#message .right_bg").css({
          right:'0px'
        });
        $("#message .left").css({
          left:'0px'
        });
        $("#message .right").css({
          left:'480px'
        });
      }
    }else if($("#message .left_bg .back").css('display') != 'block' && $("#message .right_bg .back").css('display') != 'block'){
      $("#message .left_bg").css({
        left:'-660px'
      });
      $("#message .right_bg").css({
        right:'-660px'
      });
      $("#message .left").css({
        left:'-660px'
      });
      $("#message .right").css({
        left:'1140px'
      });
    }


  // strategy
    if(c.y > c.wh*2+1550){
      $("#strategy").css('top', 2150+(c.y-c.wh*2-1650)/4);
    }else{
      $("#strategy").css('top', 2150);
    }

  // news
    if(c.y > c.wh*2+1700){
      $("#news").css('top', 3150+(c.y-c.wh*2-1700)/3);
    }else{
      $("#news").css('top', 3150);
    }
  }

/*----------------------------------------------------
* resize()
----------------------------------------------------*/
function resize(){
  if($(window).width()>=1280 && $("menu_para").hasClass("menu_fixed")){
    $(".menu_para").css({
      left:10+$("#wrapper").offset().left+'px'
    });
  }
  var wh = $(window).height();
  if(wh>=880){
    $(".totop").css({
      top: 1200-880+wh+'px'
    });
    $("#footer").css({
      top: 5550-880+wh+'px'
    });
  }else{
    $(".totop").css({
      top: '1200px'
    });
    $("#footer").css({
      top: '5550px'
    });
  }
}

/*----------------------------------------------------
* menuAnimation(y,wh)
----------------------------------------------------*/
function menuAnimation(y,wh){
  if( y > wh*2 && y < wh*2+686 ){
     var mn = 1;
  }else if( y > wh*2+686 && y < wh*2+1660 ){
     var mn = 6;
  }else if( y > wh*2+2060 && y < wh*2+2800 ){
     var mn = 2;
  }else if( y > wh*2+2800 && y < wh*2+3720 ){
     var mn = 3;
  }else if( y > wh*2+3720 && y < wh*2+4650 ){
     var mn = 4;
  }else if( y > wh*2+4650 ){
     var mn = 5;
  }else{
     var mn = '';
     $(".menu1 img").css({
       top:m.mmu+'px'
     });
     $(".bg_menu1").css({
       top:m.mbg+'px',
       opacity:0
     });
  }
  if(mn){
    $(".menu img").not(".menu"+mn+" img").css({
      top:m.mmu+'px'
    });
    $(".menu"+mn+" img").css({
      top:m.mmd+'px'
    });
    $(".menu_bg>li").not(".bg_menu"+mn).css({
       top:m.mbg+'px',
       opacity:0
    });
    $(".bg_menu"+mn).css({
      top:m.mmu+'px',
      opacity:1
    });
  }
}