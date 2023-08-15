// Toggle Navbar
let menuIcon = document.querySelector("#hamburger");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Scroll Section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*= " + id + "]")
                    .classList.add("active");
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove Toggle when click the navbar
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

// Responsive with Scroll Reveal

ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
    ".home-img, .skills-container, .experiences-box, .contact form",
    { origin: "bottom" }
);
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });

// Multiple Text with typed js

/*const typed = new Typed(".multiple-text", {
    strings: ["Computer Operator", "Front-End Web Dev", "Content Writer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});*/

// Smtp Js For Email

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "joshuagara744@gmail.com",
        Password: "940E18286167A0C39B3D55E94859CFD5ADF9",
        To: document.getElementById("email").value,
        From: "joshuagara744@gmail.com",
        Subject: "New Contact Form Enquiry",
        Body: "And this is the body",
    }).then((message) => alert(message));
}
