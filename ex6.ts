// No.6
// Stripping Names:
// Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
let personName = "\tZia Ullah Khan\n.";
console.log(personName); // printing the name once
//using Trim method like we do in JS
console.log(personName.trim()); // after using trim() method

// but the \n isnt removed if its present in a string so we we replace method.
let trimPersonName = "\tZia Ullah Khan\n.";
trimPersonName = trimPersonName.replace(/\n/g, ""); // using replace with regex to remove \n from the string globally
console.log(trimPersonName.trim()); // logging the final result with the spaces removed.
