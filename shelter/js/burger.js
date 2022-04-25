function burgerMenu() {

    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuWindow = document.querySelector('.burger-menu-window');
    const header = document.querySelector('.header-container');

    function toggleMenu() {
        burgerMenu.classList.toggle('open');
        burgerMenuWindow.classList.toggle('show-burger');
        burgerMenuWindow.classList.toggle('close-burger');
        burgerMenuWindow.classList.toggle('open');
        header.classList.toggle('open-burger');
    }

    burgerMenu.addEventListener('click', toggleMenu);

    function closeMenu() {
        if (event.target.classList.contains('nav-link-burger-menu')) {
            burgerMenu.classList.toggle('open');
            burgerMenuWindow.classList.toggle('close-burger');
            burgerMenuWindow.classList.toggle('open');
            header.classList.toggle('open-burger');
        }
        burgerMenuWindow.classList.toggle('close-burger');

    }

    const nav = document.querySelector('.nav-burger-menu');
    nav.addEventListener('click', closeMenu);

}

export default burgerMenu;