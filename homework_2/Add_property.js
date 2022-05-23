function addUserAnswer(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].usersAnswer = null
  }
  return arr
}

addUserAnswer(questions)