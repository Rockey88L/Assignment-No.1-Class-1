//No.28
// Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:

let personAge = 23;
if (personAge < 2) {
  console.log("Person is a Baby");
} else if (personAge >= 2 && personAge < 4) {
  console.log("Person is a Toddler");
} else if (personAge >= 4 && personAge < 13) {
  console.log("Person is a Kid");
} else if (personAge >= 13 && personAge < 20) {
  console.log("Person is a Teenager");
} else if (personAge >= 20 && personAge < 65) {
  console.log("Person is an Adult :(");
} else if (personAge >= 65) {
  console.log("Person is an Elder");
}
