//primitives :number, strings,booleans
//more complex types: arrays, objects

// primitives 

let age:number;
age = 3
console.log(age)//will error 
// let age:number;
// age = 'wallie'
// console.log(age)//will error 

let isInstructor:boolean = true;

console.log(isInstructor)

let fName:string = 'wallie';

console.log(fName)
// More complex data types
let hobbies: string[];

hobbies = ['sports','cooking']

let person: {
    name:string,
    age:number
}

person = {
    name:'wallie',
    age:3
};
// person = 5
// console.log(person)
console.log(person)