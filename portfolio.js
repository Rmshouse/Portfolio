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

dropButton.addEventListener("click", function(){
    navLinks.classList.toggle("display");
})


for(each of navA) {
    each.addEventListener("click", function(){
        navLinks.classList.toggle("display");
    })
}
