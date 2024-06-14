console.log("Hello World!");
function add(a, b) {
    return a + b;
}
function concatString(a, b) {
    return "".concat(a, " ").concat(b);
}
var concatString2 = function (a, b) {
    return "".concat(a, " ").concat(b);
};
var add2 = function (word) {
    return "".concat(word.a, " ").concat(word.b);
};
add2({ a: "mike", b: "turtle" });
console.log(add(2, 2));
console.log(add(2, 5));
console.log(concatString("Mike", "Turtle"));
console.log(concatString2("Mike", "Turtle"));
