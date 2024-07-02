var pet;
pet = { type: "Bulldog", sound: "Woof" };
var firstPet;
firstPet = {
    type: "Dog",
    name: "Spike",
    makeSound: function () { return console.log("Woof"); }
};
console.log(firstPet);
firstPet.makeSound();
