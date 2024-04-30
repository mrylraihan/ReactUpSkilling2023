function printArgs(arg) {
    console.log(arg);
}
printArgs('Hello');
printArgs(4);
var hobbieArray;
hobbieArray = ['run', 'code', 'cooking'];
hobbieArray.forEach(function (ele) {
    console.log(ele);
});
// type hobby = {hobbie:string}
var hobbieObjArray;
hobbieObjArray = [{ hobbie: 'run' }, { hobbie: 'walk' }, { hobbie: 'swim' }];
console.log(hobbieObjArray);
hobbieObjArray.forEach(function (ele) {
    console.log(ele.hobbie);
});
// type hobby = {hobbie:string}
// let hobbieObjArray :hobby[];
// hobbieObjArray = [{hobbie:'run'},{hobbie:'walk'},{hobbie:'swim'}]
// console.log(hobbieObjArray)
// hobbieObjArray.forEach((ele:hobby)=>{
//     console.log(ele.hobbie)
// })
