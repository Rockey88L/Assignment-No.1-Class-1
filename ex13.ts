//No.13
// Your Own Array: Think of your favorite mode of transportation,
// Such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
let transType = ["Bikecycle", "Car", "Motorbike", "Boat"];
let transCompany = ["Honda", "Toyota", "YAMAHA", "Tesla"];
for (let i = 0; i < transType.length; i++) {
  for (let k = 0; k < transCompany.length; k++) {
    console.log(
      `I would like to own a ${transCompany[k] + " " + transType[i]}.`
    );
  }
}
