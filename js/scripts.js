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

        let form3 = document.getElementById("book-form"),
            label3 = document.createElement("label"),
            span3 = document.createElement("span"),
            input3 = document.createElement("input");



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

        label3.setAttribute("class", "horizontal feature");
        span3.innerHTML = "Anzahl";
        input3.setAttribute("type", "number");
        input3.setAttribute("placeholder", "Anzahl");
        input3.setAttribute("name", "feature[]")

        label1.appendChild(span1);
        label1.appendChild(input1);

        label2.appendChild(span2);
        label2.appendChild(input2);

        label3.appendChild(span3);
        label3.appendChild(input3);

        insertAfter(this, label1);
        insertAfter(label1, label2);
        insertAfter(label2, label3);

    });
}
/* Node */

/*function Kunde {
    constructor(kundenID, vorname, nachname, geburtstag, fachrichtung, standort, straße, stadt, plz) {
        this.kundenID = kundenID;
        this.vorname = vorname;
        this.nachname = nachname;
        this.geburtstag = geburtstag;
        this.fachrichtung = fachrichtung;
        this.standort = standort;
        this.straße = straße;
        this.stadt = stadt;
        this.plz = plz;
    }
}

var k1 = new Kunde("001", "Simon", "Widanski", "2000-04-28", "ti", "s1s", "Kahlacker 54", "Duisburg", 47228);

let kVorname = document.getElementById("vname");
let kNachname = document.getElementById("name");
let kGeburtstag = document.getElementById("gtag");
let kFachrichtung = document.getElementById("fachrichtung");
let kStandort = document.getElementById("hauptstandort");
let kStraße = document.getElementById("street__input");
let kStadt = document.getElementById("city__input");
let kplz = document.getElementById("postal__input")

kVorname.value = k1.vorname;
kNachname.value = k1.nachname;
kGeburtstag.value = k1.geburtstag;
kFachrichtung.value = k1.fachrichtung;
kStandort.value = k1.standort;
kStraße.value = k1.straße;
kStadt.value = k1.stadt;
kplz.value = k1.plz;*/

/*  Profile Edit */

/*let buttonEdit = document.getElementById("edit-profile");
let buttonSave = document.getElementById("save");

buttonEdit.addEventListener("click", function(e) {
    e.preventDefault();
    kStandort.disabled = false;
    buttonSave.style.display = "block";
});

buttonSave.addEventListener("click", function(e) {
    e.preventDefault();
    kStandort.disabled = true;
    buttonSave.style.display = "none";
    k1.standort = kStandort.value;
});*/