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


function page2_earth_animation() {
    let rightElement = document.querySelectorAll(".right-elem");

rightElement.forEach((elem) => {
    elem.addEventListener("mouseenter" , () => {
        gsap.to(elem.childNodes[3] , {
            opacity : 1,
            scale : 1
        })
    })
    elem.addEventListener("mouseleave" , () => {
        gsap.to(elem.childNodes[3] , {
            opacity : 0,
            scale : 0
        })
    })
    elem.addEventListener("mousemove" , function(dets) {
        gsap.to(elem.childNodes[3] , {
            x: dets.x - elem.getBoundingClientRect().x - 45,
            y: dets.y - elem.getBoundingClientRect().y - 95
        })
    })
    })
}

page2_earth_animation();