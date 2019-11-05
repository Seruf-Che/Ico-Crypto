svg4everybody();

/*Counter*/
$('.rating__mark.rating__mark--animated').counterUp({
  delay: 100,
  time: 2500
});

/*JQuery TABS*/
$( ".tabs" ).tabs();

/*Accordion*/

//$( ".accordion__item" ).click(function() {
//  $(".accordion__item").toggleClass("accordion__item--active");
//});

var acc = document.getElementsByClassName("accordion__item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("accordion__item--active");
    });
}

/*fixed header on scroll*/
window.onscroll = function() {fixHeader()};
var header = document.getElementById("top-menu");
var sticky = header.offsetTop;
function fixHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("menu--scroll");
  } else {
    header.classList.remove("menu--scroll");
  }
}

/*one page scroll*/
$('.menu__navigation').onePageNav({
	changeHash: false,
	scrollSpeed: 500,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

/*Hamburger menu*/
$('.hamburger').addClass('hamburger--enable');
$('.hamburger').click(function(){
    $(this).toggleClass('hamburger--open');
    $('.menu__navigation').toggleClass('menu__navigation--closed');
});
