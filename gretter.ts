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