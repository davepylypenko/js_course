function convertHashToArray(hash){
  let result = []
  for (let i in hash) {
    result.push( [i, hash[i]] )
  }
  return result.sort()
}