function myFunction() {
    document.getElementById("myName").innerHTML = "Jan Michael Maravilla";
  }
gsap.from(".hero", {duration: 1.5, y: "-100%"});
gsap.from(".section", {delay: 1.5, duration: 1.5, y: "-100%", autoAlpha: 0});