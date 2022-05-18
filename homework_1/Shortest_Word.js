// First solution
function findShort(s){
    let arr = s.split(' ');
    arr.sort( (a, b) => a.length - b.length)
    return arr[0].length
  }


// Second solution
function findShort(s){
  let result = s.length;
  s = s.split(' ')
  for (let i of s) {
    if (i.length < result) {
      result = i.length
    }
  }
  return result
}