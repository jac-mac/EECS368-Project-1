var cell;
let numOfRows;
let numOfColumns;
let cellWidth = 100;
var grid;

make2DArray = function(rows, cols)
{
  var arr = new Array(rows);
  for(var i = 0; i < arr.length; i++)
  {
    arr[i] = new Array(cols);
  }

  return arr;
}


function setup() {

  createCanvas(900, 900);
  background(255);

  numOfRows = floor(width / cellWidth);
  numOfColumns = floor(height / cellWidth);
  grid = make2DArray(numOfRows, numOfColumns);
  for(var i = 0; i < numOfRows; i++)
  {
    for(var j = 0; j < numOfColumns; j++)
    {
      grid[i][j] = new Cell(i*cellWidth, j*cellWidth, cellWidth);
    }
  }
}

function mousePressed()
{
  for(var i = 0; i < numOfRows; i++)
  {
    for(var j = 0; j < numOfColumns; j++)
    {
      if(grid[i][j].contains(mouseX, mouseY))
      {
        grid[i][j].reveal();
      }
    }
  }
}

//repeating loop
function draw() {

  for(let i = 0; i < numOfRows; i++)
  {
    for(let j = 0; j < numOfColumns; j++)
    {
      grid[i][j].show();
    }
  }
}
