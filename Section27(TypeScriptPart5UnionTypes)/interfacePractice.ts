interface Grade {
    className:string,
    gpa:number,
}

interface PersonalInfo {
    name:string,
    age:number,
}

// interface Student extends PersonalInfo ,Grade {}

// let firstStudent: Student = {
//         name:"Wallie",
//         age:3.5,
//         className:"bio",
//         gpa:3.5
// }
// interface Student extends PersonalInfo ,Grade {}

// with the | operator it will allow to have optional properties from both interfaces 
// let firstStudent:  PersonalInfo | Grade = {
//         name:"Wallie",
//         age:3.5,
//         className:"bio",
//         gpa:3.5 
// }

let firstStudent:  PersonalInfo & Grade = {
        name:"Wallie",
        age:3.5,
        className:"bio",
        gpa:3.5
}
console.log(firstStudent)