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

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3")
    var video = document.querySelector("#video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 14
        })
    })

    video.addEventListener("mouseleave", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(.1) scaleY(.1)",
            opacity: 0,
            borderRadius: 0
        })
    })
    video.addEventListener("dblclick", function () {
        video.pause()
    })
}

function page5_animation () {
    let page5_video_div = document.querySelector(".right-sec");
let page5_img = document.querySelector(".right-sec img");
let page5_video = document.querySelector(".right-sec video");

page5_video_div.addEventListener("mouseenter" , () => {
    page5_video.play()
    gsap.to(page5_video , {
        scale : 1,
        opacity : 1,
    }) 
    gsap.to(page5_img , {
        opacity : 0,
    })  
})

page5_video_div.addEventListener("mouseleave" , () => {
    page5_video.play()
    gsap.to(page5_video , {
        scale : 0,
        opacity : 0,
    }) 
    gsap.to(page5_img , {
        opacity : 1,
    })  
    })

    // page5_video_div.addEventListener("click" , () => {
    // page5_video.pause()
    // gsap.to(page5_video , {
    //     scale : 1,
    //     opacity : 1,
    // }) 
    // gsap.to(page5_img , {
    //     opacity : 0,
    // })  
    // })

}

function page6_animation () {
    let page6_video_div = document.querySelector(".six-right-sec");
    let page6_img = document.querySelector(".six-right-sec img");
    let page6_video = document.querySelector(".six-right-sec video");

page6_video_div.addEventListener("mouseenter" , () => {
    page6_video.play()
    gsap.to(page6_video , {
        scale : 1,
        opacity : 1,
    }) 
    gsap.to(page6_img , {
        opacity : 0,
    })  
})

page6_video_div.addEventListener("mouseleave" , () => {
    page6_video.play()
    gsap.to(page6_video , {
        scale : 0,
        opacity : 0,
    }) 
    gsap.to(page6_img , {
        opacity : 1,
    })  
    })

}

navAnimation();
page2_earth_animation();
page3VideoAnimation();
page5_animation();
page6_animation();