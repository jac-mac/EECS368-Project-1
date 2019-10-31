var cell;
let numOfRows;
let numOfColumns;
let cellWidth = 100;
var grid;

fillArray = function()
{
  var table = document.getElementById('table');
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            grid[c][r].setValue(table.rows[r].cells[c].firstChild.value);
        }
    }

    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            if(table.rows[r].cells[c].firstChild.value == "")
            {
              grid[c][r].setReveal(false);
            }
            else
            {
              grid[c][r].setReveal(true);
            }
        }
    }

    document.getElementById('submitButton').disabled = 'true';

}

setTableValues = function()
{

}

make2DArray = function(cols, rows)
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
        grid[i][j].setReveal(true);
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
