

window.addEventListener('scroll', (_, ev) => {
    // console.log(window.scrollY);
    if (window.scrollY > 10) {
        document.getElementById("navbar").classList.add("bg-neutral-900");
    } else {
        document.getElementById("navbar").classList.remove("bg-neutral-900");
    }
})

let menuOpen = false;
document.getElementById("menuToggle").addEventListener("click", () => {
    console.log("menu open click")
    if (menuOpen) {
        // Close the menu
        document.getElementById("mobileMenu").classList.add("hidden");
        document.getElementById("mobileMenuCloseSvg").classList.add("hidden");
        document.getElementById("mobileMenuOpenSvg").classList.remove("hidden");
        menuOpen = false;
        if (window.scrollY < 10) {
            document.getElementById("navbar").classList.remove("bg-neutral-900");
        }
    } else {
        // Open the menu
        document.getElementById("mobileMenu").classList.remove("hidden");
        document.getElementById("mobileMenuCloseSvg").classList.remove("hidden");
        document.getElementById("mobileMenuOpenSvg").classList.add("hidden");
        document.getElementById("navbar").classList.add("bg-neutral-900");
        menuOpen = true;
    }
});

// Universal Tilt (only initialize on devices larger than 'sm' breakpoint)
if (window.innerWidth > 640)
    UniversalTilt.init({
        elements: document.querySelectorAll('[tilt]'),
        settings: {
            // options...
            shine: true,
            'shine-opacity': 0.5,
            scale: 1.2,
            speed: 500,
            exclude: /(iPod|iPhone|iPad|Android)/
        },
        callbacks: {
            // callbacks...
        }
    });

