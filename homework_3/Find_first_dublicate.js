function firstDuplicate(str) {
  for (let i of str) {
    if(str.indexOf(i) != str.lastIndexOf(i)) {return i}
  }
  return null
}