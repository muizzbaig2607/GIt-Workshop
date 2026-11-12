console.log("Student Dashboard loaded successfully!");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("You clicked: " + card.querySelector("h3").innerText);
    });
});
