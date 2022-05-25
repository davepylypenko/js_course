function numObj(s){
  let result = []
  for (let i of s) {
    result.push( {[i]: String.fromCodePoint(i)} )
  }
  return result
}