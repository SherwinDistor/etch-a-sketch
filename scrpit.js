// Grab grid-container from document
const gridContainer = document.querySelector(".grid-container");

// Create a function that takes in size and creates divs
const createSquare = () => {
    // Create a while loop that will run 256 times to create a 16 x 16 grid
    let i = 1;
    while (i <= 30) {
        // Use createElement to create a div with the reference variable square
        const square = document.createElement("div");

        // Take the reference and set .classList.add(square)
        square.classList.add("square")

        // parentNode.appendChild() to append as the last child of the parentNode
        gridContainer.appendChild(square);

        // increment i
        i++;
    }
}

createSquare()