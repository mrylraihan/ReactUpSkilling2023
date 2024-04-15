var testUnions;
testUnions = 'Wallie';
console.log(testUnions);
testUnions = true;
console.log(testUnions);
var basketBallPlayer1 = {
    sport: "Basket Ball",
    getSport: function () {
        return this.sport;
    }
};
var testReturn = basketBallPlayer1.getSport();
console.log(testReturn);
var student;
student = {
    name: "Mike",
    age: 24,
    player: {
        sport: "Basket Ball",
        getSport: function () {
            return this.sport;
        }
    }
};
console.log(student);
