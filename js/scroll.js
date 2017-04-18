$(document).ready(function(){
    $(window).scroll(function(){
        $(".navbar").css("opacity", 1 - $(window).scrollTop() / 250);
        $(".panel").css("opacity", $(window).scrollTop() / 250);
    });
});