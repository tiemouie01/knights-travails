const Square = function squareOnBoard(x, y) {
  return { x, y };
};

const buildBoard = function buildBoardWithSquares() {
  // Create an array of squares.
  const board = [];
  for (let x = 0; x < 8; x += 1) {
    for (let y = 0; y < 8; y += 1) {
      board.push(Square(x, y));
    }
  }

  return board;
};

const findIndex = function findSquareIndex(board, square) {
  for (let index = 0; index < board.length; index += 1) {
    if (square.x === board[index].x && square.y === board[index].y) {
      return index;
    }
  }
  return null;
};

const addEdge = function addEdgeToAdjacencyList(
  board,
  adjacencyList,
  nextSquare,
) {
  const index = findIndex(board, nextSquare);
  if (index) {
    adjacencyList.push(index);
  }
};

const buildAdjacencyList = function buildBoardAdjacencyList(board) {
  const adjacencyList = [];
  for (let i = 0; i < board.length; i += 1) {
    const square = board[i];
    const edges = [];

    // [ (x-2), (y+1)]
    let nextSquare = Square(square.x - 2, square.y + 1);
    addEdge(board, edges, nextSquare);

    // [ (x-2), (y-1) ]
    nextSquare = Square(square.x - 2, square.y - 1);
    addEdge(board, edges, nextSquare);

    // [ (x-1), (y-2) ]
    nextSquare = Square(square.x - 1, square.y - 2);
    addEdge(board, edges, nextSquare);

    // [ (x+1), (y-2) ]
    nextSquare = Square(square.x + 1, square.y - 2);
    addEdge(board, edges, nextSquare);

    // [ (x-1), (y+2) ]
    nextSquare = Square(square.x - 1, square.y + 2);
    addEdge(board, edges, nextSquare);

    // [ (x+1), (y+2) ]
    nextSquare = Square(square.x + 1, square.y + 2);
    addEdge(board, edges, nextSquare);

    // [ (x+2), (y+1) ]
    nextSquare = Square(square.x + 2, square.y + 1);
    addEdge(board, edges, nextSquare);

    // [ (x+2), (y-1) ]
    nextSquare = Square(square.x + 2, square.y - 1);
    addEdge(board, edges, nextSquare);

    adjacencyList.push(edges);
  }

  return adjacencyList;
};

export default function Board() {
  const board = buildBoard();
  const adjacencyList = buildAdjacencyList(board);

  const getBoard = () => board;
  const getAdjacencyList = () => adjacencyList;

  return {
    getBoard,
    getAdjacencyList,
  };
}
