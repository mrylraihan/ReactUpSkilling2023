// Interfaces can be merged if there are 2 interfaces with the same name 
interface Dog {
    type:string
}
interface Dog {
    sound:string
}

let pet:Dog
pet = {type:"Bulldog", sound:"Woof"}


// you can also use Extends on interfaces

interface Sound {
    makeSound:()=>void
}

interface Pets extends Sound{
    type:string,
    name:string
}
// Now anything that uses Pets must have type, name properties amd a makeSound method
let firstPet:Pets;

firstPet={
    type:"Dog",
    name:"Spike",
    makeSound:()=>console.log("Woof")
}

console.log(firstPet)
firstPet.makeSound()