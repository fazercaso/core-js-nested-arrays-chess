## Nested Arrays: Chess and Table

Arrays are useful objects for storing data sets: list of numbers, strings, etc. They are very simple, and their flexibility gives un unlimited possibilities! There is one general concept, let's call it *Nested Arrays*. That is, you can create an array whose elements are also arrays. **Array of arrays**.

```javascript
ticTacToeBoard = [
  ["X", "X", "O"]
  ["O", "O", "X"],
  ["X", "O", "X"]
]

firstRow = ticTacToeBoard[0]
// => ["X", "X", "O"]

firstRowThirdColumn = firstRow[2]
// => "O"
```
*Figure 1*.  Representing a table as an *Array of arrays*.

Nested arrays are useful for representing some table data like [tic-tac-toe board](https://en.wikipedia.org/wiki/Tic-tac-toe) (see Figure 1).  We usually think of tables as a set of rows and columns. Nested arrays are the kind of data structure that captures our perception of tables quite well. You can think of the elements in our main array as rows. And the elements within each row are the values in the corresponding column.

If we want the first row of a table - we refer to the zero(0) index of the array. When we have a row, we can get values from the columns we want. Figure 1 shows how we can get the first row of the table and how we can get the value of the last column in that row.

In Figure 1, to get the value from the third column of the first row, we take the intermediate step of assigning the first row to a variable. Then we use the variable to get the value corresponding to the 3rd column. But we can simplify the process of getting the desired item as follows:

`ticTacToe[0][2]`.

Now you know how to access the elements in nested arrays. Let's create some of these arrays ourselves.


### Release 0. Chessboard
```javascript.
const board = generateChessboard();
console.log(board)
// [[['Black Rook', 'Black Knight', ...], [...], ...] 
// An array of arrays where the elements are pieces, pawns, null.
console.log(board[7][0]);
// ``White Rook.
```
*Figure 2*.  Creating a chessboard, and getting a value from the 1st column of the last row.

The first thing you need to do using nested arrays is a [chessboard](https://en.wikipedia.org/wiki/Chess#Rules). Write a function `generateChessboard` that returns a representation of the chessboard as an array of arrays, by converting existing arrays into `pawns` and `figures`. It is recommended to use array methods. Each cell should have a string value ("White King", "Black Pawn") and should be in its place, as in the beginning of the game. But pieces don't occupy all cells, so write `null` where there are none.

Done? Let's move on:

```javascript
renderChessboard(board);
// It will display the following:
`
♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜
♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟




♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙       
♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖
`
```

Once the `generateChessboard` function has worked, write a `renderChessboard` function capable of rendering the board in a nice way. Use the `emoji` given in the `chessboard.js` file.


### Release 1. Tabular data

| Number | Name | Position  | Points per Game  |
|---------|-----------------|------------------|----------------------|
| 12.     | Joe Schmo       | Center           | [14, 32, 7, 0, 23]   |
| 9       | Ms. Buckets.    | Point Guard.     | [19, 0, 11, 22, 0]   |
| 31      | Harvey Kay      | Shooting Guard.  | [0, 30, 16, 0, 25]   |
| 18      | Sally Talls     | Power Forward    | [18, 29, 26, 31, 19].|
| 22      | MK DiBoux       | Small Forward    | [11, 0, 23, 17, 0]   |

*Table 1*.  Tabular data for the basketball team.

Again, we have data that translates well to an array of arrays.

```javascript.
roster = generateRoster()
// => [ ... ]
roster[1]
// => [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]]
roster[1][2]
// => "Center"
roster[1][3]
// => [14, 32, 7, 0, 23]
roster[1][3][0]
// => 14
```
*Figure 3*.  Creating a table with a list inside and accessing its elements.

Write a function `generateRoster` that provides the data from Table 1 as an array of arrays. As in the case with `generateChessboard`, this function should return a specific array (consisting of arrays). See Figure 3.

### Release *. Tests

We have written tests for to check the functions generateChessboard and renderChessboard. These tests are available in the file /spec/chessboard.spec.js. 

**To run the tests**, type `npm jest` in the console in the project directory.

Read the instructions on how to write [tests] (https://github.com/Elbrus-Bootcamp/manuals/blob/master/jasmine.md).

And try to write your own tests for the function `generateRoster` in the file `roster.spec.js`.

## Conclusion

This assignment is intended to give you an idea of nested arrays. What they are, why and when they should be used. You will come across them often in the future.
