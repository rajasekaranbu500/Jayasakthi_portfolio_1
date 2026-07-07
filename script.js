// ===============================
// Sticky Header
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "#000";
        header.style.boxShadow = "0 0 20px rgba(255,0,0,.4)";
    } else {
        header.style.background = "transparent";
        header.style.boxShadow = "none";
    }
});

// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// Typing Effect
// ===============================

const typingText = document.querySelector(".home-content h2 span");

const words = [

    "UI / UX Designer",
    "Web Designer",
    "Data Analyst",
    "AI Enthusiast"

];

let wordIndex = 0;

let letterIndex = 0;

let currentWord = "";

let isDeleting = false;

function type() {

    currentWord = words[wordIndex];

    if (isDeleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex--);

    }

    else {

        typingText.textContent =
            currentWord.substring(0, letterIndex++);

    }

    let speed = 120;

    if (isDeleting) {

        speed = 60;

    }

    if (!isDeleting && letterIndex === currentWord.length) {

        speed = 1500;

        isDeleting = true;

    }

    else if (isDeleting && letterIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex === words.length) {

            wordIndex = 0;

        }

    }

    setTimeout(type, speed);

}

type();

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements =
    document.querySelectorAll(".service-box,.project-box,.skills-icons img,.about-content,.contact form");

window.addEventListener("scroll", reveal);

function reveal() {

    let windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        let top = el.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = ".8s";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";

});

// ===============================
// Mobile Menu
// ===============================

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon) {

    menuIcon.onclick = () => {

        menuIcon.classList.toggle("bx-x");

        navbar.classList.toggle("active");

    }

}