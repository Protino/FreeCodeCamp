
var items;
window.onload = function() {
  items = document.querySelectorAll(".timeline li");
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
    $(function() {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
    });
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
