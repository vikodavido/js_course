function sum(x) {
    //your code
  if (arguments.length > 1) {
      console.log(arguments[0] + arguments[1])
    return arguments[0] + arguments[1]
  } else {
      return function(y) {
        console.log(x+y)
       return x + y
     }
  }
}
