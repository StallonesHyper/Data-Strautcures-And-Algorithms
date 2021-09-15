var newObject = {
  firstName: "Stallone",
  age: 19,
  newArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
};

console.log(Object.keys(newObject));
//OUTPUT:
//["firstName", "age", "newArray"]

console.log(Object.values(newObject));
//OUTPUT: Only Values OF Objects

console.log(Object.entries(newObject));
//OUTPUT: Keys And Values Of The Objects

console.log(newObject.hasOwnProperty("firstName"));
//OUTPUT: Boolean Output For Present Properties
