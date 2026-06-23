const typingElement = document.getElementById("typing");

const words = [
    "All Time Learner",
    "Machine Operator",
    "Technical Enthusiast",
    "Google Sheets Builder",
    "Web Development Learner",
    "Future Industrial Professional"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();


// Fade Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0px)";
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section, .skill-card, .experience-card, .project-card"
).forEach((el) => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(40px)";

    el.style.transition =
        "all 0.8s ease";

    observer.observe(el);
});