function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let item = arr[j];
      let next = arr[j + 1];
      if (item > next) {arr[j] = next; arr[j + 1] = item}
    }
  }
}