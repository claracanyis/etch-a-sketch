function createGrid(columns, rows) {
    const container = document.querySelector("#container");

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

createGrid(30,30);