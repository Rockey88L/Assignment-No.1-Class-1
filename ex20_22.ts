/* No.20, 21, 22
Think of something you could store in a array.
 For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
  Write a program that creates a list containing these items.
*/

//Ex20 storing a list of mountains in an array
let mountains = ["Mount Everest", "K2", "Anconcagua", "Denali"];

console.log(mountains);

//Ex21 Storing the same in an TS object would look like:
//Then think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let mountObj = [
  { name: "Mount Everest", location: "Nepal/China,Asia", height: 8848 },
  { name: "K2", location: "Pakistan", height: 8611 },
  { name: "Anconcuga", location: "Argentina, S. America", height: 6962 },
  { name: "Denali", location: "Alaska, U.S., N. America", height: 6190 },
];

console.log(mountObj);

//ex22 Intentional Error:
//If you haven’t received an array index error in one of your programs yet,
//try to make one happen. Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.

let intError = [0,1,2,3,4];
//suppose we try to add data or access an index outside of the defined range
console.log(intError[5]);   // here i'm trying to access a index that isnt present in the array.
console.log(intError[4]);   //correction
