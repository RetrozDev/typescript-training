// Exercise 1: Basic Types Manipulation
// Declare a function that takes two numbers as parameters and returns their sum.
// Ensure that the types are correctly specified.
const sumNumbers = (a: number, b: number): number => {
	return a + b;
};

console.info(sumNumbers(10, 12));

// Exercise 2: Interfaces and Objects
// Declare an interface with the following properties: name (string), age (number), and city (string).
// Create a function that takes an object of this type and returns a formatted string with its information.
interface IPerson {
	name: string;
	age: number;
	city: string;
}

const presentPerson = (person: IPerson) => {
	return `${person.name} is ${person.age} years old and lives in ${person.city}`;
};

const person: IPerson = {
	name: "John",
	age: 28,
	city: "Los Angeles",
};

console.info(presentPerson(person));

// Exercise 3: Classes and Methods
// Create a class with a property "name" and a method that returns a message indicating the sound the animal makes.
// Create a subclass that inherits from this class and overrides the method to return a specific sound.

// Exercise 4: Generics
// Create a generic function that takes an array of type T and returns an array of type T but reversed.

// Exercise 5: Promises and Asynchronous Programming
// Write an asynchronous function that takes a number of milliseconds as a parameter
// and returns a promise that resolves after this delay.
