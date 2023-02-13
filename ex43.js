//No.43
// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names.
var magicianNames = ["Houdini", "My Will", "Money", "Nawaz Shareef", "Zardari"];
function make_great(name) {
  var greatMagicion = [];
  for (var i = 0; i < name.length; i++) {
    greatMagicion.push("The Great " + name[i]);
  }
  return greatMagicion;
}
function show_magicians(magicianNames) {
  for (var i = 0; i < magicianNames.length; i++) {
    console.log(magicianNames[i]);
  }
}
var greatMagicion = make_great(magicianNames.slice());
show_magicians(magicianNames); //orginal list
console.log("\n");
show_magicians(greatMagicion); // Modified with Great
