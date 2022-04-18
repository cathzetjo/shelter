function burgerMenu() {

    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuWindow = document.querySelector('.burger-menu-window');
    const header = document.querySelector('.header-container');

    function toggleMenu() {
        burgerMenu.classList.toggle('open');
        burgerMenuWindow.classList.toggle('open');
        header.classList.toggle('open-burger');
    }

    burgerMenu.addEventListener('click', toggleMenu);

    function closeMenu(event) {
        if (event.target.classList.contains('nav-link-burger-menu')) {
            burgerMenu.classList.remove('open');
            burgerMenuWindow.classList.remove('open');
            header.classList.remove('open-burger');
        }
    }

    const nav = document.querySelector('.nav-burger-menu');
    nav.addEventListener('click', closeMenu);
}

export default burgerMenu;