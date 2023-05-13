$('.nav-2').hover(function () {
    $('.nav-items-1').toggleClass('navActive')
})
$('.nav-3').hover(function () {
    $('.nav-items-2').toggleClass('navActive')
})
$('.nav-4').hover(function () {
    $('.nav-items-3').toggleClass('navActive')
})
$('.nav-5').hover(function () {
    $('.nav-items-4').toggleClass('navActive')
})

// let slideIndex = 1;
// showSlides();
// function plusSlides(n) {
//     showSlides(slideIndex += n)
// }
// function currentSlides(n) {
//     showSlides(slideIndex = n)
// }
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides")
//     let dots = document.getElementsByClassName("dot")
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "")
//     }
//     slides[slideIndex - 1].style.display = "block"
//     dots[slideIndex - 1].className += " active"
//     setTimeout(showSlides, 2000);
// }
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function refresh() {
    window.location.reload();
}


