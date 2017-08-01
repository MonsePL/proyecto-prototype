$(document).ready(function() {
  $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});


function postJSON(url) {
  return new Promise(function(resolve, reject) {
    var ajax = new XMLHttpRequest();
    ajax.open("POST", url);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4) {
        resolve(JSON.parse(ajax.responseText))
      }

    }
  })
}
