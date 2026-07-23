document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section => {

    observer.observe(section);

});
const menu = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
const text = "Turning data into meaningful insights through technology.";

let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}

window.onload = typeText;

