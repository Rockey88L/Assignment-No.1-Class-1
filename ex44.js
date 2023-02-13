//No.44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.

function sandwich(sandItems) {
    console.log("Summary of the sandwich : "+ sandItems.join(", "));
}    
sandwich(["Tomatoes","Egg"]);
sandwich(["Tomatoes","Egg", "Meat"]);
sandwich(["Tomatoes","Egg", "Chicken", "Beans"]);

