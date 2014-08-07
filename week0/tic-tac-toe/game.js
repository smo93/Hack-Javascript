"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(""));
  }
}

function validatePos(pos) {
  return !isNaN(pos) && pos <= 3 && pos >= 1;
}

function checkForWinner(board, player) {
  for (var i = 0; i < 3; i++) {
    if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] == player) {
      return true;
    }

    if(board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] == player) {
      return true;
    }
  }

  if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] == player) {
    return true;
  }

  return false;
}

// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    position = null,
    player1 = prompt("Player 1: "),
    player2 = prompt("Player 2: ");


  while(true) {

    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place for " + player1);
    } else {
      console.log("Place for " + player2);
    }

    // this is blocking prompt
    position = prompt("x y>").split(' ');

    if (validatePos(position[0]) && validatePos(position[1])) {
      if(xTurn) {
        board[parseInt(position[0]) - 1][parseInt(position[1]) - 1] = 'x';
        if (checkForWinner(board, 'x')) {
          console.log('X wins!');
          return;
        }
      }
      else {
        board[parseInt(position[0]) - 1][parseInt(position[1]) - 1] = 'o';
        if (checkForWinner(board, 'o')) {
          console.log('O wins!');
          return;
        }
      }

      //console.log(position[0] + position[1]);

      xTurn = !xTurn;
    } else {
      console.log("Invalid position!");
    }

  }
}

gameLoop();
