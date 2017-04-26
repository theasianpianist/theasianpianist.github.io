$(document).ready(function(){
    $(window).scroll(function(){
        $(".navbar").css("opacity", 1 - $(window).scrollTop() / 200);
        $(".panel").css("opacity", $(window).scrollTop() / 200);
        $(".table").css("opacity", $(window).scrollTop() / 200);
        $(".down-container, .page-content").css("opacity", 1 - $(window).scrollTop() / 200);

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

$(".clickable-row").click( function() {
    window.location = $(this).find('a').attr('href');
});

$(".no-propogate").click( function(e) {
	e.stopPropogation();
});