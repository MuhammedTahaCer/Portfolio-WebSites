
var initialSrc = "images/logo-white.png";
var scrollSrc = "images/logo.png";

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 100)
       $(".logo").attr("src", scrollSrc);
    else
       $(".logo").attr("src", initialSrc);
 });