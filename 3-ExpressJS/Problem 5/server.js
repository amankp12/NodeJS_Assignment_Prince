// Given a JSON data string: {"product": "Laptop", "price": 999.99}, explain how you would parse it into a JavaScript object.

const jsonData = '{"product" : "Laptop", "price": 999.99}';
const parsedObject = JSON.parse(jsonData);
console.log(parsedObject.product);

// You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data string?

const jsonObject = {"name" : 'Bob', "age" : 30}
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString);