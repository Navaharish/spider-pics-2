const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelectorAll(".header-menu>li>a");
const navLinkBtn = document.querySelector(".header-menu>li>.btn-primary");

navToggler.addEventListener("click", changeMenuState);

function changeMenuState() {
    const headerMenu = document.querySelector("ul.header-menu");
    const navIcon = document.querySelectorAll(".nav-icon");

    // Show menu programatically
    headerMenu.classList.toggle("slide");
    // dropDown.classList.toggle('dd-slide')
    navIcon.forEach((icon) => {
        icon.classList.toggle("hidden");
    });
}

function onMenuClick() {
    console.log(navLinks);
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", changeMenuState);
    }
}



function onMenuClickBtn() {

    navLinkBtn.addEventListener("click", changeMenuState);
}


onMenuClick();
onMenuClickBtn();