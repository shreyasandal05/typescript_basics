let id: number = 5  // type inference: hover over id

// console.log('Id:',id)

let ids: number[] = [1,2,3,4,5]

// Tuple

let person: [number, string, boolean] = [1, 'hello', true]
// tuple array

let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Jim'],
    [3,'Jhon']
]
// Union: a variable holds more than one type

let newId: string | number = 22

// enum: defines set of named constants either numeric or string

enum Direction1 {
    Up,  // By default its value is 0
    Down,  // 1
    Left,  // 2...
    Right
}

enum Direction2 {
    Up = 'Up',  
    Down = 'Down', 
    Left = 'Left',  
    Right = 'Right'
}

console.log(Direction2.Left)

// Objects
 
type User = {
    id: number,
    name: string
}
const user: User = {
    id:1,
    name:'Brad'
}

// Type Assertion: explicitly typing an entity

let cid: any = 1

// let customerId = <number> cid
let customerId = cid as number

// Functions:

function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1, 2))

// void
function log(message: string | number): void{
    console.log(message);
}

log('hello')

// Interfaces

interface UserInterface {

    readonly id: number,
    name: string
    age?: number  // optional properties

}
const user1: UserInterface = {
    id:1,
    name:'Brad'
}

// user1.id = 5  //error: it's a read only property

// NOTE: we can't use interface with primitives and unions. we can use it for objects

type Point = number | string
const p1: Point = 1

// interface Point = number | string  // generate error
// const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// classes

class Person implements PersonInterface{
    id: number // access modifier
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`  // template literals: ${expression}
    }
}

// NOTE: template literals are used to replace concatenation operator
// ${expression} perform substitution for embedded operation

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Scott')

console.log(brad.register)
console.log(brad, mike)

// Subclasses

class Employee extends Person {
    position: string

    constructor(id: number,name: string ,position: string ){
        super(id,name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn Mendes','Developer')

console.log(emp.register())

// Generics

function getArray<T>(items: T[]): T[] {  // T represent Type
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Brad', 'John', 'Jill'])

numArray.push(1)
strArray.push('Hello')
