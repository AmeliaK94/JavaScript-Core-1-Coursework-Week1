var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function uppercase (mentor) {
    return mentor.toUpperCase();
}

function createGreeting (mentor) {
    var name = uppercase(mentor);
    var message = "HELLO " + name;
    return message;
}

console.log (createGreeting(mentor1));
console.log (createGreeting(mentor2));
console.log (createGreeting(mentor3));
console.log (createGreeting(mentor4));
console.log (createGreeting(mentor5));
