/* eslint-disable import/extensions */
import Board from "./board.js";
import Square from "./square.js";

const formatSquares = function changeToSquareObjects(start, end) {
  if (!start.x) return [Square(...start), Square(...end)];
  return [start, end];
};

export default function knightMoves(start, end) {
    // Create the chess board and change arguments to Square objects.
    const chessBoard = Board();
    const [startSquare, endSquare] = formatSquares(start, end);

    console.log(startSquare, endSquare);

    // Base case.
    // if (chessBoard.equalTo(startSquare, endSquare)) return [startSquare];

    // const squares = chessBoard.getBoard();
    // const adjacencyList = chessBoard.getAdjacencyList();
    // const moves = [];

    // adjacencyList.forEach((index) => {
    //     const move = [startSquare];
    //     const nextSquare = 
    // })
}
