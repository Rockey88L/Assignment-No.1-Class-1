//No.45
// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
function cars(manufacturer, modelName, color, rims) {
  var carsObj = {
    model: modelName,
    company: manufacturer,
  };
  if (typeof color == "string") {
    carsObj.Color = color;
  }
  if (rims) {
    carsObj.Rims = rims;
  }
  return carsObj;
}
console.log(cars("KIA", "Sportage", "White"));
console.log(cars("KIA", "Vezel", (color = "red")));
console.log(cars("Honda", "CIVIC", "White", 24));
