// No.23 and 24
// Conditional Tests: Write a series of conditional tests.
//  Print a statement describing each test and your prediction for the results of each test.
//   Your code should look something like this:

let car = "subaru";
let sky = "blue";
console.log("is car == subaru? I predict true");
console.log(car == "subaru");

console.log("is car !== honda? I predict true");
console.log(car !== "honda");

console.log("is car typeOf == 'string'? I predict true");
console.log(typeof car == "string");

console.log("is car === subaru? I predict true");
console.log(car == "subaru");

console.log("is sky == blue? I predict true");
console.log(sky == "blue");
//======================================

console.log("is car == 'honda'? I predict false");
console.log(car == "honda");

console.log("is car == cultus? I predict false");
console.log(car == "cultus");

console.log("is car == civic? I predict false");
console.log(car == "civic");

console.log("is sky == red? I predict false");
console.log(sky == "red");

console.log("is car typeOf == 'number'? I predict false");
console.log(typeof car == "number");

// For ex.24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. 
//  Have at least one True and one False result for each of the following:

//Numerica Tests
let a = 2;
let b = 4;
console.log("Is a = b? I predict false");
console.log(a == b);

console.log("Is a < b? I predict true");
console.log(a < b);

console.log("Is a > b? I predict false");
console.log(a > b);

console.log("Is a <= b? I predict true");
console.log(a <= b);

console.log("Is a >= b? I predict false");
console.log(a >= b);

//OR , AND tests

let sun = "bright";
let isHot = true;

console.log("Is the sun bright and hot? I predict true");
console.log(sun == "bright" && isHot == true);

console.log("Is the sun bright or hot? I predict true");
console.log(sun == "bright" || isHot);

console.log("Is the sun bright and not hot? I predict false");
console.log(sun == "bright" && isHot !== true);

//Test whether an item is in a Array

let ar = ["a", "b", "c"];

console.log("Is 'a' part of the array? I predict true");
console.log(ar.includes('a'));

console.log("Is 'b' part of the array? I predict true");
console.log(ar.includes('b'));

//Test whether an item is not in a Array
console.log("Is 'd' part of the array? I predict false");
console.log(ar.includes('d'));

console.log("Is 'e' part of the array? I predict false");
console.log(ar.includes('e'));