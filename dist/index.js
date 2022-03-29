"use strict";
let id = 5; // type inference: hover over id
// console.log('Id:',id)
let ids = [1, 2, 3, 4, 5];
// Tuple
let person = [1, 'hello', true];
// tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Jim'],
    [3, 'Jhon']
];
// Union: a variable holds more than one type
let newId = 22;
// enum: defines set of named constants either numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'Brad'
};
// Type Assertion: explicitly typing an entity
let cid = 1;
// let customerId = <number> cid
let customerId = cid;
// Functions:
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// void
function log(message) {
    console.log(message);
}
log('hello');
const user1 = {
    id: 1,
    name: 'Brad'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`; // template literals: ${expression}
    }
}
// NOTE: template literals are used to replace concatenation operator
// ${expression} perform substitution for embedded operation
const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Scott');
console.log(brad.register);
console.log(brad, mike);
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn Mendes', 'Developer');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jill']);
numArray.push(1);
strArray.push('Hello');
