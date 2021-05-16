const myBttn = document.getElementById("mybutton");
myBttn.addEventListener("click", function () {
    alert("button clicked");
});

// Deel 2 en 3

const BDY = document.getElementById("Blue");
const Chng = document.getElementById("Red");


Chng.addEventListener("click", function () {
    BDY.classList.toggle("red-background");
});