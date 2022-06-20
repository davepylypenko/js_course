function parseInt(string) {

  // массив со всеми значениями
  let obj = {num: {
    on: 1, tw: 2, tr: 3, th: 3, fo: 4, fi: 5,  si: 6, se: 7,  ei: 8, ni: 9, te: 0, el: 1,},
  ends: {
    we: function(num) {return num + 10},
    en: function(num) {return num + 10},
    ty: function(num) {return num * 10},},
  multiply: {
    hundred: 100, thousand: 1000, million: 1000000,},
  }

  // для упрощения поиска
  let [num, ends, multiply] = [Object.keys(obj.num), Object.keys(obj.ends), Object.keys(obj.multiply)];

  // функция из слова возвращает значение integer
  function getNumber(str) {
    // числа исключения
    if(str == 'seven') {return 7}
    if(str == 'twelve') {return 12}

    // если число сложеное
    if (str.includes('-')) {
      str = str.split('-');
      let start = str[0].slice(0, 2);
      let start2 = str[1].slice(0, 2);
      return obj.num[start] * 10 + obj.num[start2]
    };
    
    // если число одиночное
    let [start, end] = [str.slice(0, 2), str.slice(-2)];
    let number = obj.num[start];

    // в зависимости от окончания добавляем множитель
    return ends.includes(end) ? obj.ends[end](number) : number
  }

  // массив слов
  let words = string.split(' ');

  let result = [];

  // перебираем все элементы и в зависимости от их типа делаем следующее:
  words.forEach( function(item) {
    let start = item.slice(0, 2);

    // если это число просто пушим его в массив
    if(num.includes(start) && item != 'thousand') {
      result.push(getNumber(item));
    // если множитель, то умножаем прошлое на этот множитель
    } else if (multiply.includes(item)){
      if (item == 'thousand') {
        let thousand = result.reduce( (sum, i) => sum += i, 0 )
        result = [thousand]
      }
      result[result.length - 1] *= obj.multiply[item];
    }
  }
  )

  // возвращаем сумму всех чисел
  return result.reduce( (sum, item) => sum += item, 0 )
}