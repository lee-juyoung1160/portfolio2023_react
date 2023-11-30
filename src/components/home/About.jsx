import React from "react";
import Lottie from "lottie-react";
import aboutAni01 from "../../assets/lottie/about_ani_01.json";
import aboutAni02 from "../../assets/lottie/about_ani_02.json";

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
                        <h4>웹 퍼블리싱을 빠삭하게 다룰 수 있습니다.</h4>
                        <p>
                        React 환경에서 컴포넌트 단위의 마크업 작업을 할 수 있으며, <br />
                        어디에서도 잘 보이는 반응형,웹 접근성과 웹 표준을 <br />
                        고려한 웹 페이지를 그려냅니다.
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
                        맡은 프로젝트의 목적을 우선적으로 고려하며, <br />
                        원활한 협업을 중요하게 생각해요.
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