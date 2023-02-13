//No. 18
//Seeing the World: 
// Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

let countryName = ["Japan", "Iceland", "Greenland", "Turkey", "Singapore"];
// •1 Print your array in its original order.
console.log("Original Order")
console.log(countryName);

// •2 Print your array in alphabetical order without modifying the actual list.
let sortCountName = countryName.slice().sort();        // we use slice method to create a copy of the original array and perform sort on the copy instead of org.
console.log("Alphabetical Order");
console.log(sortCountName);

// •3 Show that your array is still in its original order by printing it.
console.log("Orignal Unchanged");
console.log(countryName);

// •4 Print your array in reverse alphabetical order without changing the order of the original list.
let reverseCountName = sortCountName.slice().reverse();
console.log("Reverse Aplhabetic Order Without Change Org")
console.log(reverseCountName);

// •5 Show that your array is still in its original order by printing it again.
console.log("List is in original form");
console.log(countryName);

// •6 Reverse the order of your list. Print the array to show that its order has changed.
countryName.reverse();
console.log("Reversing the list once")
console.log(countryName)

// •7 Reverse the order of your list again. Print the list to show it’s back to its original order.
countryName.reverse();
console.log("reversing the reversed list again");
console.log(countryName);

// •8 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
countryName.sort();
console.log("Sorting the list in alphabetic order");
console.log(countryName);

// •9 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
countryName.sort().reverse();
console.log("Sorting in Reverse Alphabetically order");
console.log(countryName);
