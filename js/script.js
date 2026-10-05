fetch("components/header.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#header").innerHTML = data;

        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");

        if (menuToggle && navLinks) {
            menuToggle.addEventListener("click", () => {
                navLinks.classList.toggle("active");
            });

            const navLinksItems = document.querySelectorAll(".nav-links a");

            navLinksItems.forEach((link) => {
                link.addEventListener("click", () => {
                    navLinks.classList.remove("active");
                });
            });
        }

        const themeToggle = document.querySelector(".theme-toggle");

        if (themeToggle) {
            themeToggle.addEventListener("click", () => {
                document.body.classList.toggle("dark-mode");

                if (document.body.classList.contains("dark-mode")) {
                    themeToggle.textContent = "☀️";
                    localStorage.setItem("theme", "dark");
                } else {
                    themeToggle.textContent = "🌙";
                    localStorage.setItem("theme", "light");
                }
            });

            const savedTheme = localStorage.getItem("theme");

            if (savedTheme === "dark") {
                document.body.classList.add("dark-mode");
                themeToggle.textContent = "☀️";
            }
        }
    });

fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#footer").innerHTML = data;
    });

const scrollTop = document.querySelector(".scroll-top");

if (scrollTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollTop.classList.add("show");
        } else {
            scrollTop.classList.remove("show");
        }
    });

    scrollTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}