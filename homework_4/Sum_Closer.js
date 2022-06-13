function sum(...args) {
  if (args.length == 2) {
    return args[0] + args[1]
  } else {
    return function (x) {
      return x + args[0]
    }
  }
}
