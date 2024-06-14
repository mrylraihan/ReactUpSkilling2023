// A union Type is a union definition that allows you to assign more then 1 type 

// syntax: let data : string | number , now this variable can either be a number or a string with our error 

let data : string | number ;

data = "Wallie";
console.log(data)
data = 22;
console.log(data)

type Person = {
    name:string,
    age:number
}
type People = {
    firstName?:string,
    lastName?:string;
}

let personData : People | Person;

personData ={name:"Wallie", age:32}
console.log(personData)
personData ={firstName:"Wallie", lastName:"Raihan"}
console.log(personData)

let personData2 : Person & People;
personData2 = {name:"Wallie", age:32,firstName:"Wallie", lastName:"Raihan"}
console.log(personData2)
personData2 = {name:"Wallie", age:32,firstName:"Wallie"}
console.log(personData2)