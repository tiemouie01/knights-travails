/* eslint-disable import/extensions */
import Board from "./board.js";
import Square from "./square.js";

const getShortest = function getShortestPath(moves, endSquare) {
  // Find the shortest array from all the moves arrays.
  let lowestIndex = 0;

  for (let i = 0; i < moves.length - 1; i += 1) {
    if (moves[i][-1] === endSquare)
      lowestIndex = i;
  }

  return moves[lowestIndex];
};

const formatSquares = function changeToSquareObjects(start, end) {
  if (start.x === undefined) return [Square(...start), Square(...end)];
  return [start, end];
};

const findMoves = function findIndexesOfMovesToEnd(
  startSquare,
  endSquare,
  visitedSquares,
) {
  // Base case.
  if (startSquare === endSquare) {
    return [endSquare];
  }

  const visited = visitedSquares;
  visited[startSquare] = true;

  const adjacencyList = Board().getAdjacencyList()[startSquare];
  const moves = [];
  
  for (let i = 0; i < adjacencyList.length; i += 1) {
    const nextSquare = adjacencyList[i];
    if (!visited[nextSquare]) {
      const move = [startSquare];
      moves.push(move.concat(findMoves(nextSquare, endSquare, visited)));
    }
  }

  return getShortest(moves, endSquare);
};

export default function knightMoves(start, end) {
  const board = Board();
  const visited = new Array(64).fill(false);
  const [startSquare, endSquare] = formatSquares(start, end);

  const startIndex = board.findIndex(board.getBoard(), startSquare);
  const endIndex = board.findIndex(board.getBoard(), endSquare);

  const moves = findMoves(startIndex, endIndex, visited);
  
  return moves;
}
