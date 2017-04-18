$(document).ready(function(){
    $(window).scroll(function(){
        $(".masthead").css("opacity", 1 - $(window).scrollTop() / 1000);
    });
});