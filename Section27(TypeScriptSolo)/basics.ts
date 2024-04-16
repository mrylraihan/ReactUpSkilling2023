let title = 'Wallie'
console.log(title)
// title = 3
title = "mink"
console.log(title)


let numList:number[];

// a array that only accepts numbers
let obj:{
    firstName:string;
    lastName:"";
    getFullName:()=>void;
}


let objTest :{
    id:number;
};

objTest = {
    id:1
}
console.log(objTest)

interface objectStruture {
    id:number;
};

let objTest2 :objectStruture= {
    id:2,
}

console.log(objTest2)

type objectType = {
    id:number;
};
type titleType = {
    title:string;
};

let objTest3 : objectType & titleType={
    id:4,
    title:"with types"
}
console.log(objTest3)
