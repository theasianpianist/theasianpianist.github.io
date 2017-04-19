$(document).ready(function(){
    $(window).scroll(function(){
        $(".navbar").css("opacity", 1 - $(window).scrollTop() / 200);
        $(".panel").css("opacity", $(window).scrollTop() / 100);
        $(".table").css("opacity", $(window).scrollTop() /100);
        $(".down-container").css("opacity", 1 - $(window).scrollTop() / 100);
    });
});