//No.14, 15, 16, 17
//` Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.`
let guestList = ["Hitler", "Albert Einstein", "Khalid Ibn Walid", "Frank Kafka", "Isacc Newton", "J. R. R. Tolkien"];
for(let i = 0; i < guestList.length; i++){
    console.log(`Mr.${guestList[i] + ", "}I would like to formally invite you to Dinner. If you can make it.`);
    //for Ex14
}
console.log("\n");
//For Ex15: A guess couldnt make it and a new guest needs to be invited.
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log(guestList[0] + " Can't make it to Dinner.");
console.log("\n");
let cancelledGuest= guestList.shift();
guestList.unshift("Jaun Elia");
for(let i = 0; i < guestList.length; i++){
    console.log(`Mr.${guestList[i] + ", "}I would like to formally invite you to Dinner. If you can make it.`);
    //for Ex15
}
console.log("\n");
//For Ex.16
// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// Solution: array already has 6 items in it 0-5 so skipping few steps.
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
console.log("I can only invite two people");
console.log("\n");
// No.17
//Shrinking Guest List: 
// You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
for(let j =7; j > 0; j--){
   let notInvited = guestList.pop();
   console.log(`Mr.${notInvited}, I'd like to apologise, there was a mishap and the Dinner is postpond until further notice.`);
}
console.log("\n");
for(let i = 0; i < guestList.length; i++){
    console.log(`Mr.${guestList[i] + ", I would like to formally Re-invite you to Dinner. If you can still make it."}`)
}
guestList.pop();        //popping the last index value
guestList.pop();        //popping the last index value
console.log("\n");

console.log("Checking to see if we acutally have a empty array:" + guestList);
