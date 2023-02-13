//No.38
//Cities: Write a function called describe_city() that accepts the name of a city and its country.
//The function should print a simple sentence, such as Karachi is in Pakistan.

function describe_city(name, country = "Pakistan") {
  return console.log(name + " is in " + country);
}
describe_city("Karachi"); // Message with default;
describe_city("Islamabad"); // Different message;
describe_city("Tokyo", "Japan"); // Is not in default country
