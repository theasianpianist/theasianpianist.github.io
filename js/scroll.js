$(document).ready(function(){
    $(window).scroll(function(){
        $(".navbar").css("opacity", 1 - $(window).scrollTop() / 200);
        $(".panel").css("opacity", $(window).scrollTop() / 100);
        $(".table").css("opacity", $(window).scrollTop() /100);
        $(".down-container").css("opacity", 1 - $(window).scrollTop() / 100);
    });
});

$( ".expandable" ).click(function() {
    $(this).toggleClass("expand");
});

$(".down").click(function() {
    $('html,body').animate({
        scrollTop: $(".main").offset().top},
        'slow');
});