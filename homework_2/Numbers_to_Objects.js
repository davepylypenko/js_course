function numObj(s){
  let result = []
  for (let i of s) {
    let a = {}
    a[i] = String.fromCodePoint(i)
    result.push(a)
  }
  return result
}