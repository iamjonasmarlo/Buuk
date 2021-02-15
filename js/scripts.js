/* Show user menu */

let menuTrigger = document.getElementById("menu-trigger");
menuTrigger.addEventListener("click", function() {
    let menu = document.getElementById("user-menu");
    menu.classList.toggle("visible");
});