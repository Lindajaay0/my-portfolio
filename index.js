$(".jumper").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 1400);
});


$(function() {
$(".top-head").hide().slideDown(1000);
});
