// primitive:numbers, strings, booleans
// more complex types :arrays, objects
// Function types, parameters

// primitives

let age:number;
age = 2
// age = "Word" this word show an error because we already defined it as a number 
console.log(age)

let username:string;
username = "wayel"
console.log(username)

let isTrue: boolean;

isTrue = false

console.log(isTrue)

let manyThings:any[];
manyThings = ["test",2,3,{}]

console.log(manyThings)

let manyNames:string[];
manyNames = ["Mike", "Shawn"]

console.log(manyNames)

let listBools : boolean[];

listBools = [false, true]

let hobbies:string[];

hobbies = ["run", "swim", "hike"]

console.log(listBools)
console.log(hobbies)

let whatEver: any;

whatEver = 2;
console.log(whatEver)
whatEver = "2";
console.log(whatEver)
whatEver = {number:2};
console.log(whatEver)
whatEver = [];
console.log(whatEver)


// let person :{};

// person = {name:"Mike"}
// console.log(person)
// person = {isEmpty:true}
// console.log(person)

type person = {
    name:string,
    age:number
}

let person2 : person

person2 = {
    name:"Mike",
    age:32
}

console.log(person2)

