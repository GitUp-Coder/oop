//class called Person
class Person {
    //properties for name and age of the person.
    name: string;
    age: number;
  
    // Constructor function to initialize name and age when creating a new Person object.
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method to log a message stating the person's name and age.
    speak() {
      console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

// class called Dev which extends Person to represent a developer.
class Dev extends Person {
    // property for the profession
    profession: string;
  
    
    constructor(name: string, age: number, profession: string) {
      super(name, age); 
      this.profession = profession; 
    }
  
    speak() {
      console.log(`My name is ${this.name} and I am a ${this.profession}`);
    }
}

let generalPerson = new Person("Maryam", 21);

let developer = new Dev("Maryam", 21, "Future WordPress Developer");

generalPerson.speak();
developer.speak();
