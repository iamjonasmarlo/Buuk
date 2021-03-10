/* Helper Functions */

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/* Toggle menu (small) */

let navToggle = document.getElementById("nav-toggle");
navToggle.addEventListener("click", function() {
    this.classList.toggle("open");
    let nav = document.getElementById("main-nav");
    nav.classList.toggle("open");
});

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
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

/* Add Feature */

let featureTrigger = document.getElementById("add-feature");
if (featureTrigger) {
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
}

/* Add Reservation */

let dateFrom = document.getElementById("date-from"),
    dateTo = document.getElementById("date-to");

dateFrom.onchange = function() {
    let date = new Date(dateFrom.value);
    dateTo.setAttribute("min", date.getFullYear() + "-" + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + "-" + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())));
}

/* Add Book location */

let booklocTrigger = document.getElementById("add-bookloc");
if (booklocTrigger) {
    booklocTrigger.addEventListener("click", function(e) {
        e.preventDefault();

        let form1 = document.getElementById("book-form"),
            label1 = document.createElement("label"),
            span1 = document.createElement("span"),
            input1 = document.createElement("input");

        let form2 = document.getElementById("book-form"),
            label2 = document.createElement("label"),
            span2 = document.createElement("span"),
            input2 = document.createElement("input");



        label1.setAttribute("class", "horizontal feature");
        span1.innerHTML = "Standort";
        input1.setAttribute("type", "");
        input1.setAttribute("placeholder", "Standort");
        input1.setAttribute("name", "feature[]")

        label2.setAttribute("class", "horizontal feature");
        span2.innerHTML = "Regal";
        input2.setAttribute("type", "text");
        input2.setAttribute("placeholder", "Regal");
        input2.setAttribute("name", "feature[]")


        label1.appendChild(span1);
        label1.appendChild(input1);

        label2.appendChild(span2);
        label2.appendChild(input2);

        insertAfter(this, label1);
        insertAfter(label1, label2);


    });
}