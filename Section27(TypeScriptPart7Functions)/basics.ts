// theres no need to declare the type of the variable
// typescript will infer the type of the variable
function add(a:number, b:number):number{
    return a+b
}

const result:number = add(2,2)
console.log(result)

function printTest(value:any):void{
    console.log(value)
}

printTest('hello')


// Generics
function insertAtBeginning<T>(array:T[], value:T){
    const newArray = [value, ...array]
    return newArray
}
// function insertAtBeginning<T>(array:T[], value:T):T[]{
//     const newArray = [value, ...array]
//     return newArray
// }

const demoArray = [1,2,3]
let updatedArray = insertAtBeginning(demoArray, -1)
console.log(updatedArray)
let updatedArray2 = insertAtBeginning(["demoArray"], "W")
console.log(updatedArray2)