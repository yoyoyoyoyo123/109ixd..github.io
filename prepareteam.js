$(document).ready(function(){
   
    $('.home-img').slick({
        autoplay: true, 
        autoplaySpeed: 2000,
        arrows: false, 
        dots: false, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');

    portfolioBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
