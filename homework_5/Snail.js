function snail (array) {
  let result = [];
  
  // делаем пока у нас на останеться финальное значение
  while(array.length > 1) {
    
    // добавляем первую строку    
    array[0].forEach( item => result.push(item) )
    
    
    // добавляем последние значения в средине матрицы
    for (let i = 1; i < array.length - 1; i++) {
      result.push(array[i][array.length - 1])
      array[i].pop()
    }
    
    // добавляем последную строку (перевернутую)
    array[array.length - 1].reverse().forEach( item => result.push(item) )
    
    // добавляем первые значения в средине матрицы
    for (let i = array.length - 2; i > 0; i--) {
      result.push(array[i][0]);
      array[i].shift(array[array.length - 1])
    }
    
    array.shift();
    array.pop()
  }
  
  // если осталось одно значение пушим его
  if (array.length == 1 && array[0][0] !== undefined) {
    result.push(array[0][0]);
  }
  
  
  return result
}
