let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = ()=>{
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop-150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top<offset+height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*='+id+']').classList.add('active');
//             });
//         };
//     });
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky',window.scrollY>100);

//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };
//reset=repeat
ScrollReveal({
    // reset:true, 
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.about-img',{origin:'left'});
ScrollReveal().reveal('.about-content',{origin:'right'});   

// const typed = new Typed('.multiple-text',{
//     strings:['耍笨','斜咖','哇咧'],
//     typeSpeed:100,
//     backSpeed:200,
//     backDelay:5000,
//     loop:true

// });

function jj(){
    console.log("gyui");
    window.location.href = 'https://ixd.ntut.edu.tw/';
}

// Get the modal
var modal = document.getElementById('modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById('modalImg');
var thumbnails = document.querySelectorAll('.intropic');

thumbnails.forEach(function(thumbnail) {
    thumbnail.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
