//INIT
$(".victory").hide();
var score = 0;
displayScore();
gridInit();

// WIN TEST
// grid[0][0] = '1024';
// grid[0][1] = '1024';

// SETTING THE FIRST 2 NUMBERS

setNumber();
setNumber();

refreshGrid();


// MOVES

window.onkeydown = function (e) {
   
    if(checkLoose() && countEmptyCells() == 0)
    {
        alert('No more move available... You lost.');
        restartGame();
    }
    else
    {
        var tempGrid = duplicate(grid);
        if (e.keyCode == '38') {
            moveUp();
        }
        else if (e.keyCode == '40') {
            moveDown();
        }
        else if (e.keyCode == '37') {
            moveLeft();
        }
        else if (e.keyCode == '39') {
            moveRight();
        }
    
        if(!arrayIsEqual(tempGrid, grid))
        {
            setNumber();
        }
            
        refreshGrid();
        checkWin();
    }

  }
  

  // RESTART

$(".restart").click(function()
{
    restartGame();
    if($(".victory").is(':visible'))
    {
        $(".victory").hide("slow");
    }
});

$("h1").click(function()
{
    console.log(checkLoose());
    
})



