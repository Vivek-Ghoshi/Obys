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
   opacity: 0,
   duration:0.4,
   display: "none",
   delay: 4,
}).from(".page1",{
    // y:1200,
    // opacity:0,
    // duration: 0.6,
    ease: "power4",
})
