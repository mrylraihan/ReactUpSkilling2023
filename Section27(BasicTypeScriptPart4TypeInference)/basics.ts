let people = {
    name:"Wallie",
    age:32
}
console.log(people)
// here we are inferring a type when we create variables this way
people.name = "Wayel"
console.log(people)
// people.name = 3 will error when complying code 
// console.log(people)

let firstName :string = 'Wallie'
// we can do this but its not needed instead we can remove the type because it is infered
console.log(firstName)