const btnSize = document.querySelector("#sizeSetting");
const container = document.querySelector("#container");

function createGrid(columns, rows) {
    for (let line = 1; line <= rows; line++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 1; i <= columns; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("squareColor1");
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
            let squareClass = square.className;
            let classNumber = square.className[square.className.length-1];
            square.classList.remove(squareClass.slice(7,18));
            square.classList.add(squareClass.slice(7,18) + (parseInt(classNumber) + 1).toString());
        });
    } 
}

changeColorHover();