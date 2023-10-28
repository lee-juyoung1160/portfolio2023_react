import React from "react";

const Footer = () => {
    return (

        <footer>
        <h2 class="hidden">하단 영역</h2>
        <div class="footer__text">
            <span>Do You Like This Portfolio ?</span>
            <h3>CONTACT</h3>
        </div>
        <div class="footer__sns">
            <ul>
                <li><a href="https://github.com/lee-juyoung1160"><i class="fa-brands fa-github"></i> GIT</a></li>
                <li><a href="https://velog.io/@noocgs"><i class="fa-brands fa-blogger"></i> Velog</a></li>
                <li><a href="mailto:noocgs@gmail.com"><i class="fa-solid fa-envelope"></i> noocgs@gmail.com</a></li>
            </ul>
            <p class="copy">© 2023 Lee-ju-Young. All Rights Reserved.</p>
        </div>
    </footer>
    
    );
};

export default Footer;