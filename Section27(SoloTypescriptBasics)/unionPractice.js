// A union Type is a union definition that allows you to assign more then 1 type 
// syntax: let data : string | number , now this variable can either be a number or a string with our error 
var data;
data = "Wallie";
console.log(data);
data = 22;
console.log(data);
var personData;
personData = { name: "Wallie", age: 32 };
console.log(personData);
personData = { firstName: "Wallie", lastName: "Raihan" };
console.log(personData);
var personData2;
personData2 = { name: "Wallie", age: 32, firstName: "Wallie", lastName: "Raihan" };
console.log(personData2);
personData2 = { name: "Wallie", age: 32, firstName: "Wallie" };
console.log(personData2);
