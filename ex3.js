//No.3 Name Cases:Store a person’s name in a variable, and then print that person’s name in
//  lowercase, uppercase, and titlecase.
var b = "abdullah rauf";
console.log(b.toLowerCase()); // converts to lowercase
console.log(b.toUpperCase()); // converts to uppercase
console.log(titleCase(b)); // calls the function with a parameter passed to it
function titleCase(string) {
    return string
        .toLowerCase().split(' ')
        .map(function (word) { return word[0].toUpperCase() + word.slice(1); })
        .join(' ');
}
