let testUnions: string | boolean;

testUnions = 'Wallie'
console.log(testUnions)
testUnions = true
console.log(testUnions)
// testUnions = 2
// console.log(testUnions)

interface Athlete {
    sport:string,
    getSport():string
}

let basketBallPlayer1 :Athlete = {
    sport:"Basket Ball",
    getSport(){
        return this.sport
    }
}

let testReturn = basketBallPlayer1.getSport()
console.log(testReturn)

let student: {
    name:string,
    age:number,
    player:Athlete
}

student = {
    name:"Mike",
    age:24,
    player:{
         sport:"Basket Ball",
    getSport(){
        return this.sport
    }
    }
}

console.log(student)