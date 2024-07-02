// Syntax:
// functionName(parameterName:type, ):return type{
// }
function add(a:number, b:number):number{
    return a + b;
}

const sum = add(2,2)
console.log(sum)

const printFn = (value:any)=>{
    console.log(value)
}

printFn("Hey")

// Generics
// Generics will keep everything consistent so you you wont be able to run methods on nontype variables 

function insertAtBeginning<T>(array:T[], ...value:T[]):T[]{
    const newArr = [...value, ...array]
    return newArr
}
const demoArray = [1,2,3,4]
const updatedArray = insertAtBeginning(demoArray, -1, 0)
console.log(updatedArray)
// updatedArray[0].split('') if we had any this would'nt error 
// Prior we had any as the type instead of T and we were able to 
const wordArrs = ["word1", "word2"]
const updatedWordArr = insertAtBeginning(wordArrs, "newWord")
console.log(updatedWordArr)
updatedWordArr[0].split('')