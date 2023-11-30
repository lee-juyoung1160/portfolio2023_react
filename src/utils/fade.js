import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const fade = () => {
   
    //fade animation
    function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0, y = direction * 300;
        if (elem.classList.contains("fade_left")) {
        x = -100;
        y = 0;
        } else if (elem.classList.contains("fade_right")) {
        x = 100;
        y = 0;
        } else if (elem.classList.contains("fade_top")) {
        x = 0;
        y = 100;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 3,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
        });
    }
    
    function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
    }
    
    gsap.utils.toArray(".fade_action").forEach(function (elem) {
        hide(elem); 
    
        ScrollTrigger.create({
                trigger: elem,
                //markers: true,
                onEnter: function () {
                animateFrom(elem)
                },
                onEnterBack: function () {
                animateFrom(elem, -1)
                },
                onLeave: function () {
                hide(elem)
                } 
            });
        });
    
}

export default fade;