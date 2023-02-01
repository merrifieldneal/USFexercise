/** Connect Four
 *  NEAL H MERRIFIELD 
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */
const WIDTH = 7;
const HEIGHT = 6;// board size needs to stay the same where curr player and board will be changed
let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])
/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  for (let i = 0; i < HEIGHT; i++) {
    board.push(Array.from({ length: WIDTH }))// arrays made with WIDTH items
    // this allows board to grow or shrink if someone wants to change the size of board in the future
    // instead of hard stuck 7*6 board
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */
function makeHtmlBoard() {
  const htmlBoard = document.getElementById("board");// create variable htmlBoard from the board id
  const top = document.createElement("tr");// creates row of cells in a table called top
  top.setAttribute("id", "column-top");// this sets the column-top style to top
  top.addEventListener("click", handleClick);// adds a click listener to top - makes top row clickable
  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);// appends a # of cells of data to the row of headers based on the size of width 
  }
  htmlBoard.append(top); // appends the top row to html board
  // this establishes the rest of the board based on height and width
  for (let y = 0; y < HEIGHT; y++) {// it creates a number of rows based on heights
    const row = document.createElement("tr"); // table row - row
    for (let x = 0; x < WIDTH; x++) { //and a number of cells in the rows based on width
      const cell = document.createElement("td"); // cell table data cell
      cell.setAttribute("id", `${y}-${x}`); // gives it an attritbute based on its xy coordinate
      row.append(cell); // adds the cell to the row
    }
    htmlBoard.append(row); // adds the row to the board
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
function findSpotForCol(x) {
  // top down for function n-1 -> 0
  for (let i = HEIGHT - 1; i >= 0; i--) {
    if (!board[i][x]) { // iterates from the top down of the column, looking for a unfilled spot
      return i;
    }
  }
  // if the spot is empty return its index or else return null if all spots are full
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */
function placeInTable(y, x) {
  const choice = document.createElement('div');  // create div
  choice.classList.add('piece');// add class list of piece
  choice.classList.add(`player${currPlayer}`); // add class list of current player
  const location = document.getElementById(`${y}-${x}`);
  location.append(choice);
}

/** endGame: announce game end */
function endGame(msg) {
  alert(msg);//  pop up sign using alert - displays the msg in alert
}

/** handleClick: handle click of column top to play piece */
function handleClick(evt) {
  // get x from ID of clicked cell
  const x = +evt.target.id;
  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }
  // place piece in board and add to HTML table
  board[y][x] = currPlayer;
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // if every cell, on every row, on the board is filled - return true
  if (board.every(row => row.every(cell => cell))) {
    return endGame('Its a tie!');
  }

  // switch players\
  currPlayer = currPlayer === 1 ? 2 : 1;
  // if current player === 1 returns true, return 2, if false return 1.
  // returning sets the current value of currPlayer to whatever is returned

}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.
  // This code checks for the win in 4 different conditions
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]]; // first condition win is if the piece had horizontal adjacent pieces
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]]; // second win condition is if the piece had 3 pieces above if vertically
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]]; // the third win condition is if it is a diagonal right win meaning each piece is up and right after each other,
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]]; // fourth win coondition is if it is a diagonal left win meaning each pice is up and left after each other

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) { // this is the line that checks to see if any of the four win coniditons were met.
        return true;
      }
    }
  }
}

makeBoard(); // makes the raw board
makeHtmlBoard(); // adds the rest of the board into place
