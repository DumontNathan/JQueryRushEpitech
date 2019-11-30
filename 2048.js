//INIT

var score = 0;
displayScore();
gridInit();

// SETTING THE FIRST 2 NUMBERS

setNumber();
setNumber();
refreshGrid();


// MOVES

window.onkeydown = function (e) {
   
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
        // if(checkLoose() && countEmptyCells() == 0)
        // {
        //     alert('eho');
        // }
        // else
        // {
            setNumber();
            refreshGrid();
        // }
  }
  

  // RESTART

$(".restart").click(function()
{
    restartGame();
});

$("h1").click(function()
{
    console.log(checkLoose());
    
})

  // LOST

// $(window).on("error", function(){
//     alert('Oooooh noooo... You lost.');
//     restartGame();
// })



