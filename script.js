const form = document.querySelector("#menu-form");
const input = document.getElementById("menu-input");
const list = document.getElementById("menu-list");
const message = document.querySelector("message"); 

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("You typed:", input.value);
});


