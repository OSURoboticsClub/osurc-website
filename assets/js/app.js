// App JavaScript can go here

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

