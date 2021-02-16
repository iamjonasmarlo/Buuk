/* Helper Functions */

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/* Show user menu */

let menuTrigger = document.getElementById("menu-trigger");
menuTrigger.addEventListener("click", function() {
    let menu = document.getElementById("user-menu");
    menu.classList.toggle("visible");
});

/* Accordion */

let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].getElementsByClassName("acc-title")[0].addEventListener("click", function() {
        this.parentElement.classList.toggle("visible");

        let content = this.nextElementSibling;
        if(content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

/* Add Feature */

let featureTrigger = document.getElementById("add-feature");
featureTrigger.addEventListener("click", function(e) {
    e.preventDefault();

    let form = document.getElementById("location-form"),
        label = document.createElement("label"),
        span = document.createElement("span"),
        input = document.createElement("input");

    label.setAttribute("class", "horizontal feature");
    span.innerHTML = "Ausstattung";
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Ausstattung");
    input.setAttribute("name", "feature[]")

    label.appendChild(span);
    label.appendChild(input);
    
    insertAfter(this, label);
});