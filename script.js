var elem = document.querySelector('.hero-section .main-carousel');
var flkty = new Flickity( elem, {
  draggable: false,
  imagesLoaded: true,
  autoPlay: true,
  freeScroll: true,
  wrapAround: true,
  pauseAutoPlayOnHover: false,
  pageDots: false,
  prevNextButtons: false,
});

var amenities = document.querySelector('.amenities-section .main-carousel');
var flkty = new Flickity( amenities, {
  draggable: true,
  imagesLoaded: true,
  autoPlay: true,
  freeScroll: true,
  wrapAround: true,
  pauseAutoPlayOnHover: false,
  prevNextButtons: false,
  pageDots: false
});

document.addEventListener('scroll', function () {
  if ((window.pageYOffset / (document.body.clientHeight - window.innerHeight)) * 100 >= '3') {
    document.querySelector('body').classList.add('cb-fixed');
  } else {
    document.querySelector('body').classList.remove('cb-fixed');
  }
});

document.querySelector(".header .navbar-toggler").addEventListener("click", function () {
  document.querySelector("body .cb-modal-container").classList.add("cb-show-modal");
});

document.querySelector("body .cb-modal-container .cb-close-btn").addEventListener("click", function () {
  document.querySelector("body .cb-modal-container").classList.remove("cb-show-modal");
});

document.querySelectorAll(".cb-modal-container ul li").forEach(function (el) {
  el.addEventListener("click", function () {
    document.querySelector("body .cb-modal-container").classList.remove("cb-show-modal");
  });
});