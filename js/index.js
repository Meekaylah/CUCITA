var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});


document.getElementById("date").innerHTML = Date();
    
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  document.getElementById("location").innerHTML = position.coords.latitude + 
  "," + position.coords.longitude +  ": Nigeria.";
}