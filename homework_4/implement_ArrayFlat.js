function flat(arr, depth = 1) {

  // если depth меньше одного (0; 1), то мы просто уменьшаем вложеность на 1 
  return depth < 1 ? arr.slice():

    // рекурсией повторяем действия пока не получим точку выхода depth == 0 || 1
    arr.reduce( (result, arg) =>
      result.concat(Array.isArray(arg) ? flat(arg, depth - 1): arg), 
      []
    )

  // ничего не возвращаем, а изменяем исходный массив
  return;
}