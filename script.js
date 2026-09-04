const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});


document.querySelectorAll(".mobile-nav a").forEach(link => {

    link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });

});


/* Scroll reveal */

const revealElements = document.querySelectorAll(
    ".research-card, .resource, .source-card, .about-content"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyle);


/* Dynamic year */

const year = new Date().getFullYear();

document.querySelector(
    ".footer-bottom span"
).textContent =
    `© ${year} Global Impact Association`;
