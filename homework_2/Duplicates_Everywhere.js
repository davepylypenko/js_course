const removeDuplicateIds = (obj) => {
  let keys = Object.keys(obj);
  let finalObj = {};
  let dublicates = new Set();
  
  // Прогоняем все ключи начиная с самого большого
  for ( let i of keys.sort( (a, b) => a - b).reverse() ) {
    
    // добавляем все уникальные значения
    let a = []
    for (let j of obj[i]) {
      if ( !(dublicates.has(j)) ) {
        a.push(j);
        dublicates.add(j)
      }
    }
    
    finalObj[i] = a
  }
  
  return finalObj
};