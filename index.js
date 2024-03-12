"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
class Dev extends Person {
    constructor(name, age, profession) {
        super(name, age);
        this.profession = profession;
    }
    speak() {
        console.log(`My name is ${this.name} and I am a ${this.profession}`);
    }
}
let generalPerson = new Person("Maryam", 21);
let developer = new Dev("Maryam", 21, " Future WordPress Developer");
generalPerson.speak();
developer.speak();
