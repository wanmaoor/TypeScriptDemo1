interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `hello ${person.firstName} ${person.lastName}`
}

let user = { firstName: 'Bill', lastName: 'Gates' }

console.log(greeter(user));

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

// value type
let student = new Student('lebron', 'Jr.', 'James')
console.log(greeter(student));

let isDone: boolean = false
console.log("TCL: isDone:", isDone)

let decimal: number = 6
console.log("TCL: decimal:", decimal)

let numberArr: Array<number> = [1, 2, 5]
console.log("TCL: numberArr", numberArr)

let stringArr: Array<string> = ['a', 'b', 'c']
console.log("TCL: stringArr", stringArr)

let booleanArr: boolean[] = [false, true, false]
console.log("TCL: booleanArr", booleanArr)

// Tuple
let tuple: [string, number] = ['a', 123]
console.log("TCL: tuple", tuple)

// Enum
enum Color { Red, Black, Green }
let c: Color = Color.Black
console.log("TCL: c", c)

// change enum value
enum newColor { Yellow = 44, Blue = 33 }
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

// Void: type of do not return a value
function voidUser(): void {
  console.log('void: type of do not return a value');
}
voidUser()

let voidNull: void = null
let voidUndefined: void = undefined

// Null and Undefined

let u: undefined = undefined;
let n: null = null;

// !Never: used when you sure that something is never going to occur or return from a function
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function keepProcessing(): never {
  while (true) {
    console.log('I always does something and never ends.')
  }
}
// keepProcessing()
// Object
// declare function create(o: object | null): void;
// create({o: 1})
// create(null)

// Type assertion: I know what I'm doing
let someValue: any = 'this is a string'
let someLength: number = (someValue as string).length

console.log("TCL: someLength", someLength)
