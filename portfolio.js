let aboutButton = document.getElementById("about-button");
let projectsButton = document.getElementById("projects-button");
let aboutContent = document.getElementById("about");
let projectsContent = document.getElementById("projects");

aboutButton.onclick = function() {
    if (projectsContent.classList.contains("animation-out")) {
        projectsContent.classList.remove("animation-out");
        projectsContent.classList.add("animation-in");
        aboutContent.classList.remove("animation-in");
        aboutContent.classList.add("animation-out");
    }
    else if (aboutContent.classList.contains("animation-out")) {
        aboutContent.classList.remove("animation-out");
        aboutContent.classList.add("animation-in");
    }
    else {
        aboutContent.classList.remove("animation-in");
        aboutContent.classList.add("animation-out");
    }
}

projectsButton.onclick = function() {
    if (aboutContent.classList.contains("animation-out")) {
        aboutContent.classList.remove("animation-out");
        aboutContent.classList.add("animation-in");
        projectsContent.classList.remove("animation-in");
        projectsContent.classList.add("animation-out");
    }
    else if (projectsContent.classList.contains("animation-out")) {
        projectsContent.classList.remove("animation-out");
        projectsContent.classList.add("animation-in");
    }
    else {
        projectsContent.classList.remove("animation-in");
        projectsContent.classList.add("animation-out");
    }
}