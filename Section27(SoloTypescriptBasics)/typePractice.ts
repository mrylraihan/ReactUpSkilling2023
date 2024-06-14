// types in typescript 
// Compile-Time Only: Types are used by the TypeScript compiler for type-checking and do not produce any JavaScript code.
// Flexible and Simple: They are simpler and more flexible, especially when defining the shape of objects or functions.
// No Methods: Types cannot contain methods, only the structure of the data.
type Phone = { model: string }
type PhoneCollection = Phone[]

let tmobile: PhoneCollection;

tmobile = [{ model: 'Iphone 6' }, { model: 'Iphone 7' }]
console.log(tmobile)


// type Inference
// this type is automatically getting implied in this line 
let course = 'React the Complete Guide'

course = "2"

console.log(course)

type Word = string

let book:Word;
book = 