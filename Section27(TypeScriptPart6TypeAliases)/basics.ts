// let person:{
//     name:string, 
//     age:number
// }

// person = {
//     name:"wallie",
//     age:32
// }
// console.log(person)

// let people : { name:string, 
//     age:number}[]

// people = [
//     person,
//     {name:"Heshow", age:32}
// ]
// console.log(people)

type Person = {
    name:string;
    age:number;
}

let person:Person;
let person2:Person;

person = {
    name:"wallie",
    age:32
}

person2 = {
    name:"Heshow",
    age:32
}

let people:Person[]

people = [person, person2]
console.log(people)