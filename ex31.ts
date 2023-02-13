//No.31
// No Users:
// Add an if test to Exercise 28 to make sure the list of users is not empty.

// im confused about this exercise, it says to add a test and then asks us to remove all the names? is there missarrangent in the sequence of instructions?
let usernames = ["Rauf", "Abdullah", "Omer", "Hassan", "Admin", "Nomi"];
// console.log(usernames.length);
if (usernames.length == 0) {
  console.log("We need to find some users!");
} else {
  console.log("The list already has users");
}
console.log("\n");

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] == "Admin") {
    console.log("Hello Admin, would you like to see a status report?");
    break;
  }
  console.log(`Hello ${usernames[i]}, thanks you for logging in again`);
}

// removing all users???
usernames = [];
console.log("\n");
console.log("List is cleared");

if (usernames.length == 0) {
  console.log("We need to find some users!");
} else {
  console.log("The list already has users");
}
