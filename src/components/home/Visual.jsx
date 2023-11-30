import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//image URL
import project01 from "../../assets/images/project01.png"
import project02 from "../../assets/images/project02.png"
import project03 from "../../assets/images/project03.png"
import project04 from "../../assets/images/project04.png"

const Visual = () => {
    const visualImgRef = useRef();
    const intro = gsap.timeline({
        repeat:-1,
        yoyo: true,
        defaults:{
            ease:'none',
        }
    })
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.project__list .project').forEach(element => {
            console.log(element);
            
            gsap.fromTo(element,{
                opacity:0
            },{
                scrollTrigger:{
                    trigger:element,
                    start:"top bottom",
                    end:"bottom top",
                },
                opacity:1,
                duration:1,
                
            })
        });  

        intro.addLabel('motion01')
        .to('.project__01',30,{yPercent:40},'motion01')
        .to('.project__02',30,{yPercent:20},'motion01')
        .to('.project__03',30,{yPercent:-10},'motion01')



          
    }, []);

    return (
        <section id="visual" className="visual">
            <h2 className="hidden">메인 비쥬얼 영역</h2>
            <div className="visual__title">
                <p className="visual__intro__title">Web Publisher Portfolio</p>
                <div className="visual__main__title">
                    <span className="active">안녕하세요.</span>
                    <span>UX/UI를 이해하는 <br className="mo"/>웹 퍼블리셔,</span>
                    <span>커뮤니케이션이 잘 되는 동료,</span>
                    <span>성장하는 개발자 입니다.</span>
                </div>
            </div>
            <article className="visual__right">
            <div className="project__list" ref={visualImgRef}>
                    <div className="project project__01">
                        <div className="project__item"><img src={project01} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project02} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project03} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project04} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project02} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project03} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project04} alt="프로젝트" /></div>
                    </div>
                    <div className="project project__02">
                        <div className="project__item"><img src={project01} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project02} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project03} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project04} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project02} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project03} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project04} alt="프로젝트" /></div>
                    </div>
                    <div className="project project__03">
                        <div className="project__item"><img src={project01} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project02} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project03} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project04} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project02} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project03} alt="프로젝트" /></div>
                        <div className="project__item"><img src={project04} alt="프로젝트" /></div>
                    </div>
                </div>
            </article>
           
        </section>
    );
};

export default Visual;