class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
function createPerson() {
  const person1 = new Person("John", 30);
  person1.greet();
}

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}
function createCar() {
  const myCar = new Car("Toyota", "Corolla", 2020);
  console.log(myCar.getDetails());
}
function sum(a, b) {
  return a + b;
}
function calculateSum() {
  console.log(sum(5, 10));
}
function greetUser() {
  const name = "Alice";
  console.log(`Hello, ${name}!`);
}
  