//No.37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default
//  with a message that reads I love TypeScript

function make_shirt(size = "large", message = "I love TypeScript") {
  return console.log(
    "The shirt size is " + size + ", and the message is " + message
  );
}
make_shirt(); //printing for large aka default
make_shirt("medium");
make_shirt("any", "I like Berserk");
