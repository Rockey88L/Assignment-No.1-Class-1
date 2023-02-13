//No.30
//Hello Admin: Make a array of five or more usernames,
// including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:

let usernames = ["Rauf", "Abdullah", "Omer", "Hassan", "Admin", "Nomi"];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] == "Admin") {
    console.log("Hello Admin, would you like to see a status report?");
    break;
  }
  console.log(`Hello ${usernames[i]}, thanks you for logging in again`);
}
