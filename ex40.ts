//No.40
// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title,
//  and it should return a Object containing these two pieces of information.

function make_album(artistName, albumTitle) {
  let obj = {
    artist: artistName,
    album: albumTitle,
  };
  // console.log(obj);
  return obj;
}

console.log(make_album("Queen", "Bohemien Rhapsody"));
console.log(make_album("Weekend", "Weekend"));
console.log(make_album("Sting", "Junoon"));

console.log("\n");

function make_albumOpt(name, title, track) {
  let optObj = {
    art: name,
    Title: title,
  };

  // adding optional choice for tracks if present

  if (track) {
    optObj.tracks = track;
  }

  return optObj;
}
console.log(make_albumOpt("Abc", "EFG")); // even with the red line, code still runs ts and js. both files attached
console.log(make_albumOpt("HIJ", "KLM", 5));
console.log(make_albumOpt("NOP", "QRST", 6));
