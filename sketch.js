const container = document.querySelector(".container");
const gridSize = document.querySelector(".grid-size");
const eraser = document.querySelector(".erase");
const blackBtn = document.querySelector(".black");
const resetBtn = document.querySelector(".reset");
let isBlack = true;


blackBtn.addEventListener("click", () => {
    let color = "black";
    setColor(color);
});

eraser.addEventListener("click", () => {
    let color = "erase";
    setColor(color);
});

sizingGrid(16);
creatingDivs(16);
function sizingGrid(grid) {
    container.style.setProperty("--grid-rows", grid);
    container.style.setProperty("--grid-cols", grid);
}

gridSize.addEventListener("click", () => {
    let size = prompt("Grid Size? 0-64");
    if (size > 64 || size < 0) {
        delGrid();
        sizingGrid(16);
        creatingDivs(16);
        return alert("!Please enter a number between 0 and 64!");
    }
    delGrid();
    sizingGrid(size);
    creatingDivs(size);
});

function delGrid() {
    container.innerHTML = "";
}

function random(min, max) {
    const num = Math.floor(math.random() * (max - min)) + min;
    return num;
}



function creatingDivs(grid) {
    for (let i = 0; i < grid * grid; i++) {
        let divs = document.createElement("div");
        divs.classList.add("divs");
        container.appendChild(divs);
    }
}

function setColor(color) {
    const divs = document.querySelectorAll("div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", (e) => {
            if (color == "black") {
                e.target.style.backgroundColor = "black";
            }
            else {
                e.target.style.backgroundColor = "rgb(255, 255, 255)";
            }
        });
    }
}

resetBtn.addEventListener("click", clear);
function clear() {
    const allDivs = document.querySelectorAll(".divs");
    allDivs.forEach((allDivs) => {
        allDivs.style.backgroundColor = "rgb(255, 255, 255)";
    });
}