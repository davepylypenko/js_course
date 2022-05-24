// первое решение
function addUserAnswer(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].usersAnswer = null
  }
  return arr
}

// второе решение (forEach)
function addUserAnswer(arr) {
  arr.forEach( a => a.usersAnswer = null )
  return arr
}  
  
addUserAnswer(questions)