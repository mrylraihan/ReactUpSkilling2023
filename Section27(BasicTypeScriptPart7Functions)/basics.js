var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// theres no need to declare the type of the variable
// typescript will infer the type of the variable
function add(a, b) {
    return a + b;
}
var result = add(2, 2);
console.log(result);
function printTest(value) {
    console.log(value);
}
printTest('hello');
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
var updatedArray2 = insertAtBeginning(["demoArray"], "W");
console.log(updatedArray2);
