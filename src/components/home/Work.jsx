import React from "react";

// images
import work1 from "../../assets/images/work1.jpg";
import work3 from "../../assets/images/work3.jpg";
import work4 from "../../assets/images/work4.jpg";
import work5 from "../../assets/images/work5.jpg";
import work6 from "../../assets/images/work6.jpg";
import work8 from "../../assets/images/work8.jpg";

const Work = () => {
    return (
        <section id="work" className="work">
            <h2 className="hidden">포트폴리오 영역</h2>
            <h3 className="gradient__ani__text fade_action fade_top">WORK.</h3>
            <ul className="myWork__list" role="group">
                <li className="fade_action fade_top">
                    <div className="myWork__list__img">
                        <img src={work1} alt="work1" />
                        <div className="myWork__list__btn">
                            <a href="https://lee-juyoung1160.github.io/julia_portfolio/" target="_blank"><i className="fa-solid fa-link"></i> SITE</a>
                            <a href="https://github.com/lee-juyoung1160/portfolio2023_react" target="_blank"><i className="fa-brands fa-github"></i> GIT</a>
                        </div>
                    </div>
                    <div className="myWork__list__text">
                        <h4>포트폴리오 2023</h4>
                        <div className="info">
                            <p>
                                React, Scss, git, Gsap, Lottie
                            </p>
                            <p>2023.09 - 2023.09</p>
                        </div>
                    </div>
                </li>
                <li className="fade_action fade_top">
                    <div className="myWork__list__img">
                        <img src={work3} alt="work3" />
                        <div className="myWork__list__btn">
                            <a href="https://yafitcdn.yanadoo.co.kr/" target="_blank"><i className="fa-solid fa-link"></i> SITE</a>
                            <a href="https://github.com/juliaYanadoo/YAFIT-CYCLE-WEB" target="_blank"><i className="fa-brands fa-github"></i> GIT</a>
                        </div>
                    </div>
                    <div className="myWork__list__text">
                        <h4>야핏</h4>
                        <div className="info">
                            <p>
                                Html5, Css3, javascript, java
                            </p>
                            <p>2022.8 - 2023.6</p>
                        </div>
                    </div>
                </li>
                <li className="fade_action fade_top">
                    <div className="myWork__list__img">
                        <img src={work8} alt="work8" />
                        <div className="myWork__list__btn">
                            <a href="https://github.com/lee-juyoung1160/Youcandoo_3_0_React-" target="_blank"><i className="fa-brands fa-github"></i> GIT</a>
                        </div>
                    </div>
                    <div className="myWork__list__text">
                        <h4>유캔두3.0 React ver</h4>
                        <div className="info">
                            <p>
                                React, Scss, git, Php
                            </p>
                            <p>2023.5 - 2023.5</p>
                        </div>
                    </div>
                </li>
                <li className="fade_action fade_top">
                    <div className="myWork__list__img">
                        <img src={work6} alt="work6" />
                        <div className="myWork__list__btn">
                            <a href="https://github.com/lee-juyoung1160/Youcandoo_3_0" target="_blank"><i className="fa-brands fa-github"></i> GIT</a>
                        </div>
                    </div>
                    <div className="myWork__list__text">
                        <h4>유캔두 CBT ~ 3.0</h4>
                        <div className="info">
                            <p>
                                Html5, Css3, javascript, Php
                            </p>
                            <p>2023.5 - 2023.5</p>
                        </div>
                    </div>
                </li>
                <li className="fade_action fade_top">
                    <div className="myWork__list__img">
                        <img src={work5} alt="work5" />
                        <div className="myWork__list__btn">
                            <a href="https://github.com/lee-juyoung1160/Youcandoo_3_0_Admin" target="_blank"><i className="fa-brands fa-github"></i> GIT</a>
                        </div>
                    </div>
                    <div className="myWork__list__text">
                        <h4>유캔두 관리자 사이트</h4>
                        <div className="info">
                            <p>
                                Html5, Css3, javascript
                            </p>
                            <p>2023.5 - 2023.5</p>
                        </div>
                    </div>
                </li>
                <li className="fade_action fade_top">
                    <div className="myWork__list__img">
                        <img src={work4} alt="work4" />
                        <div className="myWork__list__btn">
                            <a href="https://drprio.com/" target="_blank"><i className="fa-solid fa-link"></i> SITE</a>
                        </div>
                    </div>
                    <div className="myWork__list__text">
                        <h4>닥터프리오</h4>
                        <div className="info">
                            <p>
                                Html5, Css3, Jquery, Cafe24
                            </p>
                            <p>2023.5 - 2023.5</p>
                        </div>
                    </div>
                </li>
            </ul>  
        </section>

    );
};

export default Work;