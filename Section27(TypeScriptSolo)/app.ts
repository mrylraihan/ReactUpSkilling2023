function add(a:number, b:number){
    return a+b
}

const sum = add(2,4)

console.log(sum)

function addStrings(a:string, b:string){
    return a+b
}

const sumString = addStrings('hello',' world')

console.log(sumString)

const testOptional = (name?:string)=>{

    let result = name?"true":"false"
    console.log(result)
}

testOptional()
testOptional('a')
