class cell {
  constructor(x, y, dis) {
    this.x = x;
    this.y = y;
    this.dis = dis;
  }
}

function isValid(x, y, N = 8) {
  if (x >= 0 && x < 8 && y >= 0 && y < 8) return true;
  return false;
}

function KnightMoves(intial, final) {
  //create a matrix
  let matrix = Array(8)
    .fill()
    .map(() => Array(8).fill(0));

  // console.log(matrix);

  //possible moves in x and y direction
  let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  let dy = [-1, -2, -2, -1, 1, 2, 2, 1];

  //empty queue
  let q = [];

  q.push(new cell(intial[0], intial[1], []));

  while (q.length != 0) {
    let coord = q.shift();
    if (coord.x === final[0] && coord.y === final[1]) {
      coord.dis = [...coord.dis, [coord.x, coord.y]];
      return coord.dis;
    }

    for (let i = 0; i < 8; i++) {
      let nrow = coord.x + dx[i];
      let ncol = coord.y + dy[i];
      if (isValid(nrow, ncol) && matrix[nrow][ncol] == 0) {
        matrix[nrow][ncol] = 1;
        q.push(new cell(nrow, ncol, [...coord.dis, [coord.x, coord.y]]));
      }
    }
  }
  return Number.MAX_VALUE;
}

console.log(KnightMoves([3, 3], [4, 3]));
