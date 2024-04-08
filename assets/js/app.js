// App JavaScript can go here

window.addEventListener('scroll', (_, ev) => {
    // console.log(window.scrollY);
    if (window.scrollY > 10) {
        document.getElementById("navbar").classList.add("bg-neutral-900");
    } else {
        document.getElementById("navbar").classList.remove("bg-neutral-900");
    }
})