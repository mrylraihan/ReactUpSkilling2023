var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Syntax:
// functionName(parameterName:type, ):return type{
// }
function add(a, b) {
    return a + b;
}
var sum = add(2, 2);
console.log(sum);
var printFn = function (value) {
    console.log(value);
};
printFn("Hey");
// Generics
// Generics will keep everything consistent so you you wont be able to run methods on nontype variables 
function insertAtBeginning(array) {
    var value = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        value[_i - 1] = arguments[_i];
    }
    var newArr = __spreadArray(__spreadArray([], value, true), array, true);
    return newArr;
}
var demoArray = [1, 2, 3, 4];
var updatedArray = insertAtBeginning(demoArray, -1, 0);
console.log(updatedArray);
// updatedArray[0].split('') if we had any this would'nt error 
// Prior we had any as the type instead of T and we were able to 
var wordArrs = ["word1", "word2"];
var updatedWordArr = insertAtBeginning(wordArrs, "newWord");
console.log(updatedWordArr);
updatedWordArr[0].split('');
