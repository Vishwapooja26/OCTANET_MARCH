function openNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "50%";
}
function closeNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "10%";
}


function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
function Login(){
	document.getElementById('login').innerHTML
}

document.getElementById("aboutButton").addEventListener("click", function() {
    var aboutSection = document.getElementById("aboutSection");
    aboutSection.style.display = "block"; // Show the about section
    
    // Scroll the page to the bottom
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
    
    // Play animation (e.g., fade in)
    aboutSection.classList.add("fadeIn");
});
document.getElementById("aboutButton").addEventListener("click", function() {
    var aboutSection = document.getElementById("aboutSection");
    aboutSection.style.display = "block"; // Show the about section
    
    // Scroll the page to the bottom
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
    
    // Play animation (e.g., fade in)
    aboutSection.classList.add("fadeIn");
    
    // Wait for the animation to finish, then show the form
    aboutSection.addEventListener("animationend", function() {
        var formSection = document.getElementById("formSection");
        formSection.style.display = "block";
        formSection.classList.add("fadeIn");
    });
});
document.getElementById("aboutButton").addEventListener("click", function() {
    var aboutSection = document.getElementById("aboutSection");
    aboutSection.style.display = "block"; // Show the about section
    
    // Scroll the page to the bottom
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
    
    // Play animation (e.g., fade in)
    aboutSection.classList.add("fadeIn");
    
    // Wait for the animation to finish, then show the form
    aboutSection.addEventListener("animationend", function() {
        var formSection = document.getElementById("formSection");
        formSection.style.display = "block";
        formSection.classList.add("fadeIn");
    });
});
document.getElementById("signUpButton").addEventListener("click", function() {
    var formSection = document.getElementById("formSection");
    formSection.style.display = "block"; // Show the form
    
    // Scroll the page to the bottom
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
    
    // Play animation (e.g., fade in)
    formSection.classList.add("fadeIn");
});
document.getElementById("homeButton").addEventListener("click", function() {
    // Scroll the page back to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});