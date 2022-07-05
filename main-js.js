let toggleMenuStats = false;

let toggleNav = function() {
    let getMainNavUL = document.querySelector(".main-header-container .nav-holder ul");
    let getXMenu = document.querySelector(".main-header-container .hamburger-menu .la-times");
    let getHamburgerMenu = document.querySelector(".main-header-container .hamburger-menu .fa-bars");
    let getLogo = document.querySelector(".main-header-container .logo-holder");

    if (toggleMenuStats === false) {
        getMainNavUL.style.visibility = "visible";
        getMainNavUL.style.bottom = "0";
        getMainNavUL.style.top = "0";
        getXMenu.style.visibility = "visible";
        getHamburgerMenu.style.visibility = "hidden";

        toggleMenuStats = true;
    }

    else if (toggleMenuStats === true) {
        getMainNavUL.style.visibility = "visible";
        getMainNavUL.style.bottom = "0";
        getMainNavUL.style.top = "100%";
        getXMenu.style.visibility = "hidden";
        getHamburgerMenu.style.visibility = "visible";

        toggleMenuStats = false;
    }

    else if (toggleMenuStats === true) {
        getMainNavUL.style.transform = "translateY(0)";

        toggleMenuStats = false;
    }
}


let getLinks = document.querySelectorAll(".main-header-container .nav-holder .nav-ul li a");


for (let i = 0; i < getLinks.length; i++) {
    getLinks[i].addEventListener("mouseover", function( mouseOver ) {
        mouseOver.target.style.borderBottom = "3px solid #544013";
        mouseOver.target.style.overlay = "3px solid #544013";
        mouseOver.target.style.transition = "100ms ease-in-out";
        mouseOver.target.style.paddingBottom = "3px";
    }, false);

    getLinks[i].addEventListener("mouseout", function( mouseOut ) {

        mouseOut.target.style.borderBottom = "none";
        mouseOut.target.style.paddingBottom = "10px";
        mouseOut.target.style.transition = "100ms ease-in-out";

    }, false); 
}


