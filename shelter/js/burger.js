function burgerMenu() {

    const body = document.querySelector('body');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuWindow = document.querySelector('.burger-menu-window');
    const header = document.querySelector('.header-container');
    const nav = document.querySelector('.nav-burger-menu');

    function toggleMenu() {
        body.classList.toggle('darker');
        body.classList.toggle('stop-scrolling');
        burgerMenu.classList.toggle('open');
        burgerMenuWindow.classList.toggle('show-burger');
        burgerMenuWindow.classList.toggle('close-burger');
        burgerMenuWindow.classList.toggle('open');
        header.classList.toggle('open-burger');
    }

    burgerMenu.addEventListener('click', toggleMenu);
    nav.addEventListener('click', toggleMenu);

}

export default burgerMenu;