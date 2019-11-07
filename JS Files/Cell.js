function Cell(xPosition, yPosition, widthOfCell) {
  this.value = 0;
  this.width = widthOfCell;
  this.xPos = xPosition;
  this.yPos = yPosition;
  this.revealed = false;
}

  Cell.prototype.show = function() {
      stroke(0);
      noFill();
      rect(this.xPos, this.yPos, this.width, this.width);

      if(this.revealed == true)
      {
        fill(0);
        textSize(50);
        text(this.value, (this.xPos+this.width/2)-14, (this.yPos+this.width/2)+16);
      }

  }

  Cell.prototype.contains = function(x, y) {
    return (x > this.xPos && x < this.xPos + this.width && y > this.yPos && y < this.yPos + this.width);
  }

  Cell.prototype.setReveal = function(trueOrFalse) {
    this.revealed = trueOrFalse;

  }

  Cell.prototype.setValue= function(someValue)
  {
    this.value = someValue;
  }

  Cell.prototype.getValue = function()
  {
    return this.value;
  }

  Cell.prototype.getRevealed = function()
  {
    return this.revealed;
  }
