import React from "react";
import Lottie from "lottie-react";
import aboutAni01 from "../assets/lottie/about_ani_01.json";
import aboutAni02 from "../assets/lottie/about_ani_02.json";

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="hidden">소개 영역</h2>
            <div className="about__inner">
                <div className="about__text about__text__01 fade_action fade_top">
                    <h3 className="about__text__title gradient__ani__text">
                        Be <span className="cormorant">FLEXIBLE.</span>
                    </h3>
                    <h4>흥미로운 것은 오래 기억됩니다.<br />사용자의 관점에서 생각하고, 기억에 남는 웹을 만드는 것이 목표입니다.</h4>
                    <p>
                        디자인 전공으로 UX/UI에 대한 이해와 관심을 가지고 있습니다.<br />
                        인터렉티브 웹 구현이 가능하며, 이에 대해 꾸준히 스터디하고 있습니다.
                    </p>
                </div>
                <div className="about__text about__text__02">
                    <div className="fade_action fade_left">
                        <h4>크로스브라우징, 웹접근성에 맞는<br />웹 구현이 가능합니다.</h4>
                        <p>
                            웹 표준 / 접근성 준수,<br />SEO 최적화를 위한 시멘틱 마크업을 지향합니다.<br />
                        </p>
                    </div>

                    <Lottie 
                        className="about__lottie fade_action fade_right"
                        animationData = {aboutAni02}
                    />

                </div>
                <div className="about__text about__text__03">
                    <div className="fade_action fade_left">
                        <h4>동료들을 소중히 여기고,<br />유연한 업무 분위기를 이끌어 갑니다.</h4>
                        <p>
                            동료들을 존중하는 협업과 의사소통을 선호합니다.<br />
                            효율적인 협업을 위해 항상 고민합니다.
                        </p>
                    </div>    
                    <Lottie 
                        className="about__lottie fade_action fade_right"
                        animationData = {aboutAni01}
                    />
                </div>
            </div>
            <div className="about__tag">
                <div className="about__tag__track">
                    <div className="about__tag__text">#InteractiveWeb&nbsp; #WebAccessibility&nbsp; #Optimization&nbsp; #Sense&nbsp; #Respect&nbsp; #Growth&nbsp; #Positive&nbsp;#Efforts&nbsp;#Communications</div>
                </div>
            </div>
        </section>
    );
};

export default About;