//No.32
// Checking Usernames: Do the following to create a program that
// simulates how websites ensure that everyone has a unique username.

let currentUsers = ["rauf", "abdullah", "omer", "hamza", "hassan"];
let newUsers = ["rauf", "nomi", "omer", "ali", "hussain"];

for (let i = 0; i < newUsers.length; i++) {
  let usernameExists = currentUsers.some(users => 
     newUsers[i].toLocaleLowerCase() === users.toLocaleLowerCase());

  if (usernameExists) {
    console.log(`${newUsers[i]} you will need to enter a new username`);
  } else {
    console.log(`${newUsers[i]} username is available`);
  }
}
