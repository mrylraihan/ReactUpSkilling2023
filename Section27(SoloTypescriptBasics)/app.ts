console.log("Hello World!")


function add(a:number, b:number):number{
    return a+b
}

function concatString(a:string, b:string):string{
    return `${a} ${b}`
}
const concatString2 = (a: string, b: string):string => {
    return `${a} ${b}`
}

type wordObj={
    a:string
    b:string
}
const add2= (word:wordObj):string => {
    return `${word.a} ${word.b}`
}

add2({a:"mike", b:"turtle"})

console.log(add(2,2))
console.log(add(2,5))
console.log(concatString("Mike","Turtle"))
console.log(concatString2("Mike","Turtle"))