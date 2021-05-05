function animateFrom(elem, direction) {
    direction = direction | 1;
    
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if(elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 2, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        //onEnterBack: function() { animateFrom(elem, -1) },
      });
    });
  });

// Hero Animation
//gsap.from(".hero", {duration: 2, y: "-100%"});
gsap.from(".nameAnimation", {delay: 1.5, duration: 2, y: "-100%", autoAlpha: 0});
gsap.from(".descAnimation", {delay: 2.5, duration: 1, y: "-100%", autoAlpha: 0});

//Splide
if ( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
  } ).mount();
 } else {
  new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    focus  : 'center',
    padding: {
      right: '10rem',
      left : '10rem',
    },
  } ).mount();
 }
