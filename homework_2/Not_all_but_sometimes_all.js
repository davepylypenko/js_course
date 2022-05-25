function remove(str, what) {
  let result = str;
  for (let i in what) {
    let a = result.split(i, what[i]).join('')
    result = a + result.slice(a.length + what[i])
  }
  return result
}