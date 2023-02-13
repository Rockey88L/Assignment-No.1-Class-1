//No.34
// Pizzas: Think of at least three kinds of your favorite pizza.
//  Store these pizza names in a array, and then use a for loop to print the name of each pizza

let pizzaFlavor = [
  "Crown Crust",
  "Behari Kebab",
  "Square New Yorker's Pizza",
  "Deep Fry Pizza",
];

console.log("Simply printing the names");
for (let i = 0; i < pizzaFlavor.length; i++) {
  console.log(pizzaFlavor[i]);
}

//Modifying the Loop
console.log("\n");
console.log("Modified loop with sentences");
for (let j = 0; j < pizzaFlavor.length; j++) {
  console.log(`I like ${pizzaFlavor[j]}!`);
}
console.log("\n");


console.log(`
I absolutely adore pizza! It's my favorite food, hands down.
The combination of warm, crispy crust with melted cheese and flavorful toppings is simply unbeatable.
I could eat it every day and never get tired of it!.
I really love Pizza!`);
