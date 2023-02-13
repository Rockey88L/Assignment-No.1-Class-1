//No.35
// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list,
//  and then use a for loop to print out the name of each animal

let animal = ["Cat", "Dog", "Racoon"];
console.log("Printing array as is");
for(let i = 0; i < animal.length; i++){
    console.log(animal[i]);
}

console.log("\n");
//modifyin the list
for(let j = 0; j < animal.length; j++){
    console.log(`A ${animal[j]} is a lovable animal.`);
}

//line at the end of program
console.log("Any of these animal can make a great pet!");