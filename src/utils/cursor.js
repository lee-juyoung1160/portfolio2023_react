const cursor = () => {

    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');

    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.2; // between 0 and 1

    const updateCoordinates = e => {
        mouse.x = e.clientX + 5;
        mouse.y = e.clientY + 5;
    }

    window.addEventListener('mousemove', updateCoordinates);

    function getAngle(diffX, diffY) {
        return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }

    function getSqueeze(diffX, diffY) {
        const distance = Math.sqrt(
            Math.pow(diffX, 2) + Math.pow(diffY, 2)
        );
        const maxSqueeze = 0.15;
        const accelerator = 1500;
        return Math.min(distance / accelerator, maxSqueeze);
    }

    const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
    const rotate = 'rotate(' + angle +'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
        cursorCircle.style.transform = rotate + scale;
    };

    function loop() {
        updateCursor();
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    /* a 태그 전체에 cursor-class="arrow" 추가 */
    var aTags = Array.from(document.getElementsByTagName("a"));
    aTags.forEach(function(aTag) {
        aTag.setAttribute("cursor-class", "arrow");
    });

    var aTags = Array.from(document.getElementsByTagName("button"));
    aTags.forEach(function(aTag) {
        aTag.setAttribute("cursor-class", "arrow");
    });

    var aTags = Array.from(document.querySelectorAll(".myWork__list li"));
    aTags.forEach(function(aTag) {
        aTag.setAttribute("cursor-class", "arrow");
    });

    var aTags = Array.from(document.querySelectorAll(".skill__list li"));
    aTags.forEach(function(aTag) {
        aTag.setAttribute("cursor-class", "arrow");
    });



    /* 게시글 수정버튼 cursor-class="arrow" 삭제 */
    var modifys = Array.from(document.getElementsByClassName("modify"));
    modifys.forEach(function(modify) {
        modify.removeAttribute("cursor-class", "arrow");
    });

    const cursorModifiers = document.querySelectorAll('[cursor-class]');

    cursorModifiers.forEach(curosrModifier => {
        curosrModifier.addEventListener('mouseenter', function() {
            const className = this.getAttribute('cursor-class');
            cursor.classList.add(className);
        });

        curosrModifier.addEventListener('mouseleave', function() {
            const className = this.getAttribute('cursor-class');
            cursor.classList.remove(className);
        });
    });
    

}

export default cursor;