function multiplyAll (arr) {
  return function(arg) {
    return arr.map( a => a * arg)
  }
}