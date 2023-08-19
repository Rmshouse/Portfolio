let collapsible = document.getElementsByClassName("collapsible");
for(i=0; i<collapsible.length; i++) {
    collapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        }
        else {
            content.style.display = "block";
        }
    })
}

let dropButton = document.getElementById("drop-button");
let navLinks = document.getElementById("nav-links");
let navA = document.querySelectorAll(".nav-a"); 

let smallScreen = window.matchMedia("(max-width: 530px)");

let addDropMenu = function() {
    navLinks.classList.toggle("display");
}

let screenSizeChange = function(mm) {
    if (mm.matches) {
        dropButton.addEventListener("click", addDropMenu);
    
    
        for(each of navA) {
            each.addEventListener("click", addDropMenu);
        }
    }
    else {
        dropButton.removeEventListener("click", addDropMenu);

        for(each of navA) {
            each.removeEventListener("click", addDropMenu);
        }
    }
}

screenSizeChange(smallScreen);

smallScreen.addEventListener("change", screenSizeChange);