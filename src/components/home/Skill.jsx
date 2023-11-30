import React, { useEffect, useRef } from "react";
import { skillList } from "../../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skill = () => {

    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length),
            ease: "none",
            scrollTrigger: {
                trigger: ".skill",
                start: "top 0%",
                end: "+=5000",
                pin: true,
                anticipatePin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });
    
        return () => {
            scrollTween.kill();
        };
    }, []);


    return (
        <section id="skill" className="skill" ref={horizontalRef}>
        <h2 className="hidden">스킬 소개 영역</h2>
        <h3 className="fade_action fade_top">저는 이런 것들을 <br />할 수 있습니다.</h3>
        <div className="skill__wrap" role="group">
            <ul className="skill__list" role="group">
            {skillList.map((list, key) => (
                <li 
                key={key}
                ref={(el) => (sectionsRef.current[key] = el)}
                >
                    <p className="skill__item__name">{list.title}</p>
                    <strong className="skill__item__percent">{list.percent}<span>%</span></strong>
                    <p className="skill__item__text">{list.desc}</p>
                </li>
            ))}
            </ul>        
        </div>
    </section> 
    );
};

export default Skill;