$(document).ready(function(){


    $('.product-slider').owlCarousel({
        loop:true,
        nav:true,
        items:3,
        autoplay:true,
        center:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

});


document.getElementById("date").innerHTML = Date();
    
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  document.getElementById("location").innerHTML = position.coords.latitude + 
  "," + position.coords.longitude +  ": Nigeria.";
}

