const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");


// Open and close the mobile menu
menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Close the menu after clicking a link
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});
// Scroll animation

const animatedElements = document.querySelectorAll(
    ".service-card, .why-card, .project, .about-content, .contact-box"
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


animatedElements.forEach(function(element) {

    element.classList.add("hidden");

    observer.observe(element);

});
// Highlight the navigation link for the section currently on screen

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
// Back to Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Service card interaction

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.toggle("selected");
    });
});