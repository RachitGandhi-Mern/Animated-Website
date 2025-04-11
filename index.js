


// Ensure you registered ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to("#nav", {
  backgroundColor: "#171716f4",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body", // only needed if using something like LocomotiveScroll
    // markers: true,
    start: "top top", // Fires when #nav hits the top of the viewport
    end: "top -100px", // Small scroll window (or make it larger)
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start:"top -25%",
    end :"top -70%",
    scrub:2,

  },
});

var crs = document.querySelector("#cursor");
var crsblr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crs.style.left =dets.x+"px";
    crs.style.top =dets.y+"px";
    crsblr.style.left =dets.x -200 +"px";
    crsblr.style.top =dets.y -200 +"px";
});
