const form = document.querySelector("#menu-form");
const inconst form = document.querySelector("#menu-form");
const input = document.getElementById("menu-input");
const list = document.getElementById("menu-list");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    list.textContent = "";
    message.textContent = "";

    let menu;
    try {
        menu = JSON.parse(input.value);
    } catch (error) {
        message.textContent = "Oops! That menu doesn't look right. Check your quotes and commas.";
        return;
    }

    menu.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item.name + " — $" + item.price;
        list.appendChild(li);
    });
});put = document.getElementById("menu-input");
const list = document.getElementById("menu-list");
const message = document.querySelector("message"); 

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("You typed:", input.value);
});

const li = document.createElement("li");
li.textContent = Item.name + " - $" + Item.price;
list.appendChild(li);

message.textContent = "Menu update unsuccessfully. Check your input.";