const form = document.querySelector("#menu-form");
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
        message.textContent = "Menu update unsuccessful. Check your quotes and commas.";
        return;
    }

    menu.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item.name + " — $" + item.price;
        list.appendChild(li);
    });
});