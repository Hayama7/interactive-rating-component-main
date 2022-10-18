const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const submitButton = document.getElementById("submitBut");
const rating = document.getElementById("theRate");
const rates = document.querySelectorAll(".r");

submitButton.addEventListener("click", ()  => {
    container2.classList.remove("hidden")
    container.style.display = "none"  
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })

})