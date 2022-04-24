
/* Find a winner in a tic-tac-toe game.

The first player A always places 'X' characters,
while the second player B always places 'O' characters.
Player A plays first.

Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that
the ith move will be played on grid[rowi][coli]. return the winner of the
game if it exists (A or B). In case the game ends in a draw return "Draw". If
there are still movements to play return "Pending". */

// sub challenges:

// board:
// create a 2d grid using an array of arrays. Each subarray represents a box
// in the array. done.


// gameplay:
// save coordinates of moves for player x and player o. done.
// track all winning move-sets. done.
// sort moves for player x and o to compare to winning moveset.


const board = [
  [0, 0], [0, 1], [0, 2],
  [1, 0], [1, 1], [1, 2],
  [2, 0], [2, 1], [2, 2]
];

// winning move-sets.
/*
// horizontal
[0, 0], [0, 1], [0, 2]
[1, 0], [1, 1], [1, 2]
[2, 0], [2, 1], [2, 2]
// vertical
[0, 0], [1, 0], [2, 0]
[0, 1], [1, 1], [2, 1]
[0, 2], [1, 2], [2, 2]
// diagonal
[0, 0], [1, 1], [2, 2]
[2, 0], [1, 1], [0, 2]
*/

const tictactoe = (moves) => {
  // store winning move-sets in array.
  let winningMoves = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];
  // init cache to store moves by x.
  let cacheX = [];
  // init cache to store moves by o.
  let cacheO = [];
  // iterate through moves.
  for (let i = 0; i < moves.length; i++) {
    // x moves first, so if move is on an even index ( since index starts at 0),
    // that is a move by 'x'.
    // if its on an odd index, that is a move by 'o'.
    // push any moves by 'x' to cache x. push any moves by 'o' to cache o.
    if (i % 2 !== 0) cacheX.push(moves[i]);
    else if (i % 2 === 0) cacheO.push(moves[i]);
  }
  // convert caches and winning moves to string so that the includes method
  // can be used.
  cacheX = cacheX.toString();
  cacheO = cacheO.toString();
  winningMoves = winningMoves.toString();
  // check if x or o caches are equivalent to any winning move sets.
  if (winningMoves.includes(cacheX)) return 'A';
  // if they are, return ' ' wins message.
  else if (winningMoves.includes(cacheO)) return 'B';
  // if no winning movesets are discovered, return its a draw message.
  else return 'Draw';
};

console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])) // 'A'
