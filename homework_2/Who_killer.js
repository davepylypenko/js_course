function killer(suspectInfo, dead) {
  for (let i in suspectInfo) {
    let count = 0;
    for (let j of dead) {
      if (suspectInfo[i].includes(j)) {
        count += 1;
        if (count == dead.length) {return i}
      }
    }
  }
  return -1
}