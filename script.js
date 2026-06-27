// Function for Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Attach listener to scroll
window.addEventListener("scroll", reveal);

// Initial call on load
window.onload = reveal;

console.log("Portfolio Loaded: K Mahesh Babu Content Synchronized.");