"use strict";
//Annotations
//Strings
let myName = 'Rafael';
console.log(myName);
//Numbers
let age = 23;
console.log(age);
//Boolean
let isStudent = true;
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
let variable = 'Hello';
console.log(variable);
variable = 2;
console.log(variable);
variable = true;
console.log(variable);
//function Parameters Annotations
// regular function
function sayHello(name) {
    console.log('Hello ' + name);
}
sayHello('Rafael');
//arrow function
const double = (x, y) => {
    console.log(x * y);
};
double(2, 3);
//default parameters values
const multiply = (x, y = 2) => {
    console.log(x * y);
};
multiply(2, 3);
//return type annotations
//regular function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 3));
//arrow function
const subtract = (a, b) => a - b;
console.log(subtract(5, 3));
//void type
//regular function
const sayHi = (name) => {
    console.log('Hi ' + name);
};
sayHi('Rafael');
//arrow function
const sayGoodbye = (name) => console.log('Goodbye ' + name);
sayGoodbye('Rafael');
//never type
//regular function
const throwError = (message) => {
    throw new Error(message);
};
//arrow function
const infiniteLoop = () => {
    while (true) {
        console.log('Infinite Loop');
    }
};
//arrays
//regular array
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
//array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//array of any type
let random = ['Apple', 1, true];
console.log(random);
//multi-dimensional array
let matrix = [[1, 2], [3, 4]];
console.log(matrix[0][0]);
//objects
//regular object
let person = {
    name: 'Rafael',
    age: 23,
    isStudent: true
};
console.log(person);
//function that returns an object
const createPerson = (name, age, isStudent) => {
    return {
        name,
        age,
        isStudent
    };
};
console.log(createPerson('Rafael', 23, true));
let person2 = {
    name: 'Rafael',
    age: 23,
    isStudent: true
};
console.log(person2);
let person3 = {
    name: 'Rafael',
    age: 23
};
console.log(person3);
let student = {
    name: 'Rafael',
    age: 23,
    isStudent: true
};
console.log(student);
//union types
let id = 123;
console.log(id);
id = 'ABC';
console.log(id);
//literal types
let status1 = 'active';
console.log(status1);
let status2 = 'inactive';
console.log(status2);
//tuples
let person4 = ['Rafael', 23, true];
console.log(person4);
//enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
let color = Colors.Green;
console.log(color + 'teste');
//enums with custom values
var Colors2;
(function (Colors2) {
    Colors2["Red"] = "RED";
    Colors2["Green"] = "GREEN";
    Colors2["Blue"] = "BLUE";
})(Colors2 || (Colors2 = {}));
let color2 = Colors2.Green;
console.log(color2);
//class properties annotations
class Person5 {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}
let person5 = new Person5('Rafael', 23, true);
console.log(person5);
//class methods annotations
class Person6 {
    constructor(name, age, isStudent) {
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
// class access modifiers
class Person8 {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    sayHello() {
        console.log('Hello ' + this.name);
    }
    sayGoodbye() {
        console.log('Goodbye ' + this.name);
    }
}
class Student1 extends Person8 {
    sayGoodbye() {
        console.log('Goodbye ' + this.name + ' (Student)');
    }
}
let person8 = new Person8('Rafael', 23, true);
let student1 = new Student1('Rafael', 23, true);
person8.sayHello();
student1.sayGoodbye();
const computerExample = {
    name: 'PC',
    ram: 16,
    hdd: 512
};
console.log(computerExample);
const movieExample = {
    name: 'Inception',
    rating: 9.3
};
console.log(movieExample);
const add = (x, y) => x + y;
const subtract1 = (x, y) => x - y;
console.log(add(2, 3));
console.log(subtract1(5, 3));
function greet(person) {
    console.log('Hello ' + person.firstName + ' ' + person.lastName);
    person.sayHello();
}
const john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    sayHello() {
        console.log('Hello there! ' + this.firstName);
    }
};
greet(john);
const movie1 = {
    name: 'Inception',
    rating: 9.3,
    genre: 'Sci-Fi',
    printMovieInfo(name, price, rating) {
        const finalRating = rating ? rating : this.rating;
        return `Name: ${name}, Price: $${price}, Rating: ${finalRating}`;
    }
};
const res = movie1.printMovieInfo('Inception', 20, 10);
console.log(res);
class Car {
    startEngine() {
        console.log('Engine started');
    }
    stopEngine() {
        console.log('Engine stopped');
    }
    lowFuelWarning() {
        console.log('Low fuel');
    }
}
const car = new Car();
car.startEngine();
car.stopEngine();
car.lowFuelWarning();
//generics
//generic functions
function printInfo(arg) {
    console.log(arg);
    return arg;
}
printInfo('Hello');
printInfo(2);
