function generateName() {

  // рандомное число от 65 до 90 (все большие латинские буквы по Юникод)
  function random() {
    return Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  }
  
  // создаем радномное имя из 6-ти букв
  function randomName() {
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += String.fromCodePoint(random());
    }
    return result
  }

  let name = randomName();

  // проверяем есть ли такой URL в словаре. Если есть используем рекурсию
  return photoManager.nameExists(name) ? generateName() : name;
}


function generateName() {

  const items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // случайное число от 1 до 52 (все значения в items)
  function random() {return Math.floor(Math.random() * items.length)};

  // генерация случайного имени используя items
  function randomName() {
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += items[random()]
    }
    return result;
  }

  let name = randomName();

  // проверяем есть ли такой URL в словаре. Если есть используем рекурсию
  return photoManager.nameExists(name) ? generateName() : name;
}