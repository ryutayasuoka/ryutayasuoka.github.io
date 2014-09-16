$(function() {
    $("#tab li a").click(function() {
        $($("#tab li a.visible").attr("href")).hide();
        $("#tab li a.visible").removeClass("visible");
        $(this).addClass("visible");
        $($(this).attr("href")).fadeIn("fast");
        return false;
    });
});
