function findShort(s){
    let arr = s.split(' ');
    arr.sort( (a, b) => a.length - b.length)
    return arr[0].length
  }