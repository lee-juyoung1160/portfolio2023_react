const link = () => {
    document.querySelectorAll(".header__nav a[href^='#']").forEach((item) => {
        item.addEventListener("click", function(e){
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({ behavior: "smooth"});
            }

            if(window.innerWidth <= 820) {
                document.querySelector(".header__nav").classList.remove('show');
                document.querySelector(".header__nav__mo").classList.remove('show');
            }
            
            
        });
    });
}

export default link;