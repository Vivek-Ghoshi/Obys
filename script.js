function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      lerp:0.3
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    

    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
    
}
locoScroll();

function loader(){
    let h2Grow = document.querySelector("#line1 h2 span");
    let grow = 0;
    let interval = setInterval(function(){
       if(grow<=99){
        grow++;
        h2Grow.textContent = grow;
       }else{
          clearInterval(interval)
       }
    },35)
}

function loadingpage(){
let tl = gsap.timeline();
tl.from(".line h1",{
    y:120,
    duration: 0.7,
    stagger: 0.2
}).from("#line1 h2",{
    opacity:0,
    duration: 0.3,
    onStart: loader(),
}).to("#line3 h2",{
    animationName: "Now",
    opacity:1,
})
.to(".loader",{
   y: -1000,
   opacity:0,
   duration:0.4,
   delay:3,
}).from(".page1",{
    y:1200,
    opacity:0,
    duration: 0.6,
    ease: "power4",
}).from(".content h1",{
    y:120,
    stagger: 0.2,
})
}

loadingpage();


function cursor(){
        document.body.addEventListener("mousemove",function(dets){
         gsap.to(".crsr",{
             y: dets.y,
             x: dets.x,
         })
        })
 }
cursor();

function page2(){
let crsr = document.querySelector(".crsr")
   
const target = document.querySelector(".page2 .container"); // Target element
const follower = document.querySelector(".container .play-btn"); // Custom cursor
const video = document.querySelector(".page2 .container video");
target.addEventListener("mouseenter", () => {
    crsr.style.display = "none";
    document.addEventListener("mousemove", moveElement);
});

target.addEventListener("mouseleave", () => {
    crsr.style.display = "initial";
    document.removeEventListener("mousemove", moveElement);
    gsap.to(follower,{
        x:80,
        y:-8,
    })
});
let flag = 0;
target.addEventListener("click",function(){
    if(flag ==0){
        video.play();
        video.style.scale = 1;
        follower.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        gsap.to(follower,{
            scale:0.7,
        })
     flag = 1
    }else{
        video.pause();
        video.style.scale = 0;
        follower.innerHTML = `<i class="ri-play-mini-fill"></i>`
        gsap.to(follower,{
            scale:1,
        })
        flag = 0;
    }
})
function moveElement(e) {
   
    gsap.to(follower, {
        x: e.clientX - 950,
        y: e.clientY - 100,
        duration: 0.2,
        ease: "elastic2.out"
    });
}
}
page2();

function sheryAnimations(){
    Shery.makeMagnet(".nav .right h2,.nav .left .inner i");
    Shery.imageEffect(".projects .project",{
        style:2,
        config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-10},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":3},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":13357524},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8214326818181177},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":2.6,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.6,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.82,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.63,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        // debug: true,
        gooey:true,
    })
}
sheryAnimations();

function flagPage1(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x: dets.x,
            y: dets.y
        })
    })
    let hero3 = document.querySelector("#hero2");
    hero3.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity: 1,
        })
       
    })
    hero3.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity: 0,
        })
       
    })
}
flagPage1();