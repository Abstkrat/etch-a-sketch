const gridContainer = document.getElementById('gridContainer');
const gridForm = document.getElementById('gridForm');
const gridSizeInput = document.getElementById('gridSize');

// Create grid based on user input
function createGrid(size) {
  // Clear the previous grid
  gridContainer.innerHTML = "";

  // Set container dimensions to 500px x 500px
  gridContainer.style.width = '500px';
  gridContainer.style.height = '500px';

  // Update flex-basis for each square based on grid size
  const squareSizePercentage = `calc(100% / ${size})`;

  // Create the grid
  for (let i = 0; i < size*size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.flexBasis = squareSizePercentage;
    square.style.backgroundColor = getRandomColor();
    square.style.opacity = '0'; // Initial opacity is transparent
  }
}

// Function to generate a random color in RGBA format
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 1)`; // Color with full opacity (1)
}
