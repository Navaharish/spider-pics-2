const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelectorAll(".header-menu>li>a");
const navLinkBtn = document.querySelector(".header-menu>li>.btn-primary");

navToggler.addEventListener("click", changeMenuState);

function changeMenuState() {
    const headerMenu = document.querySelector("ul.header-menu");
    const navIcon = document.querySelectorAll(".nav-icon");

    // Show menu programatically
    headerMenu.classList.toggle("slide");
    console.log(navIcon)

    navIcon.forEach((icon) => {
        icon.classList.toggle("hidden");
    });
}

function navbarFixed() {
    const header_dom = document.querySelector(".header");
    const nav_offset_top = header_dom.clientHeight + 50;

    window.addEventListener("scroll", () => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;

        if (scroll >= nav_offset_top) {
            header_dom.classList.add("navbar-fixed");
        } else {
            header_dom.classList.remove("navbar-fixed");
        }
    });
}

function setMenuActive() {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((li) => {
            li.classList.remove("active");

            if (current == li.getAttribute("href").split("#")[1]) {
                li.classList.add("active");
            }
        });
    });
}

function onMenuClick() {

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", changeMenuState);
    };

}

function onMenuClickBtn() {

    navLinkBtn.addEventListener("click", changeMenuState);
}

navbarFixed();
setMenuActive();
onMenuClick();
onMenuClickBtn();