function ipsBetween(start, end){

  let result = 0

  // создаем перевернутые массивы из IP
  let arr1 = start.split('.').reverse()
  let arr2 = end.split('.').reverse()
  
  // сравниваем результаты
  for (let i = 0; i < 4; i++) {

    result += (arr2[i] * (256 ** i)) - (arr1[i] * (256 ** i))
  }

  
  return result;
}