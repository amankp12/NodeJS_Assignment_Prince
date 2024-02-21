//Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading",
//"painting"]}, explain how you would extract the value of the "age" key.

const JSONdatastring = {
    "name" : "Alice",
    "age" : 25,
    "hobbies" : [ "reading","painting"]
};

console.log(JSONdatastring.age);


// How would you convert the following object into a JSON data string? {"title": "Book", "pages": 200}


let bookObject = {
    title: 'Book',
    pages: 200
};

function objToJsonString(obj){
    let jsonStr = JSON.stringify(obj);
    return jsonStr;
}

console.log(objToJsonString(bookObject));