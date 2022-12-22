let button = document.getElementById("to-top-button");
window.onscroll = function() {scrollFunction()};
let navbar_bg = document.getElementById("nav-background");
let navbar = document.getElementById("nav-container");

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.opacity = "1";
    button.style.transition = "0.3s ease-out";
    navbar.style.height = "60px";
    navbar_bg.style.height = "60px";
    navbar.style.transition = "0.5s ease-out";
    navbar_bg.style.transition = "0.5s ease-out";
  } else {
    button.style.opacity = "0";
    button.style.transition = "0.3s ease-out";
    navbar.style.height = "80px";
    navbar_bg.style.height = "80px";
    navbar.style.transition = "0.5s ease-out";
    navbar_bg.style.transition = "0.5s ease-out";
  }
}

;

function topFunction() {
  document.documentElement.scrollTop = 0;
}

$(document).ready(function() {

        $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
})
