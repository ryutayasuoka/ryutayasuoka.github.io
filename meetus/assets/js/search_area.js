$(document).ready(function(){
    $('.js-landmark-tab').hover(function(){
        var idx = $(this).data('idx');
        var path = "../../assets/img/search_area/landmark"+idx+".jpg";
        $('.landmark-image').attr('src',path);
    }, function(){});
});