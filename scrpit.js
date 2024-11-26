// Grab grid-container from document
const gridContainer = document.querySelector(".grid-container");

// Grab button and set container width;
const btnGridSize = document.querySelector(".btn-grid-size");
const containerWidth = 500;

function generateGrid() {
    // Get input value and set variable to gridSize
    let gridSize = parseInt(document.querySelector(".grid-size").value);
    

    // Use new height to update square width and heigh to fit the number of squares
    const newSquareWidth = containerWidth / gridSize - 2;

    // Call generate new grid
    createSquare(gridSize, newSquareWidth)

    // Call draw squares
    drawSquares()
}

// Create a function that takes in size and creates divs
const createSquare = (gridSize, newSquareWidth) => {
    // Create a while loop that will run 256 times to create a 16 x 16 grid
    let i = 1;
    let gridTotal = gridSize * gridSize;
    
    while (i <= gridTotal) {
        // Use createElement to create a div with the reference variable square
        const square = document.createElement("div");
        
        // Take the reference and set .classList.add(square)
        square.classList.toggle("square")
        
        // Add height and width property
        square.style.width = `${newSquareWidth}px`;
        square.style.height = `${newSquareWidth}px`;
        
        // parentNode.appendChild() to append as the last child of the parentNode
        gridContainer.appendChild(square);
        
        // increment i
        i++;
    }
}

// Add button functionality
btnGridSize.addEventListener("click", generateGrid)

function drawSquares() {
    // Grab the squares created from doc
    const drawSquare = document.querySelectorAll(".square");

    // Iterate through all squares and add an event listener
    drawSquare.forEach((square) => {
        
        // On clock toggle draw class
        square.addEventListener("mouseover", () => {
            square.classList.add("draw");
        });
    });
};


