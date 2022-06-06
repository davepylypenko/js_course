function runningAverage() {
  let middle = []
  return function (arg) {
    middle.push(arg);
    let result = middle.reduce ( (sum, val) => sum += val, 0) / middle.length
    return Math.round(result * 100) / 100
  }
}