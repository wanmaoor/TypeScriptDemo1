interface Person {
  firstName: string;
  lastName: string;
}

function gretter(person: Person) {
  return `hello ${person.firstName} ${person.lastName}`
}

let user = { firstName: 'Bill', lastName: 'Gates' }

console.log(gretter(user));

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

// value type
let student = new Student('lebron','Jr.','James')
console.log(gretter(student));

let isDone: boolean = false
console.log("TCL: isDone:", isDone)

let decimal: number = 6
console.log("TCL: decimal:", decimal)

let numberArr: Array<number> = [1,2,5]
console.log("TCL: numberArr", numberArr)

let stringArr: Array<string> = ['a','b','c']
console.log("TCL: stringArr", stringArr)

let booleanArr: boolean[] = [false, true, false ]
console.log("TCL: booleanArr", booleanArr)

// Tuple
let tuple: [string, number] = [ 'a', 123]
console.log("TCL: tuple", tuple)

// Enum
enum Color {Red, Black, Green}
let c: Color = Color.Black
console.log("TCL: c", c)

// change enum value
enum newColor {Yellow = 44, Blue = 33}
let y: newColor = newColor.Yellow
let b: newColor = newColor.Blue
console.log("TCL: y", y)
console.log("TCL: b", b)

// Any
let notSure: any = 'asdf'
notSure = 123
console.log("TCL: notSure", notSure)

// Object: assign any value except methods
let prettySure: Object = 4
