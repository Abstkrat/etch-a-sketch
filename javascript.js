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
}
