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

let checkbox = document.getElementById("checkbox");
let body = document.body;
let navBar = document.getElementById("nav-bar");
let makeBig = document.querySelectorAll(".make-big");
let projectButton = document.querySelectorAll(".collapsible");
let dropButton = document.getElementById("drop-button");
let navLinks = document.getElementById("nav-links");
let navA = document.querySelectorAll(".nav-a");

checkbox.addEventListener("change", function(){
    body.classList.toggle("dark");
    navBar.classList.toggle("dark");
    navLinks.classList.toggle("dark");
    dropButton.classList.toggle("dark");
    for(each of makeBig) {
        each.classList.toggle("dark");
    }
    for(each of projectButton) {
        each.classList.toggle("dark");
    }
})

dropButton.addEventListener("click", function(){
    navLinks.classList.toggle("display");
})


for(each of navA) {
    each.addEventListener("click", function(){
        navLinks.classList.toggle("display");
    })
}
