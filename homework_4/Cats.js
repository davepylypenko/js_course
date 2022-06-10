var Cat = (function () {

  // сохраняем все значения веса
  let allWeight = {};
  
  // используем замыкание для сохранения allWeight
  let constructor = function(name, weight) {

    // выдаем ошибку если нет значения
    if (name == undefined || weight == undefined) {
      throw Error('Error');
    };

    // устанавливаем значения
    this.name = name;
    Object.defineProperty(this, 'weight', {
      get: function() {return weight},
      set: function(value) {
        // при каждом set редактируем значение в allWeight
        allWeight[this.name] = value;
        weight = value;
        return weight;
      },
    });
    
    // пушим первые значения
    allWeight[this.name] = weight
  };

  // создаем функцию для подсчета среднего веса
  constructor.averageWeight = function() {
    let arr = Object.values(allWeight)
    return arr.reduce( (sum, val) => sum += val, 0) / arr.length
  };

  // возвращаем конструктор (для замыкания)
  return constructor;
}());