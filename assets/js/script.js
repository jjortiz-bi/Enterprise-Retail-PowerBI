<script>
const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

// Scroll effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Toggle menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("active");
});

// Proper mobile link handling
mobileLinks.forEach(link => {
    link.addEventListener("click", function(e) {

        const target = this.getAttribute("href");

        // Only intercept internal links (#)
        if (target.startsWith("#")) {

            e.preventDefault(); // stop instant jump

            // Close menu immediately
            hamburger.classList.remove("open");
            mobileMenu.classList.remove("active");

            // Wait for animation to finish
            setTimeout(() => {
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }, 350); // match CSS transition
        }
    });
});
</script>
