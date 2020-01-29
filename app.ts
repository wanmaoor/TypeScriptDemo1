function combine(input1: number | string, input2: number | string) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2
  } else {
    return input1.toString() + input2.toString()
  }
}

const result = combine(1, 2)
console.log("TCL: result", result)
const result1 = combine('hello', 'world')
console.log("TCL: result1", result1)
console.log(1233333);
