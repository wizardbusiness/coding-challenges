
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
// in the array.
// map positions of boxes relative to each other.


// gameplay:
// save coordinates of moves for player x and player o.
// track all winning move-sets.

const board = [
  [0, 0], [0, 1], [0, 2],
  [1, 0], [1, 1], [1, 2],
  [2, 0], [2, 1], [2, 2]
];

const tictactoe = (moves) => {

};
