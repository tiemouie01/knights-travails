// eslint-disable-next-line import/extensions
import Board from "./board.js";

const board = Board();

console.table(board.getBoard());
console.table(board.getAdjacencyList());