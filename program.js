const btnSize = document.querySelector("#sizeSetting");
const container = document.querySelector("#container");

function createGrid(columns, rows) {
    for (let line = 1; line <= rows; line++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 1; i <= columns; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    
}

createGrid(16,16);

function removeGrid() {
    const rows = document.querySelectorAll(".row");
    const squares = document.querySelectorAll(".square");
    for (let element of squares) {
        element.remove();
    }
    for (let element of rows) {
        element.remove();
    }
}

btnSize.addEventListener('click', function () {
    let size = Number(prompt('Enter row and column size'));
    if (Number.isInteger(size) && size > 0 && size <= 100) {
        removeGrid();
        createGrid(size,size);
        changeColorHover();
    } else {
        console.log('ERROR: input is not a number or exceeds range [1,100]');
    }
})

function changeColorHover() {
    const squares = document.querySelectorAll(".square");
    for (let square of squares) {
        square.addEventListener('mouseover', () => {
            square.setAttribute('style', 'background-color: green');
        })
    } 
}

changeColorHover();