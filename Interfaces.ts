// Interfaces
console.log('Interfaces:');
interface LabeledValue {
  label: string;
  name?: string;
  anything?: any;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
let myObj1 = { size: 10, label: "Size 10 Object", name: 'wanmao' };
printLabel(myObj);
printLabel(myObj1);

// Option Properties
console.log('Optional Interfaces:');
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black", width: 2 });
console.log("TCL: mySquare", mySquare)

// Readonly properties
console.log('Readonly Interfaces:');
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!
console.log("TCL: p1", p1)

// readonly array
let ro: ReadonlyArray<number> = [1, 2, 3, 4]
console.log("TCL: ro", ro)

// override readonly array
let rro = ro as number[]
rro.push(5)
console.log("TCL: rro", rro)

// function type
console.log('Function Interfaces:');
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function (src, sub) {
  let result = src.search(sub)
  return result > -1
}
console.log(`wm in wanmao?`, mySearch('wanmao', 'wm'));
console.log(`nm in wanmao?`, mySearch('wanmao', 'nm'));

// indexable types
console.log(`Indexable Interfaces:`);
interface StringArray{
  [index: number]: string | number;
  length: number;
}
interface ObjArray{
  readonly [index: string]: string | number;
  name: string;
}
let myArr: StringArray;
let myArr1: StringArray;
let myObject: ObjArray;
myArr = ['Bob', 'Alan']
console.log("TCL: myArr", myArr)
myArr1 = [1,2,3,'2']
console.log("TCL: myArr1", myArr1)
myObject = {name: 'James', age: 11, pro: 'basketball'}
let myStr = myArr[0]
console.log("TCL: myObject", myObject)
console.log(myArr.length);