function createGrid(columns, rows) {
    const container = document.querySelector("#container");
    for (let i = 1; i <= (columns * rows); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

createGrid(16,16);