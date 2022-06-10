// Код не работает

function Cat(name, w) {

  // это обычный конструктор (финальная версия, много не логичных штук)
  this.name = name;
  this._weight = w;
  
  // сеттеры и геттеры
  Object.defineProperty(this, 'weight', {
    get() {
      return this._weight
    },
    set(value) {
      allWeight[this.name] = value
      this._weight = value
    }
    })
  
  // не реализовал среднее значение
  let allWeight = {}
  Cat.averageWeight = function () {
    let arr = Object.values(allWeight);
    return arr.reduce( (sum, val) => sum += val) / arr.length
  }
}





