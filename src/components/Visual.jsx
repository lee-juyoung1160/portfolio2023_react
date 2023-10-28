import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Visual = () => {


    const mainTextRef = useRef();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ani0 = gsap.timeline();

        ani0.to(mainTextRef.current, {scale: 50, duration: 1})
            .to(mainTextRef.current, {autoAlpha: 0})

            ScrollTrigger.create({
                animation: ani0,
                trigger: ".visual",
                start: "top top",
                end: "+=50",
                scrub: true,
                //pin: true,
                // anticipatePin: 1,
                markers: false
            });
    }, []);


    return (
        <section id="visual" className="visual">
            <h2 className="hidden">메인 비쥬얼 영역</h2>
            <div className="visual__main__text" ref={mainTextRef}>
                <p><span>Web Publisher</span></p>
                <p className="cormorant"><span>JUYOUNG LEE</span></p>
                <p><span>Portfolio</span></p>
            </div>
            <div className="visual__video">
                <video preload="auto" muted="muted" autoplay="autoplay" loop playsinline>
                    <source src="video/visual_video.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
};

export default Visual;