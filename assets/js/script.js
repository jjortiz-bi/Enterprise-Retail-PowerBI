<script>
const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

// Scroll Effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Toggle Hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("active");
});

// ✅ Close Menu When Clicking Any Mobile Link
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("active");

        // Optional: prevent glitch by slight delay
        setTimeout(() => {
            mobileMenu.style.maxHeight = null;
        }, 300);
    });
});
</script>
