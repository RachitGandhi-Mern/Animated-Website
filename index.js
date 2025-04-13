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
    start: "top -10", // Fires when #nav hits the top of the viewport
    end: "top -11px", // Small scroll window (or make it larger)
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
    crs.style.left = dets.x + "px";
    crs.style.top = dets.y + "px";
    crsblr.style.left = (dets.x - 200) + "px";
    crsblr.style.top = (dets.y - 200) + "px";
});

var h4all = document.querySelectorAll("#nav");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function(){
    crs.style.transform = "scale(1.1)";
    crs.style.border = "2px solid white";
    crs.style.backgroundColor = "transparent";
    crs.style.filter = "blur(0)"
    crsblr.style.display ="None"
  });
  elem.addEventListener("mouseleave", function(){
    crs.style.transform = "scale(1)";
    crs.style.border = "0px solid #96c11e78";
    crs.style.backgroundColor = "#96c11e78";
    crs.style.filter = "blur(10px)"
    crsblr.style.display ="block"
  });
});

let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    setInterval(() => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, 3000);




  var page4= document.querySelectorAll("#page4")
  page4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      crs.style.transform = "scale(1.1)";
      crs.style.border = "2px solid white";
    crs.style.backgroundColor = "transparent";
    crs.style.filter = "blur(0)"
    crsblr.style.display ="None"
    });
    elem.addEventListener("mouseleave", function(){
      crs.style.transform = "scale(1)";
      crs.style.border = "0px solid #96c11e78";
      crs.style.backgroundColor = "#96c11e78";
      crs.style.filter = "blur(10px)"
      crsblr.style.display ="block"
    });
  });