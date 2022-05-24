function combine() {
  let result = {};
  for (let i = 0; i < arguments.length; i++) {
    
    for (let j in arguments[i]) {
      if (Object.keys(result).includes(j)) {
        result[j] += arguments[i][j];
      } else {
        result[j] = arguments[i][j]
      }
    }
  }
  return result
}