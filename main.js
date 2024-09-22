let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentSlide += direction;
    showSlides();
}

setInterval(() => {
    currentSlide++;
    showSlides();
}, 3000);

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]/;
    return emailPattern.test(email);
}

function submitForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name != "" && validateEmail(email) && subject != "" && message != "") {
        alert("Muchas gracias " + name + "\n" + "¡Mensaje enviado! Se le responderá en la brevedad...");
        // algo más... 
    }
}