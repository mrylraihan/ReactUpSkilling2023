function printArgs<T>(arg:T){
    console.log(arg)
}

printArgs<string>('Hello')
printArgs<number>(4)


let hobbieArray:string[];

hobbieArray = ['run', 'code','cooking']

hobbieArray.forEach((ele:string)=>{
    console.log(ele)
})

// type hobby = {hobbie:string}
let hobbieObjArray :{hobbie:string}[];

hobbieObjArray = [{hobbie:'run'},{hobbie:'walk'},{hobbie:'swim'}]

console.log(hobbieObjArray)

hobbieObjArray.forEach((ele:{hobbie:string})=>{
    console.log(ele.hobbie)
})
// type hobby = {hobbie:string}
// let hobbieObjArray :hobby[];

// hobbieObjArray = [{hobbie:'run'},{hobbie:'walk'},{hobbie:'swim'}]

// console.log(hobbieObjArray)

// hobbieObjArray.forEach((ele:hobby)=>{
//     console.log(ele.hobbie)
// })