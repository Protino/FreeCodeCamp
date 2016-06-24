
var items;//Holds number of div items in the timeline section
window.onload = function() {
  $(".preload").fadeOut(function(){
    $(".intro").fadeIn();
    $(".timeline").fadeIn();
    $(".credits").fadeIn();
  });
  items = document.querySelectorAll(".timeline li");
  window.addEventListener("load", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
}

// code for the isElementInViewport function
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
   return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
}

// TODO: Make the div tag containg person name stick at the top after being scrolled
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top)
        $('#sticky-element').addClass('sticky');
    else
        $('#sticky-element').removeClass('sticky');
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
  sticky_relocate();
}
