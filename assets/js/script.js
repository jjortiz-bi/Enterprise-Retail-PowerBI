<script>
const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

// Scroll effect for header
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Toggle hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("active");
});

// 🔥 PROPER MOBILE LINK HANDLING
mobileLinks.forEach(link => {
    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        // Only handle internal links
        if (targetId.startsWith("#")) {
            e.preventDefault(); // Stop instant jump

            // Close menu first
            hamburger.classList.remove("open");
            mobileMenu.classList.remove("active");

            // Wait for animation to finish
            setTimeout(() => {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }, 300); // matches CSS transition
        }
    });
});
</script>
