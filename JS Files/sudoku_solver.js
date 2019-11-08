var cell;
let numOfRows;
let numOfColumns;
let cellWidth = 100;
var grid;
let submitButtonPressed = false;
let ROW = 0;
let COL = 0;

fillArray = function()
{
  submitButtonPressed = true;
  var table = document.getElementById('table');
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            if(table.rows[r].cells[c].firstChild.value != "")
            {
              grid[c][r].setValue(table.rows[r].cells[c].firstChild.value);
              grid[c][r].setReveal(true);
            }
            else
            {
              grid[c][r].setValue(0);
              grid[c][r].setReveal(false)
            }

        }
    }
    console.log(numOfRows)
    if(solveSudoku() == true)
    {
      console.log("VICTORY");
      // for(let i = 0; i < 9; i++)
      // {
      //   for(let j = 9; j < 9; j++)
      //   {
      //     grid[i][j].setReveal(true);
      //   }
      // }
    }
    else {
      console.log("DEFEAT");
    }
    document.getElementById('submitButton').disabled = 'true';

}

findUnassigned = function()
{
  for(let i = 0; i < 9; i++)
  {
    for(let j = 0; j < 9; j++)
    {
      if(grid[i][j].getValue() == 0)
      {
        console.log("Hello from: (" + i + ", " + j + ") where value equals " + grid[i][j].getValue());
        ROW = i;
        COL = j;
        return true;
      }
    }
  }
  return false;
}

checkRow = function(row, value)
{
  for(let i = 0; i < 9; i++)
  {
    if(grid[row][i].getValue() == value)
    {
      console.log("Got here at: (" + row + ", " + i + ") where value equals " + grid[row][i].getValue());
      return false;
    }
  }
  return true;
}

checkCol = function(col, value)
{
  for(let i = 0; i < 9; i++)
  {
    if(grid[i][col].getValue() == value)
      return false;
  }
  return true;
}

checkCluster = function(row, col, value)
{
  for(let i = 0; i < 3; i++)
  {
    for(let j = 0; j < 3; j++)
    {
      if(grid[i+row][j+col].getValue() == value)
        return false;
    }
  }
  return true;
}

isSafe = function(row, col, value)
{
  return (checkRow(row, value) && checkCol(col, value) && checkCluster(row-(row%3), col-(col%3), value) && grid[row][col].getValue() == 0);
}

solveSudoku = function()
{
  if(!findUnassigned())
    return true;

  for(let num = 1; num <= 9; num++)
  {
    if(isSafe(ROW, COL, num))
    {
      console.log(ROW);
      console.log(COL);
      grid[ROW][COL].setValue(num);

      if(solveSudoku())
        return true;

      grid[ROW][COL].setValue("0");
    }
  }
  return false;
}

make2DArray = function(cols, rows)
{
  var arr = new Array(rows);
  for(var i = 0; i < cols; i++)
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
  for(let i = 0; i < numOfRows; i++)
  {
    for(let j = 0; j < numOfColumns; j++)
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
      if(grid[i][j].contains(mouseX, mouseY) && submitButtonPressed)
      {
        grid[i][j].setReveal(true);
        //console.log(grid[i][j].getRevealed())
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
      //console.log("(" + i + ", " + j + " " + grid[i][j].getRevealed())
    }
  }
}
