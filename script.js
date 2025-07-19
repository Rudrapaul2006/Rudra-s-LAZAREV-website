function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "22vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.3

        })
        tl.to(".nav-part2 h5 span", {
            y: 25,
            // duration:0.3,
            stagger: {
                amount: 0.4
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0,
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.3,
        })
        tl.to("#nav-bottom", {
            height: "0vh",
            duration: 0.5
        })
    })
}

navAnimation()