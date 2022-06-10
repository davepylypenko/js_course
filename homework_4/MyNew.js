const myNew = (constructor, ...args) => {

  // если конструктор ничего не возвращает
  if (constructor() == undefined) {
    let obj = {
      constructor,
    };

    // добавляем новые ключи и значения используя конструктор
    args.forEach( val => {
      Object.assign(obj, obj.constructor(val))
    })

    // удаляем конструктор и устанавливаем прототип
    delete obj['constructor']
    Object.setPrototypeOf(obj, constructor.prototype)
    return obj

  // если конструктор имеет return (игнорируем все this)
  } else {
    let obj = {};

    // добавляем новые ключи и значения используя конструктор (игнорируем все this)
    args.forEach( val => {
      Object.assign(obj, constructor(val))
    })

    // устанавливаем прототип
    Object.setPrototypeOf(obj, constructor)
    return obj
  }
}

