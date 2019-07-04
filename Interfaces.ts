// Interfaces
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// Option Properties
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
      newSquare.color = config.color;
  }
  if (config.width) {
      newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black", width: 2});
console.log("TCL: mySquare", mySquare)

// Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!
console.log("TCL: p1", p1)

// readonly array
let ro: ReadonlyArray<number> = [1,2,3,4]
console.log("TCL: ro", ro)

// override readonly arary
let rro = ro as number[]
rro.push(5)
console.log("TCL: rro", rro)