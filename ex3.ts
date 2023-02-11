//No.3 Name Cases:Store a person’s name in a variable, and then print that person’s name in
//  lowercase, uppercase, and titlecase.

let b = "abdullah rauf";
console.log(b.toLowerCase()); // converts to lowercase
console.log(b.toUpperCase()); // converts to uppercase
console.log(titleCase(b));    // calls the function with a parameter passed to it

function titleCase (string: string) {
    return string
    .toLowerCase().split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');    
    }

