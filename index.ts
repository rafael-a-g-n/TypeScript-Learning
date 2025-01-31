//Annotations
//Strings
let myName: string = 'Rafael';
console.log(myName);

//Numbers
let age: number = 23;
console.log(age);

//Boolean
let isStudent: boolean = true;
console.log(isStudent);


//type inferring
//Strings
let myName2 = 'Rafael';
console.log(myName2);
// ERROR myName2 = 2;

//Numbers
let age2 = 23;
console.log(age2);
// ERROR age2 = '23';

//Boolean
let isStudent2 = true;
console.log(isStudent2);
// ERROR isStudent2 = 1;

//any type
let variable: any = 'Hello';
console.log(variable);
variable = 2;
console.log(variable);
variable = true;
console.log(variable);

//function Parameters Annotations
// regular function
function sayHello(name: string) {
    console.log('Hello ' + name);
}

sayHello('Rafael');

//arrow function
const double = (x: number, y: number) => {
    console.log(x * y);
}

double(2, 3);

//default parameters values
const multiply = (x: number, y: number = 2) => {
    console.log(x * y);
}

multiply(2, 3);

//return type annotations
//regular function
const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(2, 3));

//arrow function
const subtract = (a: number, b: number): number => a - b;

console.log(subtract(5, 3));

//void type
//regular function
const sayHi = (name: string): void => {
    console.log('Hi ' + name);
}

sayHi('Rafael');

//arrow function

const sayGoodbye = (name: string): void => console.log('Goodbye ' + name);

sayGoodbye('Rafael');

//never type
//regular function
const throwError = (message: string): never => {
    throw new Error(message);
}

//arrow function
const infiniteLoop = (): never => {
    while (true) {
        console.log('Infinite Loop');
    }
}

//arrays
//regular array
let fruits: string[] = ['Apple', 'Banana', 'Orange'];
console.log(fruits);

//array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

//array of any type
let random: any[] = ['Apple', 1, true];
console.log(random);

//multi-dimensional array
let matrix: number[][] = [[1, 2], [3, 4]];
console.log(matrix[0][0]);

//objects
//regular object
let person: { name: string; age: number; isStudent: boolean } = {
    name: 'Rafael',
    age: 23,
    isStudent: true
}

console.log(person);

//function that returns an object
const createPerson = (name: string, age: number, isStudent: boolean) => {
    return {
        name,
        age,
        isStudent
    }
}

console.log(createPerson('Rafael', 23, true));

//type alias

type Person = { name: string; age: number; isStudent: boolean };

let person2: Person = {
    name: 'Rafael',
    age: 23,
    isStudent: true
}

console.log(person2);

//optional properties
type Person2 = { name: string; age: number; isStudent?: boolean };

let person3: Person2 = {
    name: 'Rafael',
    age: 23
}

console.log(person3);

//intersection types
type Person3 = { name: string; age: number };
type Student = { isStudent: boolean };

let student: Person3 & Student = {
    name: 'Rafael',
    age: 23,
    isStudent: true
}

console.log(student);

//union types
let id: string | number = 123;
console.log(id);

id = 'ABC';
console.log(id);

//literal types
let status1: 'active' | 'inactive' = 'active';
console.log(status1);

let status2: 'active' | 'inactive' = 'inactive';
console.log(status2);

//tuples
let person4: [string, number, boolean] = ['Rafael', 23, true];
console.log(person4);

//enums
enum Colors {
    Red,
    Green,
    Blue
}

let color: Colors = Colors.Green;
console.log(color + 'teste');

//enums with custom values
enum Colors2 {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
}

let color2: Colors2 = Colors2.Green;
console.log(color2);

//class properties annotations
class Person5 {
    name: string;
    age: number;
    isStudent: boolean;

    constructor(name: string, age: number, isStudent: boolean) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}

let person5 = new Person5('Rafael', 23, true);

console.log(person5);

//class methods annotations
class Person6 {
    name: string;
    age: number;
    isStudent: boolean;

    constructor(name: string, age: number, isStudent: boolean) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }

    sayHello() {
        console.log('Hello ' + this.name);
    }
}

let person6 = new Person6('Rafael', 23, true);

person6.sayHello();


