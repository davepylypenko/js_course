function doneOrNot(board){
  
  // Просмотр рядов
  for (let line of board) {
    let res = new Set(line);
    if(res.size < 9) {return "Try again!"}
  }
  
  // Просмотр столбов
  for (let i = 0; i < 9; i++) {
    let res = new Set();
    for (let j = 0; j < 9; j++) {
      res.add(board[j][i]);
    }
    if (res.size < 9) {return "Try again!"}
  }
  
  // Просмотр квадратов
  for (let i = 0; i < 9; i += 3) {
    let res = new Set();
    for (let j = 0; j < 3; j++) {
      board[j].slice(i, i + 3).forEach( item => res.add(item) )
    }
    if (res.size < 9) {return "Try again!"};

    res = new Set();
    for (let j = 3; j < 6; j++) {
      board[j].slice(i, i + 3).forEach( item => res.add(item) )
    }
    if (res.size < 9) {return "Try again!"};

    res = new Set();
    for (let j = 6; j < 9; j++) {
      board[j].slice(i, i + 3).forEach( item => res.add(item) )
    }
    if (res.size < 9) {return "Try again!"};
  }

  return "Finished!"
}