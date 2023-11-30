import React from "react";

const Footer = () => {
    return (

        <footer>
        <h2 className="hidden">하단 영역</h2>
        <div className="footer__text">
            <span>Do You Like This Portfolio ?</span>
            <h3>CONTACT</h3>
        </div>
        <div className="footer__sns">
            <ul>
                <li><a href="https://github.com/lee-juyoung1160"><i className="fa-brands fa-github"></i> GIT</a></li>
                <li><a href="https://velog.io/@noocgs"><i className="fa-brands fa-blogger"></i> Velog</a></li>
                <li><a href="mailto:noocgs@gmail.com"><i className="fa-solid fa-envelope"></i> noocgs@gmail.com</a></li>
            </ul>
            <p className="copy">© 2023 Lee-ju-Young. All Rights Reserved.</p>
        </div>
    </footer>
    
    );
};

export default Footer;