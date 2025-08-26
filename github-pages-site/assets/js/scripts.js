// This file is intentionally left blank.

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer p");
    const currentDate = new Date().toLocaleDateString("is-IS", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    footer.textContent = `Dags: ${currentDate}`;
});


document.getElementById("colorButton").addEventListener("click", function () {
    console.log("Button clicked!");
    const gradients = [
        "linear-gradient(to right, #EB3349, #F45C43)",
        "linear-gradient(to right, #4CB8C4, #3CD3AD)",
        "linear-gradient(to right, #DA22FF, #9733EE)",
        "linear-gradient(to right, #cc2b5e, #753a88)"
    ];
    document.body.style.background = gradients[Math.floor(Math.random() * gradients.length)];
});