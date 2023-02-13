//No.42
/*
Great Magicians: Start with a copy of your program from Exercise 41.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
  Call show_magicians() to see that the list has actually been modified.
*/

let magicianNames = ["Houdini", "My Will", "Money", "Nawaz Shareef", "Zardari"];

function make_great(magicianNames) {
  let greatName = "The Great";
  for (let i = 0; i < magicianNames.length; i++) {
    console.log(greatName + " " + magicianNames[i]);
  }
  
}
make_great(magicianNames);
