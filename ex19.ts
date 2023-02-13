//No.19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.
let guestList = ["Hitler", "Albert Einstein", "Khalid Ibn Walid", "Frank Kafka", "Isacc Newton", "J. R. R. Tolkien"];

console.log("\n");
console.log("We found a bigger dinner table");
console.log("\n");
guestList.unshift("Allama Iqbal");      //adding a name to the beginning of array
guestList.splice(3,0,"Elon Musk");      // adding a name in the middle using splice
guestList.push("Steve Job");            // adding or appending name to end of array.
for(let i = 0; i < guestList.length; i++){
    console.log(`Mr.${guestList[i] + ", "}I would like to formally invite you to Dinner. If you can make it.`);
    //for Ex16
}
console.log("\n");
console.log("The number of people I'm inviting is: " + guestList.length);